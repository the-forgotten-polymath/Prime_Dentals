"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const resources = [
  {
    id: "aftercare",
    title: "Post-Operative Instructions",
    desc: "Essential aftercare guidelines following tooth extraction.",
    image: "/images/Aftercare.png"
  },
  {
    id: "zirconia",
    title: "Benefits of Zirconia Crowns",
    desc: "Why Zirconia is the ultimate choice for durable and natural-looking crowns.",
    image: "/images/Zirconia.png"
  },
  {
    id: "scanner",
    title: "Intraoral Scanner vs. Alginate",
    desc: "Experience the comfort of digital impressions over traditional methods.",
    image: "/images/IntraOral.png"
  }
];

export default function PatientResources() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Prevent background scrolling
      document.body.classList.add("lightbox-open");
    } else {
      document.body.style.overflow = "auto";
      document.body.classList.remove("lightbox-open");
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
      document.body.classList.remove("lightbox-open");
    };
  }, [selectedImage]);

  return (
    <section className="resources-section section-padding bg-light" id="resources">
      <div className="section-container">
        <div className="resources-header">
          <span className="label">PATIENT RESOURCES</span>
          <h2 className="heading-primary">Your Guide to Better Dental Health</h2>
          <p className="subheading-text">
            Explore our visual guides to understand your treatments, post-operative care, and the advanced technology we use to enhance your smile.
          </p>
        </div>

        <div className="resources-grid">
          {resources.map((resource) => (
            <div 
              key={resource.id} 
              className="resource-card hover-lift"
              onClick={() => setSelectedImage(resource.image)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedImage(resource.image);
                }
              }}
            >
              <div className="resource-img-container">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="resource-img"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="resource-img-overlay">
                  <span>Click to Enlarge</span>
                </div>
              </div>
              <div className="resource-content">
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-desc">{resource.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-backdrop"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="lightbox-close-btn" 
              onClick={() => setSelectedImage(null)}
              aria-label="Close image"
            >
              &times;
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="lightbox-content-wrapper"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Full size resource"
                fill
                className="lightbox-full-img"
                sizes="100vw"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
