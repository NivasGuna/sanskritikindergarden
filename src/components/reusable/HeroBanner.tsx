import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
  const mobileOverlayClassName =
    "bg-[linear-gradient(90deg,rgb(255_248_232_/_76%)_0%,rgb(255_248_232_/_62%)_48%,rgb(255_255_255_/_30%)_100%)] lg:hidden";

  return (
    <section
      className={cn(
        "font-premium-display relative min-h-[100svh] w-full overflow-hidden",
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
      {overlayClassName ? (
        <div className={cn("pointer-events-none absolute inset-0", overlayClassName)} />
      ) : (
        <div className={cn("pointer-events-none absolute inset-0", mobileOverlayClassName)} />
      )}
      {children}
    </section>
  );
}
