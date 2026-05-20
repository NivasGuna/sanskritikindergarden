import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
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
import content from "./curriculum-content.json";

export const metadata: Metadata = content.metadata;

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
  "border-rose-100 bg-rose-50/75 text-rose-700",
  "border-sky-100 bg-sky-50/75 text-sky-700",
  "border-violet-100 bg-violet-50/70 text-violet-700",
  "border-orange-100 bg-orange-50/70 text-orange-700",
  "border-yellow-100 bg-yellow-50/70 text-yellow-700",
  "border-pink-100 bg-pink-50/70 text-pink-700",
];

const cigmaBreakdown = [
  { letter: "C", label: "Cognitive" },
  { letter: "I", label: "Intellectual" },
  { letter: "G", label: "Growth" },
  { letter: "M", label: "Motivational" },
  { letter: "A", label: "Assessment" },
];

type IconName = keyof typeof iconMap;

function getIcon(icon: string) {
  return iconMap[icon as IconName] ?? Sparkles;
}

function SectionIntro({
  badge,
  title,
  description,
  align = "left",
}: {
  badge: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"
      }
    >
      <span className="border-coral-line bg-coral-mist text-coral-ink inline-flex rounded-full border px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase">
        {badge}
      </span>
      <h2 className="font-playful-display text-forest-dark mt-5 text-4xl leading-[1.03] font-extrabold md:text-6xl">
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

function FramedImage({
  image,
  badge,
  title,
  aspectClassName = "aspect-[4/3]",
  imageClassName = "object-contain p-2",
}: {
  image: {
    src: string;
    alt: string;
  };
  badge: string;
  title: string;
  aspectClassName?: string;
  imageClassName?: string;
}) {
  return (
    <div className="border-premium-line shadow-premium-md relative overflow-hidden rounded-[1.5rem] border bg-white">
      <div className={`relative bg-[#fff8ed] ${aspectClassName}`}>
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className={imageClassName}
          sizes="(min-width: 1024px) 48vw, 100vw"
        />
      </div>
      <div className="shadow-premium-sm absolute inset-x-4 bottom-4 rounded-2xl border border-white/60 bg-white/90 p-4 backdrop-blur-md">
        <p className="text-premium-forest text-[11px] font-black uppercase">
          {badge}
        </p>
        <p className="text-premium-ink mt-1 text-lg leading-tight font-bold md:text-xl">
          {title}
        </p>
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
  accent?: "amber" | "rose";
}) {
  const accentClassName =
    accent === "amber"
      ? "border-amber-100 bg-amber-50 text-amber-700"
      : "border-rose-100 bg-rose-50 text-rose-700";
  const dotClassName = accent === "amber" ? "text-amber-600" : "text-rose-600";

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${
        surface === "white" ? "bg-white" : "bg-[#fff8ed]"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <SectionIntro badge={badge} title={title} />

          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {items.map((item, index) => (
              <div
                key={item}
                className="border-premium-line text-premium-ink shadow-premium-sm flex min-h-14 items-center gap-3 rounded-xl border bg-white px-4 py-3 text-sm font-bold"
              >
                {index < 3 ? (
                  <span
                    className={`flex size-8 shrink-0 items-center justify-center rounded-xl border text-xs font-black ${accentClassName}`}
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                ) : (
                  <CircleDot
                    className={`size-4 shrink-0 ${
                      index % 2 === 0 ? dotClassName : "text-sky-600"
                    }`}
                  />
                )}
                {item}
              </div>
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
        overlayClassName="bg-gradient-to-r from-slate-950/92 via-slate-950/70 to-slate-950/18"
      >
        <div className="relative z-10 container mx-auto flex min-h-[100svh] items-center px-6 py-28">
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

            <p className="text-sky-mist mt-5 max-w-[32rem] text-lg leading-snug font-bold drop-shadow-[0_4px_18px_rgb(0_0_0_/_52%)] md:text-2xl">
              {content.hero.subtitle}
            </p>

            <p className="mt-6 max-w-[32rem] text-base leading-relaxed font-semibold text-white/88 drop-shadow-[0_4px_18px_rgb(0_0_0_/_52%)] md:text-lg">
              {content.hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Button
                render={<Link href={content.hero.buttons.primary.link} />}
                nativeButton={false}
                className="bg-coral shadow-coral-button hover:bg-coral-dark h-14 rounded-full px-8 text-base font-black text-white transition-all hover:-translate-y-0.5 sm:px-10"
              >
                {content.hero.buttons.primary.text}
                <ArrowRight className="ml-2 size-5" />
              </Button>
              <Button
                render={<Link href={content.hero.buttons.secondary.link} />}
                nativeButton={false}
                variant="outline"
                className="h-14 rounded-full border-white/45 bg-white/14 px-8 text-base font-black text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/20 sm:px-10"
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
          />

          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-5">
            {cigmaBreakdown.map((item) => (
              <div
                key={item.letter}
                className="border-premium-line shadow-premium-sm rounded-[1rem] border bg-[#fff8ed] p-4 text-center"
              >
                <p className="text-3xl font-black text-amber-700">
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

      <section className="bg-gold-mist py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <FramedImage
              image={content.activityLearning.image}
              badge="Learning by doing"
              title="Hands-on clarity through play"
              aspectClassName="aspect-[4/3]"
            />

            <div>
              <SectionIntro
                badge={content.activityLearning.badge}
                title={content.activityLearning.title}
                description={content.activityLearning.description}
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {content.activityLearning.items.map((item, index) => {
                  const Icon = getIcon(item.icon);

                  return (
                    <article
                      key={item.title}
                      className="border-premium-line shadow-premium-sm min-h-[210px] rounded-[1.25rem] border bg-white p-5"
                    >
                      <div className="mb-4 flex items-center gap-3">
                        <span
                          className={`flex size-10 items-center justify-center rounded-2xl border ${cardAccentClassNames[index]}`}
                        >
                          <Icon className="size-5" />
                        </span>
                        <h3 className="text-premium-ink text-base font-bold">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-premium-muted text-sm leading-6">
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

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <SectionIntro
                badge={content.skillDevelopment.badge}
                title={content.skillDevelopment.title}
                description={content.skillDevelopment.description}
              />

              <div className="mt-8 grid gap-5">
                {content.skillDevelopment.groups.map((group, index) => {
                  const Icon = getIcon(group.icon);

                  return (
                    <article
                      key={group.title}
                      className="border-premium-line shadow-premium-sm rounded-[1.5rem] border bg-[#fff8ed] p-5 md:p-6"
                    >
                      <div className="grid gap-5 md:grid-cols-[0.95fr_1.05fr]">
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex size-12 shrink-0 items-center justify-center rounded-2xl border ${cardAccentClassNames[index]}`}
                          >
                            <Icon className="size-6" />
                          </div>
                          <div>
                            <p className="text-premium-forest text-[11px] font-black uppercase">
                              {group.label}
                            </p>
                            <h3 className="text-premium-ink mt-2 text-xl font-bold md:text-2xl">
                              {group.title}
                            </h3>
                            <p className="text-premium-muted mt-3 text-sm leading-6">
                              {group.description}
                            </p>
                          </div>
                        </div>

                        <div>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {group.skills.map((skill) => (
                              <div
                                key={skill}
                                className="border-premium-line text-premium-ink flex min-h-11 items-center gap-3 rounded-xl border bg-white px-3 py-2 text-sm font-bold"
                              >
                                <Check className="text-premium-forest size-4 shrink-0" />
                                {skill}
                              </div>
                            ))}
                          </div>

                          <div className="mt-4 flex flex-wrap gap-2">
                            {group.activities.map((activity) => (
                              <span
                                key={activity}
                                className="border-premium-line text-premium-muted rounded-full border bg-white px-3 py-1.5 text-xs font-semibold"
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

            <FramedImage
              image={content.skillDevelopment.image}
              badge="Fine + gross motor practice"
              title="Confidence built through movement and play"
              aspectClassName="aspect-[16/10]"
            />
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

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionIntro
                badge={content.pedagogy.badge}
                title={content.pedagogy.title}
                description={content.pedagogy.description}
              />

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {content.pedagogy.items.map((item, index) => {
                  const Icon = getIcon(item.icon);

                  return (
                    <article
                      key={item.title}
                      className="border-premium-line shadow-premium-sm min-h-[230px] rounded-[1.25rem] border bg-[#fff8ed] p-5"
                    >
                      <div
                        className={`mb-5 flex size-11 items-center justify-center rounded-2xl border ${cardAccentClassNames[index]}`}
                      >
                        <Icon className="size-5" />
                      </div>
                      <h3 className="text-premium-ink text-lg font-bold">
                        {item.title}
                      </h3>
                      <p className="text-premium-muted mt-3 text-sm leading-6">
                        {item.description}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>

            <FramedImage
              image={content.pedagogy.image}
              badge="Teaching pedagogy"
              title="Guided conversation, exploration, and child-led responses"
              aspectClassName="aspect-[16/10]"
            />
          </div>
        </div>
      </section>

      <section className="bg-gold-mist py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionIntro
            badge={content.teacherRatio.badge}
            title={content.teacherRatio.title}
            align="center"
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
                        ? "bg-rose-50 text-rose-700"
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
        accent="rose"
      />

      <section id="admissions-open" className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="border-premium-line shadow-premium-md bg-premium-ink relative min-h-[430px] overflow-hidden rounded-[2rem] border">
            <Image
              src={content.cta.image.src}
              alt={content.cta.image.alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="bg-premium-ink/72 absolute inset-0" />
            <div className="relative z-10 grid min-h-[430px] gap-8 px-6 py-10 text-white md:grid-cols-[1fr_auto] md:items-end md:px-10 md:py-14 lg:px-14">
              <div className="max-w-3xl">
                <span className="inline-flex rounded-full border border-white/20 bg-white/12 px-4 py-2 text-[11px] font-black text-amber-100 uppercase backdrop-blur-md">
                  {content.cta.badge}
                </span>
                <h2 className="mt-5 text-3xl leading-tight font-semibold md:text-4xl">
                  {content.cta.title}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/78 md:text-[17px] md:leading-8">
                  {content.cta.description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
                <Button
                  render={<Link href={content.cta.buttons.primary.link} />}
                  nativeButton={false}
                  className="text-premium-ink h-[3.25rem] rounded-full bg-white px-8 text-sm font-bold transition-all hover:-translate-y-0.5 hover:bg-amber-50"
                >
                  {content.cta.buttons.primary.text}
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  render={<Link href={content.cta.buttons.secondary.link} />}
                  nativeButton={false}
                  variant="outline"
                  className="h-[3.25rem] rounded-full border-white/35 bg-white/8 px-8 text-sm font-bold text-white backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/14"
                >
                  {content.cta.buttons.secondary.text}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
