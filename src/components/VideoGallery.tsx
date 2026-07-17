"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const videos = [
  { id: 1, title: "Clinical Overview", src: "/videos/Video1.mp4" },
  { id: 2, title: "Patient Experience", src: "/videos/Video2.mp4" },
  { id: 3, title: "Advanced Procedures", src: "/videos/Video3.mp4" },
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedVideo(null);
    };
    if (selectedVideo) {
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
  }, [selectedVideo]);

  return (
    <section className="video-gallery-section section-padding bg-light" id="videos">
      <div className="section-container">
        
        <div className="resources-header">
          <span className="label">CLINIC TOUR</span>
          <h2 className="display-md">Take a look at <i>Prime Dental</i></h2>
          <p className="body-md">
            Explore our state-of-the-art facility, advanced treatment rooms, and welcoming environment in these short clinic walkthroughs.
          </p>
        </div>

        <div className="video-grid">
          {videos.map((video) => (
            <div 
              key={video.id} 
              className="video-card hover-lift"
              onClick={() => setSelectedVideo(video.src)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedVideo(video.src);
                }
              }}
            >
              <div className="video-thumbnail-container">
                <video 
                  src={video.src} 
                  className="video-thumbnail"
                  muted
                  playsInline
                  preload="metadata"
                />
                <div className="video-overlay">
                  <div className="play-button">▶</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="lightbox-backdrop"
              onClick={() => setSelectedVideo(null)}
            >
              <button 
                className="lightbox-close-btn" 
                onClick={() => setSelectedVideo(null)}
                aria-label="Close"
              >
                &times;
              </button>
              
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="video-lightbox-content"
                onClick={(e) => e.stopPropagation()}
              >
                <video 
                  src={selectedVideo} 
                  controls 
                  muted 
                  playsInline 
                  className="lightbox-video-player"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </section>
  );
}
