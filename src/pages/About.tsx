import React from 'react';
import SEOHead from '../components/SEOHead';
import AboutSection from '../components/sections/AboutSection';

const About: React.FC = () => {
  return (
    <>
      <SEOHead
        seo={{
          title: "Sobre Nós - DevStudio",
          description: "Conheça nossa equipe especializada em desenvolvimento web. Saiba mais sobre nossa missão, valores e experiência em tecnologia.",
          keywords: ["sobre nós", "equipe", "desenvolvimento web", "experiência", "tecnologia", "missão"],
          canonical: "/sobre"
        }}
      />
      <div className="pt-20">
        <AboutSection />
      </div>
    </>
  );
};

export default About;