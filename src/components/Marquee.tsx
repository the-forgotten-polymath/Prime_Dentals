export default function Marquee() {
  const marqueeItems = [
    "Painless Treatment",
    "Advanced Technology",
    "Expert Care",
    "Hygienic Environment",
    "Root Canal Specialist",
    "Dental Implants",
    "Teeth Whitening",
    "Wisdom Tooth Extraction",
    "Painless Treatment",
    "Advanced Technology",
    "Expert Care",
    "Hygienic Environment",
    "Root Canal Specialist",
    "Dental Implants",
    "Teeth Whitening",
    "Wisdom Tooth Extraction"
  ]; // Duplicated for seamless infinite scrolling

  return (
    <section className="marquee-section">
      <div className="marquee-container">
        <div className="marquee-track marquee-layer-1">
          {marqueeItems.map((item, index) => (
            <div key={index} className="marquee-item">
              {item} <span className="marquee-dot">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
