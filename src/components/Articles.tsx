"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

const CAMP_IMAGES = [
  { src: "/images/camp_event_1.png", alt: "Health checkup screening in progress" },
  { src: "/images/camp_event_2.png", alt: "Dental examination for school students" },
  { src: "/images/camp_event_3.png", alt: "Doctor interacting with students & teachers" },
  { src: "/images/camp_event_4.png", alt: "Group photo with school management" },
];

export default function Articles() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section className="articles-section section-padding" id="blog">
      <div className="section-container">

        {/* SECTION HEADER */}
        <div className="articles-header">
          <span className="articles-eyebrow label">COMMUNITY INITIATIVES & MEDIA</span>
          <h2 className="articles-heading display-md">RECOGNITION & <i>APPRECIATION</i></h2>
        </div>

        {/* FEATURED EVENT CARD: GURU NANAK ACADEMY CAMP */}
        <div className="camp-featured-card">
          <div className="camp-card-header">
            <div className="camp-tag-row">
              <span className="camp-badge label">COMMUNITY HEALTH CAMP</span>
              <span className="camp-date label">JULY 2026 • SECTOR 2, BHEL</span>
            </div>
            <h3 className="camp-title display-md">Health Checkup Camp at Guru Nanak Academy</h3>
          </div>

          <div className="camp-content-grid">
            {/* Left: Event Story & Trophy */}
            <div className="camp-text-side">
              <p className="camp-paragraph body-md">
                In July 2026, Prime Dental & Root Canal Treatment Center conducted a comprehensive <strong>Health Checkup Camp at Guru Nanak Academy, Sector 2, BHEL</strong>, with the aim of promoting health awareness and early identification of potential health concerns among school students.
              </p>
              <p className="camp-paragraph body-md">
                During the camp, <strong>more than 200 students were screened</strong> by our healthcare team. The checkups focused on assessing the students’ general well-being and identifying oral and general concerns requiring early preventive attention.
              </p>
              <p className="camp-paragraph body-md">
                The initiative was a vital step towards encouraging <strong>preventive healthcare and healthy habits among children</strong>. We are deeply grateful to the school management, teachers, students, parents, and our dedicated healthcare team for making the camp a resounding success.
              </p>

              {/* Trophy Spotlight Box */}
              <div className="trophy-spotlight" onClick={() => setSelectedImg("/images/trophy_appreciation.png")}>
                <div className="trophy-img-wrapper">
                  <Image
                    src="/images/trophy_appreciation.png"
                    alt="Trophy of Appreciation"
                    width={180}
                    height={220}
                    className="trophy-img"
                  />
                  <div className="trophy-overlay">
                    <span>Click to Enlarge</span>
                  </div>
                </div>
                <div className="trophy-info">
                  <h4 className="trophy-title">Trophy of Appreciation</h4>
                  <p className="trophy-sub">Presented by Guru Nanak Academy, BHEL in honor of Dr. Sahil Dhingra & team's dedicated community healthcare service.</p>
                </div>
              </div>
            </div>

            {/* Right: Event Photo Gallery */}
            <div className="camp-gallery-side">
              <h4 className="gallery-title label">EVENT HIGHLIGHTS & PHOTOS</h4>
              <div className="camp-photos-grid">
                {CAMP_IMAGES.map((img, idx) => (
                  <div key={idx} className="camp-photo-item" onClick={() => setSelectedImg(img.src)}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="camp-photo"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="photo-overlay">
                      <span>Enlarge</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MEDIA & PRESS CLIPPINGS */}
        <div className="articles-grid">
          {/* Article 1 */}
          <div className="article-card">
            <img src="/images/article1.png" alt="Amar Ujala press clipping" className="article-image" />
            <div className="article-content">
              <span className="article-tag label">Amar Ujala Foundation</span>
              <h3 className="article-title heading-md">Dr. Sahil Dhingra's Noble Initiative for Free Treatment</h3>
              <a href="/images/article1.png" target="_blank" className="article-link">
                View original clipping 
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Article 2 */}
          <div className="article-card">
            <img src="/images/article2.png" alt="News coverage clipping" className="article-image" />
            <div className="article-content">
              <span className="article-tag label">News Coverage</span>
              <h3 className="article-title heading-md">A Helping Hand to Patients During Demonetization</h3>
              <a href="/images/article2.png" target="_blank" className="article-link">
                View original clipping 
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-backdrop"
            onClick={() => setSelectedImg(null)}
          >
            <button
              className="lightbox-close-btn"
              onClick={() => setSelectedImg(null)}
              aria-label="Close image"
            >
              &times;
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="lightbox-content-wrapper"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImg}
                alt="Enlarged view"
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
