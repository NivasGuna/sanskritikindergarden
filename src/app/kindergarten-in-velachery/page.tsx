import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import LocationProgramPage from "@/components/reusable/LocationProgramPage";
import content from "./kindergarten-content.json";

export const metadata: Metadata = constructMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  canonicalUrl: "/kindergarten-in-velachery",
});

const pageConfig = {
  heroActions: [
    { text: "Apply for Kindergarten Admission", href: "/contact" },
    { text: "Read FAQ", href: "/faq" },
  ],
  heroCallout: {
    eyebrow: "Ready for the next stage",
    text: "A kindergarten rhythm built around structure, warmth, and everyday confidence.",
  },
  experience: {
    eyebrow: "Kindergarten Growth",
    title: "Structure, warmth, and readiness in one steady day.",
    description:
      "Parents can quickly see how the kindergarten years build confidence, habits, and emotional comfort.",
    assurances: [
      {
        icon: "ShieldCheck",
        title: "Supported confidence",
        description:
          "Children grow into group learning with patient guidance and a steady classroom rhythm.",
      },
      {
        icon: "BookOpenCheck",
        title: "School readiness",
        description:
          "Language, attention, curiosity, communication, and participation develop through daily practice.",
      },
      {
        icon: "Clock3",
        title: "Age-appropriate routine",
        description:
          "The day offers enough structure for growth while keeping early childhood warm and joyful.",
      },
    ],
    icons: ["Clock3", "BookOpenCheck", "MapPin"],
  },
};

export default function KindergartenInVelacheryPage() {
  return <LocationProgramPage content={content} {...pageConfig} />;
}
