"use client";

import React, { useRef } from "react";
import Image from "next/image";

export default function Services() {
  const cardsRowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (cardsRowRef.current) {
      const scrollAmount = 300;
      cardsRowRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="services-section section-padding" id="services">
      <div className="section-container">
        
        {/* Header */}
        <div className="services-header-grid">
          <div className="services-header-left">
            <span className="services-eyebrow label">Our Features /</span>
            <h2 className="services-title display-md">DISCOVER OUR SIGNATURE <i>SERVICES</i></h2>
            
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

        {/* Card slider wrapper */}
        <div className="services-cards-wrapper">
          <div className="carousel-sidebar">
            <p className="carousel-desc body-sm">
              Discover delighted patient reviews about their comforting and satisfying dental care experience.
            </p>
            <div className="carousel-arrows-container">
              <button className="carousel-arrow" onClick={() => scroll("left")} aria-label="Previous service">‹</button>
              <button className="carousel-arrow" onClick={() => scroll("right")} aria-label="Next service">›</button>
            </div>
          </div>
          
          <div className="cards-row" ref={cardsRowRef}>
            
            {/* Card 1 */}
            <div className="service-card-new">
              <div className="service-card-img-wrapper">
                <Image 
                  src="/images/root_canal_graphic.png" 
                  alt="Root Canal Treatment" 
                  width={280} 
                  height={200} 
                  className="service-card-img"
                />
              </div>
              <div className="card-info">
                <h3 className="card-title heading-md">Root Canal</h3>
                <p className="card-description body-sm">Painless and precise therapy to save your natural tooth and relieve severe pain instantly.</p>
                <div className="card-action">
                  <span className="action-text">Learn more</span>
                  <button className="card-arrow" aria-label="Learn more">→</button>
                </div>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="service-card-new">
              <div className="service-card-img-wrapper">
                <Image 
                  src="/images/dental_implant_graphic.png" 
                  alt="Dental Implants" 
                  width={280} 
                  height={200} 
                  className="service-card-img"
                />
              </div>
              <div className="card-info">
                <h3 className="card-title heading-md">Dental Implants</h3>
                <p className="card-description body-sm">Permanent, natural-looking replacements for missing teeth that restore full function and confidence.</p>
                <div className="card-action">
                  <span className="action-text">Learn more</span>
                  <button className="card-arrow" aria-label="Learn more">→</button>
                </div>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="service-card-new">
              <div className="service-card-img-wrapper">
                <Image 
                  src="/images/extraction_graphic.png" 
                  alt="Painless Extraction" 
                  width={280} 
                  height={200} 
                  className="service-card-img"
                />
              </div>
              <div className="card-info">
                <h3 className="card-title heading-md">Painless Extraction</h3>
                <p className="card-description body-sm">Gentle, safe, and stress-free tooth removal, including complex wisdom teeth extractions.</p>
                <div className="card-action">
                  <span className="action-text">Learn more</span>
                  <button className="card-arrow" aria-label="Learn more">→</button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
