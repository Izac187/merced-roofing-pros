import { siteConfig } from "@/lib/config";

export default function Schema() {
  const data = {
    "@context": "https://schema.org",
    "@type": siteConfig.schema.type,
    name: siteConfig.siteName,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: `https://${siteConfig.domain}`,
    areaServed: siteConfig.serviceArea.map((name) => ({
      "@type": "City",
      name,
      addressRegion: siteConfig.stateAbbr,
    })),
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    priceRange: siteConfig.schema.priceRange,
    openingHours: siteConfig.schema.hours,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${siteConfig.niche} Services`,
      itemListElement: siteConfig.services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.title, description: s.description },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
