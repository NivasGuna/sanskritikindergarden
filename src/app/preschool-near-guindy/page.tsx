import type { Metadata } from "next";
import LocationProgramPage from "@/components/reusable/LocationProgramPage";
import content from "./preschool-guindy-content.json";

export const metadata: Metadata = content.metadata;

const pageConfig = {
  heroActions: [
    { text: "Apply for Preschool Admission", href: "/contact" },
    { text: "Read FAQ", href: "/faq" },
  ],
  heroCallout: {
    eyebrow: "Nearby and nurturing",
    text: "A Velachery preschool option shaped for Guindy families who want warmth, routine, and practical access.",
  },
  experience: {
    eyebrow: "Guindy Families",
    title: "A nearby preschool option that still feels warm.",
    description:
      "Parents can compare daily practicality, teacher warmth, and child-friendly learning in one clear view.",
    assurances: [
      {
        icon: "MapPin",
        title: "Practical location",
        description:
          "A Velachery base can work well for families moving through Guindy and South Chennai.",
      },
      {
        icon: "HeartHandshake",
        title: "Warm settling",
        description:
          "Children are supported as they become comfortable with adults, groups, and routines.",
      },
      {
        icon: "BookOpenCheck",
        title: "Play-based learning",
        description:
          "Stories, movement, observation, and hands-on exploration keep early learning natural.",
      },
    ],
    icons: ["MapPin", "HeartHandshake", "MapPin"],
  },
};

export default function PreschoolNearGuindyPage() {
  return <LocationProgramPage content={content} {...pageConfig} />;
}
