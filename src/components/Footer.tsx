import React from "react";

export default function Footer() {
  return (
    <footer className="footer-section" id="contact">
      <div className="section-container">
        <div className="footer-grid">
          
          {/* COLUMN 1: Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-logo">
              <span>Prime Dental.</span>
            </div>
            <p className="footer-desc">
              Expert dental care for healthy, confident smiles at every age—delivered with comfort, precision, and trust.
            </p>
            <div className="footer-social-links">
              <a href="https://wa.me/919997801777" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="footer-col links-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#equipments">Technology</a></li>
              <li><a href="#about">About Dr. Sahil</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#contact" className="highlight-link">Book Appointment</a></li>
            </ul>
          </div>

          {/* COLUMN 3: Contact Details */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <div className="footer-contact-details">
              
              <div className="footer-contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <a 
                  href="https://maps.google.com/?q=Ranipur+More,+G3-6+super+complex,+behind+aastha+medical,+near+city+hospital,+Haridwar,+Uttarakhand+249401" 
                  target="_blank" 
                  rel="noreferrer"
                  className="contact-address"
                >
                  Ranipur More, G3-6 super complex, behind aastha medical, near city hospital, Haridwar, Uttarakhand 249401
                </a>
              </div>

              <div className="footer-contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a href="tel:09997801777" className="contact-phone">099978 01777</a>
              </div>

              <div className="footer-contact-item">
                <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.3L11 12.9V7h1.5v5.15l3.5 2.1-.7 1.05z" />
                </svg>
                <div className="contact-hours">
                  <strong>Mon - Sat:</strong> 10:00 AM – 8:00 PM<br />
                  <span className="lunch-break" style={{ display: 'block', fontSize: '0.85em', opacity: 0.8, marginBottom: '6px' }}>(Lunch Break: 3:00 PM – 5:00 PM)</span>
                  <strong>Sunday:</strong> By Appointment Only<br />
                  <span className="appointment-note" style={{ display: 'block', fontSize: '0.85em', opacity: 0.8, marginTop: '8px', fontStyle: 'italic' }}>
                    *We prefer prior appointments to ensure our time goes into the right engagements.
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* COLUMN 4: Locate Us Map */}
          <div className="footer-col map-col">
            <h4 className="footer-col-title">Locate Us</h4>
            <div className="footer-map-container">
              <iframe 
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=G3-6%20super%20complex,%20Ranipur%20More,%20Haridwar&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Prime Dental Location"
                className="footer-map"
              ></iframe>
            </div>
          </div>

        </div>

        {/* BOTTOM: Copyright */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Prime Dental & Root Canal Treatment Center. All rights reserved.</p>
          <p className="credit-tag">Designed with Expert Care & Precision by Dr. Sahil Dhingra & Team</p>
        </div>

      </div>
    </footer>
  );
}
