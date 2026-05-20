import { siteConfig } from "./seo";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Preschool", "ChildCare", "LocalBusiness"],
    name: siteConfig.name,
    image: siteConfig.ogImage,
    "@id": siteConfig.url,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      ...siteConfig.address,
    },
    geo: {
      "@type": "GeoCoordinates",
      ...siteConfig.geo,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:30",
      closes: "16:00",
    },
    areaServed: [
      "Velachery",
      "Guindy",
      "Adambakkam",
      "Madipakkam",
      "Taramani",
      "Perungudi",
      "Nanganallur",
      "Saidapet",
    ],
    description: siteConfig.description,
  };
}

export function getFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}
