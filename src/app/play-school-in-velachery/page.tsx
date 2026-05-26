import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import LocationProgramPage from "@/components/reusable/LocationProgramPage";
import content from "./play-school-content.json";

export const metadata: Metadata = constructMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  canonicalUrl: "/play-school-in-velachery",
});

const pageConfig = {
  heroActions: [
    { text: "Enquire About Play School Admission", href: "/contact" },
    { text: "Read FAQ", href: "/faq" },
  ],
  heroCallout: {
    eyebrow: "A gentle first step",
    text: "A play school rhythm built on trust, familiarity, and joyful participation.",
  },
  experience: {
    eyebrow: "Play School Start",
    title: "A soft, encouraging beginning to school life.",
    description:
      "See how children settle, play, communicate, and grow comfortable in group learning.",
    assurances: [
      {
        icon: "HeartHandshake",
        title: "Gentle separation",
        description:
          "Children are supported as they warm up to teachers, routines, and new spaces.",
      },
      {
        icon: "Sparkles",
        title: "Joyful play",
        description:
          "Play, stories, movement, and creative tasks make school feel familiar.",
      },
      {
        icon: "ShieldCheck",
        title: "Parent reassurance",
        description:
          "Clear communication and patient routines keep families informed and confident.",
      },
    ],
    icons: ["HeartHandshake", "Sparkles", "MapPin"],
  },
};

export default function PlaySchoolInVelacheryPage() {
  return <LocationProgramPage content={content} {...pageConfig} />;
}
