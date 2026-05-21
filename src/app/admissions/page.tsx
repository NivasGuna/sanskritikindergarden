import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ClipboardList,
  HeartHandshake,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBanner from "@/components/reusable/HeroBanner";
import { cn } from "@/lib/utils";
import AdmissionForm from "./AdmissionForm";
import content from "./admissions-content.json";

export const metadata: Metadata = constructMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  canonicalUrl: "/admissions",
});

const processIconMap = {
  CalendarDays,
  ClipboardList,
  UserRoundCheck,
} satisfies Record<string, LucideIcon>;

const processAccentClasses = [
  "border-mint-line bg-mint-mist text-mint-ink",
  "border-sky-line bg-sky-mist text-sky-ink",
  "border-gold-line bg-gold-mist text-gold-ink",
] as const;

const phoneHref = `tel:${content.contact.phone.replace(/\s/g, "")}`;

export default function AdmissionsPage() {
  return (
    <main className="font-rounded-body bg-sage-mist text-forest-dark min-h-screen overflow-hidden">
      <HeroBanner
        image={content.hero.image}
        className="min-h-[100svh]"
        imageClassName="object-cover object-[78%_center] md:object-center"
      >
        <div className="relative z-10 container mx-auto flex min-h-[100svh] items-center px-6 pt-32 pb-20">
          <div className="hero-copy-panel motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-12 max-w-[32rem] duration-1000">
            <div className="mb-7 inline-flex items-center gap-3">
              <span className="size-2 rounded-full bg-mint" />
              <span className="text-mint-ink text-[10px] font-black tracking-[0.26em] uppercase drop-shadow-[0_2px_8px_rgb(255_255_255_/_90%)]">
                {content.hero.badge}
              </span>
            </div>

            <h1 className="font-premium-display text-forest-dark max-w-[32rem] text-[2.85rem] leading-[1.04] font-bold drop-shadow-[0_4px_14px_rgb(255_255_255_/_88%)] sm:text-5xl md:text-6xl">
              {content.hero.title.line1}{" "}
              <span className="text-gold-ink">
                {content.hero.title.highlight}
              </span>
            </h1>

            <p className="hero-subheading text-forest-soft mt-6 max-w-[32rem] drop-shadow-[0_3px_12px_rgb(255_255_255_/_90%)] md:text-xl">
              {content.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                render={<Link href={content.hero.buttons.primary.link} />}
                nativeButton={false}
                className="bg-mint shadow-[0_18px_45px_rgb(22_97_63_/_22%)] hover:bg-mint-ink h-14 rounded-full px-8 text-base font-black text-white transition-all hover:-translate-y-0.5"
              >
                {content.hero.buttons.primary.text}
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button
                render={<a href={phoneHref} />}
                nativeButton={false}
                variant="outline"
                className="text-forest-dark h-14 rounded-full border-forest-dark/20 bg-white/76 px-8 text-base font-black backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/88"
              >
                {content.hero.buttons.secondary.text}
                <Phone className="ml-2 size-5" />
              </Button>
            </div>

            <div className="mt-9 grid max-w-[32rem] gap-3 sm:grid-cols-3">
              {content.hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="border-gold-line shadow-warm-badge rounded-[1.25rem] border bg-white/84 px-4 py-3 backdrop-blur-md"
                >
                  <p className="font-playful-display text-forest-dark text-2xl leading-none font-extrabold">
                    {stat.value}
                  </p>
                  <p className="text-gold-ink mt-1 text-xs leading-5 font-black uppercase">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </HeroBanner>

      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid items-end gap-8 lg:grid-cols-[0.86fr_1.14fr]">
            <div>
              <span className="border-mint-line bg-mint-mist text-mint-ink inline-flex rounded-full border px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase">
                {content.process.badge}
              </span>
              <h2 className="font-playful-display text-forest-dark mt-5 max-w-xl text-4xl leading-[1.02] font-extrabold md:text-6xl">
                {content.process.title}
              </h2>
            </div>
            <p className="text-forest-muted max-w-2xl text-base leading-7 font-semibold md:text-lg">
              {content.process.description}
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {content.process.steps.map((step, index) => {
              const Icon =
                processIconMap[step.icon as keyof typeof processIconMap] ??
                ClipboardList;

              return (
                <article
                  key={step.title}
                  className={cn(
                    "shadow-forest-card group relative min-h-[260px] overflow-hidden rounded-[1.5rem] border border-white/80 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-forest-floating"
                  )}
                >
                  <div className="absolute right-0 bottom-0 h-24 w-24 translate-x-8 translate-y-8 rounded-full bg-sky-mist transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
                  <div
                    className={cn(
                      "shadow-forest-icon relative z-10 mb-6 flex size-14 items-center justify-center rounded-2xl border",
                      processAccentClasses[index % processAccentClasses.length]
                    )}
                  >
                    <Icon className="size-7" />
                  </div>
                  <h3 className="font-playful-display text-forest-dark relative z-10 text-3xl leading-tight font-extrabold">
                    {step.title}
                  </h3>
                  <p className="text-forest-soft relative z-10 mt-3 text-sm leading-6 font-semibold">
                    {step.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="admission-form" className="bg-sage-mist py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <span className="border-mint-line text-mint-ink inline-flex rounded-full border bg-white px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase">
                {content.programs.badge}
              </span>
              <h2 className="font-playful-display text-forest-dark mt-5 text-4xl leading-[1.03] font-extrabold md:text-6xl">
                {content.programs.title}
              </h2>
              <p className="text-forest-muted mt-5 max-w-xl text-base leading-8 font-semibold md:text-lg">
                {content.programs.description}
              </p>

              <div className="mt-8 grid gap-3">
                {content.programs.items.map((item) => (
                  <div
                    key={item}
                    className="border-mint-line shadow-forest-value flex items-start gap-3 rounded-[1.25rem] border bg-white/90 p-4"
                  >
                    <span className="bg-mint-mist text-mint-ink flex size-9 shrink-0 items-center justify-center rounded-2xl">
                      <CheckCircle2 className="size-5" />
                    </span>
                    <p className="text-forest-soft text-sm leading-6 font-bold">
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-sky-line shadow-forest-card mt-7 rounded-[1.5rem] border bg-white p-6">
                <div className="bg-sky-mist text-sky-ink shadow-forest-icon mb-4 flex size-12 items-center justify-center rounded-2xl">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="font-playful-display text-forest-dark text-2xl font-extrabold">
                  Parent-first admissions guidance
                </h3>
                <p className="text-forest-soft mt-3 text-sm leading-6 font-semibold">
                  We help you understand classroom routine, age readiness,
                  documents, and availability before you make a decision.
                </p>
              </div>
            </div>

            <div>
              <div className="mb-6">
                <span className="border-sky-line text-sky-ink inline-flex rounded-full border bg-white px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase">
                  {content.form.badge}
                </span>
                <h2 className="font-playful-display text-forest-dark mt-5 text-4xl leading-[1.03] font-extrabold md:text-5xl">
                  {content.form.title}
                </h2>
                <p className="text-forest-muted mt-4 max-w-2xl text-base leading-7 font-semibold">
                  {content.form.description}
                </p>
              </div>

              <AdmissionForm />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-6">
          <div className="shadow-sky-media relative overflow-hidden rounded-[2rem] border border-white/70 bg-white">
            <Image
              src="/images/admission-page-hero-banner.jpeg"
              alt="Child exploring learning materials during a welcoming school visit"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-white/62" />
            <div className="absolute inset-0 bg-gradient-to-r from-cream-glow via-white/76 to-white/20" />
            <div className="text-forest-dark relative z-10 grid min-h-[340px] gap-8 px-6 py-10 md:grid-cols-[1fr_auto] md:items-end md:px-10 md:py-14">
              <div className="max-w-3xl">
                <span className="border-gold-line bg-gold-mist text-gold-ink inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[11px] font-black tracking-[0.2em] uppercase backdrop-blur-md">
                  <Sparkles className="size-4" />
                  {content.closing.badge}
                </span>
                <h2 className="font-playful-display mt-5 text-3xl leading-tight font-extrabold md:text-5xl">
                  {content.closing.title}
                </h2>
                <p className="font-hero-subtitle text-forest-soft mt-5 max-w-2xl text-base leading-7 font-semibold md:text-lg">
                  {content.closing.description}
                </p>
              </div>

              <a
                href={phoneHref}
                className="bg-mint hover:bg-mint-ink inline-flex h-14 items-center justify-center rounded-full px-8 text-base font-black text-white shadow-[0_18px_45px_rgb(22_97_63_/_18%)] transition-all hover:-translate-y-0.5"
              >
                {content.closing.button.text}
                <HeartHandshake className="ml-3 size-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
