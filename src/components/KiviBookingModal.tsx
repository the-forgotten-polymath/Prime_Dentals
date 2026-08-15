"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export const triggerKiviBooking = () => {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-kivi-modal"));
    // Also trigger bootstrap modal if present
    const $ = (window as unknown as { $: any }).$;
    if ($ && typeof $('#bookappointment').modal === "function") {
      try {
        $('#bookappointment').modal('show');
      } catch (err) {
        console.warn("Bootstrap modal call:", err);
      }
    }
  }
};

export default function KiviBookingModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("open-kivi-modal", handleOpen);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("open-kivi-modal", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
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
                maxWidth: "650px",
                height: "650px",
                maxHeight: "90vh",
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
                  padding: "16px 24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexShrink: 0
                }}
              >
                <div>
                  <h4 style={{ margin: 0, fontSize: "17px", fontWeight: "700", color: "#ffffff", lineHeight: 1.2 }}>
                    Book Appointment — Prime Dental
                  </h4>
                  <span style={{ fontSize: "12px", opacity: 0.9 }}>
                    Instant Online Appointment via KiviHealth
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
                    justifyContent: "center",
                    transition: "background 0.2s ease"
                  }}
                  aria-label="Close modal"
                >
                  &times;
                </button>
              </div>

              {/* Iframe Body */}
              <div style={{ flexGrow: 1, width: "100%", height: "100%", background: "#ffffff", overflow: "hidden" }}>
                <iframe 
                  id="MainPopupIframe" 
                  src="https://kivihealth.com/iam/.sahil.dhingra.gi2m0b0qphio/bookslot" 
                  width="100%" 
                  height="100%" 
                  style={{ border: "none", width: "100%", height: "100%" }}
                  title="KiviHealth Appointment Booking Slot"
                ></iframe>
              </div>

              {/* Footer */}
              <div 
                style={{
                  padding: "12px 24px",
                  background: "#f8fafc",
                  borderTop: "1px solid #e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexShrink: 0
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
                    padding: "8px 20px",
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

      {/* Hidden Bootstrap Modal anchor target for compatibility */}
      <div id="bookappointment" style={{ display: "none" }}></div>
    </>
  );
}
