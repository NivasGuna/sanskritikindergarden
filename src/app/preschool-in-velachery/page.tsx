import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import LocationProgramPage from "@/components/reusable/LocationProgramPage";
import content from "./preschool-content.json";

export const metadata: Metadata = constructMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  canonicalUrl: "/preschool-in-velachery",
});

const pageConfig = {
  heroActions: [
    { text: "Enquire for Admissions", href: "/contact" },
    { text: "View Curriculum", href: "/curriculum" },
  ],
  heroCallout: {
    eyebrow: "Warm from day one",
    text: "A preschool experience built on safety, curiosity, and parent trust.",
  },
  experience: {
    eyebrow: "Preschool Care",
    title: "A clear view of the Sanskriti preschool experience.",
    description:
      "Understand the environment, learning approach, and location fit in one place.",
    assurances: [
      {
        icon: "ShieldCheck",
        title: "Secure start",
        description:
          "Children settle in a calm space with attentive teacher support.",
      },
      {
        icon: "BookOpenCheck",
        title: "Play-based learning",
        description:
          "Stories, movement, and hands-on activities make early concepts natural.",
      },
      {
        icon: "Clock3",
        title: "Family-friendly rhythm",
        description:
          "A predictable day supports children and simplifies family routines.",
      },
    ],
    icons: ["HeartHandshake", "BookOpenCheck", "MapPin"],
  },
};

export default function PreschoolInVelacheryPage() {
  return <LocationProgramPage content={content} {...pageConfig} />;
}
