"use client";

import { useState } from "react";

export default function BeforeAfterSlider() {
  const [sliderPos, setSliderPos] = useState(50);
  const [activeTab, setActiveTab] = useState("whitening");

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value));
  };

  const images = {
    whitening: {
      before: "/images/whitening_before.png",
      after: "/images/whitening_after.png",
      filterBefore: "none",
      filterAfter: "none"
    },
    cavity: {
      before: "/images/cavity_before.png",
      after: "/images/cavity_after.png",
      filterBefore: "none",
      filterAfter: "none"
    }
  };

  const current = images[activeTab as keyof typeof images];

  return (
    <section className="before-after-section section-padding" id="results">
      <div className="section-container">
        <div className="ba-header">
          <h2 className="ba-heading display-md">REAL RESULTS, REAL <i>SMILES</i></h2>
          <p className="ba-desc">
            Slide to see the incredible transformations our patients experience with our expert dental treatments.
          </p>
        </div>

        <div className="ba-tabs">
          <button 
            className={`ba-tab ${activeTab === "whitening" ? "active" : ""}`}
            onClick={() => { setActiveTab("whitening"); setSliderPos(50); }}
          >
            Teeth Whitening
          </button>
          <button 
            className={`ba-tab ${activeTab === "cavity" ? "active" : ""}`}
            onClick={() => { setActiveTab("cavity"); setSliderPos(50); }}
          >
            Cavity Restoration
          </button>
        </div>

        <div className="ba-slider-container">
          {/* Before Container */}
          <div 
            className="ba-wrapper ba-wrapper-before"
            style={{ 
              clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
              zIndex: 1
            }}
          >
            <img 
              src={current.before} 
              alt="Before Treatment" 
              className="ba-image ba-image-before"
              style={{ filter: current.filterBefore }}
            />
            <div className="ba-label ba-label-before">BEFORE</div>
          </div>
          
          {/* After Container */}
          <div 
            className="ba-wrapper ba-wrapper-after"
            style={{ 
              clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`,
              zIndex: 2
            }}
          >
            <img 
              src={current.after} 
              alt="After Treatment" 
              className="ba-image ba-image-after"
              style={{ filter: current.filterAfter }}
            />
            <div className="ba-label ba-label-after">AFTER</div>
          </div>

          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderPos} 
            onChange={handleSliderChange}
            className="ba-range"
          />

          <div className="ba-handle" style={{ left: `${sliderPos}%` }}>
            <div className="ba-handle-button">↔</div>
          </div>
        </div>
      </div>
    </section>
  );
}
