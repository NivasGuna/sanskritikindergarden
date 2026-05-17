import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBanner from "@/components/reusable/HeroBanner";
import { cn } from "@/lib/utils";
import content from "./about-content.json";

export const metadata: Metadata = content.metadata;

const aboutDisplay = Baloo_2({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const aboutBody = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const featureIconMap = {
  GraduationCap,
  Palette,
  ShieldCheck,
  Sparkles,
} as const;

const valueIconMap = {
  Handshake,
  Heart,
  Smile,
  Star,
  TreePine,
  Users,
} as const;

const visionIconMap = {
  mission: Lightbulb,
  vision: Target,
} as const;

const featureAccentMap = {
  coral: {
    card: "border-[#ffb09a] bg-[#fff1ea]",
    icon: "bg-[#ff7f6e] text-white",
    text: "text-[#a33d31]",
  },
  gold: {
    card: "border-[#f5cf62] bg-[#fff8de]",
    icon: "bg-[#f5ad2f] text-white",
    text: "text-[#95600f]",
  },
  mint: {
    card: "border-[#94dcb6] bg-[#effff6]",
    icon: "bg-[#2c9f6b] text-white",
    text: "text-[#16613f]",
  },
  sky: {
    card: "border-[#9cccf7] bg-[#eef8ff]",
    icon: "bg-[#348fce] text-white",
    text: "text-[#155b8b]",
  },
} as const;

const visionAccentMap = {
  gold: "border-[#f5cf62] bg-[#fff8de]",
  mint: "border-[#94dcb6] bg-[#effff6]",
} as const;

const valueColorClasses = [
  "border-[#ffb09a] bg-[#fff1ea] text-[#a33d31]",
  "border-[#94dcb6] bg-[#effff6] text-[#16613f]",
  "border-[#9cccf7] bg-[#eef8ff] text-[#155b8b]",
  "border-[#f5cf62] bg-[#fff8de] text-[#95600f]",
  "border-[#d9bcff] bg-[#f7f0ff] text-[#6b3ea8]",
  "border-[#ffcf92] bg-[#fff5e7] text-[#9a5a16]",
];

type FeatureIcon = keyof typeof featureIconMap;
type ValueIcon = keyof typeof valueIconMap;
type VisionIcon = keyof typeof visionIconMap;
type FeatureAccent = keyof typeof featureAccentMap;
type VisionAccent = keyof typeof visionAccentMap;

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
    <main
      className={cn(
        aboutBody.className,
        "min-h-screen overflow-hidden bg-[#f7fbf3] text-[#17352f]"
      )}
    >
      <HeroBanner
        image={content.hero.image}
        imageClassName="object-[64%_center] md:object-center"
        overlayClassName="bg-gradient-to-r from-[#fff8e8]/94 via-[#fff8e8]/78 to-[#e7f8ff]/30"
      >
        <div className="relative z-10 container mx-auto flex min-h-[100svh] items-center px-6 py-24">
          <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-12 max-w-3xl duration-1000">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#ffd798] bg-white/78 px-4 py-2 shadow-[0_14px_35px_rgba(245,173,47,0.16)] backdrop-blur-md">
              <span className="size-2 rounded-full bg-[#ff7f6e]" />
              <span className="text-[10px] font-black tracking-[0.28em] text-[#b86912] uppercase">
                {content.hero.badge}
              </span>
            </div>

            <h1
              className={cn(
                aboutDisplay.className,
                "max-w-3xl text-5xl leading-[0.98] font-extrabold text-[#16342e] md:text-7xl"
              )}
            >
              {content.hero.title.line1} <br />
              <span className="text-[#ff7f6e]">
                {content.hero.title.highlight}
              </span>{" "}
              <span className="text-[#2c9f6b]">{content.hero.title.line2}</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 font-bold text-[#4a625b] md:text-xl">
              {content.hero.subtitle}
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button
                render={<Link href={content.hero.buttons.primary.link} />}
                nativeButton={false}
                className="h-14 rounded-full bg-[#ff7f6e] px-8 text-base font-black text-white shadow-[0_18px_45px_rgba(255,127,110,0.28)] transition-all hover:-translate-y-0.5 hover:bg-[#ef6f5f]"
              >
                {content.hero.buttons.primary.text}
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button
                render={<Link href={content.hero.buttons.secondary.link} />}
                nativeButton={false}
                variant="outline"
                className="h-14 rounded-full border-[#b7dfc7] bg-white/82 px-8 text-base font-black text-[#17352f] backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                {content.hero.buttons.secondary.text}
              </Button>
            </div>
          </div>
        </div>
      </HeroBanner>

      <section className="bg-[#f7fbf3] py-14 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid items-end gap-7 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="inline-flex rounded-full border border-[#b7dfc7] bg-white px-4 py-2 text-[10px] font-black tracking-[0.24em] text-[#2c7c56] uppercase">
                {content.whyChoose.badge.text}
              </span>
              <h2
                className={cn(
                  aboutDisplay.className,
                  "mt-5 max-w-xl text-4xl leading-[1.02] font-extrabold text-[#17352f] md:text-6xl"
                )}
              >
                {content.whyChoose.title}
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 font-semibold text-[#58706a] md:text-lg">
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
                    "relative min-h-[250px] overflow-hidden rounded-[1.5rem] border p-6 shadow-[0_22px_55px_rgba(23,53,47,0.08)] transition-all hover:-translate-y-1",
                    accent.card
                  )}
                >
                  <div className="absolute top-5 right-5 text-5xl font-black text-white/72">
                    0{index + 1}
                  </div>
                  <div
                    className={cn(
                      "relative z-10 mb-6 flex size-14 items-center justify-center rounded-2xl shadow-[0_16px_30px_rgba(23,53,47,0.12)]",
                      accent.icon
                    )}
                  >
                    <Icon className="size-7" />
                  </div>
                  <h3
                    className={cn(
                      aboutDisplay.className,
                      "relative z-10 text-2xl leading-tight font-extrabold text-[#17352f]"
                    )}
                  >
                    {feature.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-sm leading-6 font-semibold text-[#536b64]">
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
            <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] bg-[#e8f8ff] shadow-[0_24px_70px_rgba(21,91,139,0.14)]">
              <Image
                src={content.philosophy.image.src}
                alt={content.philosophy.image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 54vw, 100vw"
              />
              <div className="absolute bottom-5 left-5 max-w-xs rounded-[1.25rem] bg-white/90 p-5 shadow-[0_18px_45px_rgba(23,53,47,0.16)] backdrop-blur-md">
                <p
                  className={cn(
                    aboutDisplay.className,
                    "text-2xl leading-tight font-extrabold text-[#ff7f6e]"
                  )}
                >
                  {content.philosophy.floatingQuote}
                </p>
              </div>
            </div>

            <div>
              <span className="inline-flex rounded-full border border-[#ffcf92] bg-[#fff5e7] px-4 py-2 text-[10px] font-black tracking-[0.24em] text-[#9a5a16] uppercase">
                {content.philosophy.badge.text}
              </span>
              <h2
                className={cn(
                  aboutDisplay.className,
                  "mt-5 text-4xl leading-[1.03] font-extrabold text-[#17352f] md:text-6xl"
                )}
              >
                {content.philosophy.title.main}{" "}
                <span className="text-[#348fce]">
                  {content.philosophy.title.accent}
                </span>
              </h2>
              <p className="mt-5 text-base leading-8 font-semibold text-[#58706a] md:text-lg">
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
                      <h3
                        className={cn(
                          aboutDisplay.className,
                          "text-2xl font-extrabold text-[#17352f]"
                        )}
                      >
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 font-semibold text-[#536b64]">
                        {pillar.description}
                      </p>
                    </article>
                  );
                })}
              </div>

              <blockquote className="mt-7 rounded-[1.5rem] border border-[#d9bcff] bg-[#f7f0ff] p-6 text-lg leading-8 font-extrabold text-[#6b3ea8]">
                {content.quote.text}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="vision-mission" className="bg-[#eef8ff] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <span className="inline-flex rounded-full border border-[#9cccf7] bg-white px-4 py-2 text-[10px] font-black tracking-[0.24em] text-[#155b8b] uppercase">
                {content.vision.badge.text}
              </span>
              <h2
                className={cn(
                  aboutDisplay.className,
                  "mt-5 max-w-xl text-4xl leading-[1.03] font-extrabold text-[#17352f] md:text-6xl"
                )}
              >
                {content.vision.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 font-semibold text-[#4e686b] md:text-lg">
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
                      "min-h-[290px] rounded-[1.75rem] border p-7 shadow-[0_24px_65px_rgba(21,91,139,0.12)]",
                      cardClass
                    )}
                  >
                    <div className="mb-6 flex size-14 items-center justify-center rounded-2xl bg-white text-[#17352f] shadow-[0_14px_35px_rgba(23,53,47,0.1)]">
                      <Icon className="size-7" />
                    </div>
                    <h3
                      className={cn(
                        aboutDisplay.className,
                        "text-3xl font-extrabold text-[#17352f]"
                      )}
                    >
                      {item.label}
                    </h3>
                    <p className="mt-4 text-sm leading-7 font-semibold text-[#536b64]">
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
            <span className="inline-flex rounded-full border border-[#ffb09a] bg-[#fff1ea] px-4 py-2 text-[10px] font-black tracking-[0.24em] text-[#a33d31] uppercase">
              {content.teachersSection.badge}
            </span>
            <h2
              className={cn(
                aboutDisplay.className,
                "mt-5 text-4xl leading-[1.03] font-extrabold text-[#17352f] md:text-6xl"
              )}
            >
              {content.teachersSection.title}
            </h2>
            <p className="mt-4 text-base leading-7 font-semibold text-[#58706a] md:text-lg">
              {content.teachersSection.subtitle}
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {content.teachers.map((teacher, index) => (
              <article
                key={teacher.name}
                className={cn(
                  "max-w-[360px] basis-full rounded-[1.5rem] border p-6 shadow-[0_22px_55px_rgba(23,53,47,0.08)] transition-all hover:-translate-y-1 md:basis-[calc(50%-1.5rem)] xl:basis-[calc(33.333%-1.5rem)]",
                  valueColorClasses[index % valueColorClasses.length]
                )}
              >
                <div className="flex items-center gap-4">
                  {teacher.image ? (
                    <div className="relative h-20 w-20 overflow-hidden rounded-[1.25rem] border-4 border-white bg-white shadow-[0_12px_30px_rgba(23,53,47,0.12)]">
                      <Image
                        src={teacher.image.src}
                        alt={teacher.image.alt}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  ) : (
                    <div className="flex h-20 w-20 items-center justify-center rounded-[1.25rem] border-4 border-white bg-white text-lg font-black shadow-[0_12px_30px_rgba(23,53,47,0.12)]">
                      {getInitials(teacher.name)}
                    </div>
                  )}
                  <div>
                    <h3
                      className={cn(
                        aboutDisplay.className,
                        "text-2xl leading-tight font-extrabold text-[#17352f]"
                      )}
                    >
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
                    <p className="mt-2 text-sm leading-6 font-semibold text-[#536b64]">
                      {teacher.experience}
                    </p>
                    {teacher.experienceDetails?.length ? (
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 font-semibold text-[#536b64]">
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
                          className="rounded-full border border-white/70 bg-white/70 px-3 py-1.5 text-xs font-black text-[#17352f]"
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
                      <p className="mt-2 text-sm leading-6 font-semibold text-[#536b64]">
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

      <section className="bg-[#fff8de] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <span className="inline-flex rounded-full border border-[#f5cf62] bg-white px-4 py-2 text-[10px] font-black tracking-[0.24em] text-[#95600f] uppercase">
              {content.values.badge.text}
            </span>
            <h2
              className={cn(
                aboutDisplay.className,
                "mt-5 text-4xl leading-[1.03] font-extrabold text-[#17352f] md:text-6xl"
              )}
            >
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
                    "flex min-h-[155px] gap-4 rounded-[1.25rem] border p-5 shadow-[0_18px_45px_rgba(23,53,47,0.08)]",
                    valueColorClasses[index % valueColorClasses.length]
                  )}
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/86 text-[#17352f]">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <h3
                      className={cn(
                        aboutDisplay.className,
                        "text-2xl font-extrabold text-[#17352f]"
                      )}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 font-semibold text-[#536b64]">
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
