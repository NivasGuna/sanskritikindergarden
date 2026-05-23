import { Metadata } from "next";

export const siteConfig = {
  name: "Sanskriti Kindergarten",
  description: "Best preschool and daycare in Velachery, Chennai offering activity-based learning, phonics, and child-focused education.",
  url: "https://www.sanskritikindergarden.com",
  ogImage: "https://www.sanskritikindergarden.com/images/hero-bg.jpg",
  locale: "en_IN",
  address: {
    streetAddress: "No. 20B, Cart Track Road, Gopalakrishnan Street, Opposite Kala Flats",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600032",
    addressCountry: "IN",
  },
  geo: {
    latitude: 13.0135,
    longitude: 80.2173,
  },
  phone: "+91 78455 19020",
  email: "sanskritivelachery@gmail.com",
};

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  icons = "/favicon.ico",
  noIndex = false,
  canonicalUrl,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: Metadata["icons"];
  noIndex?: boolean;
  canonicalUrl?: string; // relative path, e.g., "/about"
} = {}): Metadata {
  const fullCanonicalUrl = canonicalUrl
    ? `${siteConfig.url}${canonicalUrl}`
    : siteConfig.url;
  return {
    title: {
      default: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    openGraph: {
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description,
      url: fullCanonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title ?? siteConfig.name,
        },
      ],
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | ${siteConfig.name}` : siteConfig.name,
      description,
      images: [image],
    },
    ...(icons && { icons }),
    metadataBase: new URL(siteConfig.url),
    ...(canonicalUrl && {
      alternates: {
        canonical: fullCanonicalUrl,
      },
    }),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
