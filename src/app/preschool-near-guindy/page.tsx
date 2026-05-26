import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import LocationProgramPage from "@/components/reusable/LocationProgramPage";
import content from "./preschool-guindy-content.json";

export const metadata: Metadata = constructMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  canonicalUrl: "/preschool-near-guindy",
});

const pageConfig = {
  heroActions: [
    { text: "Apply for Preschool Admission", href: "/contact" },
    { text: "Read FAQ", href: "/faq" },
  ],
  heroCallout: {
    eyebrow: "Nearby and nurturing",
    text: "A Velachery preschool option for Guindy families who value warmth, routine, and access.",
  },
  experience: {
    eyebrow: "Guindy Families",
    title: "A nearby preschool option that still feels warm.",
    description:
      "Compare daily practicality, teacher warmth, and child-friendly learning in one view.",
    assurances: [
      {
        icon: "MapPin",
        title: "Practical location",
        description:
          "A Velachery base can work well for families commuting through Guindy.",
      },
      {
        icon: "HeartHandshake",
        title: "Warm settling",
        description:
          "Children are supported as they settle into routines, teachers, and groups.",
      },
      {
        icon: "BookOpenCheck",
        title: "Play-based learning",
        description:
          "Stories, movement, and hands-on exploration keep early learning natural.",
      },
    ],
    icons: ["MapPin", "HeartHandshake", "MapPin"],
  },
};

export default function PreschoolNearGuindyPage() {
  return <LocationProgramPage content={content} {...pageConfig} />;
}
