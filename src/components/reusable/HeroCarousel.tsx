"use client";

import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type HeroAction = {
  text: string;
  href: string;
  variant?: "secondary" | "outline" | "default";
};

export type HeroSlide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  description: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
};

export type HeroCarouselProps = {
  slides: HeroSlide[];
  autoAdvanceMs?: number;
  className?: string;
};

const DEFAULT_AUTO_ADVANCE_MS = 7000;

type FloatingIconStyle = CSSProperties & {
  "--float-x"?: string;
  "--float-y"?: string;
  "--float-rotate"?: string;
  "--float-duration"?: string;
};

const floatingIcons: {
  symbol: string;
  className: string;
  style: FloatingIconStyle;
}[] = [
  {
    symbol: "📚",
    className:
      "top-[15%] left-[5%] text-lg sm:left-[8%] sm:text-2xl md:text-3xl",
    style: {
      "--float-x": "18px",
      "--float-y": "-20px",
      "--float-rotate": "7deg",
      "--float-duration": "14s",
      animationDelay: "-2s",
    },
  },
  {
    symbol: "✏️",
    className:
      "top-[18%] right-[7%] text-lg sm:right-[11%] sm:text-xl md:text-2xl",
    style: {
      "--float-x": "-14px",
      "--float-y": "-18px",
      "--float-rotate": "-8deg",
      "--float-duration": "16s",
      animationDelay: "-5s",
    },
  },
  {
    symbol: "☁️",
    className:
      "top-[34%] left-[4%] hidden text-lg sm:block sm:left-[12%] sm:text-xl md:text-2xl",
    style: {
      "--float-x": "16px",
      "--float-y": "18px",
      "--float-rotate": "-6deg",
      "--float-duration": "15s",
      animationDelay: "-8s",
    },
  },
  {
    symbol: "🧸",
    className:
      "bottom-[17%] right-[6%] hidden text-xl sm:block sm:right-[9%] sm:text-2xl md:text-3xl",
    style: {
      "--float-x": "-18px",
      "--float-y": "16px",
      "--float-rotate": "6deg",
      "--float-duration": "17s",
      animationDelay: "-3s",
    },
  },
  {
    symbol: "🍃",
    className:
      "top-[42%] right-[5%] hidden text-lg md:block md:text-2xl lg:right-[12%]",
    style: {
      "--float-x": "12px",
      "--float-y": "-16px",
      "--float-rotate": "5deg",
      "--float-duration": "18s",
      animationDelay: "-9s",
    },
  },
  {
    symbol: "⭐",
    className:
      "bottom-[18%] right-[8%] text-lg sm:top-[43%] sm:right-[17%] sm:bottom-auto sm:text-xl md:text-2xl lg:right-[20%]",
    style: {
      "--float-x": "-12px",
      "--float-y": "-14px",
      "--float-rotate": "-5deg",
      "--float-duration": "13s",
      animationDelay: "-6s",
    },
  },
  {
    symbol: "🧩",
    className: "bottom-[36%] right-[15%] hidden text-xl sm:block md:text-2xl",
    style: {
      "--float-x": "-16px",
      "--float-y": "14px",
      "--float-rotate": "8deg",
      "--float-duration": "15s",
      animationDelay: "-11s",
    },
  },
  {
    symbol: "ABC",
    className:
      "bottom-[16%] left-[8%] font-premium-display text-base font-black text-gold-ink sm:bottom-[34%] sm:left-[17%] sm:text-lg md:text-xl",
    style: {
      "--float-x": "14px",
      "--float-y": "16px",
      "--float-rotate": "-4deg",
      "--float-duration": "19s",
      animationDelay: "-4s",
    },
  },
];

function ColorfulTitle({ text }: { text: string }) {
  const words = text.split(" ");
  const colors = [
    "text-white",
    "text-yellow-300",
    "text-white",
    "text-green-300",
    "text-sky-300",
    "text-white",
    "text-orange-300",
  ];
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className={colors[i % colors.length]}>
          {word}{" "}
        </span>
      ))}
    </>
  );
}

export default function HeroCarousel({
  slides,
  autoAdvanceMs = DEFAULT_AUTO_ADVANCE_MS,
  className,
}: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];
  const CAROUSEL_EMOJIS = ["🌟", "📚", "🎨"];
  const SlideEmoji = CAROUSEL_EMOJIS[activeIndex % CAROUSEL_EMOJIS.length];

  useEffect(() => {
    if (!slides.length) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, autoAdvanceMs);

    return () => window.clearInterval(timer);
  }, [slides.length, autoAdvanceMs]);

  if (!slides.length) return null;

  return (
    <section
      className={cn(
        "font-premium-display relative min-h-[100svh] w-full overflow-hidden",
        className
      )}
    >
      {slides.map((slideItem, index) => (
        <div
          key={`${slideItem.src}-${index}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            index === activeIndex ? "z-10 opacity-100" : "z-0 opacity-0"
          }`}
        >
          <Image
            src={slideItem.src}
            alt={slideItem.alt}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority={index === 0}
          />
        </div>
      ))}

      <div className="pointer-events-none absolute inset-0 z-[15] bg-black/20" />

      <div
        className="pointer-events-none absolute inset-0 z-[18] overflow-hidden"
        aria-hidden="true"
      >
        {floatingIcons.map((icon) => (
          <span
            key={`${icon.symbol}-${icon.className}`}
            className={cn(
              "hero-floating-icon absolute rounded-full bg-white/48 px-2.5 py-2 leading-none shadow-[0_14px_35px_rgb(23_53_47_/_10%)] ring-1 ring-white/50 backdrop-blur-[2px] sm:px-3",
              icon.className
            )}
            style={icon.style}
          >
            {icon.symbol}
          </span>
        ))}
      </div>

      <div className="relative z-20 container mx-auto flex min-h-[100svh] items-center justify-center px-4 pt-30 pb-18 text-center md:pt-32 md:pb-20">
        <div className="-mt-16 w-full max-w-4xl md:-mt-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center">
            <div className="mb-4 animate-bounce text-5xl drop-shadow-md md:text-6xl">
              {SlideEmoji}
            </div>
            <p className="inline-flex items-center gap-2 text-[10.5px] font-black tracking-[0.2em] text-yellow-300 uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:text-[11px] md:text-xs">
              {slide.eyebrow}
            </p>
            <h1 className="font-premium-display mx-auto mt-5 max-w-4xl text-[2.4rem] leading-[1.1] font-extrabold tracking-normal drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] sm:text-5xl md:text-6xl lg:text-[4.35rem]">
              <ColorfulTitle text={slide.title} />
            </h1>
            <p className="hero-subheading mx-auto mt-4 max-w-2xl leading-relaxed font-medium text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] sm:text-lg md:text-xl lg:text-[1.35rem]">
              {slide.description}
            </p>
          </div>

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            {slide.primaryAction ? (
              <Button
                render={<Link href={slide.primaryAction.href} />}
                nativeButton={false}
                variant={slide.primaryAction.variant ?? "secondary"}
                className="border-mint bg-mint hover:bg-mint-ink h-12 rounded-full border px-7 text-sm font-black text-white shadow-[0_16px_36px_rgb(22_97_63_/_22%)] transition hover:-translate-y-0.5 sm:h-[3.15rem] sm:px-8 sm:text-[15px]"
              >
                {slide.primaryAction.text}
              </Button>
            ) : null}
            {slide.secondaryAction ? (
              <Button
                render={<Link href={slide.secondaryAction.href} />}
                nativeButton={false}
                variant={slide.secondaryAction.variant ?? "outline"}
                className="text-forest-dark h-12 rounded-full border border-white/80 bg-white/92 px-7 text-sm font-black shadow-[0_14px_34px_rgba(15,23,42,0.12)] backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white sm:h-[3.15rem] sm:px-8 sm:text-[15px]"
              >
                {slide.secondaryAction.text}
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-30 flex justify-center gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              index === activeIndex ? "bg-gold w-7" : "bg-white/72"
            }`}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
