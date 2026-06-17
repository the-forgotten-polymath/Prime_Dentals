"use client";

import Image from "next/image";

const equipments = [
  {
    name: "Orikam Hyper Light X-Ray",
    desc: "A portable, handheld high-frequency diagnostic X-ray system. Allows the specialist to capture crystal-clear intraoral radiographs right from the comfort of your dental chair with ultra-low radiation.",
    benefit: "Chairside & Ultra-Low Radiation",
    image: "/images/orikam_xray.png"
  },
  {
    name: "Helios 500 Digital Scanner",
    desc: "State-of-the-art intraoral 3D scanner. Replaces uncomfortable, gag-inducing traditional putty molds with ultra-precise, full-color digital impressions in under two minutes.",
    benefit: "Putty-Free, High-Precision 3D Scans",
    image: "/images/helios_scanner.png"
  },
  {
    name: "RVG Vatech Digital Sensor",
    desc: "Advanced Radiovisiography (RVG) sensor that captures high-definition dental images instantly. Emits up to 90% less radiation compared to conventional dental film systems.",
    benefit: "Instant HD Scans & 90% Less Radiation",
    image: "/images/rvg_vatech.png"
  },
  {
    name: "Soga iLaser I",
    desc: "State-of-the-art surgical and therapeutic diode laser. Utilized for painless soft tissue cutting, sterilization, and gum contouring with minimal bleeding and rapid tissue regeneration.",
    benefit: "Clean Laser Surgery & Faster Healing",
    image: "/images/soga_ilaser.png"
  },
  {
    name: "Needle-Free Anesthesia (Injex30)",
    desc: "A needle-free anesthesia delivery system that uses micro-jet pressure to distribute the numbing agent through the tissue. Eliminates the fear and discomfort of traditional needles.",
    benefit: "Needle-Free Numbing, Zero Anxiety",
    image: "/images/injex_anesthesia.png"
  },
  {
    name: "Robotic Digital Anesthesia",
    desc: "A computer-controlled local anesthetic delivery system that administers anesthetic at a slow, controlled flow rate. Eliminates the stinging sensation completely.",
    benefit: "Controlled flow rate, pain-free injection",
    image: "/images/robotic_anesthesia.png"
  },
  {
    name: "Advanced Air Polisher",
    desc: "Ergonomic polishing system combining pressurized air, water, and micro-particles. Gently erases stubborn stains, plaque, and bio-film without scratching enamel.",
    benefit: "Stain-Free Teeth Without Enamel Scraping",
    image: "/images/air_polisher.png"
  },
  {
    name: "Dentsply X-Smart Endomotor",
    desc: "High-torque electronic motor dedicated to root canal treatments. Controls file speeds and auto-reverses to ensure the root canal is shaped safely, cleanly, and quickly.",
    benefit: "Safer, Smoother Root Canal Therapy",
    image: "/images/dentsply_xsmart.png"
  },
  {
    name: "Orikam Eighteeth Endomotor",
    desc: "A cordless endodontic handpiece with an integrated apex locator. Tracks file depth inside the canal in real time, preventing over-instrumentation and maximizing safety.",
    benefit: "Real-Time Apex Locator Integration",
    image: "/images/orikam_eighteeth.png"
  }
];

export default function Equipments() {
  return (
    <section className="equipments-section section-padding" id="equipments">
      <div className="section-container">
        
        {/* HEADER */}
        <div className="equipments-header">
          <h2 className="display-md">State-Of-The-Art <i>Equipment</i></h2>
          <p>
            We invest in the world's most advanced dental technologies to ensure your treatments are completely safe, highly accurate, and virtually pain-free.
          </p>
        </div>

        {/* GRID */}
        <div className="equipments-grid">
          {equipments.map((eq, index) => (
            <div className="equipment-card" key={index}>
              <div className="equipment-img-wrapper">
                <Image 
                  src={eq.image} 
                  alt={eq.name} 
                  className="equipment-img"
                  width={600}
                  height={600}
                  priority={index < 3}
                />
              </div>
              <div className="equipment-content">
                <h3 className="equipment-title">{eq.name}</h3>
                <p className="equipment-desc">{eq.desc}</p>
                <div className="equipment-benefit">
                  <span>{eq.benefit}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
