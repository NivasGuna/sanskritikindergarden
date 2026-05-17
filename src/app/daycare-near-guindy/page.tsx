import type { Metadata } from "next";
import LocationProgramPage from "@/components/reusable/LocationProgramPage";
import content from "./daycare-guindy-content.json";

export const metadata: Metadata = content.metadata;

const pageConfig = {
  heroActions: [
    { text: "Enquire About Daycare Support", href: "/contact" },
    { text: "Read FAQ", href: "/faq" },
  ],
  heroCallout: {
    eyebrow: "Care close to the route",
    text: "A Velachery daycare option shaped for Guindy families who need warmth, supervision, and practical access.",
  },
  experience: {
    eyebrow: "Guindy Daycare",
    title: "A nearby daycare option for working family routines.",
    description:
      "Parents can compare daily travel, child comfort, supervision, and continuity in one clear view.",
    assurances: [
      {
        icon: "MapPin",
        title: "Practical access",
        description:
          "A Velachery base can fit families moving through Guindy and nearby South Chennai routes.",
      },
      {
        icon: "ShieldCheck",
        title: "Warm supervision",
        description:
          "Children are cared for in a calm setting with steady adults and repeated routines.",
      },
      {
        icon: "Clock3",
        title: "Predictable rhythm",
        description:
          "A connected daily flow helps children settle from drop-off to pick-up.",
      },
    ],
    icons: ["MapPin", "ShieldCheck", "MapPin"],
  },
};

export default function DaycareNearGuindyPage() {
  return <LocationProgramPage content={content} {...pageConfig} />;
}
