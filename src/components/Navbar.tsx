"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#" className="logo">
          <span className="logo-brand">Prime <span className="logo-highlight">Dental</span></span>
          <span className="logo-sub">& RCT Center</span>
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
            onMouseLeave={() => setPosition((pv) => ({ ...pv, opacity: 0 }))}
          >
            <Tab setPosition={setPosition} href="#home">Home</Tab>
            <Tab setPosition={setPosition} href="#services">Services</Tab>
            <Tab setPosition={setPosition} href="#about">About us</Tab>
            <Tab setPosition={setPosition} href="#testimonials">Testimonials</Tab>
            <Tab setPosition={setPosition} href="#blog">Blog</Tab>
            <Tab setPosition={setPosition} href="#contact">Contact</Tab>

            <Cursor position={position} />
          </ul>
        </nav>

        <a href="#contact" className="nav-cta-button">
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

const Tab = ({
  children,
  setPosition,
  href
}: {
  children: React.ReactNode;
  setPosition: any;
  href: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className="nav-tab"
      style={{ listStyle: "none" }}
    >
      <a href={href} style={{ color: "inherit", textDecoration: "none" }}>{children}</a>
    </li>
  );
};

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={position}
      className="nav-cursor"
      style={{ listStyle: "none" }}
    />
  );
};

