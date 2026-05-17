import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const defaultOverlayClassName =
  "bg-gradient-to-b from-white/76 via-white/54 to-white/70 min-[1000px]:hidden";

interface HeroBannerProps {
  image: {
    src: string;
    alt: string;
  };
  children?: ReactNode;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  priority?: boolean;
  sizes?: string;
}

export default function HeroBanner({
  image,
  children,
  className,
  imageClassName,
  overlayClassName,
  priority = true,
  sizes = "100vw",
}: HeroBannerProps) {
  return (
    <section
      className={cn(
        "relative min-h-[100svh] w-full overflow-hidden",
        className
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className={cn("object-cover object-[75%_center] md:object-center", imageClassName)}
        priority={priority}
        sizes={sizes}
      />
      <div
        className={cn("absolute inset-0", defaultOverlayClassName, overlayClassName)}
      />
      {children}
    </section>
  );
}
