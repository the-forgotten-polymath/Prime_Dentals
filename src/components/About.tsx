"use client";

import Image from "next/image";

const doctors = [
  {
    id: 5,
    name: "Dr. Ratika Sachdeva",
    prefix: "GENERAL DENTIST /",
    image: "/images/doctor-5.png",
    layout: "normal-layout",
    desc: "Dr. Ratika Sachdeva is a dedicated dental surgeon who graduated with a Bachelor of Dental Surgery (BDS) in 2015 from IDST Kadrabad which is affiliated to CCS University. She is government certificate holder of management of medical emergencies. She believes that quality dental care begins with understanding each patient's needs and providing treatment with compassion, precision, and honesty.",
    stats: [
      { value: "9+", label: "YEARS OF CLINICAL EXP" },
      { value: "BDS", label: "GENERAL DENTIST" },
      { value: "GOVT", label: "EMERGENCY CERTIFICATE" }
    ],
    points: [
      "Graduated with Bachelor of Dental Surgery (BDS) in 2015 from IDST Kadrabad (affiliated to CCS University)",
      "Government certificate holder of Management of Medical Emergencies",
      "Believes in understanding each patient's needs and providing treatment with compassion, precision, and honesty",
      "Regularly updates her knowledge with the latest advancements in modern dentistry",
      "Follows evidence-based treatment protocols to deliver safe, effective, and long-lasting results"
    ]
  },
  {
    id: 1,
    name: "Dr. Sahil Dhingra, BDS, MDS",
    prefix: "CLINIC DIRECTOR /",
    image: "/images/doctor-main.png",
    layout: "reverse-layout",
    desc: (
      <>
        Dr. Sahil Dhingra is a distinguished Endodontist with over <strong>15 years of clinical experience</strong> and the Founder & Clinical Director of <strong>Prime Dental & RCT Center</strong>, established on <strong>October 6, 2016</strong>. Renowned for his expertise in painless single-visit root canal treatments, complex endodontic procedures, cosmetic dentistry, and advanced dental surgeries, he is committed to delivering exceptional patient care using the latest techniques and technology.
        <br /><br />
        In addition to his successful clinical practice, Dr. Dhingra has an impressive academic background, having served as an <strong>Associate Professor at Kalka Dental College, Meerut</strong>, where he taught both <strong>BDS and MDS students</strong> for <strong>9 years</strong>. Prior to his academic career, he also gained valuable experience through <strong>2 years of hospital-based clinical practice</strong>.
        <br /><br />
        Dr. Dhingra has authored <strong>multiple research publications in reputed national and international dental journals</strong>, reflecting his dedication to advancing the field of dentistry through academic research and evidence-based practice.
      </>
    ),
    stats: [
      { value: "15+ Yrs", label: "CLINICAL EXPERIENCE" },
      { value: "10K+", label: "SUCCESSFUL ROOT CANALS" },
      { value: "1 Hr", label: "PAINLESS ROOT CANAL" }
    ],
    points: [
      "BDS – Teerthanker Mahaveer Dental College",
      "MDS (Conservative Dentistry & Endodontics) – Teerthanker Mahaveer Dental College",
      "Founder & Clinical Director of Prime Dental & RCT Center (Established October 6, 2016)",
      "Over 15 years of clinical experience in dentistry",
      "Specialist in painless single-visit root canals, complex endodontics, cosmetic dentistry, and advanced dental procedures",
      "Former Associate Professor, Kalka Dental College, Meerut",
      "9 years of teaching experience for BDS & MDS students",
      "2 years of prior hospital clinical experience",
      "Author of multiple publications in reputed dental journals",
      "Lifetime Member of the Indian Dental Association (IDA)",
      "Lifetime Member of the Indian Association of Conservative Dentistry & Endodontics (IACDE)"
    ]
  },
  {
    id: 3,
    name: "Dr. Tarun Kumar Rana",
    prefix: "VISITING CONSULTANT - ORTHODONTICS /",
    image: "/images/doctor-3.jpeg",
    layout: "normal-layout",
    desc: "Dr. Tarun Kumar Rana is a senior Professor of Orthodontics with over 19 years of teaching and research experience. He has published 64 articles and 17 books in renowned journals.",
    stats: [
      { value: "19+", label: "YEARS OF EXPERIENCE" },
      { value: "64", label: "ARTICLES PUBLISHED" },
      { value: "17", label: "BOOKS PUBLISHED" }
    ],
    points: [
      "Presently working as Professor of Orthodontics at SGT University, Gurugram",
      "Active lifetime member of the Indian Orthodontic Society (IOS)",
      "Has served as External Examiner for several prestigious dental universities across India",
      "Specializes in adult orthodontics, Aligners, Self-ligation systems, and Cleft Lip/Palate care",
      "Represented the Dental Council of India (DCI) as inspector for MDS/BDS renewal inspections"
    ]
  },
  {
    id: 4,
    name: "Dr. Aditya Singh",
    prefix: "VISITING CONSULTANT - CRANIO-MAXILLOFACIAL SURGEON /",
    image: "/images/doctor-4.png",
    layout: "reverse-layout",
    desc: "Dr. Aditya Singh is a distinguished, board-certified Cranio-Maxillofacial Surgeon with over 10 years of specialized experience in high-precision facial and jaw reconstructive procedures. He is globally recognized for his mastery in minimally invasive Cranio and Maxillofacial techniques.",
    stats: [
      { value: "10+", label: "YEARS OF EXPERIENCE" },
      { value: "1ST", label: "TMJ REPLACEMENT (U.K.)" },
      { value: "1ST", label: "JAW REPLACEMENT (U.K.)" }
    ],
    points: [
      "First Temporomandibular Joint (TMJ) Replacement Surgery in Uttarakhand",
      "First Aggressive Tumor Resection & Reconstruction (Congenital) Surgery in Uttarakhand",
      "First Jaw Replacement Surgery in Uttarakhand",
      "Successfully treated thousands of patients, restoring both function and aesthetics in complex facial trauma and jaw disorders",
      "Maintains the highest standards of ethical and professional conduct in patient care"
    ]
  },
  {
    id: 2,
    name: "Dr. Ila Sharma",
    prefix: "VISITING CONSULTANT - PERIODONTICS /",
    image: "/images/doctor-2.jpeg",
    layout: "normal-layout",
    desc: "Dr. Ila Sharma is a dedicated and accomplished Periodontist and Gold Medalist, recognized nationally for her outstanding academic record, clinical skill, and research contributions.",
    stats: [
      { value: "GOLD", label: "MEDALIST (PERIODONTICS)" },
      { value: "2021", label: "STUDENT OF THE YEAR" },
      { value: "BEST", label: "PAPER AWARD (NAT. CONF)" }
    ],
    points: [
      "Completed Bachelor of Dental Surgery (BDS) in 2018",
      "MDS in Periodontics (2022) from the prestigious Seema Dental College & Hospital, Rishikesh",
      "Honored with the Student of the Year Award by Cynodent in 2021",
      "Received the Best Paper Award at the National Conference in 2022",
      "Specializes in periodontal therapy, regenerative surgery, and gum health management"
    ]
  }
];

export default function About() {
  return (
    <section className="about-section section-padding" id="about">
      <div className="section-container">
        
        {/* SPEC-BASED ABOUT & VISION */}
        <div className="about-vision-grid">
          <div className="about-vision-left">
            <span className="about-eyebrow body-lg">About</span>
            <h2 className="about-title display-md">Prime Dental & Root Canal Treatment Center</h2>
            
            {/* Single Image Layout */}
            <div className="about-single-image-container">
              <Image src="/images/home.png" alt="Dental Care" width={500} height={400} className="about-single-img" />
            </div>
          </div>
          
          <div className="about-vision-right">
            <span className="vision-label label">OUR VISION</span>
            <p className="vision-body">
              Our vision goes beyond treating teeth—we redefine the entire dental experience. By blending state-of-the-art technology with compassionate, patient-first care, we create a sanctuary of comfort and trust. Our goal is to inspire lifelong confidence and radiant, healthy smiles through precision and personalized treatment plans.
            </p>
            <p className="vision-body" style={{ marginTop: "20px" }}>
              Experience the future of oral healthcare at our modern clinic. Featuring a three-chair setup designed to minimize wait times, our facility is fully integrated with advanced digital tools, therapeutic lasers, and high-precision scanners. We deliver comfortable, transparent, and family-focused care across all major disciplines.
            </p>
          </div>
        </div>

        {/* MEET OUR DOCTORS */}
        <div className="doctors-header-wrapper">
          <span className="doctors-eyebrow label">EXPERIENCED TEAM</span>
          <h2 className="doctors-section-title display-md">Meet Our <i>Doctors</i></h2>
          <p className="doctors-section-desc body-md">
            Our team of highly qualified specialists and professors is committed to providing ethical, comfortable, and world-class dental care.
          </p>
        </div>

        {/* LIST OF DOCTORS */}
        <div className="doctors-list">
          {doctors.map((doc) => (
            <div className={`doctor-card-grid ${doc.layout}`} key={doc.id}>
              
              {/* IMAGE & STATS COLUMN */}
              <div className="doctor-card-left">
                <div className="doctor-image-wrapper">
                  <Image 
                    className="doctor-image" 
                    src={doc.image} 
                    alt={doc.name} 
                    width={500} 
                    height={400} 
                    priority={doc.id === 1}
                  />
                </div>
                
                {/* STATS */}
                <div className="doctor-stats-row">
                  {doc.stats.map((stat, idx) => (
                    <div className="doctor-stat-block" key={idx}>
                      <span className="doctor-stat-number display-md">{stat.value}</span>
                      <span className="doctor-stat-label label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CONTENT COLUMN */}
              <div className="doctor-card-content">
                <div className="doctor-prefix label">{doc.prefix}</div>
                <h3 className="doctor-name heading-lg">{doc.name}</h3>
                
                <div className="doctor-description-text body-md">
                  <p style={{ marginBottom: "20px" }}>{doc.desc}</p>
                  <ul className="doctor-bullets">
                    {doc.points.map((pt, idx) => (
                      <li key={idx} className="body-sm">{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
