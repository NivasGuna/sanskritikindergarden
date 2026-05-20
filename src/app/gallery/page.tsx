import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowRight, Camera, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import GalleryMediaTabs from "@/components/reusable/GalleryMediaTabs";
import HeroBanner from "@/components/reusable/HeroBanner";
import content from "./gallery-content.json";

export const metadata: Metadata = content.metadata;

export default function GalleryPage() {
  return (
    <main className="font-rounded-body bg-sage-mist text-forest-dark min-h-screen overflow-hidden">
      <HeroBanner
        image={content.hero.image}
        imageClassName="object-[76%_center] min-[1000px]:object-center"
        overlayClassName="bg-gradient-to-r from-slate-950/92 via-slate-950/70 to-slate-950/18"
      >
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-slate-950/24 via-transparent to-transparent" />

        <div className="relative z-10 container mx-auto flex min-h-[100svh] items-center px-6 py-24">
          <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-12 max-w-[32rem] duration-1000">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/24 bg-white/14 px-4 py-2 shadow-[0_14px_35px_rgb(15_23_42_/_18%)] backdrop-blur-md">
              <span className="size-2 rounded-full bg-amber-200" />
              <span className="text-[10px] font-black tracking-[0.26em] text-white uppercase">
                {content.hero.badge}
              </span>
            </div>

            <h1 className="font-premium-display max-w-[32rem] text-[2.85rem] leading-[1.04] font-bold text-white drop-shadow-[0_8px_28px_rgb(0_0_0_/_46%)] sm:text-5xl md:text-6xl">
              {content.hero.title.line1}{" "}
              <span className="text-amber-100">
                {content.hero.title.highlight}
              </span>
              <span className="text-sky-mist"> {content.hero.title.line2}</span>
            </h1>

            <p className="mt-6 max-w-[32rem] text-base leading-8 font-bold text-white drop-shadow-[0_4px_18px_rgb(0_0_0_/_52%)] md:text-xl">
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
                className="h-[3.25rem] rounded-full border-white/45 bg-white/14 px-8 text-sm font-black text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/20"
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
        className="bg-[linear-gradient(180deg,#ffffff_0%,#f7fbf3_55%,#eef8ff_100%)] py-16 md:py-24"
      >
        <div className="container mx-auto px-6">
          <div className="grid items-end gap-7 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <span className="border-sky-line text-sky-ink inline-flex rounded-full border bg-white/86 px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase shadow-[0_14px_35px_rgb(21_91_139_/_10%)] backdrop-blur-sm">
                {content.media.badge}
              </span>
              <h2 className="text-forest-dark mt-5 max-w-3xl font-sans text-3xl leading-tight font-extrabold md:text-5xl">
                {content.media.title.line1}{" "}
                <span className="text-sky-ink">
                  {content.media.title.highlight}
                </span>
              </h2>
            </div>
            <p className="text-forest-muted max-w-2xl text-base leading-7 font-medium md:text-lg md:leading-8 lg:justify-self-end">
              {content.media.description}
            </p>
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
          <div className="shadow-sky-media relative overflow-hidden rounded-[2rem] border border-white/60 bg-slate-950">
            <Image
              src="/images/contact-classroom.png"
              alt="A warm Sanskriti Kindergarten classroom"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-slate-950/72" />
            <div className="relative z-10 grid min-h-[360px] gap-8 px-6 py-10 text-white md:grid-cols-[1fr_auto] md:items-end md:px-10 md:py-14">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full border border-white/20 bg-white/12 px-4 py-2 text-[11px] font-black text-amber-100 uppercase backdrop-blur-md">
                  Campus Visit
                </span>
                <h2 className="mt-5 font-sans text-3xl leading-tight font-extrabold md:text-5xl">
                  {content.cta.title}
                </h2>
                <p className="mt-5 text-base leading-7 font-semibold text-white/88 md:text-[17px]">
                  {content.cta.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={content.cta.button.link}
                  className="inline-flex h-[3.25rem] items-center justify-center rounded-full bg-white px-8 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-50"
                >
                  {content.cta.button.text}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
                <Link
                  href="#gallery-media"
                  className="inline-flex h-[3.25rem] items-center justify-center rounded-full border border-white/35 bg-white/10 px-8 text-sm font-black text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/16"
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
