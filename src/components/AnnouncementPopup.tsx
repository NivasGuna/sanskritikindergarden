"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Image from "next/image";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

type Announcement = {
  title: string;
  description: string;
  imageUrl?: string;
};

const ANNOUNCEMENT_DISMISS_KEY = "sanskriti_announcement_dismissed";

const getAnnouncementHash = (announcement: Announcement) =>
  `${announcement.title}::${announcement.description}::${announcement.imageUrl ?? ""}`;

export default function AnnouncementPopup() {
  const [announcement, setAnnouncement] = useState<Announcement | null>(null);
  const [open, setOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const snap = await getDoc(doc(db, "settings", "announcement"));
        if (snap.exists()) {
          const data = snap.data() as Announcement;
          setAnnouncement(data);
          
          // Only show if they haven't dismissed this EXACT announcement before
          const currentHash = getAnnouncementHash(data);
          const dismissedHash = window.localStorage.getItem(ANNOUNCEMENT_DISMISS_KEY);
          setOpen(dismissedHash !== currentHash);
        }
      } catch (error) {
        console.error("Error fetching announcement:", error);
      }
    };

    fetchAnnouncement();
  }, []);

  const handleClose = (value: boolean) => {
    setOpen(value);
    // When they close it, remember this exact announcement so we don't show it again
    if (!value && announcement) {
      window.localStorage.setItem(ANNOUNCEMENT_DISMISS_KEY, getAnnouncementHash(announcement));
    }
  };

  if (!announcement) return null;

  return (
    <>
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="!flex max-h-[92svh] w-[min(94vw,760px)] overflow-hidden rounded-[28px] p-0 shadow-2xl sm:max-w-[760px]" showCloseButton={false}>
          <div className="relative flex max-h-[92svh] min-h-0 w-full flex-col overflow-hidden">
            <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 shadow hover:bg-white">
              <X className="size-5 text-slate-900" />
              <span className="sr-only">Close announcement</span>
            </DialogClose>

            {announcement.imageUrl ? (
              <button
                type="button"
                className="relative flex h-[32svh] min-h-[190px] w-full shrink-0 items-center justify-center overflow-hidden bg-slate-100 sm:h-[38svh] sm:min-h-[250px]"
                onClick={() => setLightboxOpen(true)}
              >
                <Image
                  src={announcement.imageUrl!}
                  alt={announcement.title}
                  fill
                  className="object-cover object-top transition-opacity hover:opacity-95"
                />
              </button>
            ) : null}

            <div className="min-h-0 flex-1 overflow-y-auto bg-white p-6 sm:p-8">
              <h2 className="text-3xl font-semibold text-slate-900 break-words">{announcement.title}</h2>
              <p className="mt-4 text-base leading-7 text-slate-600 whitespace-pre-line break-words">{announcement.description}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="w-[min(98vw,1160px)] max-h-[92vh] overflow-hidden rounded-[28px] bg-black/95 p-4 shadow-2xl" showCloseButton={false}>
          <div className="relative overflow-hidden">
            <DialogClose className="absolute right-4 top-4 z-10 rounded-full bg-white/20 p-2 hover:bg-white/30">
              <X className="size-5 text-white" />
              <span className="sr-only">Close lightbox</span>
            </DialogClose>
            <div className="flex max-h-[calc(92vh-4rem)] items-center justify-center overflow-hidden px-2">
              <div className="relative h-[calc(92vh-4rem)] w-full">
                <Image
                  src={announcement.imageUrl!}
                  alt={announcement.title}
                  fill
                  className="object-contain rounded-3xl"
                />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
