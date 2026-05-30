export default function Marquee() {
  const topLayerItems = [
    "Painless Treatment",
    "Advanced Technology",
    "Expert Care",
    "Hygienic Environment",
    "Painless Treatment",
    "Advanced Technology",
    "Expert Care",
    "Hygienic Environment"
  ]; // Duplicated for seamless scrolling

  const bottomLayerItems = [
    "Root Canal Treatment",
    "Dental Implants",
    "Teeth Whitening",
    "Wisdom Tooth",
    "Root Canal Treatment",
    "Dental Implants",
    "Teeth Whitening",
    "Wisdom Tooth"
  ]; // Duplicated for seamless scrolling

  return (
    <section className="marquee-section">
      {/* Top Layer: Left to Right (Actually animating Right to Left makes more sense visually, but we use scroll-left keyframes which translates from 0 to -50%) */}
      <div className="marquee-container">
        <div className="marquee-track marquee-layer-1">
          {topLayerItems.map((item, index) => (
            <div key={index} className="marquee-item">
              {item} <span className="marquee-dot">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Layer: Right to Left (We use scroll-right which translates from -50% to 0) */}
      <div className="marquee-container">
        <div className="marquee-track marquee-layer-2">
          {bottomLayerItems.map((item, index) => (
            <div key={index} className="marquee-item marquee-item-outline">
              {item} <span className="marquee-dot">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
