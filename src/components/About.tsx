export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="section-container">
        <div className="about-grid">
          {/* LEFT COLUMN */}
          <div className="about-left">
            <div className="about-image-wrapper">
              <img className="about-image" src="/images/attending_patient.png" alt="Dentist at work" />
            </div>
            
            <div className="stats-row">
              <div className="stat-block">
                <span className="number">98%</span>
                <span className="label">SATISFACTION RATE</span>
              </div>
              <div className="stat-block">
                <span className="number">1K+</span>
                <span className="label">HAPPY PATIENTS</span>
              </div>
              <div className="stat-block">
                <span className="number">4.9</span>
                <span className="label">CUSTOMERS RATING</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="about-content">
            <div className="section-label-prefix">KNOW YOUR DENTIST /</div>
            <h2 className="section-heading">Dr. Sahil Dhingra</h2>
            
            <div className="about-desc">
              <p style={{ marginBottom: "20px" }}>Dr Sahil Dhingra is an associate professor in department of conservative dentistry and Endodontics with more than 10 years of experience.</p>
              
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px', listStyleType: 'disc', paddingLeft: '20px' }}>
                <li>BDS from Teerthankar Mahaveer dental college</li>
                <li>MDS from Teerthankar Mahaveer dental college</li>
                <li>Lifetime member of Indian Dental Association and Indian Association of conservative dentistry and Endodontics</li>
                <li>Presently working as an associate professor in department of conservative dentistry and Endodontics in Kalka Dental College Meerut</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
