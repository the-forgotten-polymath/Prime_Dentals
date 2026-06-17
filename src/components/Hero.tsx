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
            <span className="text-brand-orange">Expert Precision.</span>
          </h1>
          <p className="hero-subtext">
            Advanced care, gentle touch, and lasting results —<br/>
            for healthy smiles you can trust.
          </p>
          
          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 21V19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19V21"/><path d="M6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 11.2338 16.716 13.1678 14.9392 14.1685L14 14.7V19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19V14.7L9.0608 14.1685C7.28399 13.1678 6 11.2338 6 9Z"/></svg>
              </div>
              <span className="feature-text">Advanced<br/>Technology</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              </div>
              <span className="feature-text">Experienced<br/>Professionals</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
              </div>
              <span className="feature-text">Comfortable<br/>Care</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="12" y1="14" x2="12" y2="18"/><line x1="10" y1="16" x2="14" y2="16"/></svg>
              </div>
              <span className="feature-text">Easy<br/>Appointments</span>
            </div>
          </div>

          <div className="hero-cta-wrapper">
            <a href="#contact" className="btn-primary">
              Book Appointment
              <svg className="cta-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", transform: "rotate(45deg)" }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            
            <div className="hero-hours">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <div className="hours-text-wrap">
                <span className="hours-label">WE'RE OPEN</span>
                <span className="hours-value">10:00 AM – 7:00 PM</span>
              </div>
            </div>
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

      </div>
    </section>
  );
}
