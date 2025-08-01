import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import PortfolioSection from "../components/sections/PortfolioSection";
import ContactSection from "../components/sections/ContactSection";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Header />

      <main className="flex-grow">
        <section id="hero" className="pt-16 px-4">
          <HeroSection />
        </section>
        <section id="about" className="py-16 px-4">
          <AboutSection />
        </section>
        <section id="skills" className="py-16 px-4 bg-blue-100">
          <SkillsSection />
        </section>

        <section id="portfolio" className="py-16 px-4">
          <PortfolioSection />
        </section>
        <section id="contact" className="py-16 px-4 bg-sky-50">
          <ContactSection />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
