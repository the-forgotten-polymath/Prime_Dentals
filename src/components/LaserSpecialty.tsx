"use client";

import React from "react";
import Image from "next/image";

export default function LaserSpecialty() {
  return (
    <section className="laser-section section-padding" id="laser-specialty">
      <div className="section-container">
        <div className="laser-grid">
          
          <div className="laser-content">
            <span className="label laser-eyebrow">FIRST TIME IN HARIDWAR</span>
            <h2 className="display-md laser-title">
              Triple Wavelength <i>SOGA Laser</i>
            </h2>
            <p className="laser-desc body-md">
              Experience the future of dentistry with the advanced SOGA Triple Wavelength Laser. By harnessing the power of targeted light energy, we perform highly precise procedures that are significantly faster, painless, and vastly superior to traditional methods.
            </p>

            <div className="laser-benefits-list">
              
              <div className="laser-benefit-item">
                <div className="laser-icon-wrapper">✨</div>
                <div className="laser-benefit-text">
                  <h4>Advanced Laser Surgeries</h4>
                  <p>Highly effective for Laser Gum Surgery and Laser Tooth Whitening with minimal discomfort.</p>
                </div>
              </div>

              <div className="laser-benefit-item">
                <div className="laser-icon-wrapper">🩸</div>
                <div className="laser-benefit-text">
                  <h4>Minimally Invasive</h4>
                  <p>Requires much less time. The procedures are completely bloodless, bladeless, and require zero stitches.</p>
                </div>
              </div>

              <div className="laser-benefit-item">
                <div className="laser-icon-wrapper">⚡</div>
                <div className="laser-benefit-text">
                  <h4>Biomodulation Healing</h4>
                  <p>Speeds up the natural healing process for ulcer trauma, tongue ulcers, and precancerous lesions.</p>
                </div>
              </div>

              <div className="laser-benefit-item">
                <div className="laser-icon-wrapper">🗣️</div>
                <div className="laser-benefit-text">
                  <h4>TMJ Joint Healing</h4>
                  <p>Effectively treats and cures the painful clicking sound of the Temporomandibular Joint (TMJ).</p>
                </div>
              </div>

            </div>
          </div>

          <div className="laser-image-wrapper">
            <div className="laser-image-glow"></div>
            <Image 
              src="/images/soga_ilazer.png" 
              alt="Triple Wavelength SOGA Laser" 
              width={600} 
              height={600} 
              className="laser-main-img"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
