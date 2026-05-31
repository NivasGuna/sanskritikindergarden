import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import LocationProgramPage from "@/components/reusable/LocationProgramPage";
import content from "./kindergarten-content.json";

export const metadata: Metadata = constructMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  canonicalUrl: "/kindergarten-in-velachery",
});

export default function KindergartenInVelacheryPage() {
  return <LocationProgramPage content={content} />;
}
