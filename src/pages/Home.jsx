import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import DoctorsSection from '../components/DoctorsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import SEO from '../components/SEO';


const Home = () => {
  return (
    <>
      <SEO title="Best IVF Clinic" />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <DoctorsSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
};

export default Home;