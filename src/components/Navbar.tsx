"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

const navItems = [
  { id: "home", label: "Home", href: "#home" },
  { id: "services", label: "Services", href: "#services" },
  { id: "about", label: "About us", href: "#about" },
  { id: "testimonials", label: "Testimonials", href: "#testimonials" },
  { id: "resources", label: "Instructions", href: "#resources" },
  { id: "blog", label: "Blog", href: "#blog" },
  { id: "contact", label: "Contact", href: "#contact" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
      
      // Detect active section on scroll
      const scrollPosition = window.scrollY + 150; // offset
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(item.id);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine which tab should display the indicator
  const displayTab = hoveredTab !== null ? hoveredTab : activeTab;

  return (
    <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#" className="logo">
          <span className="logo-brand">Prime <span className="logo-highlight">Dental</span></span>
          <span className="logo-sub">& Root Canal Center</span>
        </a>

        {/* Hamburger menu button */}
        <button 
          className={`hamburger ${isMobileMenuOpen ? "active" : ""}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu-container ${isMobileMenuOpen ? "mobile-open" : ""}`}>
          <ul
            className="nav-menu-wrapper"
            onMouseLeave={() => setHoveredTab(null)}
          >
            {navItems.map((item) => {
              const isSelected = displayTab === item.id;
              return (
                <li
                  key={item.id}
                  className={`nav-tab ${activeTab === item.id ? "active" : ""}`}
                  onMouseEnter={() => setHoveredTab(item.id)}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ listStyle: "none" }}
                >
                  <a href={item.href}>
                    {item.label}
                  </a>
                  {isSelected && (
                    <motion.div
                      layoutId="nav-cursor"
                      className="nav-cursor"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <a href="#contact" className="nav-cta-button" onClick={() => setIsMobileMenuOpen(false)}>
          Book Now
          <svg className="cta-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", transform: "rotate(45deg)" }}>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </header>
  );
}
