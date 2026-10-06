export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.myqarryon.com/#organization",
    name: "QarryOn",
    legalName: "QarryOn LLC",
    url: "https://www.myqarryon.com",
    description:
      "QarryOn is an Atlanta luggage concierge providing luggage pickup, secure hold, and delivery for travelers.",
    areaServed: {
      "@type": "City",
      name: "Atlanta",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.myqarryon.com/#service",
    name: "QarryOn Luggage Concierge",
    serviceType: "Luggage pickup, secure hold, and delivery",
    provider: {
      "@id": "https://www.myqarryon.com/#organization",
    },
    areaServed: {
      "@type": "City",
      name: "Atlanta",
    },
    description:
      "Same-day luggage pickup, secure hold, and delivery across Atlanta, including airport, hotel, Airbnb, event, office, and other approved handoff locations.",
    offers: [
      {
        "@type": "Offer",
        name: "Qarry Lite",
        price: "54",
        priceCurrency: "USD",
        description: "Luggage concierge service for 1–2 bags.",
      },
      {
        "@type": "Offer",
        name: "Qarry Plus",
        price: "74",
        priceCurrency: "USD",
        description: "Luggage concierge service for 3–5 bags.",
      },
      {
        "@type": "Offer",
        name: "Qarry Elite",
        price: "110",
        priceCurrency: "USD",
        description: "Luggage concierge service for 6 or more bags.",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
    </>
  );
}