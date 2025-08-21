import React from 'react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/sections/HeroSection';
import ServicesPreview from '../components/sections/ServicesPreview';
import StatsSection from '../components/sections/StatsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import TechnologiesSection from '../components/sections/TechnologiesSection';
import CTASection from '../components/sections/CTASection';

const Home: React.FC = () => {
  return (
    <>
      <SEOHead
        seo={{
          title: "DevStudio - Desenvolvimento Web Profissional",
          description: "Transformamos ideias em soluções digitais. Criação de sites, aplicações web e soluções personalizadas com tecnologia moderna e design responsivo.",
          keywords: ["desenvolvimento web", "criação de sites", "aplicações web", "React", "TypeScript", "design responsivo"],
          canonical: "/"
        }}
      />
      <HeroSection />
      <ServicesPreview />
      <StatsSection />
      <TestimonialsSection />
      <TechnologiesSection />
      <CTASection />
    </>
  );
};

export default Home;