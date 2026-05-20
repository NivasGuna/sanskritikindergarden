import Link from "next/link";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBanner from "@/components/reusable/HeroBanner";
import content from "./testimonials-content.json";

export const metadata: Metadata = constructMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  canonicalUrl: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <main className="font-rounded-body bg-sage-mist text-forest-dark min-h-screen overflow-hidden">
      <HeroBanner
        image={content.hero.image}
      >
        <div className="relative z-10 container mx-auto flex min-h-[100svh] items-center px-6 py-24">
          <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-12 max-w-[32rem] duration-1000">
            <div className="mb-8 inline-flex items-center gap-3">
              <span className="size-2 rounded-full bg-gold" />
              <span className="text-gold-ink text-[10px] font-black tracking-[0.26em] uppercase drop-shadow-[0_2px_8px_rgb(255_255_255_/_90%)]">
                {content.hero.badge}
              </span>
            </div>

            <h1 className="font-premium-display text-forest-dark max-w-[32rem] text-[2.85rem] leading-[1.04] font-bold drop-shadow-[0_4px_14px_rgb(255_255_255_/_88%)] sm:text-5xl md:text-6xl">
              {content.hero.title.line1}{" "}
              <span className="text-gold-ink">
                {content.hero.title.highlight}
              </span>
              {content.hero.title.line2 ? (
                <span className="text-sky-ink">
                  {" "}
                  {content.hero.title.line2}
                </span>
              ) : null}
            </h1>

            <p className="text-forest-soft mt-6 max-w-[32rem] text-base leading-8 font-bold drop-shadow-[0_3px_12px_rgb(255_255_255_/_90%)] md:text-xl">
              {content.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button
                render={<Link href={content.hero.buttons.primary.link} />}
                nativeButton={false}
                className="bg-coral shadow-coral-button hover:bg-coral-dark h-14 rounded-full px-10 text-base font-black text-white transition-all hover:-translate-y-0.5"
              >
                {content.hero.buttons.primary.text}
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button
                render={<Link href={content.hero.buttons.secondary.link} />}
                nativeButton={false}
                variant="outline"
                className="text-forest-dark h-14 rounded-full border-forest-dark/20 bg-white/76 px-10 text-base font-black backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/88"
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
            <span className="border-coral-line bg-coral-mist text-coral-ink inline-flex rounded-full border px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase">
              {content.testimonialsSection.badge}
            </span>
            <h2 className="font-playful-display text-forest-dark mt-5 text-4xl leading-[1.03] font-extrabold md:text-6xl">
              {content.testimonialsSection.title}
            </h2>
            <p className="text-forest-muted mt-4 text-base leading-7 font-semibold md:text-lg">
              {content.testimonialsSection.subtitle}
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.testimonials.map((testimonial) => (
              <article
                key={testimonial.author}
                className="border-peach-line shadow-forest-card hover:shadow-forest-floating rounded-[1.5rem] border bg-white/95 p-8 transition-all hover:-translate-y-1"
              >
                <div className="text-coral mb-6 flex items-center gap-3">
                  <span className="text-4xl">“</span>
                  <span className="text-mint-ink text-sm font-black tracking-[0.28em] uppercase">
                    Parents say
                  </span>
                </div>
                <p className="text-forest-dark text-base leading-8 font-semibold md:text-lg">
                  {testimonial.quote}
                </p>
                <div className="border-peach-line mt-8 border-t pt-5">
                  <p className="text-coral-ink text-sm font-black tracking-[0.24em] uppercase">
                    {testimonial.author}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold-mist py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="border-gold-line shadow-forest-card grid items-center gap-8 rounded-[1.5rem] border bg-white p-8 md:grid-cols-[1fr_auto] md:p-10">
            <div>
              <h2 className="font-playful-display text-forest-dark text-3xl leading-tight font-extrabold md:text-4xl">
                {content.cta.title}
              </h2>
              <p className="text-forest-soft mt-4 max-w-2xl text-base leading-7 font-semibold">
                {content.cta.description}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Button
                render={<Link href={content.cta.button.link} />}
                nativeButton={false}
                className="bg-coral shadow-coral-button hover:bg-coral-dark h-12 rounded-full px-8 text-sm font-black text-white transition-all hover:-translate-y-0.5"
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
