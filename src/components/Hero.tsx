"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const heroSlides = [
  {
    heading: "Your Most Trusted Dentist in Haridwar",
    sub: "Advanced, comfortable dental care for healthy and confident smiles.",
  },
  {
    heading: "Haridwar’s First Dedicated Root Canal Centre",
    sub: "Specialised root canal treatment performed with precision, safety and care.",
  },
  {
    heading: "Painless Root Canal Treatment in Just 1 Hour",
    sub: "Modern technology and expert care designed to save your natural tooth.",
  },
  {
    heading: "Advanced Dentistry. Comfortable Experience.",
    sub: "Experience accurate diagnosis and stress-free treatment with the latest dental technology.",
  },
  {
    heading: "Expert Dental Care for Your Entire Family",
    sub: "From routine check-ups to implants, orthodontics and complex dental procedures.",
  },
  {
    heading: "Modern Technology for Better Smiles",
    sub: "Digital scanning, laser dentistry, needle-free anaesthesia and advanced imaging.",
  },
  {
    heading: "Comfortable Care You Can Trust",
    sub: "Ethical treatment, a hygienic environment and personalised attention for every patient.",
  },
  {
    heading: "Continuously Evolving with the Latest Dental Technology",
    sub: "We regularly upgrade our equipment and treatment techniques to provide safer, faster and more comfortable dental care.",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-section" id="home">
      <div className="hero-overlay-gradient"></div>
      
      <div className="section-container hero-inner-container">
        <div className="hero-content-block">
          
          <div className="hero-eyebrow">
            <span className="eyebrow-line"></span>
            WELCOME TO PRIME DENTAL
          </div>

          <div className="hero-slider-wrapper">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="hero-slide"
              >
                <h1 className="hero-dynamic-heading">
                  {heroSlides[currentSlide].heading}
                </h1>
                <p className="hero-dynamic-subtext">
                  {heroSlides[currentSlide].sub}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="hero-static-footer">
            <p className="hero-static-line">
              <strong>Prime Dental & Root Canal Treatment Center</strong> — <br />
              delivering advanced, precise and comfortable dental care in Haridwar.
            </p>
            <div className="hero-cta-group">
              <a href="#contact" className="btn-primary hero-btn">
                Book Now
                <span className="btn-arrow">→</span>
              </a>
              <a href="#services" className="btn-secondary hero-btn">
                Services
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
