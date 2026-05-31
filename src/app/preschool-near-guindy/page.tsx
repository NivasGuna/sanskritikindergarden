import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import LocationProgramPage from "@/components/reusable/LocationProgramPage";
import content from "./preschool-guindy-content.json";

export const metadata: Metadata = constructMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  canonicalUrl: "/preschool-near-guindy",
});

export default function PreschoolNearGuindyPage() {
  return <LocationProgramPage content={content} />;
}
