"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "../components/Navbar";

const rotatingWords = [
  "GENTLE CARE.",
  "EXPERT PRECISION.",
  "ADVANCED TECH."
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" id="home">
      {/* Background using generated image */}
      <img className="hero-bg" src="/images/hero.png" alt="Dental procedure" />
      <div className="hero-overlay"></div>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO HEADLINE */}
      <div className="hero-headline">
        <h1 className="hero-heading">
          <span style={{ display: "block" }}>MODERN</span>
          <span style={{ display: "block" }}>DENTISTRY WITH</span>
          <div className="rotator-wrapper">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ display: "inline-block" }}
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </h1>
      </div>



      {/* SLIDE PROGRESS */}
      <div className="slide-progress">
        <button className="slide-prev">&#8249;</button>
        <span className="slide-num">01</span>
        <div className="progress-track">
          <div className="progress-fill"></div>
        </div>
        <span className="slide-num">05</span>
        <button className="slide-next">&#8250;</button>
      </div>



    </section>
  );
}
