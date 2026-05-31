import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import LocationProgramPage from "@/components/reusable/LocationProgramPage";
import content from "./daycare-guindy-content.json";

export const metadata: Metadata = constructMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  canonicalUrl: "/daycare-near-guindy",
});

export default function DaycareNearGuindyPage() {
  return <LocationProgramPage content={content} />;
}
