import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import HeroBanner from "@/components/reusable/HeroBanner";
import content from "./faq-content.json";

export const metadata: Metadata = content.metadata;

export default function FAQPage() {
  return (
    <main className="font-rounded-body bg-sage-mist text-forest-dark min-h-screen">
      {/* ───────────────── HERO SECTION ───────────────── */}
      <HeroBanner
        image={content.hero.image}
        overlayClassName="bg-gradient-to-r from-slate-950/92 via-slate-950/70 to-slate-950/18"
      >
        <div className="relative z-10 container mx-auto flex min-h-[100svh] items-center px-6 py-24">
          <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-12 max-w-[32rem] duration-1000">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/24 bg-white/14 px-4 py-2 shadow-[0_14px_35px_rgb(15_23_42_/_18%)] backdrop-blur-md">
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
            </h1>

            <p className="mt-6 max-w-[32rem] text-base leading-8 font-bold text-white drop-shadow-[0_4px_18px_rgb(0_0_0_/_52%)] md:text-xl">
              {content.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button
                render={<Link href={content.hero.buttons.primary.link} />}
                nativeButton={false}
                className="bg-coral shadow-coral-button hover:bg-coral-dark h-14 rounded-full px-10 text-base font-black text-white transition-all duration-300 hover:-translate-y-1"
              >
                {content.hero.buttons.primary.text}
                <ArrowRight className="ml-2 size-5" />
              </Button>

              <Button
                render={<Link href={content.hero.buttons.secondary.link} />}
                nativeButton={false}
                variant="outline"
                className="h-14 rounded-full border-white/45 bg-white/14 px-10 text-base font-black text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/20"
              >
                {content.hero.buttons.secondary.text}
              </Button>
            </div>
          </div>
        </div>
      </HeroBanner>

      {/* ───────────────── FAQ SECTION ───────────────── */}
      <section id="questions" className="mx-auto max-w-7xl px-6 py-24 md:py-36">
        <div className="grid gap-20 lg:grid-cols-[0.85fr_1.15fr]">
          {/* ── Left Side: Sticky Intro ── */}
          <aside className="hidden lg:block">
            <div className="sticky top-32">
              <div className="border-premium-line shadow-premium-md overflow-hidden rounded-[2.5rem] border bg-white">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={content.sidebar.image.src}
                    alt={content.sidebar.image.alt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>

                <div className="p-10">
                  <span className="text-[10px] font-black tracking-[0.4em] text-amber-700 uppercase">
                    {content.sidebar.badge}
                  </span>
                  <h2 className="font-playful-display text-forest-dark mt-4 text-3xl leading-tight font-extrabold">
                    {content.sidebar.title.main} <br />
                    <span className="text-coral">
                      {content.sidebar.title.highlight}
                    </span>
                  </h2>
                  <p className="text-forest-soft mt-5 text-base leading-relaxed font-semibold">
                    {content.sidebar.description}
                  </p>
                  <Button
                    render={<Link href={content.sidebar.button.link} />}
                    nativeButton={false}
                    className="bg-coral hover:bg-coral-dark mt-8 h-12 rounded-full px-8 text-sm font-black text-white transition-all duration-300"
                  >
                    {content.sidebar.button.text}
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </div>
              </div>
            </div>
          </aside>

          {/* ── Right Side: Questions ── */}
          <div>
            <div>
              <span className="border-coral-line bg-coral-mist text-coral-ink inline-flex rounded-full border px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase">
                {content.questionsSection.badge}
              </span>
              <h2 className="font-playful-display text-forest-dark mt-6 text-3xl leading-[1.05] font-extrabold md:text-5xl">
                {content.questionsSection.title.main}
              </h2>
            </div>

            <Accordion multiple={true} className="mt-12 space-y-5">
              {content.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-peach-line shadow-forest-value hover:shadow-forest-card overflow-hidden rounded-[1.5rem] border bg-white px-8 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <AccordionTrigger className="py-6 text-left hover:no-underline">
                    <div className="flex items-center gap-5">
                      <div className="bg-gold-mist text-gold-ink flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-black">
                        {(index + 1).toString().padStart(2, "0")}
                      </div>
                      <span className="text-forest-dark text-lg font-extrabold tracking-normal md:text-xl">
                        {faq.q}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pr-4 pb-8 pl-15">
                    <div className="border-premium-line border-t pt-6">
                      <p className="text-forest-soft max-w-3xl text-base leading-relaxed font-semibold md:text-lg">
                        {faq.a}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ───────────────── CTA SECTION ───────────────── */}
      <section className="pt-12 pb-24">
        <div className="container mx-auto px-6">
          <div className="border-gold-line shadow-forest-card relative overflow-hidden rounded-[2rem] border bg-white">
            <div className="relative z-10 grid items-center gap-10 px-8 py-12 md:grid-cols-[1fr_auto] md:px-14 md:py-16">
              {/* Left Side */}
              <div>
                <span className="border-gold-line bg-gold-mist text-gold-ink inline-flex items-center rounded-full border px-4 py-1.5 text-[11px] font-black tracking-[0.28em] uppercase">
                  {content.cta.badge}
                </span>

                <h2 className="font-playful-display text-forest-dark mt-5 text-3xl leading-[1.08] font-extrabold md:text-5xl lg:text-[clamp(2.5rem,4vw,3.4rem)]">
                  {content.cta.title.main}{" "}
                  <span className="text-coral">
                    {content.cta.title.highlight}
                  </span>
                </h2>

                <p className="text-forest-soft mt-6 max-w-2xl text-base leading-relaxed font-semibold md:text-lg">
                  {content.cta.description}
                </p>
              </div>

              {/* Right Side */}
              <div className="flex flex-col items-start gap-4 md:items-end">
                <Button
                  render={<Link href={content.cta.button.link} />}
                  nativeButton={false}
                  className="bg-coral shadow-coral-button hover:bg-coral-dark h-16 rounded-full px-10 text-base font-black text-white transition-all duration-300 hover:-translate-y-0.5"
                >
                  {content.cta.button.text}
                  <ArrowRight className="ml-2 size-5" />
                </Button>

                <p className="text-premium-muted text-sm font-medium">
                  Quick response within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
