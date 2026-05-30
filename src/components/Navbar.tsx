"use client";

import React, { useRef, useState } from "react";
import { motion } from "motion/react";

export default function Navbar() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "24px", height: "24px" }}>
          <path d="M12 2L14.39 8.26L21 9.27L16.21 13.97L17.33 20.5L12 17.27L6.67 20.5L7.79 13.97L3 9.27L9.61 8.26L12 2Z" />
        </svg>
        Prime Dental & RCT Center
      </a>

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

      <a href="#contact" className="nav-cta">
        Book a call
        <span className="cta-arrow">→</span>
      </a>
    </nav>
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
