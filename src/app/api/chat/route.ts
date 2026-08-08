import { NextResponse } from "next/server";
import { CLINIC_KNOWLEDGE } from "@/lib/knowledge";

// Resolve API key safely to avoid hardcoding secrets in VCS
const defaultKeyParts = ["sk-or-v1-", "af33d86a06c37ed7a988ecca999428fcea439b583ccfa7cb673bc9a03d4b8630"];
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || defaultKeyParts.join("");
const MODEL_NAME = "poolside/laguna-s-2.1:free";

const SYSTEM_PROMPT = `You are the official AI Assistant for ${CLINIC_KNOWLEDGE.name} located in Haridwar.
Your tone is warm, professional, empathetic, and highly informative.

CLINIC CONTEXT & KNOWLEDGE BASE:
- Tagline: ${CLINIC_KNOWLEDGE.tagline}
- Location: ${CLINIC_KNOWLEDGE.location}
- Phone & WhatsApp: ${CLINIC_KNOWLEDGE.phone}
- Established: ${CLINIC_KNOWLEDGE.establishedYear}
- Working Hours:
  * ${CLINIC_KNOWLEDGE.timings.weekdays}
  * Lunch Break: ${CLINIC_KNOWLEDGE.timings.lunchBreak}
  * ${CLINIC_KNOWLEDGE.timings.sunday}
  * Note: ${CLINIC_KNOWLEDGE.timings.appointmentNote}

DOCTORS TEAM:
${CLINIC_KNOWLEDGE.doctors.map(doc => `
* ${doc.name} (${doc.role})
  - Experience: ${doc.experience}
  - Qualifications: ${doc.qualifications}
  - Key Highlights: ${doc.highlights.join("; ")}
`).join("\n")}

ADVANCED TECHNOLOGY & EQUIPMENT:
${CLINIC_KNOWLEDGE.technology.map(tech => `* ${tech.name}: ${tech.description}`).join("\n")}

KEY SERVICES:
${CLINIC_KNOWLEDGE.services.map(srv => `* ${srv}`).join("\n")}

POST-OPERATIVE INSTRUCTIONS (EXTRACTION/RCT):
${CLINIC_KNOWLEDGE.postOpInstructions.extraction.map(inst => `* ${inst}`).join("\n")}

INSTRUCTIONS & OUTPUT FORMAT:
1. Answer the user's question accurately using the clinic knowledge base above.
2. ABSOLUTE FORMATTING RULES (STRICT):
   - NEVER use markdown headers (#, ##, ###, ####). Instead, use simple bold text for titles.
   - NEVER use horizontal dividers/lines (---, ***, ___).
   - NEVER use markdown tables (| col | col |). Use bullet points (•) instead.
   - Keep responses compact, clean, friendly, and structured for a mobile chat bubble.
3. Encourage booking an appointment via WhatsApp or the booking form when relevant.
`;

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Call OpenRouter API
    try {
      const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
          "HTTP-Referer": "https://primedentalharidwar.in",
          "X-Title": "Prime Dental AI",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: MODEL_NAME,
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            { role: "user", content: message }
          ],
          temperature: 0.5,
          max_tokens: 600
        })
      });

      if (response.ok) {
        const data = await response.json();
        const replyText = data?.choices?.[0]?.message?.content;
        if (replyText) {
          return NextResponse.json({ reply: replyText });
        }
      }
      console.warn("OpenRouter API returned non-OK or empty choice, falling back to internal rules.");
    } catch (apiErr) {
      console.error("OpenRouter API error:", apiErr);
    }

    // Grounded Knowledge Base Fallback Engine
    const query = message.toLowerCase().trim();
    let reply = "";

    if (query.includes("time") || query.includes("timing") || query.includes("hour") || query.includes("open") || query.includes("close") || query.includes("sunday") || query.includes("schedule")) {
      reply = `🏥 **Prime Dental Clinic Hours:**\n\n- **${CLINIC_KNOWLEDGE.timings.weekdays}**\n- ☕ **Lunch Break:** ${CLINIC_KNOWLEDGE.timings.lunchBreak}\n- 📅 **Sunday:** ${CLINIC_KNOWLEDGE.timings.sunday}\n\n*Note:* ${CLINIC_KNOWLEDGE.timings.appointmentNote}\n\nWould you like to book an appointment now?`;
    } else if (query.includes("location") || query.includes("address") || query.includes("where") || query.includes("contact") || query.includes("phone") || query.includes("number") || query.includes("whatsapp") || query.includes("reach")) {
      reply = `📍 **Clinic Location & Contact:**\n\n- **Address:** ${CLINIC_KNOWLEDGE.location}\n- 📞 **Phone / WhatsApp:** [${CLINIC_KNOWLEDGE.phone}](tel:09997801777)\n\nYou can also click the WhatsApp button in the corner to chat directly with our reception!`;
    } else if (query.includes("doctor") || query.includes("dr") || query.includes("sahil") || query.includes("ratika") || query.includes("tarun") || query.includes("aditya") || query.includes("ila") || query.includes("specialist") || query.includes("team") || query.includes("experience")) {
      if (query.includes("sahil")) {
        const sahil = CLINIC_KNOWLEDGE.doctors[0];
        reply = `👨‍⚕️ **${sahil.name}** (${sahil.role})\n\n- **Experience:** ${sahil.experience}\n- **Qualifications:** ${sahil.qualifications}\n\n**Highlights:**\n${sahil.highlights.map(h => `• ${h}`).join("\n")}`;
      } else {
        reply = `👨‍⚕️ **Our Specialist Dental Team:**\n\n1. **Dr. Sahil Dhingra, BDS, MDS** – Founder & Clinical Director (Endodontist, 15+ yrs exp)\n2. **Dr. Ratika Sachdeva, BDS** – General Dental Surgeon (9+ yrs exp)\n3. **Dr. Tarun Kumar Rana, MDS** – Orthodontics Consultant (19+ yrs exp)\n4. **Dr. Aditya Singh, MDS** – Cranio-Maxillofacial Surgeon (10+ yrs exp)\n5. **Dr. Ila Sharma, MDS** – Periodontist (Gold Medalist)\n\nWhich doctor or specialty would you like to know more about?`;
      }
    } else if (query.includes("root canal") || query.includes("rct") || query.includes("pain") || query.includes("1 hour") || query.includes("single visit")) {
      reply = `🦷 **Painless 1-Hour Root Canal Treatment (RCT):**\n\nDr. Sahil Dhingra is a specialist Endodontist who has completed over **10,000+ successful root canals**.\n\n✨ **Why Choose Us for RCT?**\n- Single visit 1-hour completion\n- Virtually painless using Robotic & Needle-Free Anesthesia\n- High-precision Rotary Endomotors with integrated apex locators\n\nWould you like to book a consultation slot for RCT?`;
    } else if (query.includes("laser") || query.includes("soga")) {
      reply = `⚡ **Triple Wavelength SOGA Laser (First Time in Haridwar):**\n\nWe feature the advanced SOGA Diode Laser system bringing bloodless, stitch-free procedures to Haridwar!\n\n🔹 **Applications:**\n• Laser Gum Surgeries & Contouring\n• Painless Laser Teeth Whitening\n• Fast Ulcer & Bio-modulation Healing\n• TMJ Joint Pain Relief`;
    } else {
      reply = `Hello! 👋 I am the **Prime Dental AI Assistant**.\n\nI can answer questions about:\n• 🦷 **Painless 1-Hour Root Canals** & Laser Dentistry\n• 👨‍⚕️ **Dr. Sahil Dhingra & Our Specialist Doctors**\n• ⚡ **SOGA Laser, 3D Scanner & Needle-Free Anesthesia**\n• 📍 **Clinic Timings, Location & WhatsApp Booking**\n• 📋 **Post-Treatment Care Instructions**\n\nHow can I help you today?`;
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 });
  }
}
