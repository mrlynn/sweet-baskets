'use client';

export default function OrganizationSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Sweet Baskets",
    "alternateName": "Sweet Baskets Nonprofit",
    "url": "https://sweetbaskets.org",
    "logo": "https://sweetbaskets.org/sweet-baskets-logo.png",
    "description": "Sweet Baskets brings comfort to children in hospitals and elderly individuals who are homebound or in nursing care through personalized care baskets.",
    "foundingDate": "2024",
    "nonprofitStatus": "Pending501c3",
    "areaServed": {
      "@type": "Place",
      "name": "United States"
    },
    "sameAs": [
      "https://facebook.com/sweetbaskets",
      "https://instagram.com/sweetbaskets",
      "https://twitter.com/sweetbaskets"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "General Inquiries",
      "email": "info@sweetbaskets.org"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
