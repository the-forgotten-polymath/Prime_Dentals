import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Services from "../components/Services";
import VideoGallery from "../components/VideoGallery";
import PatientResources from "../components/PatientResources";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import Equipments from "../components/Equipments";
import LaserSpecialty from "../components/LaserSpecialty";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Booking from "../components/Booking";
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
      <VideoGallery />
      <PatientResources />
      <BeforeAfterSlider />
      <About />
      <Equipments />
      <LaserSpecialty />
      <Testimonials />
      <Booking />
      <Articles />
      <Footer />
      <FloatingActions />
    </main>
  );
}

