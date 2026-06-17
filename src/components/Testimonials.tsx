import { TestimonialsColumn } from "./ui/testimonials-columns-1";

const testimonials = [
  {
    text: "I had a tight schedule, travelling from the UK to India. Dr. Sahil made it happen, very professional team.",
    image: "/images/teeth_avatar.png",
    name: "Mohammad Hamza",
    role: "Patient",
  },
  {
    text: "Dr. Sahil Dhingra & team did a great job for my root canal treatment. Truly a painless experience.",
    image: "/images/teeth_avatar.png",
    name: "Praveen Sethi",
    role: "Patient",
  },
  {
    text: "I had an excellent experience. The clinic is well-maintained, hygienic, and equipped with the latest technology.",
    image: "/images/teeth_avatar.png",
    name: "Tanya Dhingra",
    role: "Patient",
  },
  {
    text: "Got painless treatment from dr. Sahil dhingra for both of my children. Thank u sir 😊",
    image: "/images/teeth_avatar.png",
    name: "Vipul Sharma",
    role: "Parent",
  },
  {
    text: "Best dental clinic in haridwar!! I highly recommend everyone to visit here for your dental problems.",
    image: "/images/teeth_avatar.png",
    name: "Aishwayra",
    role: "Patient",
  },
  {
    text: "Best clinic in haridwar highly recommended. Staff is very coprative. Dr sahil is very humble.",
    image: "/images/teeth_avatar.png",
    name: "Navodit Dhingra",
    role: "Patient",
  },
  {
    text: "This is very hygienic dental clinic. I really recommend this to everyone. One of the best doctor.",
    image: "/images/teeth_avatar.png",
    name: "Anshul Bhardwaj",
    role: "Patient",
  },
  {
    text: "Very good clinic for painless tooth extraction. Best dental clinic in haridwar.",
    image: "/images/teeth_avatar.png",
    name: "Subodh Rajput",
    role: "Patient",
  },
  {
    text: "Excellent experience. Got painless root canal treatment. Recommend strongly for dental treatment.",
    image: "/images/teeth_avatar.png",
    name: "Preeti Pal",
    role: "Patient",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section className="testimonials-section section-padding" id="testimonials">
      <div className="section-container">
        <div className="testimonials-header">
          <span className="testimonials-eyebrow label">TESTIMONIALS</span>
          <h2 className="testimonials-heading display-md">
            Voices of <i>Appreciation</i>
          </h2>
          <p className="testimonials-desc body-md">
            Discover why hundreds of patients trust Denta Care with their smiles.
          </p>
        </div>

        <div className="testimonials-grid">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="testimonials-column-hidden-md" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="testimonials-column-hidden-lg" duration={17} />
        </div>
      </div>
    </section>
  );
}

