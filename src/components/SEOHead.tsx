import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOData } from '../types';

interface SEOHeadProps {
  seo: SEOData;
}

const SEOHead: React.FC<SEOHeadProps> = ({ seo }) => {
  const {
    title,
    description,
    keywords,
    ogImage = '/og-image.jpg',
    canonical
  } = seo;

  const siteUrl = 'https://devstudio.vercel.app';
  const fullTitle = title.includes('DevStudio') ? title : `${title} | DevStudio`;

  return (
    <Helmet>
      {/* Título e meta tags básicas */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="DevStudio" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={canonical ? `${siteUrl}${canonical}` : siteUrl} />
      <meta property="og:site_name" content="DevStudio" />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* Favicon e ícones */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      
      {/* Tema para mobile */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      
      {/* Preconnect para performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "DevStudio",
          "description": "Empresa especializada em desenvolvimento de sites e aplicações web",
          "url": siteUrl,
          "logo": `${siteUrl}/logo.png`,
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-11-99999-9999",
            "contactType": "customer service",
            "email": "contato@devstudio.com"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "São Paulo",
            "addressRegion": "SP",
            "addressCountry": "BR"
          },
          "sameAs": [
            "https://instagram.com/devstudio",
            "https://linkedin.com/company/devstudio",
            "https://github.com/devstudio"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEOHead;