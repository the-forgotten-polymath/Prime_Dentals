"use client";

import React from "react";
import { triggerKiviBooking } from "./KiviBookingModal";

export default function Booking() {
  return (
    <section className="booking-section section-padding" id="contact">
      <div className="section-container booking-container">
        
        {/* Left Side: Contact Information */}
        <div className="booking-info">
          <span className="booking-eyebrow label">BOOK A VISIT</span>
          <h2 className="booking-title display-md">Ready for a Healthier <i>Smile</i>?</h2>
          <p className="booking-desc body-md">
            Schedule your appointment instantly through KiviHealth. Select your preferred date & time slot below.
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

            <div className="contact-item" style={{ marginTop: "20px" }}>
              <span className="contact-label label">INSTANT SLOT BOOKING</span>
              <div style={{ marginTop: "10px" }}>
                <span>
                  <button 
                    type="button" 
                    className="btn kivi_bookappt_btn kivi_bookappt_btn-labeled btn-primary" 
                    data-toggle="modal" 
                    data-target="#bookappointment"
                    onClick={triggerKiviBooking}
                    style={{
                      background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
                      color: "#ffffff",
                      border: "none",
                      padding: "14px 28px",
                      borderRadius: "99px",
                      fontWeight: "700",
                      fontSize: "14px",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      boxShadow: "0 6px 20px rgba(14, 165, 233, 0.35)",
                      transition: "transform 0.2s ease"
                    }}
                  >
                    📅 Open KiviHealth Booking Window
                  </button>
                  <a 
                    href="https://kivihealth.com/" 
                    className="_kivi_powered_container" 
                    target="_blank" 
                    rel="noreferrer"
                    title="Search and Book Appointment with Dentist in Haridwar"
                    style={{ display: "block", marginTop: "10px", textDecoration: "none" }}
                  >
                    <span style={{ color: "#424748" }}>
                      <span style={{ fontSize: "11px", marginRight: "4px" }}>Powered By</span>
                      <span style={{ fontSize: "11px", fontWeight: "700", color: "#0284c7" }}>kivihealth.com</span>
                    </span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Direct KiviHealth Embedded Booking Card */}
        <div className="booking-form-wrapper">
          <div className="booking-form-card" style={{ padding: 0, overflow: "hidden", minHeight: "580px" }}>
            <div style={{ background: "linear-gradient(135deg, #0ea5e9, #0284c7)", padding: "16px 24px", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h3 className="form-card-title heading-md" style={{ margin: 0, color: "#ffffff", fontSize: "18px" }}>
                Select Appointment Slot
              </h3>
              <span style={{ fontSize: "11px", background: "rgba(255,255,255,0.2)", padding: "3px 10px", borderRadius: "99px", fontWeight: "600" }}>
                KiviHealth Live
              </span>
            </div>
            
            <div style={{ width: "100%", height: "520px", background: "#ffffff" }}>
              <iframe 
                id="MainPopupIframe" 
                src="https://kivihealth.com/iam/.sahil.dhingra.gi2m0b0qphio/bookslot" 
                width="100%" 
                height="100%" 
                style={{ border: "none", width: "100%", height: "100%" }}
                title="KiviHealth Online Appointment Slot Booking"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
