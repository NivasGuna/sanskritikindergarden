import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBanner from "@/components/reusable/HeroBanner";
import content from "./testimonials-content.json";

export const metadata: Metadata = content.metadata;

export default function TestimonialsPage() {
  return (
    <main className="bg-premium-bg text-premium-ink min-h-screen overflow-hidden">
      <HeroBanner image={content.hero.image}>
        <div className="relative z-10 container mx-auto flex min-h-[100svh] items-center px-6 py-24">
          <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-12 max-w-3xl duration-1000">
            <div className="mb-8 inline-flex items-center gap-3">
              <span className="h-px w-6 bg-amber-600" />
              <span className="text-[10px] font-black tracking-[0.3em] text-amber-700 uppercase">
                {content.hero.badge}
              </span>
            </div>

            <h1 className="text-premium-ink text-4xl leading-[1.1] font-medium tracking-tight drop-shadow-sm md:text-6xl">
              {content.hero.title.line1}{" "}
              <span className="text-premium-forest italic">
                {content.hero.title.highlight}
              </span>
            </h1>
            {content.hero.title.line2 ? (
              <p className="text-premium-forest mt-3 text-2xl font-semibold md:text-4xl">
                {content.hero.title.line2}
              </p>
            ) : null}

            <p className="text-premium-muted mt-6 max-w-xl text-base leading-relaxed font-medium md:text-xl">
              {content.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button
                render={<Link href={content.hero.buttons.primary.link} />}
                nativeButton={false}
                className="bg-premium-forest shadow-premium-md hover:bg-premium-forest/90 h-14 rounded-full px-10 text-base font-bold text-white transition-all hover:-translate-y-0.5"
              >
                {content.hero.buttons.primary.text}
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button
                render={<Link href={content.hero.buttons.secondary.link} />}
                nativeButton={false}
                variant="outline"
                className="border-premium-line text-premium-ink h-14 rounded-full bg-white/70 px-10 text-base font-bold backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                {content.hero.buttons.secondary.text}
              </Button>
            </div>
          </div>
        </div>
      </HeroBanner>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-premium-forest text-[11px] font-black tracking-[0.3em] uppercase">
              {content.testimonialsSection.badge}
            </span>
            <h2 className="text-premium-ink mt-4 text-3xl leading-tight font-medium md:text-5xl">
              {content.testimonialsSection.title}
            </h2>
            <p className="text-premium-muted mt-4 text-base leading-7 md:text-lg">
              {content.testimonialsSection.subtitle}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.testimonials.map((testimonial) => (
              <article
                key={testimonial.author}
                className="border-premium-line rounded-[2rem] border bg-white/95 p-8 shadow-[0_30px_60px_rgba(15,23,42,0.12)] transition-all hover:-translate-y-1 hover:shadow-[0_35px_80px_rgba(15,23,42,0.18)]"
              >
                <div className="mb-6 flex items-center gap-3 text-amber-600">
                  <span className="text-4xl">“</span>
                  <span className="text-premium-forest text-sm font-semibold tracking-[0.28em] uppercase">
                    Parents say
                  </span>
                </div>
                <p className="text-premium-ink text-base leading-8 md:text-lg">
                  {testimonial.quote}
                </p>
                <div className="border-premium-line mt-8 border-t pt-5">
                  <p className="text-premium-forest text-sm font-black tracking-[0.24em] uppercase">
                    {testimonial.author}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-premium-bg py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="border-premium-line shadow-premium-sm grid items-center gap-8 rounded-[1.5rem] border bg-white p-8 md:grid-cols-[1fr_auto] md:p-10">
            <div>
              <h2 className="text-premium-ink text-3xl leading-tight font-medium md:text-4xl">
                {content.cta.title}
              </h2>
              <p className="text-premium-muted mt-4 max-w-2xl text-base leading-7">
                {content.cta.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Button
                render={<Link href={content.cta.button.link} />}
                nativeButton={false}
                className="bg-premium-forest hover:bg-premium-forest/90 h-12 rounded-full px-8 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
              >
                {content.cta.button.text}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
