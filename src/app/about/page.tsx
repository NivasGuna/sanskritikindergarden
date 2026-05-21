import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";
import Schema from "@/components/Schema";
import {
  ArrowRight,
  GraduationCap,
  Handshake,
  Heart,
  Lightbulb,
  Palette,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Target,
  TreePine,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBanner from "@/components/reusable/HeroBanner";
import { cn } from "@/lib/utils";
import content from "./about-content.json";
import type {
  AccentStyle,
  FeatureAccent,
  FeatureIcon,
  ValueIcon,
  VisionAccent,
  VisionIcon,
} from "./types";

export const metadata: Metadata = constructMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  canonicalUrl: "/about",
});

const featureIconMap = {
  GraduationCap,
  Palette,
  ShieldCheck,
  Sparkles,
} satisfies Record<FeatureIcon, LucideIcon>;

const valueIconMap = {
  Handshake,
  Heart,
  Smile,
  Star,
  TreePine,
  Users,
} satisfies Record<ValueIcon, LucideIcon>;

const visionIconMap = {
  mission: Lightbulb,
  vision: Target,
} satisfies Record<VisionIcon, LucideIcon>;

const featureAccentMap = {
  coral: {
    card: "border-peach-line bg-peach-mist",
    icon: "bg-peach-ink text-white",
    text: "text-peach-ink",
  },
  gold: {
    card: "border-gold-line bg-gold-mist",
    icon: "bg-gold text-white",
    text: "text-gold-ink",
  },
  mint: {
    card: "border-mint-line bg-mint-mist",
    icon: "bg-mint text-white",
    text: "text-mint-ink",
  },
  sky: {
    card: "border-sky-line bg-sky-mist",
    icon: "bg-sky text-white",
    text: "text-sky-ink",
  },
} satisfies Record<FeatureAccent, AccentStyle>;

const visionAccentMap = {
  gold: "border-gold-line bg-gold-mist",
  mint: "border-mint-line bg-mint-mist",
} satisfies Record<VisionAccent, string>;

const valueColorClasses = [
  "border-mint-line bg-mint-mist text-mint-ink",
  "border-sky-line bg-sky-mist text-sky-ink",
  "border-gold-line bg-gold-mist text-gold-ink",
  "border-peach-line bg-peach-mist text-peach-ink",
  "border-lavender-line bg-lavender-mist text-lavender-ink",
  "border-coral-line bg-coral-mist text-coral-ink",
] as const;

function getInitials(name: string) {
  const words = name.replace(/\./g, "").split(/\s+/).filter(Boolean);

  return words
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

export default function AboutPage() {
  return (
    <main className="bg-sage-mist font-rounded-body text-forest-dark min-h-screen overflow-hidden">
      <Schema
        data={getBreadcrumbSchema([
          { name: "Home", url: "" },
          { name: "About Us", url: "/about" },
        ])}
      />
      <HeroBanner
        image={content.hero.image}
        imageClassName="object-[64%_center] md:object-center"
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
              </span>{" "}
              <span className="text-sky-ink">{content.hero.title.line2}</span>
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
                render={<Link href={content.hero.buttons.secondary.link} />}
                nativeButton={false}
                variant="outline"
                className="text-forest-dark h-14 rounded-full border-forest-dark/20 bg-white/76 px-8 text-base font-black backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/88"
              >
                {content.hero.buttons.secondary.text}
              </Button>
            </div>
          </div>
        </div>
      </HeroBanner>

      <section className="bg-sage-mist py-14 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid items-end gap-7 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="border-mint-line text-mint-ink inline-flex rounded-full border bg-white px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase">
                {content.whyChoose.badge.text}
              </span>
              <h2 className="font-playful-display text-forest-dark mt-5 max-w-xl text-4xl leading-[1.02] font-extrabold md:text-6xl">
                {content.whyChoose.title}
              </h2>
            </div>
            <p className="text-forest-muted max-w-2xl text-base leading-7 font-semibold md:text-lg">
              {content.whyChoose.subtitle}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.whyChoose.features.map((feature) => {
              const Icon = featureIconMap[feature.icon as FeatureIcon];
              const accent =
                featureAccentMap[feature.accent as FeatureAccent] ??
                featureAccentMap.gold;

              return (
                <article
                  key={feature.title}
                  className={cn(
                    "shadow-forest-card group relative min-h-[250px] overflow-hidden rounded-[1.5rem] border p-6 transition-all hover:-translate-y-1",
                    accent.card
                  )}
                >
                  <div
                    className={cn(
                      "shadow-forest-icon relative z-10 mb-6 flex size-14 items-center justify-center rounded-2xl",
                      accent.icon
                    )}
                  >
                    <Icon className="size-7" />
                  </div>
                  <h3 className="font-playful-display text-forest-dark relative z-10 text-2xl leading-tight font-extrabold">
                    {feature.title}
                  </h3>
                  <p className="text-forest-soft relative z-10 mt-3 text-sm leading-6 font-semibold">
                    {feature.description}
                  </p>
                  <div className="absolute right-5 bottom-5 h-12 w-12 rounded-full bg-white/34 transition-transform group-hover:scale-125" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="bg-sky-wash shadow-sky-media relative min-h-[430px] overflow-hidden rounded-[2rem]">
              <Image
                src={content.philosophy.image.src}
                alt={content.philosophy.image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 54vw, 100vw"
              />
              <div className="shadow-forest-floating absolute bottom-5 left-5 max-w-xs rounded-[1.25rem] bg-white/90 p-5 backdrop-blur-md">
                <p className="font-playful-display text-gold-ink text-2xl leading-tight font-extrabold">
                  {content.philosophy.floatingQuote}
                </p>
              </div>
            </div>

            <div>
              <span className="border-peach-line bg-peach-mist text-peach-ink inline-flex rounded-full border px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase">
                {content.philosophy.badge.text}
              </span>
              <h2 className="font-playful-display text-forest-dark mt-5 text-4xl leading-[1.03] font-extrabold md:text-6xl">
                {content.philosophy.title.main}{" "}
                <span className="text-sky">
                  {content.philosophy.title.accent}
                </span>
              </h2>
              <p className="text-forest-muted mt-5 text-base leading-8 font-semibold md:text-lg">
                {content.philosophy.description}
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {content.philosophy.pillars.map((pillar) => {
                  const accent =
                    featureAccentMap[pillar.accent as FeatureAccent] ??
                    featureAccentMap.mint;

                  return (
                    <article
                      key={pillar.title}
                      className={cn(
                        "rounded-[1.25rem] border p-5",
                        accent.card
                      )}
                    >
                      <h3 className="font-playful-display text-forest-dark text-2xl font-extrabold">
                        {pillar.title}
                      </h3>
                      <p className="text-forest-soft mt-2 text-sm leading-6 font-semibold">
                        {pillar.description}
                      </p>
                    </article>
                  );
                })}
              </div>

              <blockquote className="border-lavender-line bg-lavender-mist text-lavender-ink mt-7 rounded-[1.5rem] border p-6 text-lg leading-8 font-extrabold">
                {content.quote.text}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="vision-mission" className="bg-sky-mist py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <span className="border-sky-line text-sky-ink inline-flex rounded-full border bg-white px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase">
                {content.vision.badge.text}
              </span>
              <h2 className="font-playful-display text-forest-dark mt-5 max-w-xl text-4xl leading-[1.03] font-extrabold md:text-6xl">
                {content.vision.title}
              </h2>
              <p className="text-teal-muted mt-5 max-w-xl text-base leading-8 font-semibold md:text-lg">
                {content.philosophy.description}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {content.vision.items.map((item) => {
                const Icon = visionIconMap[item.id as VisionIcon];
                const cardClass =
                  visionAccentMap[item.accent as VisionAccent] ??
                  visionAccentMap.gold;

                return (
                  <article
                    key={item.id}
                    className={cn(
                      "shadow-sky-card min-h-[290px] rounded-[1.75rem] border p-7",
                      cardClass
                    )}
                  >
                    <div className="text-forest-dark shadow-forest-icon mb-6 flex size-14 items-center justify-center rounded-2xl bg-white">
                      <Icon className="size-7" />
                    </div>
                    <h3 className="font-playful-display text-forest-dark text-3xl font-extrabold">
                      {item.label}
                    </h3>
                    <p className="text-forest-soft mt-4 text-sm leading-7 font-semibold">
                      {item.content}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="border-sky-line bg-sky-mist text-sky-ink inline-flex rounded-full border px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase">
              {content.teachersSection.badge}
            </span>
            <h2 className="font-playful-display text-forest-dark mt-5 text-4xl leading-[1.03] font-extrabold md:text-6xl">
              {content.teachersSection.title}
            </h2>
            <p className="text-forest-muted mt-4 text-base leading-7 font-semibold md:text-lg">
              {content.teachersSection.subtitle}
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {content.teachers.map((teacher, index) => (
              <article
                key={teacher.name}
                className={cn(
                  "shadow-forest-card w-full rounded-3xl border p-6 transition-all hover:-translate-y-1 sm:w-[290px]",
                  valueColorClasses[index % valueColorClasses.length]
                )}
              >
                <div className="flex items-center justify-center gap-4">
                  {teacher.image ? (
                    <div className="shadow-forest-avatar relative h-20 w-20 shrink-0 overflow-hidden rounded-[1.25rem] border-4 border-white bg-white">
                      <Image
                        src={teacher.image.src}
                        alt={teacher.image.alt}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  ) : (
                    <div className="shadow-forest-avatar flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.25rem] border-4 border-white bg-white text-lg font-black">
                      {getInitials(teacher.name)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="font-playful-display text-forest-dark text-2xl leading-tight font-extrabold break-words">
                      {teacher.name}
                    </h3>
                    <p className="mt-1 text-xs font-black tracking-[0.18em] uppercase">
                      {teacher.role}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs font-black tracking-[0.2em] uppercase">
                      Experience
                    </p>
                    <p className="text-forest-soft mt-2 text-sm leading-6 font-semibold">
                      {teacher.experience}
                    </p>
                    {teacher.experienceDetails?.length ? (
                      <ul className="text-forest-soft mt-3 list-disc space-y-1 pl-5 text-sm leading-6 font-semibold">
                        {teacher.experienceDetails.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  <div>
                    <p className="text-xs font-black tracking-[0.2em] uppercase">
                      Qualifications
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {teacher.qualifications?.map((qualification) => (
                        <span
                          key={qualification}
                          className="text-forest-dark rounded-full border border-white/70 bg-white/70 px-3 py-1.5 text-xs font-black"
                        >
                          {qualification}
                        </span>
                      ))}
                    </div>
                  </div>

                  {teacher.achievement ? (
                    <div>
                      <p className="text-xs font-black tracking-[0.2em] uppercase">
                        Achievement
                      </p>
                      <p className="text-forest-soft mt-2 text-sm leading-6 font-semibold">
                        {teacher.achievement}
                      </p>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#fff8de_0%,#f7fbf3_52%,#eef8ff_100%)] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <span className="border-gold-line text-gold-ink inline-flex rounded-full border bg-white px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase">
              {content.values.badge.text}
            </span>
            <h2 className="font-playful-display text-forest-dark mt-5 text-4xl leading-[1.03] font-extrabold md:text-5xl">
              {content.values.title}
            </h2>
            <p className="text-forest-muted mt-4 max-w-2xl text-base leading-7 font-semibold md:text-lg">
              These values guide the way children are welcomed, encouraged, and
              cared for every day.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
            {content.values.items.map((item, index) => {
              const Icon = valueIconMap[item.icon as ValueIcon];

              return (
                <article
                  key={item.title}
                  className={cn(
                    "shadow-forest-value relative overflow-hidden rounded-[1.5rem] border p-6 transition-all hover:-translate-y-0.5 hover:shadow-forest-card lg:col-span-2",
                    (index === 0 || index === 5) && "lg:col-span-3",
                    valueColorClasses[index % valueColorClasses.length]
                  )}
                >
                  <div className="relative z-10 flex items-start gap-4">
                    <div className="text-forest-dark flex size-13 shrink-0 items-center justify-center rounded-2xl bg-white/86 shadow-forest-icon">
                      <Icon className="size-6" />
                    </div>
                    <div>
                    <h3 className="font-playful-display text-forest-dark text-2xl font-extrabold">
                      {item.title}
                    </h3>
                    <p className="text-forest-soft mt-2 text-sm leading-6 font-semibold">
                      {item.description}
                    </p>
                    </div>
                  </div>
                  <div className="absolute right-4 bottom-4 h-16 w-16 rounded-full bg-white/35" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white pt-4 pb-20 md:pb-28">
        <div className="container mx-auto px-6">
          <div className="shadow-sky-media relative overflow-hidden rounded-[2rem] border border-white/70 bg-white">
            <Image
              src="/images/about-philosophy-learning-moment.png"
              alt="Teacher caring for children in the Sanskriti Kindergarten classroom"
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-white/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-cream-glow via-white/76 to-white/18" />
            <div className="text-forest-dark relative z-10 grid min-h-[360px] gap-8 px-6 py-10 md:grid-cols-[1fr_auto] md:items-end md:px-10 md:py-14">
              <div className="max-w-2xl">
                <span className="border-mint-line bg-mint-mist text-mint-ink inline-flex rounded-full border px-4 py-2 text-[11px] font-black uppercase backdrop-blur-md">
                  About Sanskriti
                </span>
                <h2 className="font-playful-display mt-5 text-4xl leading-tight font-extrabold md:text-5xl">
                  {content.cta.title}
                </h2>
                <p className="font-hero-subtitle text-forest-soft mt-5 text-base leading-7 font-semibold md:text-[17px]">
                  {content.cta.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href={content.cta.buttons.primary.link}
                  className="bg-mint hover:bg-mint-ink inline-flex h-[3.25rem] items-center justify-center rounded-full px-8 text-sm font-black text-white shadow-[0_18px_45px_rgb(22_97_63_/_18%)] transition hover:-translate-y-0.5"
                >
                  {content.cta.buttons.primary.text}
                  <ArrowRight className="ml-2 size-4" />
                </Link>
                <Link
                  href={content.cta.buttons.secondary.link}
                  className="text-forest-dark inline-flex h-[3.25rem] items-center justify-center rounded-full border border-forest-dark/18 bg-white/78 px-8 text-sm font-black backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white"
                >
                  {content.cta.buttons.secondary.text}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
