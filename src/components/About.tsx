"use client";

import Image from "next/image";

const doctors = [
  {
    id: 1,
    name: "Dr. Sahil Dhingra",
    prefix: "CLINIC DIRECTOR /",
    image: "/images/dhingra.png",
    layout: "normal-layout",
    desc: "Dr. Sahil Dhingra is a highly skilled Endodontist and associate professor in Conservative Dentistry and Endodontics, bringing 12 years of total clinical experience (10 years running Prime Dental since its establishment on October 6, 2016, and 2 years of prior hospital practice).",
    stats: [
      { value: "12 Yrs", label: "CLINICAL EXPERIENCE" },
      { value: "10K+", label: "SUCCESSFUL ROOT CANALS" },
      { value: "1 Hr", label: "PAINLESS ROOT CANAL" }
    ],
    points: [
      "BDS from Teerthankar Mahaveer Dental College",
      "MDS in Conservative Dentistry & Endodontics from Teerthankar Mahaveer Dental College",
      "Established Prime Dental & RCT Center on October 6, 2016",
      "Specializes in painless 1-hour root canals, complex surgeries, and cosmetic operations",
      "Lifetime Member of the Indian Dental Association (IDA) & Indian Association of Conservative Dentistry and Endodontics (IACDE)",
      "Presently working as Associate Professor in Kalka Dental College, Meerut"
    ]
  },
  {
    id: 2,
    name: "Dr. Ila Sharma",
    prefix: "VISITING CONSULTANT - PERIODONTICS /",
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
    id: 5,
    name: "Dr. Ratika Sachdeva",
    prefix: "GENERAL DENTIST /",
    image: "/images/doctor-5.png",
    layout: "normal-layout",
    desc: "Dr. Ratika Sachdeva is a dedicated dental surgeon who graduated with a Bachelor of Dental Surgery (BDS) in 2015 from IDST Kadrabad which is affiliated to CCS University. She is government certificate holder of management of dental emergencies. She believes that quality dental care begins with understanding each patient's needs and providing treatment with compassion, precision, and honesty.",
    stats: [
      { value: "9+", label: "YEARS OF CLINICAL EXP" },
      { value: "BDS", label: "GENERAL DENTIST" },
      { value: "GOVT", label: "EMERGENCY CERTIFICATE" }
    ],
    points: [
      "Graduated with Bachelor of Dental Surgery (BDS) in 2015 from IDST Kadrabad (affiliated to CCS University)",
      "Government certificate holder of Management of Dental Emergencies",
      "Believes in understanding each patient's needs and providing treatment with compassion, precision, and honesty",
      "Regularly updates her knowledge with the latest advancements in modern dentistry",
      "Follows evidence-based treatment protocols to deliver safe, effective, and long-lasting results"
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
            <h2 className="about-title display-md">Prime <i>Dental & Root Canal Treatment Center</i></h2>
            
            {/* Single Image Layout */}
            <div className="about-single-image-container">
              <Image src="/images/attending_patient.png" alt="Dental Care" width={500} height={400} className="about-single-img" />

            </div>
          </div>
          
          <div className="about-vision-right">
            <span className="vision-label label">OUR VISION</span>
            <p className="vision-body">
              At Prime Dental & Root Canal Treatment Center, our vision goes beyond just treating teeth; we are dedicated to redefining the dental experience. By seamlessly blending state-of-the-art technology with compassionate, patient-first care, we strive to create a sanctuary of comfort and trust. Our ultimate goal is to inspire lifelong confidence and radiant, healthy smiles through precision, innovation, and truly personalized treatment plans.
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
