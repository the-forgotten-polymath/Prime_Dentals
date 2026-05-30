export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-container">
        <div className="services-header">
          <div className="services-header-left">
            <div className="section-label-prefix">Our Features /</div>
            <h2 className="section-heading">DISCOVER OUR SIGNATURE DENTAL SERVICES</h2>
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
            <p>
              Experience modern dental care delivered with comfort, precision, and attention to detail. 
              Our clinic provides a calm, welcoming environment designed to make every visit stress-free.
            </p>
          </div>
        </div>

        <div className="services-cards-wrapper">
          <div className="carousel-sidebar">
            <p className="carousel-desc">
              Discover delighted patient reviews about their comforting and satisfying dental care experience.
            </p>
            <button className="carousel-arrow">&#8249;</button>
          </div>
          
          <div className="cards-row" id="cardsRow">
            <div className="service-card">
              <img src="/images/root-canal.png" alt="Root Canal Treatment" />
              <div className="card-overlay"></div>
              <div className="card-info">
                <span className="card-title">Root Canal<br/>Treatment</span>
                <button className="card-arrow">→</button>
              </div>
            </div>
            
            <div className="service-card">
              <img src="/images/dental-implants.png" alt="Dental Implants" />
              <div className="card-overlay"></div>
              <div className="card-info">
                <span className="card-title">Dental<br/>Implants</span>
                <button className="card-arrow">→</button>
              </div>
            </div>
            
            <div className="service-card">
              <img src="/images/painless_extraction.png" alt="Painless Extraction" />
              <div className="card-overlay"></div>
              <div className="card-info">
                <span className="card-title">Painless<br/>Extraction</span>
                <button className="card-arrow">→</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
