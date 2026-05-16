import { siteConfig } from "@/lib/config";

export default function Schema() {
  const data = {
    "@context": "https://schema.org",
    "@type": siteConfig.schema.type,
    "@id": `https://${siteConfig.domain}/#business`,
    name: siteConfig.siteName,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: `https://${siteConfig.domain}`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: 37.30216,
      longitude: -120.48297,
    },
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "07:00",
        closes: "20:00",
      },
    ],
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
