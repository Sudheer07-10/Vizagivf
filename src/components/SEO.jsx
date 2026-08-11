import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getCurrentLocation } from '../data/locationData';

const DOMAIN = 'https://vizagivf.medcytech.com';

const SEO = ({ 
  title, 
  description, 
  image = '/og-image.png', 
  type = 'website',
  structuredData = null
}) => {
  const location = useLocation();
  const currentLocation = getCurrentLocation(location.pathname);
  const path = location.pathname;
  
  // Base details
  const siteName = 'Vizag IVF Centre';
  let defaultTitle = `${siteName} - Comprehensive Fertility Care`;
  
  // Location specific keyword logic
  let locKeywords = [];
  let locDescription = '';
  
  if (currentLocation.id === 'srikakulam') {
    locKeywords = [
      'affordable IVF services Srikakulam',
      'IVF treatment in Srikakulam',
      'personalized fertility care Srikakulam',
      'best IVF center in Srikakulam',
      'fertility clinic near Bahadurlapeta',
      'affordable IVF services Bahadurlapeta'
    ];
    locDescription = 'Providing affordable IVF services, personalized fertility care, and the best IVF treatment in Srikakulam and near Bahadurlapeta.';
  } else if (currentLocation.id === 'visakhapatnam') {
    locKeywords = [
      'IVF success stories Nehru Nagar',
      'best IVF clinic in Visakhapatnam',
      'personalized IVF services Visakhapatnam',
      'compassionate fertility care Visakhapatnam',
      'affordable fertility treatments Nehru Nagar'
    ];
    locDescription = 'Best IVF clinic in Visakhapatnam offering personalized IVF services, compassionate fertility care, and affordable treatments in Nehru Nagar.';
  } else if (currentLocation.id === 'vizianagaram') {
    locKeywords = [
      'IVF treatment in Vizianagaram',
      'best fertility clinic in Vizianagaram',
      'affordable IVF services Vizianagaram'
    ];
    locDescription = 'Top IVF treatment and personalized fertility care at Vizag IVF Centre in Vizianagaram.';
  }
  
  const finalTitle = title ? `${title} | ${siteName}` : defaultTitle;
  const finalDescription = description || locDescription || 'Vizag IVF Centre offers compassionate and advanced fertility treatments to help you build your family.';
  const finalKeywords = locKeywords.join(', ');
  const canonicalUrl = `${DOMAIN}${path}`;

  // Default MedicalClinic Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": siteName,
    "image": `${DOMAIN}/favicon.svg`,
    "url": DOMAIN,
    "telephone": currentLocation.phone || "+91 87123 36290",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": currentLocation.address,
      "addressLocality": currentLocation.city,
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN"
    },
    "description": finalDescription
  };

  return (
    <Helmet>
      {/* Basic HTML Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={`${DOMAIN}${image}`} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={`${DOMAIN}${image}`} />

      {/* Structured Data JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
