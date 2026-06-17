export default function Articles() {
  return (
    <section className="articles-section section-padding" id="blog">
      <div className="section-container">
        <div className="articles-header">
          <span className="articles-eyebrow label">Media & Press</span>
          <h2 className="articles-heading display-md">RECOGNITION & <i>APPRECIATION</i></h2>
        </div>
        <div className="articles-grid">
          {/* Article 1 */}
          <div className="article-card">
            <img src="/images/article1.png" alt="Amar Ujala press clipping" className="article-image" />
            <div className="article-content">
              <span className="article-tag label">Amar Ujala Foundation</span>
              <h3 className="article-title heading-md">Dr. Sahil Dhingra's Noble Initiative for Free Treatment</h3>
              <a href="/images/article1.png" target="_blank" className="article-link">
                View original clipping 
                <span>→</span>
              </a>
            </div>
          </div>
          {/* Article 2 */}
          <div className="article-card">
            <img src="/images/article2.png" alt="News coverage clipping" className="article-image" />
            <div className="article-content">
              <span className="article-tag label">News Coverage</span>
              <h3 className="article-title heading-md">A Helping Hand to Patients During Demonetization</h3>
              <a href="/images/article2.png" target="_blank" className="article-link">
                View original clipping 
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

