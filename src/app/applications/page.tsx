import type { Metadata } from "next";

import ApplicationsClient from "./ApplicationsClient";

export const metadata: Metadata = {
  title: "Applications Dashboard | Sanskriti Kindergarten",
  description:
    "Admissions application management dashboard for Sanskriti Kindergarten staff.",
  keywords: ["applications", "admissions dashboard", "Sanskriti Kindergarten"],
  alternates: {
    canonical: "/applications",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function ApplicationsPage() {
  return <ApplicationsClient />;
}
