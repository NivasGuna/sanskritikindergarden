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
      className={cn("relative min-h-[100svh] overflow-hidden", className)}
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
          <div className="absolute inset-0 bg-gradient-to-r from-white/88 via-white/52 to-white/8" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/42 via-transparent to-white/18" />
        </div>
      ))}

      <div className="relative z-20 container mx-auto flex min-h-[100svh] items-center px-6 py-24">
        <div className="w-full max-w-3xl">
          <div>
            <p className="inline-flex items-center gap-2 text-xs font-black tracking-[0.28em] text-amber-700 uppercase">
              {slide.eyebrow}
            </p>
            <h1 className="mt-6 text-4xl leading-[1.08] font-semibold tracking-tight text-slate-950 sm:text-5xl md:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 sm:text-lg md:text-xl">
              {slide.description}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {slide.primaryAction ? (
              <Button
                render={<Link href={slide.primaryAction.href} />}
                nativeButton={false}
                variant={slide.primaryAction.variant ?? "secondary"}
                className="shadow-premium-sm h-13 rounded-full border border-amber-600 bg-amber-600 px-8 text-sm font-bold text-white transition hover:bg-amber-700"
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
                className="h-13 rounded-full border border-slate-200 bg-white/76 px-8 text-sm font-bold text-slate-950 shadow-none backdrop-blur-md transition hover:bg-white"
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
              index === activeIndex ? "w-8 bg-amber-600" : "bg-slate-400/45"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
