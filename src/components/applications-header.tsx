"use client";

import { useState } from "react";
import { GraduationCap, Megaphone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnnouncementManageModal from "@/components/AnnouncementManageModal";

type ApplicationsHeaderProps = {
  totalApplications: number;
};

export function ApplicationsHeader({
  totalApplications,
}: ApplicationsHeaderProps) {
  const [announcementOpen, setAnnouncementOpen] = useState(false);

  return (
    <header className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white px-6 py-6 shadow-sm md:flex-row md:items-center md:justify-between">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
            <GraduationCap className="size-6" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-slate-500 uppercase">
              Admissions Dashboard
            </p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Applications
            </h1>
          </div>
        </div>

        <p className="max-w-2xl text-base leading-7 text-slate-600">
          Review, filter, and manage application statuses for Sanskriti
          Kindergarten.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 text-slate-700">
          <Sparkles className="size-4" />
          <span className="text-sm font-semibold">
            {totalApplications} total applications
          </span>
        </div>
        <Button
          variant="outline"
          size="lg"
          onClick={() => setAnnouncementOpen(true)}
          className="gap-2"
        >
          <Megaphone className="size-4" /> Manage Announcement
        </Button>
      </div>

      <AnnouncementManageModal
        open={announcementOpen}
        onOpenChange={setAnnouncementOpen}
      />
    </header>
  );
}
