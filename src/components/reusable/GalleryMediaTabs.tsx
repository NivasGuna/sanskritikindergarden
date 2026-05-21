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
  category: string;
  description: string;
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

const categoryClassNames = [
  "border-sky-line bg-sky-mist text-sky-ink",
  "border-mint-line bg-mint-mist text-mint-ink",
  "border-gold-line bg-gold-mist text-gold-ink",
  "border-lavender-line bg-lavender-mist text-lavender-ink",
];

function GalleryImageTile({
  image,
  index,
  priority = false,
}: {
  image: GalleryImage;
  index: number;
  priority?: boolean;
}) {
  return (
    <figure className="group shadow-forest-card flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/80 bg-white transition-all hover:-translate-y-1 hover:shadow-forest-floating">
      <div className="relative aspect-[4/3] overflow-hidden bg-sky-mist">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(min-width: 1280px) 31vw, (min-width: 768px) 50vw, 100vw"
          priority={priority}
        />
      </div>
      <figcaption className="flex flex-1 flex-col p-5 md:p-6">
        <span
          className={cn(
            "w-fit rounded-full border px-3 py-1 text-[10px] font-black tracking-[0.18em] uppercase",
            categoryClassNames[index % categoryClassNames.length]
          )}
        >
          {image.category}
        </span>
        <h3 className="text-forest-dark mt-4 font-sans text-xl leading-tight font-extrabold">
          {image.title}
        </h3>
        <p className="text-forest-muted mt-3 text-sm leading-6 font-medium">
          {image.description}
        </p>
      </figcaption>
    </figure>
  );
}

function GalleryVideoCard({ video }: { video: GalleryVideo }) {
  return (
    <div className="shadow-forest-card overflow-hidden rounded-[1.5rem] border border-white/80 bg-white p-2 transition-all hover:-translate-y-1 hover:shadow-forest-floating">
      <div className="bg-forest-dark relative aspect-video overflow-hidden rounded-[1.15rem]">
        <iframe
          src={video.src}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
      <div className="flex items-center gap-3 px-3 py-4">
        <span className="bg-mint-mist text-mint-ink flex size-10 items-center justify-center rounded-full">
          <PlayCircle className="size-5" />
        </span>
        <p className="text-forest-dark font-sans text-lg font-extrabold">
          {video.title}
        </p>
      </div>
    </div>
  );
}

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
          ? "bg-mint shadow-[0_14px_35px_rgb(22_97_63_/_18%)] text-white"
          : "text-forest-soft hover:bg-sky-mist hover:text-sky-ink"
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

  return (
    <div>
      <div className="border-white bg-white/92 shadow-forest-value mx-auto flex w-full max-w-md rounded-full border p-1.5 backdrop-blur-sm sm:w-fit sm:max-w-none">
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
        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {images.map((image, index) => (
            <GalleryImageTile
              key={image.src}
              image={image}
              index={index}
              priority={index < 3}
            />
          ))}
        </div>
      ) : (
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {videos.map((video) => (
            <GalleryVideoCard key={video.src} video={video} />
          ))}
        </div>
      )}
    </div>
  );
}
