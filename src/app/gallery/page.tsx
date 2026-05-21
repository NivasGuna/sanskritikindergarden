import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { ArrowRight, Camera, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import GalleryMediaTabs from "@/components/reusable/GalleryMediaTabs";
import HeroBanner from "@/components/reusable/HeroBanner";
import content from "./gallery-content.json";

export const metadata: Metadata = constructMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  canonicalUrl: "/gallery",
});

export default function GalleryPage() {
  return (
    <main className="font-rounded-body bg-sage-mist text-forest-dark min-h-screen overflow-hidden">
      <HeroBanner
        image={content.hero.image}
        imageClassName="object-[76%_center] min-[1000px]:object-center"
      >
        <div className="relative z-10 container mx-auto flex min-h-[100svh] items-center px-6 py-24">
          <div className="hero-copy-panel motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-12 max-w-[32rem] duration-1000">
            <div className="mb-7 inline-flex items-center gap-3">
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
              <span className="text-sky-ink"> {content.hero.title.line2}</span>
            </h1>

            <p className="hero-subheading text-forest-soft mt-6 max-w-[32rem] drop-shadow-[0_3px_12px_rgb(255_255_255_/_90%)] md:text-xl">
              {content.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button
                render={<Link href={content.hero.buttons.primary.link} />}
                nativeButton={false}
                className="bg-sky hover:bg-sky-ink h-[3.25rem] rounded-full px-8 text-sm font-black text-white shadow-[0_18px_45px_rgb(21_91_139_/_24%)] transition-all hover:-translate-y-0.5"
              >
                {content.hero.buttons.primary.text}
                <Camera className="ml-2 size-4" />
              </Button>
              <Button
                render={<Link href={content.hero.buttons.secondary.link} />}
                nativeButton={false}
                variant="outline"
                className="text-forest-dark h-[3.25rem] rounded-full border-forest-dark/20 bg-white/76 px-8 text-sm font-black backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/88"
              >
                {content.hero.buttons.secondary.text}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </div>
      </HeroBanner>

      <section
        id="gallery-media"
        className="relative overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf3_52%,#eef8ff_100%)] py-16 md:py-24"
      >
        <div className="absolute top-10 left-[-4rem] h-48 w-48 rounded-full bg-gold-mist/80" />
        <div className="absolute right-[-5rem] bottom-24 h-64 w-64 rounded-full bg-mint-mist/80" />
        <div className="container relative mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
              <span className="border-sky-line text-sky-ink inline-flex rounded-full border bg-white/88 px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase shadow-[0_14px_35px_rgb(21_91_139_/_10%)] backdrop-blur-sm">
                {content.media.badge}
              </span>
              <h2 className="text-forest-dark mx-auto mt-5 max-w-3xl font-sans text-3xl leading-tight font-extrabold md:text-5xl">
                {content.media.title.line1}{" "}
                <span className="text-sky-ink">
                  {content.media.title.highlight}
                </span>
              </h2>
            <p className="text-forest-muted mx-auto mt-4 max-w-2xl text-base leading-7 font-semibold md:text-lg md:leading-8">
              {content.media.description}
            </p>
            <div className="mx-auto mt-7 flex max-w-xl flex-wrap justify-center gap-3">
              <span className="border-mint-line bg-mint-mist text-mint-ink rounded-full border px-4 py-2 text-xs font-black uppercase">
                Classroom moments
              </span>
              <span className="border-gold-line bg-gold-mist text-gold-ink rounded-full border px-4 py-2 text-xs font-black uppercase">
                Celebrations
              </span>
              <span className="border-peach-line bg-peach-mist text-peach-ink rounded-full border px-4 py-2 text-xs font-black uppercase">
                Play and movement
              </span>
            </div>
          </div>

          <div className="mt-12">
            <GalleryMediaTabs
              images={content.images}
              videos={content.videos}
              labels={content.media.tabs}
            />
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="shadow-sky-media relative overflow-hidden rounded-[2rem] border border-white/60 bg-white">
            <Image
              src="/images/gallery-hero-banner.jpeg"
              alt="Playful school memories arranged like a bright photo wall"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-white/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-cream-glow via-white/72 to-white/20" />
            <div className="text-forest-dark relative z-10 grid min-h-[360px] gap-8 px-6 py-10 md:grid-cols-[1fr_auto] md:items-end md:px-10 md:py-14">
              <div className="max-w-2xl">
                <span className="border-sky-line bg-sky-mist text-sky-ink inline-flex rounded-full border px-4 py-2 text-[11px] font-black uppercase backdrop-blur-md">
                  Campus Visit
                </span>
                <h2 className="mt-5 font-sans text-3xl leading-tight font-extrabold md:text-5xl">
                  {content.cta.title}
                </h2>
                <p className="font-hero-subtitle text-forest-soft mt-5 text-base leading-7 font-semibold md:text-[17px]">
                  {content.cta.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={content.cta.button.link}
                  className="bg-sky hover:bg-sky-ink inline-flex h-[3.25rem] items-center justify-center rounded-full px-8 text-sm font-black text-white shadow-[0_18px_45px_rgb(21_91_139_/_18%)] transition hover:-translate-y-0.5"
                >
                  {content.cta.button.text}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
                <Link
                  href="#gallery-media"
                  className="text-forest-dark inline-flex h-[3.25rem] items-center justify-center rounded-full border border-forest-dark/18 bg-white/78 px-8 text-sm font-black backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white"
                >
                  View Moments
                  <Sparkles className="ml-2 size-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
