import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { getFAQSchema, getBreadcrumbSchema } from "@/lib/schema";
import Schema from "@/components/Schema";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import HeroBanner from "@/components/reusable/HeroBanner";
import FinalCta from "@/components/reusable/FinalCta";
import content from "./faq-content.json";

export const metadata: Metadata = constructMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  canonicalUrl: "/faq",
});

export default function FAQPage() {
  return (
    <main className="font-rounded-body bg-sage-mist text-forest-dark min-h-screen">
      <Schema data={getFAQSchema(content.faqs)} />
      <Schema
        data={getBreadcrumbSchema([
          { name: "Home", url: "" },
          { name: "FAQ", url: "/faq" },
        ])}
      />
      {/* ───────────────── HERO SECTION ───────────────── */}
      <HeroBanner image={content.hero.image}>
        <div className="relative z-10 container mx-auto flex min-h-[100svh] items-center px-6 py-24">
          <div className="hero-copy-panel motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-12 max-w-[32rem] duration-1000">
            <div className="mb-8 inline-flex items-center gap-3">
              <span className="bg-sky size-2 rounded-full" />
              <span className="text-sky-ink text-[10px] font-black tracking-[0.26em] uppercase drop-shadow-[0_2px_8px_rgb(255_255_255_/_90%)]">
                {content.hero.badge}
              </span>
            </div>

            <h1 className="font-premium-display text-forest-dark max-w-[32rem] text-[2.85rem] leading-[1.04] font-bold drop-shadow-[0_4px_14px_rgb(255_255_255_/_88%)] sm:text-5xl md:text-6xl">
              {content.hero.title.line1}{" "}
              <span className="text-gold-ink">
                {content.hero.title.highlight}
              </span>
            </h1>

            <p className="hero-subheading text-premium-ink mt-6 max-w-[32rem] drop-shadow-[0_3px_12px_rgb(255_255_255_/_90%)] md:text-xl">
              {content.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button
                render={<Link href={content.hero.buttons.primary.link} />}
                nativeButton={false}
                className="bg-mint hover:bg-mint-ink h-14 rounded-full px-10 text-base font-black text-white shadow-[0_18px_45px_rgb(22_97_63_/_22%)] transition-all duration-300 hover:-translate-y-1"
              >
                {content.hero.buttons.primary.text}
                <ArrowRight className="ml-2 size-5" />
              </Button>

              <Button
                render={<Link href={content.hero.buttons.secondary.link} />}
                nativeButton={false}
                variant="outline"
                className="text-forest-dark border-forest-dark/20 h-14 rounded-full bg-white/76 px-10 text-base font-black backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/88"
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
                    <span className="text-sky-ink">
                      {content.sidebar.title.highlight}
                    </span>
                  </h2>
                  <p className="text-forest-soft mt-5 text-base leading-relaxed font-semibold">
                    {content.sidebar.description}
                  </p>
                  <Button
                    render={<Link href={content.sidebar.button.link} />}
                    nativeButton={false}
                    className="bg-mint hover:bg-mint-ink mt-8 h-12 rounded-full px-8 text-sm font-black text-white transition-all duration-300"
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
              <span className="border-mint-line bg-mint-mist text-mint-ink inline-flex rounded-full border px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase">
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
      <section className="bg-white pt-12 pb-24">
        <div className="container mx-auto px-6">
          <FinalCta
            image={{
              src: "/images/faq-banner.jpeg",
              alt: "Friendly parent support and preschool questions",
            }}
            contentClassName="items-end gap-10 px-8 py-12 md:px-14 md:py-16"
            badge={content.cta.badge}
            title={
              <>
                {content.cta.title.main}{" "}
                <span className="text-gold-ink">
                  {content.cta.title.highlight}
                </span>
              </>
            }
            description={content.cta.description}
            primaryAction={{
              text: content.cta.button.text,
              href: content.cta.button.link,
            }}
            accent="mint"
          />
        </div>
      </section>
    </main>
  );
}
