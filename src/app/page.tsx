import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Services from "../components/Services";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import Equipments from "../components/Equipments";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <BeforeAfterSlider />
      <Equipments />
      <About />
      <Testimonials />
      <Articles />
      <Footer />
      <FloatingActions />
    </main>
  );
}
