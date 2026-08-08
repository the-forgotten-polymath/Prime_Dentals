"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

const QUICK_CHIPS = [
  "🏥 Clinic Timings & Location",
  "🦷 Painless 1-Hour RCT?",
  "⚡ SOGA Laser Technology",
  "👨‍⚕️ Meet Dr. Sahil Dhingra",
  "💉 Needle-Free Anesthesia",
  "📅 Book Appointment"
];

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      sender: "bot",
      text: "👋 Welcome to **Prime Dental & Root Canal Treatment Center**!\n\nI am your AI Dental Assistant. Ask me anything about our doctors, treatments, SOGA laser technology, timings, or post-operative care!",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    }
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || input.trim();
    if (!query || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: query })
      });

      const data = await res.json();
      const botMsg: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: data.reply || "I am currently having trouble retrieving data. Please call us at 099978 01777.",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch {
      const errorMsg: Message = {
        id: `bot-err-${Date.now()}`,
        sender: "bot",
        text: "Apologies, I encountered a connection issue. You can call us directly at **099978 01777** or chat on WhatsApp!",
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const renderFormattedText = (text: string) => {
    // Simple markdown-style renderer for bold (**text**), bullet points, and links
    const lines = text.split("\n");
    return lines.map((line, lineIdx) => {
      let content: React.ReactNode = line;

      // Handle bold tags **text**
      const boldParts = line.split(/(\*\*.*?\*\*)/g);
      content = boldParts.map((part, pIdx) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return <strong key={pIdx}>{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      return (
        <React.Fragment key={lineIdx}>
          {content}
          {lineIdx < lines.length - 1 && <br />}
        </React.Fragment>
      );
    });
  };

  return (
    <>
      {/* Floating Action Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="ai-chat-toggle-btn"
        aria-label="Toggle AI Dental Assistant"
      >
        <span className="ai-btn-pulse"></span>
        {isOpen ? (
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <div className="ai-btn-icon-wrapper">
            <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor">
              <path d="M12 2a2 2 0 0 1 2 2v1.05A7.002 7.002 0 0 1 19 12v3a3 3 0 0 1-3 3h-1v2a1 1 0 0 1-1.707.707L10.586 18H8a3 3 0 0 1-3-3v-3a7.002 7.002 0 0 1 5-6.95V4a2 2 0 0 1 2-2zm0 5a5.002 5.002 0 0 0-5 5v3a1 1 0 0 0 1 1h3a1 1 0 0 1 .707.293L13 17.586V16a1 1 0 0 1 1-1h2a1 1 0 0 0 1-1v-3a5.002 5.002 0 0 0-5-5zm-2 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm4 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
            <span className="ai-badge">AI</span>
          </div>
        )}
      </button>

      {/* Floating Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="ai-chat-window"
          >
            {/* Header */}
            <div className="ai-chat-header">
              <div className="ai-header-info">
                <div className="ai-avatar">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 2a2 2 0 0 1 2 2v1.05A7.002 7.002 0 0 1 19 12v3a3 3 0 0 1-3 3h-1v2a1 1 0 0 1-1.707.707L10.586 18H8a3 3 0 0 1-3-3v-3a7.002 7.002 0 0 1 5-6.95V4a2 2 0 0 1 2-2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="ai-chat-title">Prime Dental AI</h4>
                  <div className="ai-status-indicator">
                    <span className="status-dot"></span>
                    <span>Online • 24/7 Dental Guide</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="ai-close-btn" aria-label="Close Chat">
                &times;
              </button>
            </div>

            {/* Chat Body */}
            <div className="ai-chat-body">
              {messages.map((msg) => (
                <div key={msg.id} className={`ai-message-wrapper ${msg.sender}`}>
                  <div className="ai-message-bubble">
                    {renderFormattedText(msg.text)}
                    <span className="ai-timestamp">{msg.timestamp}</span>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="ai-message-wrapper bot">
                  <div className="ai-message-bubble loading-dots">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Prompt Chips */}
            <div className="ai-quick-chips">
              {QUICK_CHIPS.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(chip)}
                  className="chip-btn"
                  disabled={isLoading}
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Footer Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="ai-chat-footer"
            >
              <input
                type="text"
                placeholder="Ask about treatments, doctors, timings..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="ai-chat-input"
                disabled={isLoading}
              />
              <button type="submit" className="ai-send-btn" disabled={!input.trim() || isLoading}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
