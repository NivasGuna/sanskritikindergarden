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
    <main className="min-h-screen bg-premium-bg font-sans text-premium-ink">
      {/* ───────────────── HERO SECTION ───────────────── */}
      <HeroBanner image={content.hero.image}>
        <div className="containe relative z-10 mx-auto flex min-h-[100svh] border items-center px-6 py-24">
          <div className="max-w-2xl motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-12 duration-1000">
            <div className="mb-8 inline-flex items-center gap-3">
              <span className="h-px w-6 bg-amber-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-700">
                {content.hero.badge}
              </span>
            </div>

            <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-premium-ink drop-shadow-sm md:text-6xl">
              {content.hero.title.line1}{" "}
              <span className="italic text-amber-600">
                {content.hero.title.highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base font-medium leading-relaxed text-premium-muted md:text-xl">
              {content.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button
                render={<Link href={content.hero.buttons.primary.link} />}
                nativeButton={false}
                className="h-14 rounded-full bg-amber-600 px-10 text-base font-bold text-white shadow-premium-sm transition-all duration-300 hover:-translate-y-1 hover:bg-amber-700"
              >
                {content.hero.buttons.primary.text}
                <ArrowRight className="ml-2 size-5" />
              </Button>

              <Button
                render={<Link href={content.hero.buttons.secondary.link} />}
                nativeButton={false}
                variant="outline"
                className="h-14 rounded-full border-amber-200 bg-white/50 px-10 text-base font-bold text-amber-900 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white"
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
              <div className="overflow-hidden rounded-[2.5rem] border border-premium-line bg-white shadow-premium-md">
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
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-700">
                    {content.sidebar.badge}
                  </span>
                  <h2 className="mt-4 text-3xl font-medium leading-tight text-premium-ink">
                    {content.sidebar.title.main} <br />
                    <span className="italic text-amber-600 font-normal">
                      {content.sidebar.title.highlight}
                    </span>
                  </h2>
                  <p className="mt-5 text-base leading-relaxed text-premium-muted">
                    {content.sidebar.description}
                  </p>
                  <Button
                    render={<Link href={content.sidebar.button.link} />}
                    nativeButton={false}
                    className="mt-8 h-12 rounded-full bg-amber-600 px-8 text-sm font-bold text-white transition-all duration-300 hover:bg-amber-700"
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
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-700">
                {content.questionsSection.badge}
              </span>
              <h2 className="mt-6 text-md font-medium leading-[1.1] text-premium-ink md:text-3xl">
                {content.questionsSection.title.main}
              </h2>
            </div>

            <Accordion multiple={true} className="mt-12 space-y-5">
              {content.faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="overflow-hidden rounded-[1.5rem] border border-premium-line bg-white px-8 shadow-premium-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-premium-md"
                >
                  <AccordionTrigger className="py-6 text-left hover:no-underline">
                    <div className="flex items-center gap-5">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-premium-bg text-sm font-bold text-amber-700">
                        {(index + 1).toString().padStart(2, "0")}
                      </div>
                      <span className="text-lg font-bold tracking-tight text-premium-ink md:text-xl">
                        {faq.q}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 pl-15 pr-4 pt-2">
                    <div className="border-t border-premium-line pt-6">
                      <p className="max-w-3xl text-base leading-relaxed text-premium-muted md:text-lg">
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
      <section className="pb-24 pt-12">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-[3rem] border border-premium-line bg-white shadow-premium-md">
            {/* Decorative Blur */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-amber-100/60 blur-3xl" />
              <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-amber-100/40 blur-3xl" />
            </div>

            <div className="relative z-10 grid items-center gap-10 px-8 py-12 md:grid-cols-[1fr_auto] md:px-14 md:py-16">
              {/* Left Side */}
              <div>
                <span className="inline-flex items-center rounded-full border border-amber-100 bg-amber-50 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.28em] text-amber-700">
                  {content.cta.badge}
                </span>

                <h2 className="mt-5 text-3xl font-medium leading-[1.08] tracking-tight text-premium-ink md:text-5xl lg:text-[clamp(2.5rem,4vw,3.4rem)]">
                  {content.cta.title.main}{" "}
                  <span className="italic font-normal text-amber-600">
                    {content.cta.title.highlight}
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-premium-muted md:text-lg">
                  {content.cta.description}
                </p>
              </div>

              {/* Right Side */}
              <div className="flex flex-col items-start gap-4 md:items-end">
                <Button
                  render={<Link href={content.cta.button.link} />}
                  nativeButton={false}
                  className="h-16 rounded-full bg-amber-600 px-10 text-base font-bold text-white shadow-[0_10px_30px_rgba(217,119,6,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-amber-700"
                >
                  {content.cta.button.text}
                  <ArrowRight className="ml-2 size-5" />
                </Button>

                <p className="text-sm font-medium text-premium-muted">
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
