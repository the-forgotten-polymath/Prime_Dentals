"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

interface ServiceItem {
  id: string;
  title: string;
  img: string;
  desc: string;
  descDetail: {
    en: string;
    hi: string;
  };
}

const servicesData: ServiceItem[] = [
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    img: "/images/root_canal_graphic.png",
    desc: "Painless and precise therapy to save your natural tooth and relieve severe pain instantly.",
    descDetail: {
      en: "A root canal is a treatment sequence for the infected pulp of a tooth which is intended to result in the elimination of infection and the protection of the decontaminated tooth from future microbial invasion. Our specialized endodontic approach ensures the procedure is fully completed in just a single hour, completely pain-free.",
      hi: "रूट कैनाल दांत के संक्रमित पल्प (नसों) का इलाज है जिससे संक्रमण दूर होता है और दांत भविष्य में सड़ने से बचता है। हमारे उन्नत तरीकों से यह इलाज केवल एक घंटे में पूरी तरह दर्द-रहित किया जाता है।"
    }
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    img: "/images/dental_implant_graphic.png",
    desc: "Permanent, natural-looking replacements for missing teeth that restore full function and confidence.",
    descDetail: {
      en: "Dental implants are titanium posts surgically placed into the jawbone beneath your gums. Once in place, they allow your dentist to mount replacement teeth onto them. They function, look, and feel exactly like natural teeth.",
      hi: "डेंटल इम्प्लांट टाइटेनियम के छोटे स्क्रू होते हैं जिन्हें मसूड़ों के नीचे जबड़े की हड्डी में लगाया जाता है। इसके ऊपर नकली दांत लगाए जाते हैं जो बिल्कुल प्राकृतिक दांतों की तरह काम करते हैं और दिखते हैं।"
    }
  },
  {
    id: "painless-extraction",
    title: "Painless Extraction",
    img: "/images/extraction_graphic.png",
    desc: "Gentle, safe, and stress-free tooth removal, including complex wisdom teeth extractions.",
    descDetail: {
      en: "A gentle tooth extraction procedure performed under modern anesthesia to ensure you experience zero discomfort. We use specialized, atraumatic techniques to preserve surrounding bone and accelerate healing.",
      hi: "आधुनिक एनेस्थीसिया के उपयोग से दांत निकालने की एक कोमल प्रक्रिया ताकि आपको कोई दर्द न हो। हम आस-पास की हड्डी को सुरक्षित रखने और जल्दी ठीक होने के लिए विशेष तकनीकों का उपयोग करते हैं।"
    }
  },
  {
    id: "digital-dentistry",
    title: "Digital Dentistry",
    img: "/images/digital_dentistry_graphic.png",
    desc: "State-of-the-art computerized design and modeling for ultra-accurate and fast dental restorations.",
    descDetail: {
      en: "Modern dentistry using computerized design and manufacturing to restore teeth with high accuracy, speed, and comfort. This eliminates messy manual processes and guarantees exact-fitting dental restorations.",
      hi: "कंप्यूटर डिजाइनिंग और मशीनों की मदद से दांतों का सटीक, तेज और आरामदायक इलाज। यह पुराने समय के हाथों से नाप लेने के झंझट को खत्म करता है और बिल्कुल सटीक फिटिंग वाले दांत सुनिश्चित करता है।"
    }
  },
  {
    id: "digital-xray",
    title: "Digital X-Ray",
    img: "/images/digital_xray_graphic.png",
    desc: "Advanced high-definition digital imaging capturing teeth details instantly with up to 90% less radiation.",
    descDetail: {
      en: "Advanced high-definition dental imaging that captures detailed views of your teeth and bones instantly. It emits up to 90% less radiation compared to traditional film-based dental X-rays.",
      hi: "उन्नत हाई-डेफिनिशन डिजिटल एक्स-रे जो तुरंत दांतों और हड्डियों की सटीक तस्वीरें लेता है। यह पारंपरिक एक्स-रे फिल्मों की तुलना में 90% तक कम रेडिएशन उत्सर्जित करता है।"
    }
  },
  {
    id: "dental-laser",
    title: "Dental Laser",
    img: "/images/dental_laser_graphic.png",
    desc: "Painless soft tissue treatments, sterilization, and gum contouring with rapid healing.",
    descDetail: {
      en: "State-of-the-art soft tissue diode laser technology used for painless surgeries, deep cleaning, sterilization, and cosmetic gum contouring with virtually no bleeding, swelling, or needles.",
      hi: "अत्याधुनिक सॉफ्ट-टिश्यू डायोड लेजर तकनीक जिसका उपयोग बिना खून बहने, सूजन या दर्द के मसूड़ों की सर्जरी, कीटाणुशोधन और मसूड़ों को सुंदर आकार देने के लिए किया जाता है।"
    }
  },
  {
    id: "intraoral-scanner",
    title: "3D Intraoral Scanner",
    img: "/images/scanner_graphic.png",
    desc: "Ultra-precise full-color 3D impressions of your teeth in under two minutes with zero gag reflex.",
    descDetail: {
      en: "A digital scanner that captures highly accurate 3D color images of your teeth in under two minutes. Eliminates the discomfort, gagging, and bad taste associated with traditional putty-based molds.",
      hi: "एक डिजिटल स्कैनर जो दो मिनट से भी कम समय में आपके दांतों की सटीक 3D रंगीन तस्वीरें लेता है। यह पारंपरिक मिट्टी या पुट्टी जैसे सांचे से होने वाले घबराहट और खराब स्वाद को खत्म करता है।"
    }
  },
  {
    id: "wisdom-tooth",
    title: "Wisdom Tooth Surgery",
    img: "/images/wisdom_tooth_graphic.png",
    desc: "Expert and safe extraction of complex or impacted wisdom teeth with high comfort.",
    descDetail: {
      en: "Safe and comfortable extraction of impacted or problematic wisdom teeth. Utilizing advanced surgical guidelines, high-torque motors, and expert care to prevent pain, swelling, and infection.",
      hi: "मसूड़े में फंसे या परेशान करने वाले अक्ल दाढ़ (विजडम टूथ) को सुरक्षित और आरामदायक तरीके से निकालना। दर्द और सूजन को रोकने के लिए उन्नत मोटर और विशेषज्ञ देखभाल का उपयोग किया जाता है।"
    }
  },
  {
    id: "gum-surgery",
    title: "Gum Surgery",
    img: "/images/gum_surgery.png",
    desc: "Laser-assisted periodontics to treat infections, gum recession, and strengthen loose teeth.",
    descDetail: {
      en: "Advanced periodontal therapies to treat gum infections, repair receding gums, and secure loose teeth. Using dental lasers, we perform minimally invasive surgeries with fast recovery times.",
      hi: "मसूड़ों के संक्रमण को ठीक करने, मसूड़ों की सिकुड़न सुधारने और ढीले दांतों को मजबूत करने के लिए इलाज। लेजर की मदद से मसूड़ों की सर्जरी बिना चीरे और टांके के जल्दी ठीक होने के साथ की जाती है।"
    }
  },
  {
    id: "ortho-braces",
    title: "Orthodontic (Braces)",
    img: "/images/ortho_braces.png",
    desc: "Align misaligned teeth and correct bites with Ceramic/Metal braces or clear aligners.",
    descDetail: {
      en: "Straighten misaligned teeth and correct bite issues using high-quality ceramic/metal braces or modern clear aligners. Restores optimal chewing function and crafts a beautifully aligned smile.",
      hi: "टेढ़े-मेढ़े दांतों को ठीक करने और काटने की समस्या को सुधारने के लिए मेटल/सिरेमिक ब्रेसिज़ या पारदर्शी एलाइनर्स का इलाज। यह सुंदर मुस्कान के साथ चबाने की क्षमता को बेहतर बनाता है।"
    }
  },
  {
    id: "digital-anaesthesia",
    title: "Digital Anaesthesia",
    img: "/images/injex_anesthesia.png",
    desc: "Needle-free, pain-free numbing using advanced micro-jet pressure to eliminate sting and anxiety.",
    descDetail: {
      en: "Revolutionary comfort delivery using micro-jet pressure to numb teeth instantly without the fear, pain, or sting of traditional needles. Ideal for patients with dental anxiety or needle phobia.",
      hi: "बिना सुई के दर्द-रहित एनेस्थीसिया देने की क्रांतिकारी तकनीक, जो हवा के दबाव (माइक्रो-जेट प्रेशर) से दांतों को तुरंत सुन्न कर देती है। सुई के डर और दर्द से पीड़ित मरीजों के लिए सर्वोत्तम।"
    }
  }
];

// Repeat to enable continuous scrolling track
const repeatedServices = [
  ...servicesData,
  ...servicesData,
  ...servicesData,
  ...servicesData
];

export default function Services() {
  const cardsRowRef = useRef<HTMLDivElement>(null);
  const [activeService, setActiveService] = useState<ServiceItem | null>(null);
  const [lang, setLang] = useState<"en" | "hi">("en");

  const scrollLeft = () => {
    if (cardsRowRef.current) {
      const card = cardsRowRef.current.querySelector(".service-card-new");
      if (card) {
        cardsRowRef.current.scrollBy({ left: -(card.clientWidth + 24), behavior: "smooth" });
      }
    }
  };

  const scrollRight = () => {
    if (cardsRowRef.current) {
      const card = cardsRowRef.current.querySelector(".service-card-new");
      if (card) {
        cardsRowRef.current.scrollBy({ left: (card.clientWidth + 24), behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const container = cardsRowRef.current;
    if (!container || activeService) return; // Stop auto-scrolling when modal is open

    let timerId: NodeJS.Timeout;

    const startAutoScroll = () => {
      timerId = setInterval(() => {
        const card = container.querySelector(".service-card-new");
        if (!card) return;
        const cardWidth = card.clientWidth + 24; // Card width + gap
        const maxScroll = container.scrollWidth - container.clientWidth;
        
        if (container.scrollLeft >= maxScroll - 10) {
          container.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          container.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }, 3000);
    };

    startAutoScroll();

    const handleMouseEnter = () => clearInterval(timerId);
    const handleMouseLeave = () => startAutoScroll();

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(timerId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [activeService]);

  return (
    <section className="services-section section-padding" id="services">
      <div className="section-container">
        
        {/* Header */}
        <div className="services-header-grid">
          <div className="services-header-left">
            <h2 className="services-title display-md">DISCOVER OUR <i>SERVICES</i></h2>
            
            <div className="reviews-badge">
              <div className="avatar-stack">
                <img className="avatar" src="https://picsum.photos/seed/patient1/32/32" alt="Patient review" />
                <img className="avatar" src="https://picsum.photos/seed/patient2/32/32" alt="Patient review" />
                <img className="avatar" src="https://picsum.photos/seed/patient3/32/32" alt="Patient review" />
              </div>
              <div className="review-text">
                <span className="review-count">1,000+</span>
                <span className="review-label">Reviews</span>
              </div>
            </div>
          </div>
          
          <div className="services-header-right">
            <p className="body-md">
              Experience modern dental care delivered with comfort, precision, and attention to detail. 
              Our clinic provides a calm, welcoming environment designed to make every visit stress-free.
            </p>
          </div>
        </div>

        {/* Cards wrapper */}
        <div className="services-cards-wrapper">
          <button className="slider-nav-btn prev-btn" onClick={scrollLeft} aria-label="Previous">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
          
          <button className="slider-nav-btn next-btn" onClick={scrollRight} aria-label="Next">
            <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
          <div className="cards-row" ref={cardsRowRef}>
            {repeatedServices.map((service, index) => (
              <div 
                className="service-card-new" 
                key={index}
                onClick={() => {
                  setActiveService(service);
                  setLang("en"); // Reset to English on click
                }}
              >
                <div className="service-card-img-wrapper">
                  <Image 
                    src={service.img} 
                    alt={service.title} 
                    width={280} 
                    height={200} 
                    className="service-card-img"
                  />
                </div>
                <div className="card-info">
                  <h3 className="card-title heading-md">{service.title}</h3>
                  <p className="card-description body-sm">{service.desc}</p>
                  <div className="card-action">
                    <span className="action-text">Learn more</span>
                    <button className="card-arrow" aria-label="Learn more">→</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* DETAILED OVERLAY CARD MODAL */}
      <AnimatePresence>
        {activeService && (
          <div className="service-modal-overlay-wrapper">
            {/* Backdrop */}
            <motion.div 
              className="service-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveService(null)}
            />

            {/* Modal Card */}
            <motion.div 
              className="service-modal-card"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Close Button */}
              <button 
                className="modal-close-btn" 
                onClick={() => setActiveService(null)}
                aria-label="Close modal"
              >
                ✕
              </button>

              <div className="modal-content-grid">
                {/* Left Side: Graphic Banner */}
                <div className="modal-graphic-pane">
                  <Image 
                    src={activeService.img} 
                    alt={activeService.title} 
                    width={400} 
                    height={300} 
                    className="modal-pane-img"
                  />
                </div>

                {/* Right Side: Information Content */}
                <div className="modal-info-pane">
                  <div className="modal-header-actions">
                    <h3 className="modal-service-title display-md">{activeService.title}</h3>
                    
                    {/* English / Hindi Toggle Switch */}
                    <div className="language-toggle-bar">
                      <button 
                        className={`lang-btn ${lang === "en" ? "active" : ""}`}
                        onClick={() => setLang("en")}
                      >
                        English
                        {lang === "en" && (
                          <motion.div 
                            layoutId="modal-lang-bg" 
                            className="lang-active-bg" 
                          />
                        )}
                      </button>
                      <button 
                        className={`lang-btn ${lang === "hi" ? "active" : ""}`}
                        onClick={() => setLang("hi")}
                      >
                        हिंदी
                        {lang === "hi" && (
                          <motion.div 
                            layoutId="modal-lang-bg" 
                            className="lang-active-bg" 
                          />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Body description */}
                  <div className="modal-description-wrapper">
                    <span className="modal-section-label label">
                      {lang === "en" ? "TREATMENT DESCRIPTION" : "इलाज का विवरण"}
                    </span>
                    <p className="modal-detailed-desc body-md">
                      {lang === "en" ? activeService.descDetail.en : activeService.descDetail.hi}
                    </p>
                  </div>

                  {/* Action row */}
                  <div className="modal-action-footer">
                    <a 
                      href="#contact" 
                      className="nav-cta-button modal-booking-btn"
                      onClick={() => setActiveService(null)}
                    >
                      {lang === "en" ? "Book Appointment Now" : "अभी अपॉइंटमेंट बुक करें"}
                      <svg className="cta-arrow-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: "16px", height: "16px", transform: "rotate(45deg)" }}>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
