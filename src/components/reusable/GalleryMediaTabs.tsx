"use client";

import Image from "next/image";
import { useState } from "react";
import { Images, PlayCircle, Video } from "lucide-react";
import { cn } from "@/lib/utils";

type ActiveTab = "images" | "videos";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

interface GalleryVideo {
  src: string;
  title: string;
}

interface GalleryMediaTabsProps {
  images: GalleryImage[];
  videos: GalleryVideo[];
  labels: {
    images: string;
    videos: string;
  };
}

const featuredImageClassNames = [
  "lg:col-span-2 lg:row-span-2 lg:min-h-[520px]",
  "lg:min-h-[250px]",
  "lg:min-h-[250px]",
  "lg:col-span-2 lg:min-h-[320px]",
  "lg:min-h-[320px]",
];

function MediaSwitchButton({
  active,
  icon: Icon,
  label,
  onClick,
}: {
  active: boolean;
  icon: typeof Images;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full px-5 text-sm font-black transition-all sm:flex-none sm:px-7",
        active
          ? "bg-premium-ink text-white shadow-[0_18px_35px_rgba(15,23,42,0.18)]"
          : "text-premium-muted hover:bg-white hover:text-premium-ink"
      )}
    >
      <Icon className="size-4" />
      {label}
    </button>
  );
}

export default function GalleryMediaTabs({
  images,
  videos,
  labels,
}: GalleryMediaTabsProps) {
  const [activeTab, setActiveTab] = useState<ActiveTab>("images");
  const featuredImages = images.slice(0, 5);
  const remainingImages = images.slice(5);

  return (
    <div>
      <div className="mx-auto flex w-full max-w-md rounded-full border border-amber-100 bg-[#fff6e8] p-1 shadow-[0_18px_55px_rgba(120,74,24,0.08)] sm:w-fit sm:max-w-none">
        <MediaSwitchButton
          active={activeTab === "images"}
          icon={Images}
          label={labels.images}
          onClick={() => setActiveTab("images")}
        />
        <MediaSwitchButton
          active={activeTab === "videos"}
          icon={Video}
          label={labels.videos}
          onClick={() => setActiveTab("videos")}
        />
      </div>

      {activeTab === "images" ? (
        <div className="mt-10">
          <div className="grid gap-4 lg:grid-cols-3">
            {featuredImages.map((image, index) => (
              <figure
                key={image.src}
                className={cn(
                  "group relative min-h-[260px] overflow-hidden rounded-[1.25rem] border border-amber-100 bg-[#fff8ef] p-2 shadow-[0_24px_60px_rgba(120,74,24,0.10)]",
                  featuredImageClassNames[index]
                )}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes={
                    index === 0
                      ? "(min-width: 1024px) 62vw, 100vw"
                      : "(min-width: 1024px) 31vw, 100vw"
                  }
                  priority={index === 0}
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/70 bg-white/92 px-4 py-2 text-xs font-black text-premium-ink shadow-premium-sm backdrop-blur-md">
                  {image.title}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {remainingImages.map((image) => (
              <figure
                key={image.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-amber-100 bg-[#fff8ef] p-2 shadow-[0_20px_45px_rgba(120,74,24,0.08)]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 31vw, (min-width: 640px) 50vw, 100vw"
                />
                <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/70 bg-white/92 px-4 py-2 text-xs font-black text-premium-ink shadow-premium-sm backdrop-blur-md">
                  {image.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {videos.map((video) => (
            <div
              key={video.src}
              className="overflow-hidden rounded-[1.25rem] border border-amber-100 bg-white p-2 shadow-[0_24px_65px_rgba(120,74,24,0.12)]"
            >
              <div className="relative aspect-video overflow-hidden rounded-2xl bg-premium-ink">
                <iframe
                  src={video.src}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="h-full w-full"
                />
              </div>
              <div className="flex items-center gap-3 px-3 py-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-amber-50 text-amber-700">
                  <PlayCircle className="size-5" />
                </span>
                <p className="font-bold text-premium-ink">{video.title}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
