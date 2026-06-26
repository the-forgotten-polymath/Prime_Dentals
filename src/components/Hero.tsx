"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="section-container hero-container">
        
        {/* Left Side: Copy and Details */}
        <div className="hero-content">
          <span className="hero-eyebrow">WELCOME TO PRIME DENTAL</span>
          <h1 className="hero-heading">
            Modern Dentistry With <br />
            <span className="text-brand-light-blue">Expert Precision.</span>
          </h1>

          


          <div className="hero-cta-wrapper">
            <a href="#contact" className="btn-primary">
              Book Appointment
              <svg className="cta-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", transform: "rotate(45deg)" }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            

          </div>

          <div className="hero-trusted">
            <div className="trusted-avatars">
              <Image src="/images/doctor-2.jpeg" width={32} height={32} alt="patient" className="avatar" />
              <Image src="/images/doctor-3.jpeg" width={32} height={32} alt="patient" className="avatar" />
              <Image src="/images/doctor-4.png" width={32} height={32} alt="patient" className="avatar" />
            </div>
            <span className="trusted-text">Trusted by 2,000+ happy patients</span>
          </div>
        </div>

        {/* Right Side: Animated Floating Particles & Glow */}
        <div className="hero-visual-side">
          <div className="tooth-glow"></div>
          <div className="hero-image-wrapper">
            <Image 
              src="/images/hero_section.png" 
              alt="Modern Dentistry" 
              width={600} 
              height={600} 
              className="hero-main-image"
              priority
            />
          </div>
          <div className="glow-particle particle-1"></div>
          <div className="glow-particle particle-2"></div>
          <div className="glow-particle particle-3"></div>
          <div className="glow-particle particle-4"></div>
        </div>
      </div>
    </section>
  );
}
