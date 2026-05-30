import React from "react";

export default function Footer() {
  return (
    <footer className="footer-section" id="contact">
      <div className="section-container">
        <div className="footer-grid">
          {/* LEFT: Info & Contact */}
          <div className="footer-info">
            <div className="footer-logo">
              <svg className="logo-icon" viewBox="0 0 24 24" fill="currentColor" style={{ width: "24px", height: "24px" }}>
                <path d="M12 2L14.39 8.26L21 9.27L16.21 13.97L17.33 20.5L12 17.27L6.67 20.5L7.79 13.97L3 9.27L9.61 8.26L12 2Z" />
              </svg>
              Prime Dental
            </div>
            <p className="footer-desc">
              Expert dental care for healthy, confident smiles at every age—delivered with comfort, precision, and trust.
            </p>
            
            <div className="footer-contact-item">
              <span>📍</span>
              <a 
                href="https://maps.google.com/?q=Ranipur+More,+G3-6+super+complex,+behind+aastha+medical,+near+city+hospital,+Haridwar,+Uttarakhand+249401" 
                target="_blank" 
                rel="noreferrer"
              >
                Ranipur More, G3-6 super complex, behind aastha medical, near city hospital, Haridwar, Uttarakhand 249401
              </a>
            </div>
            
            <div className="footer-contact-item">
              <span>📞</span>
              <a href="tel:09997801777">099978 01777</a>
            </div>
            <div className="footer-contact-item">
              <span>🕒</span>
              <span>Monday - Saturday: 10:30 AM onwards</span>
            </div>
          </div>

          {/* RIGHT: Google Map */}
          <div className="footer-map-wrapper">
            <h4 className="footer-map-title">Locate Us</h4>
            <iframe 
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Prime%20Dental%20%26%20Root%20Canal%20treatment%20Center,%20Haridwar+(Prime%20Dental)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Prime Dental Location"
              className="footer-map"
            ></iframe>
          </div>
        </div>
        
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} Prime Dental & Root Canal Treatment Center - Dr. Sahil Dhingra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
