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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBanner from "@/components/reusable/HeroBanner";
import content from "./about-content.json";

export const metadata: Metadata = content.metadata;

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

type FeatureIcon = keyof typeof featureIconMap;
type ValueIcon = keyof typeof valueIconMap;
type VisionIcon = keyof typeof visionIconMap;

export default function AboutPage() {
  function getInitials(name: string) {
    const words = name.replace(/\./g, "").split(/\s+/).filter(Boolean);

    return words
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }
  return (
    <main className="bg-premium-bg text-premium-ink overflow-hidden">
      <HeroBanner image={content.hero.image}>
        <div className="relative z-10 container mx-auto flex min-h-[100svh] items-center px-6 py-24">
          <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-12 max-w-3xl duration-1000">
            <div className="mb-8 inline-flex items-center gap-3">
              <span className="h-px w-6 bg-amber-600" />
              <span className="text-[10px] font-black tracking-[0.3em] text-amber-700 uppercase">
                {content.hero.badge}
              </span>
            </div>

            <h1 className="text-premium-ink text-4xl leading-[1.1] font-medium tracking-tight drop-shadow-sm md:text-6xl">
              {content.hero.title.line1} <br />
              <span className="text-premium-forest italic">
                {content.hero.title.highlight}
              </span>{" "}
              <span className="opacity-90">{content.hero.title.line2}</span>
            </h1>

            <p className="text-premium-muted mt-6 max-w-xl text-base leading-relaxed font-medium md:text-xl">
              {content.hero.subtitle}
            </p>

            <div className="mt-10 flex flex-wrap gap-5">
              <Button
                render={<Link href={content.hero.buttons.primary.link} />}
                nativeButton={false}
                className="bg-premium-forest shadow-premium-md hover:bg-premium-forest/90 h-14 rounded-full px-10 text-base font-bold text-white transition-all hover:-translate-y-0.5"
              >
                {content.hero.buttons.primary.text}
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button
                render={<Link href={content.hero.buttons.secondary.link} />}
                nativeButton={false}
                variant="outline"
                className="border-premium-line text-premium-ink h-14 rounded-full bg-white/70 px-10 text-base font-bold backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white"
              >
                {content.hero.buttons.secondary.text}
              </Button>
            </div>
          </div>
        </div>
      </HeroBanner>

      <section className="bg-premium-bg py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <span className="text-premium-forest text-[11px] font-black tracking-[0.3em] uppercase">
              {content.whyChoose.badge.text}
            </span>
            <h2 className="text-premium-ink mt-4 text-3xl leading-tight font-medium md:text-5xl">
              {content.whyChoose.title}
            </h2>
            <p className="text-premium-muted mt-4 text-base leading-7">
              {content.whyChoose.subtitle}
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {content.whyChoose.features.map((feature) => {
              const Icon = featureIconMap[feature.icon as FeatureIcon];

              return (
                <article
                  key={feature.title}
                  className="border-premium-line shadow-premium-sm hover:shadow-premium-md rounded-[1.25rem] border bg-white p-6 transition-all hover:-translate-y-0.5"
                >
                  <div className="bg-premium-bg text-premium-forest mb-5 flex size-12 items-center justify-center rounded-2xl">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-premium-ink text-lg font-bold">
                    {feature.title}
                  </h3>
                  <p className="text-premium-muted mt-3 text-sm leading-6">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.95fr]">
            <div className="border-premium-line bg-premium-bg shadow-premium-md relative overflow-hidden rounded-3xl border">
              <div className="relative aspect-4/3">
                <Image
                  src={content.philosophy.image.src}
                  alt={content.philosophy.image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>

            <div>
              <span className="text-premium-forest text-[11px] font-black tracking-[0.3em] uppercase">
                {content.philosophy.badge.text}
              </span>
              <h2 className="text-premium-ink mt-4 text-3xl leading-tight font-medium md:text-5xl">
                {content.philosophy.title.main}{" "}
                <span className="text-premium-forest italic">
                  {content.philosophy.title.accent}
                </span>
              </h2>
              <p className="text-premium-muted mt-5 text-base leading-7 md:text-lg">
                {content.philosophy.description}
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {content.philosophy.pillars.map((pillar) => (
                  <article
                    key={pillar.title}
                    className="border-premium-line bg-premium-bg rounded-[1.25rem] border p-5"
                  >
                    <h3 className="text-premium-ink font-bold">
                      {pillar.title}
                    </h3>
                    <p className="text-premium-muted mt-2 text-sm leading-6">
                      {pillar.description}
                    </p>
                  </article>
                ))}
              </div>

              <blockquote className="border-premium-forest text-premium-ink mt-7 border-l-4 pl-5 text-lg leading-8 font-medium">
                {content.quote.text}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section id="vision-mission" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="text-premium-forest text-[11px] font-black tracking-[0.3em] uppercase">
                {content.vision.badge.text}
              </span>
              <h2 className="text-premium-ink mt-4 max-w-xl text-3xl leading-tight font-medium md:text-5xl">
                {content.vision.title}
              </h2>
              <p className="text-premium-muted mt-5 max-w-xl text-base leading-7 md:text-lg">
                {content.philosophy.description}
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {content.vision.items.map((item) => {
                const Icon = visionIconMap[item.id as VisionIcon];

                return (
                  <article
                    key={item.id}
                    className="border-premium-line bg-premium-bg shadow-premium-sm rounded-[1.25rem] border p-6"
                  >
                    <div className="text-premium-forest mb-5 flex size-11 items-center justify-center rounded-2xl bg-white">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-premium-ink text-xl font-bold">
                      {item.label}
                    </h3>
                    <p className="text-premium-muted mt-3 text-sm leading-6">
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
            <span className="text-premium-forest text-[11px] font-black tracking-[0.3em] uppercase">
              {content.teachersSection.badge}
            </span>
            <h2 className="text-premium-ink mt-4 text-3xl leading-tight font-medium md:text-5xl">
              {content.teachersSection.title}
            </h2>
            <p className="text-premium-muted mt-4 text-base leading-7 md:text-lg">
              {content.teachersSection.subtitle}
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {content.teachers.map((teacher) => (
              <article
                key={teacher.name}
                className="border-premium-line bg-premium-bg shadow-premium-sm hover:shadow-premium-md max-w-[360px] basis-full rounded-[1.5rem] border p-6 transition-all hover:-translate-y-0.5 md:basis-[calc(50%-1.5rem)] xl:basis-[calc(33.333%-1.5rem)]"
              >
                <div className="flex items-center gap-4">
                  {teacher.image ? (
                    <div className="border-premium-line relative h-20 w-20 overflow-hidden rounded-3xl border bg-white">
                      <Image
                        src={teacher.image.src}
                        alt={teacher.image.alt}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                  ) : (
                    <div className="border-premium-line text-premium-forest flex h-20 w-20 items-center justify-center rounded-3xl border bg-white text-lg font-black">
                      {getInitials(teacher.name)}
                    </div>
                  )}
                  <div>
                    <h3 className="text-premium-ink text-xl font-bold">
                      {teacher.name}
                    </h3>
                    <p className="text-premium-forest mt-1 text-sm font-semibold tracking-[0.16em] uppercase">
                      {teacher.role}
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-premium-forest text-sm font-black tracking-[0.22em] uppercase">
                      Experience
                    </p>
                    <p className="text-premium-muted mt-2 text-sm leading-6">
                      {teacher.experience}
                    </p>
                    {teacher.experienceDetails?.length ? (
                      <ul className="text-premium-muted mt-3 list-disc space-y-1 pl-5 text-sm leading-6">
                        {teacher.experienceDetails.map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>

                  <div>
                    <p className="text-premium-forest text-sm font-black tracking-[0.22em] uppercase">
                      Qualifications
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {teacher.qualifications?.map((qualification) => (
                        <span
                          key={qualification}
                          className="border-premium-line text-premium-ink rounded-full border bg-white px-3 py-1.5 text-xs font-semibold"
                        >
                          {qualification}
                        </span>
                      ))}
                    </div>
                  </div>

                  {teacher.achievement ? (
                    <div>
                      <p className="text-premium-forest text-sm font-black tracking-[0.22em] uppercase">
                        Achievement
                      </p>
                      <p className="text-premium-muted mt-2 text-sm leading-6">
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

      <section className="bg-premium-bg py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <span className="text-premium-forest text-[11px] font-black tracking-[0.3em] uppercase">
              {content.values.badge.text}
            </span>
            <h2 className="text-premium-ink mt-4 text-3xl leading-tight font-medium md:text-5xl">
              {content.values.title}
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.values.items.map((item) => {
              const Icon = valueIconMap[item.icon as ValueIcon];

              return (
                <article
                  key={item.title}
                  className="border-premium-line shadow-premium-sm flex gap-4 rounded-[1.25rem] border bg-white p-5"
                >
                  <div className="bg-premium-bg text-premium-forest flex size-11 shrink-0 items-center justify-center rounded-2xl">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-premium-ink font-bold">{item.title}</h3>
                    <p className="text-premium-muted mt-2 text-sm leading-6">
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
