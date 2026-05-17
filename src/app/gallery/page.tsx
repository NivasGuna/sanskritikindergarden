import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Camera, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import GalleryMediaTabs from "@/components/reusable/GalleryMediaTabs";
import HeroBanner from "@/components/reusable/HeroBanner";
import content from "./gallery-content.json";

export const metadata: Metadata = content.metadata;

export default function GalleryPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-premium-ink">
      <HeroBanner
        image={content.hero.image}
        imageClassName="object-[76%_center] min-[1000px]:object-center"
        overlayClassName="bg-gradient-to-b from-[#fff8ed]/92 via-[#fff8ed]/72 to-[#fff8ed]/86 min-[1000px]:bg-gradient-to-r min-[1000px]:from-[#fff8ed]/94 min-[1000px]:via-[#fff8ed]/62 min-[1000px]:to-[#fff8ed]/6"
      >
        <div className="container relative z-10 mx-auto flex min-h-[100svh] items-center px-6 py-24">
          <div className="max-w-2xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-12 duration-1000">
            <div className="mb-7 inline-flex items-center gap-3">
              <span className="h-px w-6 bg-amber-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-700">
                {content.hero.badge}
              </span>
            </div>

            <h1 className="max-w-xl text-4xl font-semibold leading-[1.08] text-premium-ink drop-shadow-sm md:text-5xl">
              {content.hero.title}
            </h1>

            <p className="mt-6 max-w-xl text-base font-medium leading-7 text-premium-muted md:text-lg md:leading-8">
              {content.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button
                render={<Link href={content.hero.buttons.primary.link} />}
                nativeButton={false}
                className="h-13 rounded-full bg-premium-ink px-8 text-sm font-black text-white shadow-[0_18px_45px_rgba(15,23,42,0.18)] transition-all hover:-translate-y-0.5 hover:bg-premium-ink/90"
              >
                {content.hero.buttons.primary.text}
                <Camera className="ml-2 size-4" />
              </Button>
              <Button
                render={<Link href={content.hero.buttons.secondary.link} />}
                nativeButton={false}
                variant="outline"
                className="h-13 rounded-full border-amber-200 bg-white/76 px-8 text-sm font-black text-premium-ink backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                {content.hero.buttons.secondary.text}
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
        </div>
      </HeroBanner>

      <section id="gallery-media" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-amber-700">
              {content.media.badge}
            </span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-premium-ink md:text-4xl">
              {content.media.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-premium-muted md:text-lg md:leading-8">
              {content.media.description}
            </p>
          </div>

          <div className="mt-10">
            <GalleryMediaTabs
              images={content.images}
              videos={content.videos}
              labels={content.media.tabs}
            />
          </div>
        </div>
      </section>

      <section className="bg-[#fff8ed] py-14 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-6 rounded-[1.5rem] border border-amber-100 bg-white p-6 shadow-[0_24px_65px_rgba(120,74,24,0.10)] md:grid-cols-[1fr_auto] md:p-9">
            <div>
              <div className="mb-4 flex size-11 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                <Sparkles className="size-5" />
              </div>
              <h2 className="text-2xl font-semibold leading-tight text-premium-ink md:text-3xl">
                {content.cta.title}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-premium-muted">
                {content.cta.description}
              </p>
            </div>
            <Button
              render={<Link href={content.cta.button.link} />}
              nativeButton={false}
              className="h-12 w-full rounded-full bg-premium-ink px-8 text-sm font-black text-white transition-all hover:-translate-y-0.5 hover:bg-premium-ink/90 sm:w-fit"
            >
              {content.cta.button.text}
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
