import Link from "next/link";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  keywords: content.metadata.keywords,
  alternates: {
    canonical: content.metadata.canonical,
  },
};

const processIconMap = {
  CalendarDays,
  ClipboardList,
  UserRoundCheck,
} satisfies Record<string, LucideIcon>;

const processAccentClasses = [
  "border-sky-100 bg-sky-50 text-sky-700",
  "border-rose-100 bg-rose-50 text-rose-700",
  "border-emerald-100 bg-emerald-50 text-emerald-700",
] as const;

const phoneHref = `tel:${content.contact.phone.replace(/\s/g, "")}`;

export default function AdmissionsPage() {
  return (
    <main className="font-rounded-body bg-sage-mist text-forest-dark min-h-screen overflow-hidden">
      <HeroBanner
        image={content.hero.image}
        className="min-h-[100svh]"
        imageClassName="object-cover object-[78%_center] md:object-center"
        overlayClassName="bg-gradient-to-r from-slate-950/92 via-slate-950/70 to-slate-950/18"
      >
        <div className="relative z-10 container mx-auto flex min-h-[100svh] items-center px-6 pt-32 pb-20">
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
            </h1>

            <p className="mt-6 max-w-[32rem] text-base leading-8 font-bold text-white drop-shadow-[0_4px_18px_rgb(0_0_0_/_52%)] md:text-xl">
              {content.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                render={<Link href={content.hero.buttons.primary.link} />}
                nativeButton={false}
                className="bg-coral shadow-coral-button hover:bg-coral-dark h-14 rounded-full px-8 text-base font-black text-white transition-all hover:-translate-y-0.5"
              >
                {content.hero.buttons.primary.text}
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button
                render={<a href={phoneHref} />}
                nativeButton={false}
                variant="outline"
                className="h-14 rounded-full border-white/45 bg-white/14 px-8 text-base font-black text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/20"
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
              <span className="border-coral-line bg-coral-mist text-coral-ink inline-flex rounded-full border px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase">
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
                    "shadow-forest-card relative min-h-[250px] overflow-hidden rounded-[1.5rem] border p-6 transition-all hover:-translate-y-1",
                    processAccentClasses[index % processAccentClasses.length]
                  )}
                >
                  <div className="font-playful-display absolute top-5 right-5 text-6xl font-extrabold text-white/72">
                    0{index + 1}
                  </div>
                  <div className="text-forest-dark shadow-forest-icon relative z-10 mb-6 flex size-14 items-center justify-center rounded-2xl bg-white/88">
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

              <div className="border-peach-line shadow-forest-card mt-7 rounded-[1.5rem] border bg-white p-6">
                <div className="bg-coral-mist text-coral-ink shadow-forest-icon mb-4 flex size-12 items-center justify-center rounded-2xl">
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
                <span className="border-coral-line text-coral-ink inline-flex rounded-full border bg-white px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase">
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
          <div className="border-gold-line shadow-forest-card grid gap-8 rounded-[2rem] border bg-white p-7 md:grid-cols-[1fr_auto] md:items-center md:p-10">
            <div className="max-w-3xl">
              <span className="text-coral-ink inline-flex items-center gap-2 text-[10px] font-black tracking-[0.24em] uppercase">
                <Sparkles className="size-4" />
                {content.closing.badge}
              </span>
              <h2 className="font-playful-display text-forest-dark mt-4 text-3xl leading-tight font-extrabold md:text-5xl">
                {content.closing.title}
              </h2>
              <p className="text-forest-soft mt-4 text-base leading-7 font-semibold md:text-lg">
                {content.closing.description}
              </p>
            </div>

            <a
              href={phoneHref}
              className="bg-coral shadow-coral-button hover:bg-coral-dark inline-flex h-14 items-center justify-center rounded-full px-8 text-base font-black text-white transition-all hover:-translate-y-0.5"
            >
              {content.closing.button.text}
              <HeartHandshake className="ml-3 size-5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
