"use client";

import React from "react";
import Image from "next/image";

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
            <div key={resource.id} className="resource-card hover-lift">
              <div className="resource-img-container">
                <Image
                  src={resource.image}
                  alt={resource.title}
                  fill
                  className="resource-img"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="resource-content">
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-desc">{resource.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
