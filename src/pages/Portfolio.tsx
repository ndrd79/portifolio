import React from 'react';
import SEOHead from '../components/SEOHead';
import PortfolioSection from '../components/sections/PortfolioSection';

const Portfolio: React.FC = () => {
  return (
    <>
      <SEOHead
        seo={{
          title: "Portfólio - DevStudio",
          description: "Conheça nossos projetos e trabalhos realizados. Veja exemplos de sites e aplicações web desenvolvidas pela nossa equipe.",
          keywords: ["portfólio", "projetos web", "sites desenvolvidos", "aplicações web", "trabalhos realizados"],
          canonical: "/portfolio"
        }}
      />
      <div className="pt-20">
        <PortfolioSection />
      </div>
    </>
  );
};

export default Portfolio;