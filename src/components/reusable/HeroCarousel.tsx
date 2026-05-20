"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
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

export default function HeroCarousel({
  slides,
  autoAdvanceMs = DEFAULT_AUTO_ADVANCE_MS,
  className,
}: HeroCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const slide = slides[activeIndex];

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
      className={cn("relative min-h-[100svh] w-full overflow-hidden", className)}
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
          <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/44 via-forest-dark/20 to-forest-dark/46" />
          <div className="absolute inset-0 bg-gradient-to-t from-coral/20 via-transparent to-transparent" />
        </div>
      ))}

      <div className="relative z-20 container mx-auto flex min-h-[100svh] items-center justify-center px-6 pt-32 pb-20 text-center">
        <div className="w-full max-w-5xl">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/18 px-4 py-2 text-xs font-black tracking-[0.24em] text-white uppercase shadow-warm-badge backdrop-blur-md">
              {slide.eyebrow}
            </p>
            <h1 className="font-playful-display mx-auto mt-6 max-w-5xl text-5xl leading-[0.98] font-extrabold tracking-normal text-white drop-shadow-[0_6px_28px_rgba(15,23,42,0.34)] sm:text-6xl md:text-7xl lg:text-8xl">
              {slide.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 font-semibold text-white drop-shadow-md sm:text-lg md:text-2xl">
              {slide.description}
            </p>
          </div>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
            {slide.primaryAction ? (
              <Button
                render={<Link href={slide.primaryAction.href} />}
                nativeButton={false}
                variant={slide.primaryAction.variant ?? "secondary"}
                className="h-14 rounded-full border border-coral bg-coral px-10 text-base font-black text-white shadow-coral-button transition hover:-translate-y-0.5 hover:bg-coral-dark"
              >
                {slide.primaryAction.text}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            ) : null}
            {slide.secondaryAction ? (
              <Button
                render={<Link href={slide.secondaryAction.href} />}
                nativeButton={false}
                variant={slide.secondaryAction.variant ?? "outline"}
                className="h-14 rounded-full border border-white/80 bg-white/92 px-10 text-base font-black text-forest-dark shadow-[0_16px_40px_rgba(15,23,42,0.14)] backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white"
              >
                {slide.secondaryAction.text}
              </Button>
            ) : null}
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-9 z-30 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === activeIndex ? "w-8 bg-coral" : "bg-white/70"
            }`}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
