"use client";

import React from "react";
import { KIVI_BOOKING_URL } from "./KiviBookingModal";

export default function Booking() {
  return (
    <section className="booking-section section-padding" id="contact">
      <div className="section-container booking-container">
        
        {/* Left Side: Contact Information */}
        <div className="booking-info">
          <span className="booking-eyebrow label">BOOK A VISIT</span>
          <h2 className="booking-title display-md">Ready for a Healthier <i>Smile</i>?</h2>
          <p className="booking-desc body-md">
            Schedule your appointment instantly through KiviHealth. Select your preferred date & time slot online.
          </p>
          
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-label label">HOURS</span>
              <span className="contact-value body-md">
                Mon - Sat: 10:00 AM – 8:00 PM<br/>
                <span style={{ fontSize: '0.85em', opacity: 0.8, display: 'block', marginBottom: '4px' }}>(Lunch Break: 3:00 PM – 5:00 PM)</span>
                Sun: By Appointment Only<br/>
                <span style={{ fontSize: '0.85em', opacity: 0.8, display: 'block', marginTop: '6px', fontStyle: 'italic', lineHeight: 1.4 }}>
                  *We prefer prior appointments to ensure our time goes into the right engagements.
                </span>
              </span>
            </div>
            <div className="contact-item">
              <span className="contact-label label">PHONE</span>
              <a href="tel:09997801777" className="contact-value body-md tel-link">099978 01777</a>
            </div>
            <div className="contact-item">
              <span className="contact-label label">ADDRESS</span>
              <span className="contact-value body-md">Ranipur More, G3-6 super complex, Haridwar, Uttarakhand 249401</span>
            </div>
          </div>
        </div>

        {/* Right Side: KiviHealth Online Booking Card */}
        <div className="booking-form-wrapper">
          <div 
            className="booking-form-card" 
            style={{ 
              padding: "40px 32px", 
              textAlign: "center", 
              background: "#ffffff", 
              borderRadius: "24px",
              boxShadow: "0 20px 50px rgba(0, 0, 0, 0.08)",
              border: "1px solid #e2e8f0" 
            }}
          >
            <div 
              style={{ 
                width: "72px", 
                height: "72px", 
                borderRadius: "50%", 
                background: "linear-gradient(135deg, #e0f2fe, #bae6fd)", 
                color: "#0284c7", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                margin: "0 auto 24px auto" 
              }}
            >
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
            </div>

            <span className="label" style={{ color: "#0284c7", fontSize: "12px", letterSpacing: "0.1em", display: "block", marginBottom: "8px" }}>
              OFFICIAL KIVIHEALTH PORTAL
            </span>
            <h3 className="heading-md" style={{ color: "#0f172a", marginBottom: "12px", fontSize: "24px", fontWeight: "700" }}>
              Instant Online Slot Booking
            </h3>
            <p className="body-md" style={{ color: "#64748b", marginBottom: "32px", lineHeight: "1.6" }}>
              Book your consultation slot directly on Dr. Sahil Dhingra's official KiviHealth portal. Choose your preferred time and get instant confirmation.
            </p>

            <a 
              href={KIVI_BOOKING_URL} 
              target="_blank" 
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                width: "100%",
                padding: "16px 32px",
                background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
                color: "#ffffff",
                borderRadius: "99px",
                fontWeight: "700",
                fontSize: "16px",
                textDecoration: "none",
                boxShadow: "0 8px 25px rgba(14, 165, 233, 0.4)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease"
              }}
            >
              <span>📅 Book Appointment on KiviHealth</span>
              <span style={{ fontSize: "20px" }}>→</span>
            </a>

            <div style={{ marginTop: "24px" }}>
              <a 
                href="https://kivihealth.com/" 
                target="_blank" 
                rel="noreferrer" 
                title="Search and Book Appointment with Dentist in Haridwar"
                style={{ textDecoration: "none" }}
              >
                <span style={{ color: "#64748b", fontSize: "12px" }}>
                  <span>Powered By </span>
                  <span style={{ fontWeight: "700", color: "#0284c7" }}>kivihealth.com</span>
                </span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
