import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import LocationProgramPage from "@/components/reusable/LocationProgramPage";
import content from "./daycare-content.json";

export const metadata: Metadata = constructMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  canonicalUrl: "/daycare-in-velachery",
});

const pageConfig = {
  heroActions: [
    { text: "Apply for Daycare Information", href: "/contact" },
    { text: "Read FAQ", href: "/faq" },
  ],
  heroCallout: {
    eyebrow: "Care with continuity",
    text: "A daycare rhythm built on warmth, supervision, and daily trust.",
  },
  experience: {
    eyebrow: "Daycare Support",
    title: "Care, routine, and continuity for young children.",
    description:
      "See how the day stays supervised, steady, and practical for family schedules.",
    assurances: [
      {
        icon: "ShieldCheck",
        title: "Warm supervision",
        description:
          "Children spend the day with caring adults and steady support.",
      },
      {
        icon: "Clock3",
        title: "Reliable routine",
        description:
          "A balanced flow of play, rest, and transitions keeps the day familiar.",
      },
      {
        icon: "BookOpenCheck",
        title: "Learning continuity",
        description:
          "Daycare connects naturally with the preschool learning environment.",
      },
    ],
    icons: ["HeartHandshake", "Clock3", "MapPin"],
  },
};

export default function DaycareInVelacheryPage() {
  return <LocationProgramPage content={content} {...pageConfig} />;
}
