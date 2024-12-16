// pages/index.js
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import AddYourOwn from "../components/AddYourOwn";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import CommunitySection from "../components/CommunitySection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <AddYourOwn />
      <Testimonials />
      <CommunitySection />
      <Footer />
    </div>
  );
}
