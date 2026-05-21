import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { ArrowRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBanner from "@/components/reusable/HeroBanner";
import content from "./testimonials-content.json";

export const metadata: Metadata = constructMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  canonicalUrl: "/testimonials",
});

const testimonialAccents = [
  "border-mint-line bg-mint-mist text-mint-ink",
  "border-sky-line bg-sky-mist text-sky-ink",
  "border-gold-line bg-gold-mist text-gold-ink",
  "border-peach-line bg-peach-mist text-peach-ink",
  "border-lavender-line bg-lavender-mist text-lavender-ink",
  "border-coral-line bg-coral-mist text-coral-ink",
] as const;

const testimonialBars = [
  "bg-mint",
  "bg-sky",
  "bg-gold",
  "bg-peach-ink",
  "bg-lavender-ink",
  "bg-coral",
] as const;

function getInitials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function TestimonialsPage() {
  return (
    <main className="font-rounded-body bg-sage-mist text-forest-dark min-h-screen overflow-hidden">
      <HeroBanner
        image={content.hero.image}
        imageClassName="object-[58%_center] md:object-center"
      >
        <div className="relative z-10 container mx-auto flex min-h-[100svh] items-center px-6 py-24">
          <div className="hero-copy-panel motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-12 max-w-[32rem] duration-1000">
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

            <p className="hero-subheading text-forest-soft mt-6 max-w-[32rem] drop-shadow-[0_3px_12px_rgb(255_255_255_/_90%)] md:text-xl">
              {content.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button
                render={<Link href={content.hero.buttons.primary.link} />}
                nativeButton={false}
                className="bg-mint shadow-[0_18px_45px_rgb(22_97_63_/_22%)] hover:bg-mint-ink h-14 rounded-full px-10 text-base font-black text-white transition-all hover:-translate-y-0.5"
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

      <section
        id="parent-stories"
        className="relative overflow-hidden bg-[linear-gradient(135deg,#fff8de_0%,#ffffff_42%,#eef8ff_100%)] py-16 md:py-24"
      >
        <div className="absolute top-10 left-[-3rem] h-44 w-44 rounded-full bg-mint-mist/80" />
        <div className="absolute right-[-4rem] bottom-16 h-56 w-56 rounded-full bg-peach-mist/80" />
        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="border-mint-line bg-white/88 text-mint-ink inline-flex rounded-full border px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase shadow-warm-badge">
              {content.testimonialsSection.badge}
            </span>
            <h2 className="font-playful-display text-forest-dark mt-5 text-4xl leading-[1.03] font-extrabold md:text-6xl">
              {content.testimonialsSection.title}
            </h2>
            <p className="text-forest-muted mt-4 text-base leading-7 font-semibold md:text-lg">
              {content.testimonialsSection.subtitle}
            </p>
          </div>

          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
            {["5-star parent stories", "Safe, friendly care", "Joyful classroom routines"].map(
              (label, index) => (
                <span
                  key={label}
                  className={`rounded-full border px-4 py-2 text-xs font-black uppercase ${testimonialAccents[index]}`}
                >
                  {label}
                </span>
              )
            )}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {content.testimonials.map((testimonial, index) => (
              <article
                key={testimonial.author}
                className="group relative flex min-h-[380px] flex-col overflow-hidden rounded-[1.75rem] border border-white/80 bg-white p-7 shadow-forest-card transition-all hover:-translate-y-1 hover:shadow-forest-floating"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-1.5 ${
                    testimonialBars[index % testimonialBars.length]
                  }`}
                />
                <div className="mb-6 flex items-center justify-between gap-4">
                  <span
                    className={`flex size-13 items-center justify-center rounded-2xl border ${testimonialAccents[index % testimonialAccents.length]}`}
                  >
                    <Quote className="size-6" />
                  </span>
                  <div className="flex items-center gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="size-4 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-forest-dark flex-1 text-base leading-8 font-semibold md:text-[17px]">
                  {testimonial.quote}
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-mint-line/70 pt-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-forest-dark text-sm font-black text-white">
                    {getInitials(testimonial.author)}
                  </span>
                  <div>
                    <p className="text-forest-dark text-sm font-black tracking-[0.18em] uppercase">
                    {testimonial.author}
                  </p>
                    <p className="mt-1 text-xs font-bold text-forest-muted">
                      Sanskriti parent
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="shadow-sky-media relative overflow-hidden rounded-[2rem] border border-white/70 bg-white">
            <Image
              src="/images/testimonials.jpeg"
              alt="Happy parent and child sharing a warm school moment"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-white/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-cream-glow via-white/74 to-white/18" />
            <div className="text-forest-dark relative z-10 grid min-h-[340px] items-end gap-8 px-6 py-10 md:grid-cols-[1fr_auto] md:px-10 md:py-14">
              <div className="max-w-2xl">
                <span className="border-gold-line bg-gold-mist text-gold-ink inline-flex rounded-full border px-4 py-2 text-[11px] font-black uppercase backdrop-blur-md">
                  Family Stories
                </span>
                <h2 className="font-playful-display mt-5 text-3xl leading-tight font-extrabold md:text-5xl">
                  {content.cta.title}
                </h2>
                <p className="font-hero-subtitle text-forest-soft mt-5 max-w-2xl text-base leading-7 font-semibold">
                  {content.cta.description}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <Button
                  render={<Link href={content.cta.button.link} />}
                  nativeButton={false}
                  className="bg-mint hover:bg-mint-ink h-12 rounded-full px-8 text-sm font-black text-white shadow-[0_18px_45px_rgb(22_97_63_/_18%)] transition-all hover:-translate-y-0.5"
                >
                  {content.cta.button.text}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
