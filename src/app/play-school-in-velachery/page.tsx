import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import LocationProgramPage from "@/components/reusable/LocationProgramPage";
import content from "./play-school-content.json";

export const metadata: Metadata = constructMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  canonicalUrl: "/play-school-in-velachery",
});

export default function PlaySchoolInVelacheryPage() {
  return <LocationProgramPage content={content} />;
}
