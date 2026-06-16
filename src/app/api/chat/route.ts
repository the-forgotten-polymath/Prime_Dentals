import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `
You are the AI Assistant for "Prime Dental & Root Canal Treatment Center" run by Dr. Sahil Dhingra. 
You act as a friendly, professional receptionist. 

Clinic Information:
- Doctor: Dr. Sahil Dhingra (BDS, MDS, Endodontist & Clinic Director).
- Experience: 12 years of total clinical experience (10 years running Prime Dental since its establishment on October 6, 2016, plus 2 years of prior hospital practice).
- Address: Ranipur More, G3-6 super complex, behind aastha medical, near city hospital, Haridwar, Uttarakhand 249401.
- Phone: +91 99978 01777 (Also WhatsApp).
- Hours: Monday - Saturday, 10:30 AM onwards. Closed on Sundays.
- Clinic Details: Established on October 6, 2016. Equipped with advanced technology (intraoral scanners, dental lasers, digital X-rays, etc.).
- Achievements: 10,000+ successful root canals, complex surgeries, and cosmetic operations performed.
- Specialties: Painless 1-hour root canal treatments, complex oral surgeries, and aesthetic dentistry.
- Rating: 4.9 stars with over 1000 reviews.

Rules:
1. Answer questions concisely and politely based ONLY on the provided clinic information.
2. If asked something unrelated to dentistry or the clinic, politely decline.
3. Always encourage users to book an appointment or call/WhatsApp the phone number for complex dental issues.
`;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages } = body;

    if (!process.env.OPENROUTER_API_KEY) {
      return NextResponse.json({ 
        error: "We're offline here! You can reach us on this number <a href='https://wa.me/919997801777' target='_blank' style='color: var(--color-primary); text-decoration: underline; font-weight: bold;'>+91 99978 01777</a>. (Click to directly open whatsapp)" 
      }, { status: 500 });
    }

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openrouter/owl-alpha", 
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages
        ],
        stream: true
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error: ${errorText}`);
    }

    const encoder = new TextEncoder();
    const decoder = new TextDecoder();

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body?.getReader();
        if (!reader) {
          controller.close();
          return;
        }

        let buffer = "";
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            
            // Keep last element (which might be partial) in buffer
            buffer = lines.pop() || "";

            for (const line of lines) {
              const cleanedLine = line.trim();
              if (!cleanedLine) continue;
              if (cleanedLine === "data: [DONE]") continue;

              if (cleanedLine.startsWith("data: ")) {
                try {
                  const dataStr = cleanedLine.slice(6);
                  const parsed = JSON.parse(dataStr);
                  const content = parsed.choices?.[0]?.delta?.content || "";
                  if (content) {
                    controller.enqueue(encoder.encode(content));
                  }
                } catch (e) {
                  // Ignore JSON parse errors for incomplete/control chunks
                }
              }
            }
          }
          
          // Handle any remaining buffer
          if (buffer && buffer.startsWith("data: ")) {
            try {
              const dataStr = buffer.slice(6).trim();
              if (dataStr !== "[DONE]") {
                const parsed = JSON.parse(dataStr);
                const content = parsed.choices?.[0]?.delta?.content || "";
                if (content) {
                  controller.enqueue(encoder.encode(content));
                }
              }
            } catch (e) {}
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
        }
      }
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
      }
    });

  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
