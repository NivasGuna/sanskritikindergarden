import Image from "next/image";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CtaBackgroundProps = {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  imageClassName?: string;
  overlayClassName?: string;
  sizes?: string;
};

export default function CtaBackground({
  image,
  children,
  className,
  contentClassName,
  imageClassName,
  overlayClassName,
  sizes = "100vw",
}: CtaBackgroundProps) {
  return (
    <div
      className={cn(
        "shadow-sky-media relative isolate overflow-hidden rounded-[2rem] border border-white/70 bg-cream-glow",
        className
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className={cn("z-0 object-cover object-center", imageClassName)}
        sizes={sizes}
      />
      <div
        className={cn(
          "absolute inset-0 z-[1] bg-[linear-gradient(105deg,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.4)_48%,rgba(0,0,0,0.1)_100%)]",
          overlayClassName
        )}
      />
      <div
        className={cn(
          "text-white drop-shadow-md relative z-10 grid gap-8 px-6 py-10 md:grid-cols-[1fr_auto] md:items-end md:px-10 md:py-14 lg:px-12",
          contentClassName,
          "min-h-[420px] md:min-h-[440px] lg:min-h-[460px]"
        )}
      >
        {children}
      </div>
    </div>
  );
}
