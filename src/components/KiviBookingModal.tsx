"use client";

import React, { useState, useEffect } from "react";

export const triggerKiviBooking = () => {
  if (typeof window !== "undefined") {
    // 1. Try Bootstrap modal trigger if jQuery/Bootstrap JS is present
    const $ = (window as unknown as { $: any }).$;
    if ($ && typeof $('#bookappointment').modal === "function") {
      $('#bookappointment').modal('show');
      return;
    }
    // 2. Fallback to custom event for React state
    window.dispatchEvent(new CustomEvent("open-kivi-modal"));
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
      {/* 1. Official KiviHealth Bootstrap Modal HTML Container */}
      <div 
        className={`modal fade ${isOpen ? "in show" : ""}`} 
        id="bookappointment" 
        tabIndex={-1} 
        role="dialog" 
        aria-labelledby="myModalLabel"
        style={{ display: isOpen ? "block" : undefined, backgroundColor: isOpen ? "rgba(0,0,0,0.6)" : undefined }}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setIsOpen(false);
          }
        }}
      >
        <div className="modal-dialog" role="document" style={{ maxWidth: "600px", margin: "30px auto" }}>
          <div className="modal-content" style={{ borderRadius: "16px", overflow: "hidden", border: "none", boxShadow: "0 20px 50px rgba(0,0,0,0.25)" }}>
            
            <div className="modal-header" style={{ background: "linear-gradient(135deg, #0ea5e9, #0284c7)", color: "#ffffff", padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h4 className="modal-title themeColor" id="myModalLabel" style={{ margin: 0, fontSize: "18px", fontWeight: "700", color: "#ffffff" }}>
                Book Appointment - Prime Dental
              </h4>
              <button 
                type="button" 
                className="close" 
                data-dismiss="modal" 
                aria-label="Close"
                onClick={() => setIsOpen(false)}
                style={{ background: "transparent", border: "none", color: "#ffffff", fontSize: "24px", cursor: "pointer", opacity: 0.9 }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body kivi_modal_body" style={{ padding: 0, height: "550px", background: "#ffffff" }}>
              <iframe 
                id="MainPopupIframe" 
                src="https://kivihealth.com/iam/.sahil.dhingra.gi2m0b0qphio/bookslot" 
                width="100%" 
                height="100%" 
                style={{ border: "none", width: "100%", height: "100%" }}
                title="KiviHealth Appointment Booking Slot"
              ></iframe>
            </div>

            <div className="modal-footer" style={{ textAlign: "left", padding: "12px 20px", background: "#f8fafc", borderTop: "1px solid #e2e8f0", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <a 
                href="https://kivihealth.com/" 
                className="_kivi_powered_container" 
                target="_blank" 
                rel="noreferrer" 
                title="Search and Book Appointment with Dentist in Haridwar"
                style={{ textDecoration: "none" }}
              >
                <span style={{ color: "#424748", fontSize: "11px" }}>
                  <span>Powered By </span>
                  <span style={{ fontWeight: 700, color: "#0284c7" }}>kivihealth.com</span>
                </span>
              </a>
              <button 
                type="button" 
                className="btn btn-default" 
                onClick={() => setIsOpen(false)}
                style={{ padding: "6px 16px", borderRadius: "8px", border: "1px solid #cbd5e1", background: "#ffffff", cursor: "pointer", fontSize: "13px" }}
              >
                Close
              </button>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
