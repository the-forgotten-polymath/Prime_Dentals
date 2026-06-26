"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="section-container hero-container">
        
        <div className="hero-content">
          {/* Text content removed per request */}

          


          <div className="hero-cta-wrapper">
            <a 
              href="https://wa.me/919997801777?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment%20at%20Root%20Canal%20Treatment%20Center." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
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
          <div className="glow-particle particle-1"></div>
          <div className="glow-particle particle-2"></div>
          <div className="glow-particle particle-3"></div>
          <div className="glow-particle particle-4"></div>
        </div>
      </div>
    </section>
  );
}
