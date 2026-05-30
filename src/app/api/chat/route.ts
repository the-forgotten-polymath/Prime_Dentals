import { NextResponse } from 'next/server';

const SYSTEM_PROMPT = `
You are the AI Assistant for "Prime Dental & Root Canal Treatment Center" run by Dr. Sahil Dhingra. 
You act as a friendly, professional receptionist. 

Clinic Information:
- Doctor: Dr. Sahil Dhingra (BDS, MDS, 10+ years experience, specialist in Root Canal & Endodontics)
- Address: Ranipur More, G3-6 super complex, behind aastha medical, near city hospital, Haridwar, Uttarakhand 249401
- Phone: +91 99978 01777 (Also WhatsApp)
- Hours: Monday - Saturday, 10:30 AM onwards. Closed on Sundays.
- Services: Root Canal Treatment, Painless Treatment, Teeth Whitening, Wisdom Tooth Extraction, Implants, General Checkups.
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
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error: ${errorText}`);
    }

    const data = await response.json();
    const replyText = data.choices[0].message.content;

    return NextResponse.json({ reply: replyText });
  } catch (error: any) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
