"use client";

import React, { useState } from "react";
import { triggerKiviBooking } from "./KiviBookingModal";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    treatment: "Dental Cleaning",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [minDate, setMinDate] = useState("");
  const [maxDate, setMaxDate] = useState("");

  const getAvailableTimeSlots = (dateString: string) => {
    return [
      "Morning (10:00 AM - 2:00 PM)",
      "Evening (5:00 PM - 8:00 PM)"
    ];
  };

  React.useEffect(() => {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);
    
    // Check if today is past clinic hours
    const day = today.getDay();
    let closeHour = 20;
    let closeMinute = 0;
    if (day === 0) {
      closeHour = 14;
    } else if (day === 4) {
      closeHour = 20;
      closeMinute = 30;
    }
    
    const closeTime = new Date(today);
    closeTime.setHours(closeHour, closeMinute, 0, 0);
    
    let defaultDate = today.toISOString().split('T')[0];
    let minDateVal = defaultDate;
    
    if (today > closeTime) {
      // Past clinic hours today, so start minimum and default date from tomorrow
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      defaultDate = tomorrow.toISOString().split('T')[0];
      minDateVal = defaultDate;
    }
    
    setMinDate(minDateVal);
    setMaxDate(nextWeek.toISOString().split('T')[0]);
    
    const initialSlots = getAvailableTimeSlots(defaultDate);
    setFormData(prev => ({
      ...prev,
      date: defaultDate,
      time: initialSlots[0] || ""
    }));
  }, []);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    const slots = getAvailableTimeSlots(selectedDate);
    setFormData(prev => ({
      ...prev,
      date: selectedDate,
      time: slots[0] || ""
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message
    const messageText = `*New Appointment Request*%0A%0A*Name:* ${formData.name}%0A*Phone:* ${formData.phone}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}%0A*Message:* ${formData.message || "None"}`;
    
    // Clinic WhatsApp number
    const whatsappNumber = "919997801777";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${messageText}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    setSubmitted(true);
  };

  return (
    <section className="booking-section section-padding" id="contact">
      <div className="section-container booking-container">
        
        {/* Left Side: Contact Information */}
        <div className="booking-info">
          <span className="booking-eyebrow label">BOOK A VISIT</span>
          <h2 className="booking-title display-md">Ready for a Healthier <i>Smile</i>?</h2>
          <p className="booking-desc body-md">
            Schedule your consultation today. Our team will confirm soon.
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

            <div className="contact-item" style={{ marginTop: "24px" }}>
              <span className="contact-label label">INSTANT SLOT BOOKING</span>
              <div style={{ marginTop: "8px" }}>
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
                      padding: "12px 24px",
                      borderRadius: "99px",
                      fontWeight: "700",
                      fontSize: "14px",
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      boxShadow: "0 4px 14px rgba(14, 165, 233, 0.35)"
                    }}
                  >
                    📅 Book Appointment (KiviHealth)
                  </button>
                  <a 
                    href="https://kivihealth.com/" 
                    className="_kivi_powered_container" 
                    target="_blank" 
                    rel="noreferrer"
                    title="Search and Book Appointment with Dentist in Haridwar"
                    style={{ display: "block", marginTop: "8px", textDecoration: "none" }}
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

        {/* Right Side: Appointment Form Card */}
        <div className="booking-form-wrapper">
          <div className="booking-form-card">
            <h3 className="form-card-title heading-md">Book Your Appointment</h3>
            <div className="form-divider"></div>

            {submitted ? (
              <div className="booking-success">
                <svg className="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <h4 className="heading-md">Appointment Requested!</h4>
                <p className="body-sm">Thank you for trusting us. We will confirm your slot and appointment soon on WhatsApp.</p>
                <button className="btn-primary" onClick={() => setSubmitted(false)} style={{ marginTop: "16px" }}>
                  Book Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="appointment-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label label">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      required 
                      className="form-input" 
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label label">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      required 
                      className="form-input" 
                      placeholder="+44 7123 456789"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="date" className="form-label label">Appointment Date</label>
                    <input 
                      type="date" 
                      id="date" 
                      required 
                      className="form-input"
                      min={minDate}
                      max={maxDate}
                      value={formData.date}
                      onChange={handleDateChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="time" className="form-label label">Preferred Time</label>
                    <select 
                      id="time" 
                      className="form-select"
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      required
                    >
                      {getAvailableTimeSlots(formData.date).map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                      {getAvailableTimeSlots(formData.date).length === 0 && (
                        <option value="">No slots available</option>
                      )}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label label">Message</label>
                  <textarea 
                     id="message" 
                     className="form-textarea" 
                     placeholder="Tell us about your dental concerns..."
                     value={formData.message}
                     onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary full-width-btn">
                  BOOK APPOINTMENT
                  <svg className="cta-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", transform: "rotate(45deg)" }}>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
