import { NextResponse } from "next/server";
import { CLINIC_KNOWLEDGE } from "@/lib/knowledge";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const query = message.toLowerCase().trim();
    let reply = "";

    // 1. Timings & Working Hours
    if (query.includes("time") || query.includes("timing") || query.includes("hour") || query.includes("open") || query.includes("close") || query.includes("sunday") || query.includes("schedule")) {
      reply = `🏥 **Prime Dental Clinic Hours:**\n\n- **${CLINIC_KNOWLEDGE.timings.weekdays}**\n- ☕ **Lunch Break:** ${CLINIC_KNOWLEDGE.timings.lunchBreak}\n- 📅 **Sunday:** ${CLINIC_KNOWLEDGE.timings.sunday}\n\n*Note:* ${CLINIC_KNOWLEDGE.timings.appointmentNote}\n\nWould you like to book an appointment now?`;
    }
    // 2. Location & Contact
    else if (query.includes("location") || query.includes("address") || query.includes("where") || query.includes("contact") || query.includes("phone") || query.includes("number") || query.includes("whatsapp") || query.includes("reach")) {
      reply = `📍 **Clinic Location & Contact:**\n\n- **Address:** ${CLINIC_KNOWLEDGE.location}\n- 📞 **Phone / WhatsApp:** [${CLINIC_KNOWLEDGE.phone}](tel:09997801777)\n\nYou can also click the WhatsApp button in the corner to chat directly with our reception!`;
    }
    // 3. Doctors & Specialists
    else if (query.includes("doctor") || query.includes("dr") || query.includes("sahil") || query.includes("ratika") || query.includes("tarun") || query.includes("aditya") || query.includes("ila") || query.includes("specialist") || query.includes("team") || query.includes("experience")) {
      if (query.includes("sahil")) {
        const sahil = CLINIC_KNOWLEDGE.doctors[0];
        reply = `👨‍⚕️ **${sahil.name}** (${sahil.role})\n\n- **Experience:** ${sahil.experience}\n- **Qualifications:** ${sahil.qualifications}\n\n**Highlights:**\n${sahil.highlights.map(h => `• ${h}`).join("\n")}`;
      } else if (query.includes("ratika")) {
        const ratika = CLINIC_KNOWLEDGE.doctors[1];
        reply = `👩‍⚕️ **${ratika.name}** (${ratika.role})\n\n- **Experience:** ${ratika.experience}\n- **Qualifications:** ${ratika.qualifications}\n\n**Highlights:**\n${ratika.highlights.map(h => `• ${h}`).join("\n")}`;
      } else if (query.includes("tarun") || query.includes("braces") || query.includes("aligner") || query.includes("ortho")) {
        const tarun = CLINIC_KNOWLEDGE.doctors[2];
        reply = `👨‍⚕️ **${tarun.name}** (${tarun.role})\n\n- **Experience:** ${tarun.experience}\n- **Qualifications:** ${tarun.qualifications}\n\n**Highlights:**\n${tarun.highlights.map(h => `• ${h}`).join("\n")}`;
      } else if (query.includes("aditya") || query.includes("jaw") || query.includes("surgery") || query.includes("tmj") || query.includes("facial")) {
        const aditya = CLINIC_KNOWLEDGE.doctors[3];
        reply = `👨‍⚕️ **${aditya.name}** (${aditya.role})\n\n- **Experience:** ${aditya.experience}\n- **Qualifications:** ${aditya.qualifications}\n\n**Highlights:**\n${aditya.highlights.map(h => `• ${h}`).join("\n")}`;
      } else {
        reply = `👨‍⚕️ **Our Specialist Dental Team:**\n\n1. **Dr. Sahil Dhingra, BDS, MDS** – Founder & Clinical Director (Endodontist, 15+ yrs exp)\n2. **Dr. Ratika Sachdeva, BDS** – General Dental Surgeon (9+ yrs exp)\n3. **Dr. Tarun Kumar Rana, MDS** – Orthodontics Consultant (19+ yrs exp)\n4. **Dr. Aditya Singh, MDS** – Cranio-Maxillofacial Surgeon (10+ yrs exp)\n5. **Dr. Ila Sharma, MDS** – Periodontist (Gold Medalist)\n\nWhich doctor or specialty would you like to know more about?`;
      }
    }
    // 4. Root Canal & Painless RCT
    else if (query.includes("root canal") || query.includes("rct") || query.includes("pain") || query.includes("1 hour") || query.includes("single visit")) {
      reply = `🦷 **Painless 1-Hour Root Canal Treatment (RCT):**\n\nDr. Sahil Dhingra is a specialist Endodontist who has completed over **10,000+ successful root canals**.\n\n✨ **Why Choose Us for RCT?**\n- Single visit 1-hour completion\n- Virtually painless using Robotic & Needle-Free Anesthesia\n- High-precision Rotary Endomotors with integrated apex locators\n- High success rate and long-lasting durability\n\nWould you like to book a consultation slot for RCT?`;
    }
    // 5. Laser Dentistry & SOGA Laser
    else if (query.includes("laser") || query.includes("soga") || query.includes("gum") || query.includes("stitch") || query.includes("bloodless")) {
      reply = `⚡ **Triple Wavelength SOGA Laser (First Time in Haridwar):**\n\nWe feature the advanced SOGA Diode Laser system bringing bloodless, stitch-free procedures to Haridwar!\n\n🔹 **Applications:**\n• Laser Gum Surgeries & Contouring\n• Painless Laser Teeth Whitening\n• Fast Ulcer & Bio-modulation Healing\n• TMJ Joint Pain Relief\n\nProcedure is fast, minimally invasive, and offers rapid recovery!`;
    }
    // 6. Needle-free Anesthesia / Painless
    else if (query.includes("needle") || query.includes("anesthesia") || query.includes("scared") || query.includes("fear") || query.includes("injex")) {
      reply = `💉 **Needle-Free & Robotic Anesthesia:**\n\nIf you are scared of needles or pain, you are in safe hands!\n\n• **Injex30 Needle-Free System:** Uses gentle micro-jet pressure to deliver numbing agent without needles.\n• **Robotic Digital Delivery:** Computer-controlled slow flow rate eliminating the stinging sensation.\n\nEnjoy 100% anxiety-free dental care!`;
    }
    // 7. Zirconia & Crowns
    else if (query.includes("crown") || query.includes("zirconia") || query.includes("cap") || query.includes("bridge")) {
      reply = `👑 **Benefits of Zirconia Crowns:**\n\n1. **Natural Look:** Translucent & color-matched to natural teeth.\n2. **Super Strong:** Highly durable, resistant to chipping.\n3. **100% Metal-Free:** No dark lines near gum margins.\n4. **Biocompatible:** Extremely gentle on gums with zero allergy risk.`;
    }
    // 8. Cleaning & Scaler
    else if (query.includes("clean") || query.includes("scale") || query.includes("stain") || query.includes("polisher") || query.includes("woodpecker")) {
      reply = `✨ **Painless Ultrasonic Scaling & Air Polishing:**\n\nWe use the **Woodpecker PTA Scaler & Air Polishing system**:\n- Painless ultrasonic plaque & tartar removal\n- Temperature-controlled warm water therapy\n- Gently erases tough tobacco/tea stains without scratching enamel!`;
    }
    // 9. Post-Operative Instructions / Care
    else if (query.includes("care") || query.includes("instruction") || query.includes("after") || query.includes("extraction") || query.includes("post op")) {
      reply = `📋 **Post-Operative Instructions:**\n\n${CLINIC_KNOWLEDGE.postOpInstructions.extraction.map(i => `• ${i}`).join("\n")}`;
    }
    // 10. Booking & Appointment
    else if (query.includes("book") || query.includes("appointment") || query.includes("consult") || query.includes("visit") || query.includes("fee") || query.includes("cost") || query.includes("price")) {
      reply = `📅 **Book Your Visit at Prime Dental:**\n\nTo schedule an appointment:\n1. Scroll to the **Booking Form** section on this page.\n2. Or click the **WhatsApp button** below to connect directly with our clinic team at **${CLINIC_KNOWLEDGE.phone}**.\n\nWe look forward to giving you a healthier, brighter smile!`;
    }
    // Default Greeting / Intelligent Fallback
    else {
      reply = `Hello! 👋 I am the **Prime Dental AI Assistant**.\n\nI can answer questions about:\n• 🦷 **Painless 1-Hour Root Canals** & Laser Dentistry\n• 👨‍⚕️ **Dr. Sahil Dhingra & Our Specialist Doctors**\n• ⚡ **SOGA Laser, 3D Scanner & Needle-Free Anesthesia**\n• 📍 **Clinic Timings, Location & WhatsApp Booking**\n• 📋 **Post-Treatment Care Instructions**\n\nHow can I help you today?`;
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Failed to generate response" }, { status: 500 });
  }
}
