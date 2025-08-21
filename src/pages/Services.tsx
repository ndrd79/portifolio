import React from 'react';
import SEOHead from '../components/SEOHead';
import ServicesSection from '../components/sections/ServicesSection';

const Services: React.FC = () => {
  return (
    <>
      <SEOHead
        seo={{
          title: "Nossos Serviços - DevStudio",
          description: "Oferecemos criação de sites profissionais, desenvolvimento de aplicações web e soluções personalizadas para sua empresa.",
          keywords: ["criação de sites", "desenvolvimento web", "aplicações web", "soluções personalizadas", "sistemas internos"],
          canonical: "/servicos"
        }}
      />
      <div className="pt-20">
        <ServicesSection />
      </div>
    </>
  );
};

export default Services;