"use client";

import Image from "next/image";

const doctors = [
  {
    id: 1,
    name: "Dr. Sahil Dhingra",
    prefix: "CLINIC DIRECTOR /",
    image: "/images/attending_patient.png",
    layout: "normal-layout",
    desc: "Dr. Sahil Dhingra is a highly skilled Endodontist and associate professor in the department of Conservative Dentistry and Endodontics, bringing over 10 years of clinical and academic expertise.",
    stats: [
      { value: "98%", label: "SATISFACTION RATE" },
      { value: "1K+", label: "HAPPY PATIENTS" },
      { value: "4.9", label: "CUSTOMERS RATING" }
    ],
    points: [
      "BDS from Teerthankar Mahaveer Dental College",
      "MDS in Conservative Dentistry & Endodontics from Teerthankar Mahaveer Dental College",
      "Lifetime Member of the Indian Dental Association (IDA)",
      "Lifetime Member of the Indian Association of Conservative Dentistry and Endodontics (IACDE)",
      "Presently working as Associate Professor in Kalka Dental College, Meerut"
    ]
  },
  {
    id: 2,
    name: "Dr. Ila Sharma",
    prefix: "PERIODONTICS SPECIALIST /",
    image: "/images/doctor-2.jpeg",
    layout: "reverse-layout",
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
  },
  {
    id: 3,
    name: "Dr. Tarun Kumar Rana",
    prefix: "ORTHODONTICS SPECIALIST /",
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
    prefix: "MAXILLOFACIAL SURGEON /",
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
  }
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        
        {/* HEADER */}
        <div className="about-header">
          <h2>Meet Our Doctors</h2>
          <p>
            Our team of highly qualified specialists and professors is committed to providing ethical, comfortable, and world-class dental care.
          </p>
        </div>

        {/* LIST OF DOCTORS */}
        {doctors.map((doc) => (
          <div className={`about-grid ${doc.layout}`} key={doc.id}>
            
            {/* IMAGE COLUMN */}
            <div className="about-left">
              <div className="about-image-wrapper">
                <Image 
                  className="about-image" 
                  src={doc.image} 
                  alt={doc.name} 
                  width={500} 
                  height={440} 
                  priority={doc.id === 1}
                />
              </div>
              
              {/* STATS */}
              <div className="stats-row">
                {doc.stats.map((stat, idx) => (
                  <div className="stat-block" key={idx}>
                    <span className="number">{stat.value}</span>
                    <span className="label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CONTENT COLUMN */}
            <div className="about-content">
              <div className="section-label-prefix">{doc.prefix}</div>
              <h3 className="section-heading">{doc.name}</h3>
              
              <div className="about-desc">
                <p style={{ marginBottom: "20px" }}>{doc.desc}</p>
                <ul>
                  {doc.points.map((pt, idx) => (
                    <li key={idx}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}
