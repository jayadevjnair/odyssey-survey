import { SERVICE_AREAS, SERVICES_DATA } from "@/lib/data";

export function LocalBusinessSchema() {
  const baseUrl = "https://odysseysurvey.com";

  const areaServedList = SERVICE_AREAS.map((area) => ({
    "@type": "City",
    "name": area.name,
    "containedInPlace": {
      "@type": "AdministrativeArea",
      "name": area.region,
    },
  }));

  const serviceOffers = Object.values(SERVICES_DATA).map((srv) => ({
    "@type": "Offer",
    "itemOffered": {
      "@type": "Service",
      "name": srv.title,
      "description": srv.shortDesc,
      "url": `${baseUrl}/services/${srv.slug}`,
    },
  }));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${baseUrl}/#organization`,
        "name": "Odyssey Survey - Precision Digital Land Surveyors",
        "alternateName": "Odyssey Surveyors",
        "url": baseUrl,
        "logo": `${baseUrl}/odyssey-logo.png`,
        "image": `${baseUrl}/equipment.png`,
        "description": "Enterprise-grade digital land surveying, DGPS RTK satellite georeferencing, 3D topographical contour mapping, and building setting out layout services.",
        "telephone": "+91-79947-76610",
        "email": "odysseysurveyorspnkm@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Odyssey Survey Engineering Hub, Near Private Bus Stand, NH 183, Ponkunnam",
          "addressLocality": "Ponkunnam, Kottayam",
          "addressRegion": "Kerala",
          "postalCode": "686506",
          "addressCountry": "IN",
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 9.5658,
          "longitude": 76.7645,
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "08:00",
            "closes": "19:00",
          },
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "348",
          "bestRating": "5",
          "worstRating": "1",
        },
        "areaServed": areaServedList,
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Land Surveying Services",
          "itemListElement": serviceOffers,
        },
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "Odyssey Survey",
        "publisher": {
          "@id": `${baseUrl}/#organization`,
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/services?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
