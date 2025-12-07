'use client';

export default function DonateActionSchema() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    "recipient": {
      "@type": "NGO",
      "name": "Sweet Baskets",
      "url": "https://sweetbaskets.org"
    },
    "description": "Support Sweet Baskets in bringing comfort to children in hospitals and elderly individuals through personalized care baskets. Your donation helps deliver hope and kindness.",
    "url": "https://sweetbaskets.org/donate"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
