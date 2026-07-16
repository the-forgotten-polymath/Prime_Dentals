"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

const servicesData = [
  {
    title: "Root Canal",
    img: "/images/root_canal_graphic.png",
    desc: "Painless and precise therapy to save your natural tooth and relieve severe pain instantly."
  },
  {
    title: "Dental Implants",
    img: "/images/dental_implant_graphic.png",
    desc: "Permanent, natural-looking replacements for missing teeth that restore full function and confidence."
  },
  {
    title: "Painless Extraction",
    img: "/images/extraction_graphic.png",
    desc: "Gentle, safe, and stress-free tooth removal, including complex wisdom teeth extractions."
  }
];

// Repeat the array to create a long track for continuous infinite scrolling
const repeatedServices = [
  ...servicesData, 
  ...servicesData, 
  ...servicesData, 
  ...servicesData,
  ...servicesData
];

export default function Services() {
  const cardsRowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = cardsRowRef.current;
    if (!container) return;

    let timerId: NodeJS.Timeout;

    const startAutoScroll = () => {
      timerId = setInterval(() => {
        const card = container.querySelector(".service-card-new");
        if (!card) return;
        const cardWidth = card.clientWidth + 24; // Card width + gap (24px)
        
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll - 10) {
          // Wrap back to beginning smoothly
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll by one card width
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }, 3000); // Transitions every 3 seconds
    };

    startAutoScroll();

    // Pause scrolling when user hovers
    const handleMouseEnter = () => clearInterval(timerId);
    const handleMouseLeave = () => startAutoScroll();

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(timerId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="services-section section-padding" id="services">
      <div className="section-container">
        
        {/* Header */}
        <div className="services-header-grid">
          <div className="services-header-left">
            <span className="services-eyebrow label">Our Features /</span>
            <h2 className="services-title display-md">DISCOVER OUR <i>SERVICES</i></h2>
            
            <div className="reviews-badge">
              <div className="avatar-stack">
                <img className="avatar" src="https://picsum.photos/seed/patient1/32/32" alt="Patient review" />
                <img className="avatar" src="https://picsum.photos/seed/patient2/32/32" alt="Patient review" />
                <img className="avatar" src="https://picsum.photos/seed/patient3/32/32" alt="Patient review" />
              </div>
              <div className="review-text">
                <span className="review-count">1,000+</span>
                <span className="review-label">Reviews</span>
              </div>
            </div>
          </div>
          
          <div className="services-header-right">
            <p className="body-md">
              Experience modern dental care delivered with comfort, precision, and attention to detail. 
              Our clinic provides a calm, welcoming environment designed to make every visit stress-free.
            </p>
          </div>
        </div>

        {/* Full-width auto-scrolling cards wrapper */}
        <div className="services-cards-wrapper">
          <div className="cards-row" ref={cardsRowRef}>
            {repeatedServices.map((service, index) => (
              <div className="service-card-new" key={index}>
                <div className="service-card-img-wrapper">
                  <Image 
                    src={service.img} 
                    alt={service.title} 
                    width={280} 
                    height={200} 
                    className="service-card-img"
                  />
                </div>
                <div className="card-info">
                  <h3 className="card-title heading-md">{service.title}</h3>
                  <p className="card-description body-sm">{service.desc}</p>
                  <div className="card-action">
                    <span className="action-text">Learn more</span>
                    <button className="card-arrow" aria-label="Learn more">→</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
