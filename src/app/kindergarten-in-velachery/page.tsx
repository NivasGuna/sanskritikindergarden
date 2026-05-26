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
    text: "A kindergarten rhythm built around structure, warmth, and confidence.",
  },
  experience: {
    eyebrow: "Kindergarten Growth",
    title: "Structure, warmth, and readiness in one steady day.",
    description:
      "See how kindergarten builds confidence, healthy habits, and emotional comfort.",
    assurances: [
      {
        icon: "ShieldCheck",
        title: "Supported confidence",
        description:
          "Children grow into group learning with patient guidance and steady rhythm.",
      },
      {
        icon: "BookOpenCheck",
        title: "School readiness",
        description:
          "Language, attention, curiosity, and participation grow through daily practice.",
      },
      {
        icon: "Clock3",
        title: "Age-appropriate routine",
        description:
          "The day balances structure for growth with a warm early-years feel.",
      },
    ],
    icons: ["Clock3", "BookOpenCheck", "MapPin"],
  },
};

export default function KindergartenInVelacheryPage() {
  return <LocationProgramPage content={content} {...pageConfig} />;
}
