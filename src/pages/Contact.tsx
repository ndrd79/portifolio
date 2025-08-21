import React from 'react';
import SEOHead from '../components/SEOHead';
import ContactSection from '../components/sections/ContactSection';

const Contact: React.FC = () => {
  return (
    <>
      <SEOHead
        seo={{
          title: "Contato - DevStudio",
          description: "Entre em contato conosco para discutir seu projeto. Estamos prontos para transformar suas ideias em soluções digitais.",
          keywords: ["contato", "orçamento", "projeto web", "desenvolvimento", "consultoria"],
          canonical: "/contato"
        }}
      />
      <div className="pt-20">
        <ContactSection />
      </div>
    </>
  );
};

export default Contact;