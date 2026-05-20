import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/admissions",
    "/contact",
    "/curriculum",
    "/daycare-in-velachery",
    "/daycare-near-guindy",
    "/faq",
    "/gallery",
    "/kindergarten-in-velachery",
    "/play-school-in-velachery",
    "/preschool-in-velachery",
    "/preschool-near-guindy",
    "/testimonials",
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
