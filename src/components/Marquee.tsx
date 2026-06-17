export default function Marquee() {
  const marqueeItems = [
    "Painless Treatment",
    "Advanced Technology",
    "Expert Care",
    "Hygienic Environment",
    "Root Canal Specialist",
    "Dental Implants",
    "Teeth Whitening",
    "Wisdom Tooth Extraction"
  ];
  
  // Triplicate the list to ensure it spans across the screen nicely for infinite scroll
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section className="marquee-section">
      <div className="marquee-container">
        <div className="marquee-track">
          {repeatedItems.map((item, index) => (
            <span key={index} className="marquee-item">
              {item} <span className="marquee-plus">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
