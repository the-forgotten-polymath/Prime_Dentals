"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const KIVI_BOOKING_URL = "https://kivihealth.com/iam/.sahil.dhingra.gi2m0b0qphio/bookslot";

export const triggerKiviBooking = () => {
  if (typeof window !== "undefined") {
    // 1. Direct window open to bypass frame-ancestors iframe blocking
    window.open(KIVI_BOOKING_URL, "_blank");
  }
};

export default function KiviBookingModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-kivi-modal", handleOpen);
    return () => window.removeEventListener("open-kivi-modal", handleOpen);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="kivi-modal-backdrop"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(15, 23, 42, 0.75)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
              zIndex: 99999,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px"
            }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="kivi-modal-card"
              style={{
                width: "100%",
                maxWidth: "500px",
                background: "#ffffff",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.3)",
                display: "flex",
                flexDirection: "column",
                position: "relative"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div 
                style={{
                  background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
                  color: "#ffffff",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <div>
                  <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "700", color: "#ffffff", lineHeight: 1.2 }}>
                    Book Appointment — Prime Dental
                  </h4>
                  <span style={{ fontSize: "12px", opacity: 0.9 }}>
                    KiviHealth Instant Online Slot Booking
                  </span>
                </div>
                <button 
                  type="button" 
                  onClick={() => setIsOpen(false)}
                  style={{
                    background: "rgba(255, 255, 255, 0.2)",
                    border: "none",
                    color: "#ffffff",
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    fontSize: "20px",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </div>

              {/* Body */}
              <div style={{ padding: "32px 24px", textAlign: "center", background: "#ffffff" }}>
                <div 
                  style={{ 
                    width: "64px", 
                    height: "64px", 
                    borderRadius: "50%", 
                    background: "#e0f2fe", 
                    color: "#0284c7", 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "center", 
                    margin: "0 auto 20px auto" 
                  }}
                >
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>

                <h3 style={{ margin: "0 0 10px 0", fontSize: "20px", fontWeight: "700", color: "#0f172a" }}>
                  KiviHealth Slot Booking
                </h3>
                <p style={{ margin: "0 0 24px 0", fontSize: "14px", color: "#64748b", lineHeight: 1.5 }}>
                  Select your appointment date, view available timing slots, and confirm your booking directly on KiviHealth.
                </p>

                <a
                  href={KIVI_BOOKING_URL}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    width: "100%",
                    padding: "14px 24px",
                    background: "linear-gradient(135deg, #0ea5e9, #0284c7)",
                    color: "#ffffff",
                    borderRadius: "99px",
                    fontWeight: "700",
                    fontSize: "15px",
                    textDecoration: "none",
                    boxShadow: "0 6px 20px rgba(14, 165, 233, 0.4)"
                  }}
                >
                  <span>Proceed to KiviHealth Booking</span>
                  <span style={{ fontSize: "18px" }}>→</span>
                </a>
              </div>

              {/* Footer */}
              <div 
                style={{
                  padding: "14px 24px",
                  background: "#f8fafc",
                  borderTop: "1px solid #e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between"
                }}
              >
                <a 
                  href="https://kivihealth.com/" 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ textDecoration: "none", fontSize: "12px", color: "#475569" }}
                >
                  <span>Powered By </span>
                  <span style={{ fontWeight: 700, color: "#0284c7" }}>kivihealth.com</span>
                </a>
                <button 
                  type="button" 
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: "6px 16px",
                    borderRadius: "99px",
                    border: "1px solid #cbd5e1",
                    background: "#ffffff",
                    color: "#334155",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: "600"
                  }}
                >
                  Close
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div id="bookappointment" style={{ display: "none" }}></div>
    </>
  );
}
