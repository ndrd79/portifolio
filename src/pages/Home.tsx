import React from 'react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/sections/HeroSection';

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
    </>
  );
};

export default Home;