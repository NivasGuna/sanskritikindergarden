import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import {
  ArrowRight,
  Blocks,
  BookOpenCheck,
  Brain,
  Check,
  CircleDot,
  ClipboardCheck,
  Dumbbell,
  Eye,
  Hand,
  Handshake,
  Heart,
  Languages,
  Lightbulb,
  MapPin,
  MessageCircle,
  Move,
  Palette,
  Puzzle,
  Scissors,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroBanner from "@/components/reusable/HeroBanner";
import FinalCta from "@/components/reusable/FinalCta";
import { cn } from "@/lib/utils";
import content from "./curriculum-content.json";

export const metadata: Metadata = constructMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  canonicalUrl: "/curriculum",
});

const iconMap = {
  Blocks,
  BookOpenCheck,
  Brain,
  ClipboardCheck,
  Dumbbell,
  Eye,
  Hand,
  Handshake,
  Heart,
  Languages,
  Lightbulb,
  MessageCircle,
  Move,
  Palette,
  Puzzle,
  Scissors,
  Sparkles,
  Users,
} as const satisfies Record<string, LucideIcon>;

const cardAccentClassNames = [
  "border-amber-100 bg-amber-50/70 text-amber-700",
  "border-teal-100 bg-teal-50/75 text-teal-700",
  "border-sky-100 bg-sky-50/75 text-sky-700",
  "border-violet-100 bg-violet-50/70 text-violet-700",
  "border-orange-100 bg-orange-50/70 text-orange-700",
  "border-yellow-100 bg-yellow-50/70 text-yellow-700",
  "border-cyan-100 bg-cyan-50/70 text-cyan-700",
];

const cigmaBreakdown = [
  { letter: "C", label: "Cognitive" },
  { letter: "I", label: "Intellectual" },
  { letter: "G", label: "Growth" },
  { letter: "M", label: "Motivational" },
  { letter: "A", label: "Assessment" },
];

const coCurricularIcons = [
  Users,
  MessageCircle,
  BookOpenCheck,
  Sparkles,
  Palette,
  Heart,
  Eye,
  Handshake,
  Blocks,
  MapPin,
  Dumbbell,
] as const;

const extraCurricularIcons = [
  Languages,
  Move,
  BookOpenCheck,
  Users,
  Palette,
  Sparkles,
  Hand,
  Scissors,
  Heart,
] as const;

type IconName = keyof typeof iconMap;

function getIcon(icon: string) {
  return iconMap[icon as IconName] ?? Sparkles;
}

function SectionIntro({
  badge,
  title,
  description,
  align = "left",
  accent = "mint",
  titleClassName = "",
}: {
  badge: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  accent?: "mint" | "sky" | "gold" | "peach";
  titleClassName?: string;
}) {
  const badgeClassName = {
    mint: "border-mint-line bg-mint-mist text-mint-ink",
    sky: "border-sky-line bg-sky-mist text-sky-ink",
    gold: "border-gold-line bg-white text-gold-ink",
    peach: "border-peach-line bg-peach-mist text-peach-ink",
  }[accent];

  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      <span
        className={`inline-flex rounded-full border px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase ${badgeClassName}`}
      >
        {badge}
      </span>
      <h2
        className={`font-playful-display text-forest-dark mt-5 text-4xl leading-[1.04] font-extrabold md:text-6xl ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p className="text-forest-muted mt-4 text-base leading-7 font-semibold md:text-[17px] md:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function LearningImagePanel({
  image,
  badge,
  title,
  className,
  imageClassName = "object-cover",
}: {
  image: {
    src: string;
    alt: string;
  };
  badge: string;
  title: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <div
      className={cn(
        "shadow-sky-media relative min-h-105 overflow-hidden rounded-[1.75rem] border border-white bg-white md:min-h-[500px]",
        className
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className={imageClassName}
        sizes="(min-width: 1024px) 48vw, 100vw"
      />
      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-white/94 via-white/66 to-transparent p-5 pt-24">
        <div className="max-w-sm rounded-[1.2rem] border border-white/80 bg-white/88 p-4 shadow-premium-sm backdrop-blur-sm">
          <p className="text-premium-forest text-[10px] font-black tracking-[0.22em] uppercase">
            {badge}
          </p>
          <p className="text-premium-ink mt-1 text-base leading-snug font-extrabold md:text-lg">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

function ActivityListSection({
  id,
  badge,
  title,
  items,
  surface = "white",
  accent = "amber",
}: {
  id?: string;
  badge: string;
  title: string;
  items: readonly string[];
  surface?: "white" | "muted";
  accent?: "amber" | "teal";
}) {
  const isAmber = accent === "amber";
  const accentClassName = isAmber
    ? "border-gold-line bg-gold-mist text-gold-ink"
    : "border-mint-line bg-mint-mist text-mint-ink";
  const softAccentClassName = isAmber
    ? "bg-gold-mist text-gold-ink"
    : "bg-mint-mist text-mint-ink";
  const icons = isAmber ? coCurricularIcons : extraCurricularIcons;

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden py-14 md:py-20",
        surface === "white"
          ? "bg-[linear-gradient(135deg,#ffffff_0%,#fff8de_58%,#f7fbf3_100%)]"
          : "bg-[linear-gradient(135deg,#eef8ff_0%,#ffffff_52%,#effff6_100%)]"
      )}
    >
      <div
        className={cn(
          "absolute top-12 right-[-4rem] h-44 w-44 rounded-full",
          isAmber ? "bg-gold-mist/80" : "bg-mint-mist/80"
        )}
      />
      <div className="absolute bottom-16 left-[-5rem] h-56 w-56 rounded-full bg-sky-mist/70" />
      <div className="container relative mx-auto px-6">
        <div
          className={cn(
            "grid gap-6",
            surface === "white"
              ? "lg:grid-cols-[0.62fr_1.38fr] lg:items-stretch"
              : "lg:grid-cols-[1.36fr_0.64fr] lg:items-stretch"
          )}
        >
          <div
            className={cn(
              "rounded-[1.5rem] border border-white/80 bg-white/84 p-6 shadow-forest-card backdrop-blur-sm md:p-7",
              surface === "muted" && "lg:order-2"
            )}
          >
            <SectionIntro
              badge={badge}
              title={title}
              accent={isAmber ? "gold" : "mint"}
              titleClassName="!text-2xl sm:!text-3xl md:!text-4xl"
            />
            <div
              className={cn(
                "mt-6 rounded-[1.15rem] border p-4",
                accentClassName
              )}
            >
              <p className="font-hero-subtitle text-sm leading-6 font-bold">
                {isAmber
                  ? "Children practice expression, confidence, collaboration, and celebration through shared school experiences."
                  : "Creative movement, arts, nature, and role play add joyful variety to the learning week."}
              </p>
            </div>
          </div>

          <div
            className={cn(
              "grid gap-3 sm:grid-cols-2",
              surface === "white" ? "xl:grid-cols-4" : "xl:grid-cols-3"
            )}
          >
            {items.map((item, index) => (
              <article
                key={item}
                className={cn(
                  "group relative flex min-h-[116px] items-center gap-4 overflow-hidden rounded-[1.15rem] border border-white/80 bg-white p-4 shadow-premium-sm transition-all hover:-translate-y-0.5 hover:shadow-premium-md",
                  surface === "muted" && index === 0 && "sm:col-span-2 xl:col-span-1"
                )}
              >
                <div className="absolute right-3 bottom-3 h-11 w-11 rounded-full bg-sky-mist/70 transition-transform group-hover:scale-125" />
                <span
                  className={cn(
                    "relative z-10 flex size-10 shrink-0 items-center justify-center rounded-2xl border",
                    index % 3 === 1
                      ? "border-sky-line bg-sky-mist text-sky-ink"
                      : index % 3 === 2
                        ? "border-peach-line bg-peach-mist text-peach-ink"
                        : accentClassName
                  )}
                >
                  {(() => {
                    const Icon = icons[index % icons.length] ?? CircleDot;
                    return <Icon className="size-5" />;
                  })()}
                </span>
                <div className="relative z-10 min-w-0">
                  <h3 className="text-premium-ink text-sm leading-snug font-extrabold md:text-base">
                    {item}
                  </h3>
                  <span
                    className={cn(
                      "mt-2 inline-flex rounded-full px-2.5 py-1 text-[9px] font-black tracking-[0.16em] uppercase",
                      softAccentClassName
                    )}
                  >
                    {isAmber ? "Participate" : "Explore"}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CurriculumPage() {
  return (
    <main className="font-rounded-body bg-sage-mist text-forest-dark min-h-screen overflow-hidden">
      <HeroBanner
        image={content.hero.image}
        imageClassName="object-[68%_center] min-[1000px]:object-center"
        overlayClassName="hidden"
      >
        <div className="relative z-10 container mx-auto flex min-h-[100svh] items-center px-6 py-28">
          <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-12 max-w-[34rem] duration-1000">
            <div className="mb-8 inline-flex items-center gap-3">
              <span className="size-2 rounded-full bg-gold" />
              <span className="text-gold-ink text-[10px] font-black tracking-[0.26em] uppercase drop-shadow-[0_3px_12px_rgb(255_255_255_/_90%)]">
                {content.hero.badge}
              </span>
            </div>

            <h1 className="font-premium-display text-forest-dark max-w-[34rem] text-[2.85rem] leading-[1.04] font-bold drop-shadow-[0_4px_14px_rgb(255_255_255_/_88%)] sm:text-5xl md:text-6xl">
              {content.hero.title.line1}{" "}
              <span className="text-gold-ink">
                {content.hero.title.highlight}
              </span>
            </h1>

            <p className="hero-subheading text-premium-ink mt-6 max-w-[32rem] drop-shadow-[0_3px_12px_rgb(255_255_255_/_90%)] md:text-xl">
              {content.hero.subtitle}
            </p>

            <p className="hero-subheading text-premium-ink mt-6 max-w-[32rem] drop-shadow-[0_3px_12px_rgb(255_255_255_/_90%)] md:text-xl">
              {content.hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button
                render={<Link href={content.hero.buttons.primary.link} />}
                nativeButton={false}
                className="bg-gold shadow-[0_18px_45px_rgb(245_173_47_/_24%)] hover:bg-gold-ink h-14 rounded-full px-8 text-base font-black text-forest-dark transition-all hover:-translate-y-0.5 hover:text-white sm:px-10"
              >
                {content.hero.buttons.primary.text}
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button
                render={<Link href={content.hero.buttons.secondary.link} />}
                nativeButton={false}
                variant="outline"
                className="text-forest-dark h-14 rounded-full border-forest-dark/20 bg-white/78 px-8 text-base font-black backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white sm:px-10"
              >
                {content.hero.buttons.secondary.text}
              </Button>
            </div>
          </div>
        </div>
      </HeroBanner>

      <section className="relative z-20 -mt-16 pb-16 md:-mt-20 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {content.hero.highlights.map((item, index) => {
              const Icon = getIcon(item.icon);

              return (
                <article
                  key={item.title}
                  className="border-premium-line shadow-premium-md min-h-[230px] rounded-[1.25rem] border bg-white p-6 transition-all hover:-translate-y-0.5"
                >
                  <div
                    className={`mb-5 flex size-12 items-center justify-center rounded-2xl border ${cardAccentClassNames[index]}`}
                  >
                    <Icon className="size-6" />
                  </div>
                  <h2 className="text-premium-ink text-lg font-bold">
                    {item.title}
                  </h2>
                  <p className="text-premium-muted mt-3 text-sm leading-6">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="cigma" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionIntro
            badge={content.cigma.badge}
            title={content.cigma.title}
            description={content.cigma.description}
            align="center"
            accent="sky"
            titleClassName="md:text-5xl"
          />

          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-5">
            {cigmaBreakdown.map((item) => (
              <div
                key={item.letter}
                className="border-sky-line shadow-premium-sm rounded-[1rem] border bg-sky-mist p-4 text-center"
              >
                <p className="text-3xl font-black text-sky-ink">
                  {item.letter}
                </p>
                <p className="text-premium-muted mt-1 text-xs font-bold">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {content.cigma.pillars.map((pillar, index) => {
              const Icon = getIcon(pillar.icon);

              return (
                <article
                  key={pillar.title}
                  className="border-premium-line shadow-premium-sm min-h-[220px] rounded-[1.25rem] border bg-white p-5"
                >
                  <div
                    className={`mb-4 flex size-10 items-center justify-center rounded-2xl border ${cardAccentClassNames[index]}`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-premium-ink font-bold">{pillar.title}</h3>
                  <p className="text-premium-muted mt-2 text-sm leading-6">
                    {pillar.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#fff8de_0%,#ffffff_46%,#fff5e7_100%)] py-14 md:py-20">
        <div className="absolute top-12 left-[-4rem] h-48 w-48 rounded-full bg-gold-mist/80" />
        <div className="absolute right-[-5rem] bottom-16 h-64 w-64 rounded-full bg-peach-mist/80" />
        <div className="container relative mx-auto px-6">
          <div className="grid items-stretch gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <LearningImagePanel
              image={content.activityLearning.image}
              badge="Learning by doing"
              title="Hands-on clarity through play"
            />

            <div className="rounded-[1.75rem] border border-white/80 bg-white/86 p-6 shadow-forest-card backdrop-blur-sm md:p-8">
              <SectionIntro
                badge={content.activityLearning.badge}
                title={content.activityLearning.title}
                description={content.activityLearning.description}
                accent="gold"
                titleClassName="!text-2xl sm:!text-3xl md:!text-4xl"
              />

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {content.activityLearning.items.map((item, index) => {
                  const Icon = getIcon(item.icon);

                  return (
                    <article
                      key={item.title}
                      className={cn(
                        "group min-h-[154px] rounded-[1.15rem] border p-4 transition-all hover:-translate-y-0.5 hover:shadow-premium-md",
                        index === 0
                          ? "border-gold-line bg-gold-mist"
                          : "border-white bg-white"
                      )}
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className={`flex size-11 items-center justify-center rounded-2xl border bg-white/86 shadow-premium-sm ${cardAccentClassNames[index]}`}
                        >
                          <Icon className="size-5" />
                        </span>
                        <h3 className="text-premium-ink text-sm leading-snug font-extrabold md:text-base">
                          {item.title}
                        </h3>
                      </div>
                      <p className="font-hero-subtitle text-premium-muted text-sm leading-6 font-semibold">
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#eef8ff_0%,#ffffff_50%,#effff6_100%)] py-14 md:py-20">
        <div className="absolute top-16 right-[-5rem] h-56 w-56 rounded-full bg-sky-mist" />
        <div className="absolute bottom-12 left-[-4rem] h-44 w-44 rounded-full bg-mint-mist/80" />
        <div className="container relative mx-auto px-6">
          <SectionIntro
            badge={content.skillDevelopment.badge}
            title={content.skillDevelopment.title}
            description={content.skillDevelopment.description}
            align="center"
            accent="sky"
            titleClassName="md:text-5xl"
          />

          <div className="mx-auto mt-10 max-w-5xl">
            <LearningImagePanel
              image={content.skillDevelopment.image}
              badge="Fine + gross motor practice"
              title="Confidence built through movement and play"
              className="h-[350px] bg-sky-wash md:h-[450px]"
              imageClassName="object-contain object-bottom p-4"
            />
          </div>

          <div className="mx-auto mt-8 max-w-4xl rounded-[1.2rem] border border-sky-line bg-sky-mist/80 p-5 text-center">
            <p className="font-hero-subtitle text-sky-ink text-sm leading-6 font-bold sm:text-base">
              Fine and gross motor practice is woven into classroom routines
              so children build control, balance, and creative confidence
              without the experience feeling formal or pressured.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
            {content.skillDevelopment.groups.map((group, index) => {
              const Icon = getIcon(group.icon);

              return (
                <article
                  key={group.title}
                  className="group rounded-[1.5rem] border border-white/80 bg-white/88 p-6 shadow-premium-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:shadow-premium-md md:p-8"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex size-14 shrink-0 items-center justify-center rounded-2xl border bg-white shadow-premium-sm ${cardAccentClassNames[index]}`}
                    >
                      <Icon className="size-7" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-premium-forest text-[11px] font-black tracking-[0.2em] uppercase">
                        {group.label}
                      </p>
                      <h3 className="text-premium-ink mt-1.5 text-xl leading-snug font-extrabold md:text-2xl">
                        {group.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="font-hero-subtitle text-premium-muted mt-4 text-sm leading-6 font-semibold">
                    {group.description}
                  </p>

                  <div className="mt-6 space-y-5">
                    <div>
                      <p className="text-forest-dark mb-3 text-[11px] font-black tracking-[0.2em] uppercase">
                        Core gains
                      </p>
                      <div className="grid gap-2">
                        {group.skills.map((skill) => (
                          <div
                            key={skill}
                            className="border-mint-line text-premium-ink flex min-h-10 items-center gap-3 rounded-xl border bg-mint-mist/55 px-3 py-2 text-sm font-bold"
                          >
                            <Check className="text-premium-forest size-4 shrink-0" />
                            {skill}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-forest-dark mb-3 text-[11px] font-black tracking-[0.2em] uppercase">
                        Classroom activities
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {group.activities.map((activity) => (
                          <span
                            key={activity}
                            className="border-sky-line text-sky-ink rounded-full border bg-sky-mist px-3 py-1.5 text-xs font-black"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-sage-mist py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionIntro
            badge={content.developmentSpheres.badge}
            title={content.developmentSpheres.title}
            description={content.developmentSpheres.description}
            align="center"
            accent="peach"
            titleClassName="md:text-5xl"
          />

          <div className="border-premium-line shadow-premium-md relative mt-10 overflow-hidden rounded-[1.5rem] border bg-white">
            <div className="relative aspect-[16/10] bg-white">
              <Image
                src={content.developmentSpheres.image.src}
                alt={content.developmentSpheres.image.alt}
                fill
                className="object-contain p-2"
                sizes="100vw"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {content.developmentSpheres.items.map((item, index) => {
              const Icon = getIcon(item.icon);

              return (
                <article
                  key={item.title}
                  className={`border-premium-line shadow-premium-sm rounded-[1.25rem] border bg-white p-6 ${
                    index === 6 ? "lg:col-span-3" : ""
                  }`}
                >
                  <div className="flex gap-4">
                    <div
                      className={`flex size-11 shrink-0 items-center justify-center rounded-2xl border ${
                        cardAccentClassNames[
                          index % cardAccentClassNames.length
                        ]
                      }`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-premium-ink text-lg font-bold">
                        {item.title}
                      </h3>
                      <p className="text-premium-muted mt-2 text-sm leading-6">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-14 md:py-20">
        <div className="absolute top-16 left-[-4rem] h-48 w-48 rounded-full bg-mint-mist/80" />
        <div className="container mx-auto px-6">
          <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1fr]">
            <LearningImagePanel
              image={content.pedagogy.image}
              badge="Teaching pedagogy"
              title="Guided conversation, exploration, and child-led responses"
              className="lg:order-2"
              imageClassName="object-cover object-[24%_center]"
            />

            <div className="rounded-[1.75rem] border border-mint-line/60 bg-mint-mist/55 p-6 shadow-forest-card md:p-8">
              <SectionIntro
                badge={content.pedagogy.badge}
                title={content.pedagogy.title}
                description={content.pedagogy.description}
                accent="mint"
                titleClassName="!text-2xl sm:!text-3xl md:!text-4xl"
              />

              <div className="relative mt-6 grid gap-3">
                <div className="absolute top-6 bottom-6 left-6 hidden w-px bg-mint-line md:block" />
                {content.pedagogy.items.map((item, index) => {
                  const Icon = getIcon(item.icon);

                  return (
                    <article
                      key={item.title}
                      className={cn(
                        "relative rounded-[1.2rem] border p-4 shadow-premium-sm transition-all hover:-translate-y-0.5 hover:shadow-premium-md md:ml-10",
                        index === 0
                          ? "border-mint-line bg-mint-mist"
                          : index === 1
                            ? "border-gold-line bg-gold-mist"
                            : "border-sky-line bg-sky-mist"
                      )}
                    >
                      <div className="flex gap-4">
                        <div
                          className={`flex size-12 shrink-0 items-center justify-center rounded-2xl border bg-white shadow-premium-sm ${cardAccentClassNames[index]}`}
                        >
                          <Icon className="size-6" />
                        </div>
                        <div>
                          <p className="text-premium-forest text-[10px] font-black tracking-[0.22em] uppercase">
                            Method {index + 1}
                          </p>
                          <h3 className="text-premium-ink mt-1 text-base font-extrabold md:text-lg">
                            {item.title}
                          </h3>
                          <p className="font-hero-subtitle text-premium-muted mt-2 text-sm leading-6 font-semibold">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gold-mist py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionIntro
            badge={content.teacherRatio.badge}
            title={content.teacherRatio.title}
            align="center"
            accent="gold"
            titleClassName="md:text-5xl"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {content.teacherRatio.items.map((item, index) => (
              <article
                key={item.program}
                className="border-premium-line shadow-premium-sm hover:shadow-premium-md rounded-[1.25rem] border bg-white p-6 text-center transition-all hover:-translate-y-0.5"
              >
                <p className="text-premium-forest text-[11px] font-black uppercase">
                  {item.program}
                </p>
                <div
                  className={`mx-auto mt-5 flex size-24 items-center justify-center rounded-2xl ${
                    index === 0
                      ? "bg-amber-50 text-amber-700"
                      : index === 1
                        ? "bg-teal-50 text-teal-700"
                        : "bg-sky-50 text-sky-700"
                  }`}
                >
                  <span className="text-3xl font-black">{item.ratio}</span>
                </div>
                <p className="text-premium-muted mx-auto mt-5 max-w-xs text-sm leading-6">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ActivityListSection
        id="co-curricular"
        badge={content.coCurricular.badge}
        title={content.coCurricular.title}
        items={content.coCurricular.items}
        accent="amber"
      />

      <ActivityListSection
        id="extra-curricular"
        badge={content.extraCurricular.badge}
        title={content.extraCurricular.title}
        items={content.extraCurricular.items}
        surface="muted"
        accent="teal"
      />

      <section id="admissions-open" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <FinalCta
            image={content.cta.image}
            className="border-white/70"
            contentClassName="lg:px-14"
            badge={content.cta.badge}
            title={content.cta.title}
            description={content.cta.description}
            primaryAction={{
              text: content.cta.buttons.primary.text,
              href: content.cta.buttons.primary.link,
            }}
            secondaryAction={{
              text: content.cta.buttons.secondary.text,
              href: content.cta.buttons.secondary.link,
            }}
            accent="gold"
          />
        </div>
      </section>
    </main>
  );
}
