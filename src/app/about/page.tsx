import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
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

export const metadata: Metadata = content.metadata;

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
    card: "border-coral-line bg-coral-mist",
    icon: "bg-coral text-white",
    text: "text-coral-ink",
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
  "border-coral-line bg-coral-mist text-coral-ink",
  "border-mint-line bg-mint-mist text-mint-ink",
  "border-sky-line bg-sky-mist text-sky-ink",
  "border-gold-line bg-gold-mist text-gold-ink",
  "border-lavender-line bg-lavender-mist text-lavender-ink",
  "border-peach-line bg-peach-mist text-peach-ink",
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
    <main className="min-h-screen overflow-hidden bg-sage-mist font-rounded-body text-forest-dark">
      <HeroBanner
        image={content.hero.image}
        imageClassName="object-[64%_center] md:object-center"
        overlayClassName="bg-gradient-to-r from-cream-glow via-cream-glow-soft to-sky-glow"
      >
        <div className="relative z-10 container mx-auto flex min-h-[100svh] items-center px-6 py-24">
          <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-12 max-w-3xl duration-1000">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-amber-line bg-white/78 px-4 py-2 shadow-warm-badge backdrop-blur-md">
              <span className="size-2 rounded-full bg-coral" />
              <span className="text-[10px] font-black tracking-[0.28em] text-amber-ink uppercase">
                {content.hero.badge}
              </span>
            </div>

            <h1 className="max-w-3xl font-playful-display text-5xl leading-[0.98] font-extrabold text-forest-deep md:text-7xl">
              {content.hero.title.line1} <br />
              <span className="text-coral">
                {content.hero.title.highlight}
              </span>{" "}
              <span className="text-mint">
                {content.hero.title.line2}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 font-bold text-forest-smoke md:text-xl">
              {content.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                render={<Link href={content.hero.buttons.primary.link} />}
                nativeButton={false}
                className="h-14 rounded-full bg-coral px-8 text-base font-black text-white shadow-coral-button transition-all hover:-translate-y-0.5 hover:bg-coral-dark"
              >
                {content.hero.buttons.primary.text}
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button
                render={<Link href={content.hero.buttons.secondary.link} />}
                nativeButton={false}
                variant="outline"
                className="h-14 rounded-full border-mint-line bg-white/82 px-8 text-base font-black text-forest-dark backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white"
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
              <span className="inline-flex rounded-full border border-mint-line bg-white px-4 py-2 text-[10px] font-black tracking-[0.24em] text-mint-ink uppercase">
                {content.whyChoose.badge.text}
              </span>
              <h2 className="mt-5 max-w-xl font-playful-display text-4xl leading-[1.02] font-extrabold text-forest-dark md:text-6xl">
                {content.whyChoose.title}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 font-semibold text-forest-muted md:text-lg">
              {content.whyChoose.subtitle}
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.whyChoose.features.map((feature, index) => {
              const Icon = featureIconMap[feature.icon as FeatureIcon];
              const accent =
                featureAccentMap[feature.accent as FeatureAccent] ??
                featureAccentMap.gold;

              return (
                <article
                  key={feature.title}
                  className={cn(
                    "relative min-h-[250px] overflow-hidden rounded-[1.5rem] border p-6 shadow-forest-card transition-all hover:-translate-y-1",
                    accent.card
                  )}
                >
                  <div className="absolute top-5 right-5 text-5xl font-black text-white/72">
                    0{index + 1}
                  </div>
                  <div
                    className={cn(
                      "relative z-10 mb-6 flex size-14 items-center justify-center rounded-2xl shadow-forest-icon",
                      accent.icon
                    )}
                  >
                    <Icon className="size-7" />
                  </div>
                  <h3 className="relative z-10 font-playful-display text-2xl leading-tight font-extrabold text-forest-dark">
                    {feature.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-sm leading-6 font-semibold text-forest-soft">
                    {feature.description}
                  </p>
                  <div
                    className={cn(
                      "absolute bottom-0 left-0 h-2 w-full",
                      accent.icon
                    )}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-sky-wash shadow-sky-media">
              <Image
                src={content.philosophy.image.src}
                alt={content.philosophy.image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 54vw, 100vw"
              />
              <div className="absolute bottom-5 left-5 max-w-xs rounded-[1.25rem] bg-white/90 p-5 shadow-forest-floating backdrop-blur-md">
                <p className="font-playful-display text-2xl leading-tight font-extrabold text-coral">
                  {content.philosophy.floatingQuote}
                </p>
              </div>
            </div>

            <div>
              <span className="inline-flex rounded-full border border-peach-line bg-peach-mist px-4 py-2 text-[10px] font-black tracking-[0.24em] text-peach-ink uppercase">
                {content.philosophy.badge.text}
              </span>
              <h2 className="mt-5 font-playful-display text-4xl leading-[1.03] font-extrabold text-forest-dark md:text-6xl">
                {content.philosophy.title.main}{" "}
                <span className="text-sky">
                  {content.philosophy.title.accent}
                </span>
              </h2>
              <p className="mt-5 text-base leading-8 font-semibold text-forest-muted md:text-lg">
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
                      <h3 className="font-playful-display text-2xl font-extrabold text-forest-dark">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 font-semibold text-forest-soft">
                        {pillar.description}
                      </p>
                    </article>
                  );
                })}
              </div>

              <blockquote className="mt-7 rounded-[1.5rem] border border-lavender-line bg-lavender-mist p-6 text-lg leading-8 font-extrabold text-lavender-ink">
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
              <span className="inline-flex rounded-full border border-sky-line bg-white px-4 py-2 text-[10px] font-black tracking-[0.24em] text-sky-ink uppercase">
                {content.vision.badge.text}
              </span>
              <h2 className="mt-5 max-w-xl font-playful-display text-4xl leading-[1.03] font-extrabold text-forest-dark md:text-6xl">
                {content.vision.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 font-semibold text-teal-muted md:text-lg">
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
                      "min-h-[290px] rounded-[1.75rem] border p-7 shadow-sky-card",
                      cardClass
                    )}
                  >
                    <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-white text-forest-dark shadow-forest-icon">
                      <Icon className="size-7" />
                    </div>
                    <h3 className="font-playful-display text-3xl font-extrabold text-forest-dark">
                      {item.label}
                    </h3>
                    <p className="mt-4 text-sm leading-7 font-semibold text-forest-soft">
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
            <span className="inline-flex rounded-full border border-coral-line bg-coral-mist px-4 py-2 text-[10px] font-black tracking-[0.24em] text-coral-ink uppercase">
              {content.teachersSection.badge}
            </span>
            <h2 className="mt-5 font-playful-display text-4xl leading-[1.03] font-extrabold text-forest-dark md:text-6xl">
              {content.teachersSection.title}
            </h2>
            <p className="mt-4 text-base leading-7 font-semibold text-forest-muted md:text-lg">
              {content.teachersSection.subtitle}
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {content.teachers.map((teacher, index) => (
              <article
                key={teacher.name}
                className={cn(
                  "w-full rounded-3xl border p-6 shadow-forest-card transition-all hover:-translate-y-1 sm:w-[290px]",
                  valueColorClasses[index % valueColorClasses.length]
                )}
              >
                <div className="flex items-center justify-center gap-4">
                  {teacher.image ? (
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-[1.25rem] border-4 border-white bg-white shadow-forest-avatar">
                      <Image
                        src={teacher.image.src}
                        alt={teacher.image.alt}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  ) : (
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.25rem] border-4 border-white bg-white text-lg font-black shadow-forest-avatar">
                      {getInitials(teacher.name)}
                    </div>
                  )}
                  <div className="min-w-0">
                    <h3 className="break-words font-playful-display text-2xl leading-tight font-extrabold text-forest-dark">
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
                    <p className="mt-2 text-sm leading-6 font-semibold text-forest-soft">
                      {teacher.experience}
                    </p>
                    {teacher.experienceDetails?.length ? (
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 font-semibold text-forest-soft">
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
                          className="rounded-full border border-white/70 bg-white/70 px-3 py-1.5 text-xs font-black text-forest-dark"
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
                      <p className="mt-2 text-sm leading-6 font-semibold text-forest-soft">
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

      <section className="bg-gold-mist py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <span className="inline-flex rounded-full border border-gold-line bg-white px-4 py-2 text-[10px] font-black tracking-[0.24em] text-gold-ink uppercase">
              {content.values.badge.text}
            </span>
            <h2 className="mt-5 font-playful-display text-4xl leading-[1.03] font-extrabold text-forest-dark md:text-6xl">
              {content.values.title}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.values.items.map((item, index) => {
              const Icon = valueIconMap[item.icon as ValueIcon];

              return (
                <article
                  key={item.title}
                  className={cn(
                    "flex min-h-[155px] gap-4 rounded-[1.25rem] border p-5 shadow-forest-value",
                    valueColorClasses[index % valueColorClasses.length]
                  )}
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/86 text-forest-dark">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-playful-display text-2xl font-extrabold text-forest-dark">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 font-semibold text-forest-soft">
                      {item.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
