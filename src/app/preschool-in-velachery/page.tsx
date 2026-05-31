import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import LocationProgramPage from "@/components/reusable/LocationProgramPage";
import content from "./preschool-content.json";

export const metadata: Metadata = constructMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  canonicalUrl: "/preschool-in-velachery",
});

export default function PreschoolInVelacheryPage() {
  return <LocationProgramPage content={content} />;
}
