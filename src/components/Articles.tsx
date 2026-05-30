export default function Articles() {
  return (
    <section className="articles-section" id="blog">
      <div className="section-container">
        <div className="articles-header">
          <div className="section-label-prefix">Media & Press /</div>
          <h2 className="articles-heading">RECOGNITION & APPRECIATION</h2>
        </div>
        <div className="articles-grid">
          {/* Article 1 */}
          <div className="article-card">
            <img src="/images/article1.png" alt="Amar Ujala press clipping" className="article-image" />
            <div className="article-content">
              <span className="article-tag">Amar Ujala Foundation</span>
              <h3 className="article-title">Dr. Sahil Dhingra's Noble Initiative for Free Treatment</h3>
              <a href="/images/article1.png" target="_blank" className="article-link">View original clipping <span>→</span></a>
            </div>
          </div>
          {/* Article 2 */}
          <div className="article-card">
            <img src="/images/article2.png" alt="News coverage clipping" className="article-image" />
            <div className="article-content">
              <span className="article-tag">News Coverage</span>
              <h3 className="article-title">A Helping Hand to Patients During Demonetization</h3>
              <a href="/images/article2.png" target="_blank" className="article-link">View original clipping <span>→</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
