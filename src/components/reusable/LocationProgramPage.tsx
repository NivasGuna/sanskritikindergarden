import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpenCheck,
  Check,
  Clock3,
  HeartHandshake,
  MapPin,
  School,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import FinalCta from "@/components/reusable/FinalCta";

type ImageAsset = {
  src: string;
  alt: string;
};

type LocationAction = {
  text: string;
  href: string;
  variant?: string;
};

type LocationContent = {
  hero: {
    badge: string;
    title: string;
    description: string;
    image: ImageAsset;
  };
  highlights: {
    title: string;
    description: string;
  }[];
  sections: {
    eyebrow: string;
    title: string;
    lead: string;
    points: string[];
    closing: string;
  }[];
  families: {
    title: string;
    description: string;
    notes: string[];
    areas: string[];
  };
  cta: {
    badge: string;
    title: string;
    description: string;
    image: ImageAsset;
    actions?: LocationAction[];
    primaryAction?: LocationAction;
    secondaryAction?: LocationAction;
  };
};

type AssuranceItem = {
  icon: string;
  title: string;
  description: string;
};

type LocationProgramPageProps = {
  content: LocationContent;
  heroActions: LocationAction[];
  heroCallout: {
    eyebrow: string;
    text: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    description: string;
    assurances: AssuranceItem[];
    icons: string[];
  };
};

const iconMap = {
  BookOpenCheck,
  Clock3,
  HeartHandshake,
  MapPin,
  School,
  ShieldCheck,
  Sparkles,
} as const satisfies Record<string, LucideIcon>;

const highlightIconNames = ["School", "HeartHandshake", "MapPin"];

const accentClassNames = [
  "border-amber-100 bg-amber-50 text-amber-700",
  "border-teal-100 bg-teal-50 text-teal-700",
  "border-sky-100 bg-sky-50 text-sky-700",
];

function getIcon(name: string | undefined) {
  return iconMap[name as keyof typeof iconMap] ?? Sparkles;
}

function getCtaActions(content: LocationContent) {
  if (content.cta.actions?.length) return content.cta.actions;

  return [content.cta.primaryAction, content.cta.secondaryAction]
    .filter((action): action is LocationAction => Boolean(action))
    .map((action, index) => ({
      ...action,
      variant: index === 0 ? "primary" : "secondary",
    }));
}

function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
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
      <span className="text-[11px] font-black text-amber-700 uppercase">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-2xl leading-tight font-semibold wrap-break-word text-slate-950 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-slate-600 md:text-[17px] md:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default function LocationProgramPage({
  content,
  heroActions,
  heroCallout,
  experience,
}: LocationProgramPageProps) {
  const ctaActions = getCtaActions(content);
  const primaryCtaAction = ctaActions[0] ?? {
    text: "Contact Us",
    href: "/contact",
    variant: "primary",
  };
  const secondaryCtaAction = ctaActions[1];

  return (
    <main className="box-border w-full max-w-[100vw] overflow-x-hidden bg-white text-slate-950">
      <section className="font-premium-display box-border w-full max-w-[100vw] overflow-x-hidden bg-[#fff8ed] pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="mx-auto box-border w-full max-w-7xl px-6">
          <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="min-w-0">
              <div className="mb-7 inline-flex items-center gap-3">
                <span className="h-px w-8 bg-amber-600" />
                <span className="text-[11px] font-black text-amber-700 uppercase">
                  {content.hero.badge}
                </span>
              </div>

              <h1 className="max-w-[18ch] text-[2rem] leading-[1.15] font-semibold wrap-break-word text-slate-950 sm:max-w-3xl sm:text-4xl md:text-5xl">
                {content.hero.title}
              </h1>
              <p className="font-hero-subtitle mt-6 max-w-2xl text-base leading-8 font-semibold text-slate-700 md:text-lg md:leading-8">
                {content.hero.description}
              </p>

              <div className="mt-9 flex min-w-0 flex-col gap-3 sm:flex-row sm:flex-wrap">
                {heroActions.map((action, index) => (
                  <Button
                    key={action.text}
                    render={<Link href={action.href} />}
                    nativeButton={false}
                    variant={index === 0 ? "default" : "outline"}
                    className={
                      index === 0
                        ? "shadow-premium-sm box-border h-13 w-full max-w-[calc(100vw-3rem)] rounded-full border border-amber-600 bg-amber-600 px-6 text-center text-sm leading-tight font-bold whitespace-normal text-white transition hover:-translate-y-0.5 hover:bg-amber-700 sm:w-auto sm:px-8"
                        : "box-border h-13 w-full max-w-[calc(100vw-3rem)] rounded-full border-slate-200 bg-white/75 px-6 text-center text-sm leading-tight font-bold whitespace-normal text-slate-950 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white sm:w-auto sm:px-8"
                    }
                  >
                    {action.text}
                    {index === 0 ? (
                      <ArrowRight className="ml-2 size-4" />
                    ) : null}
                  </Button>
                ))}
              </div>
            </div>

            <div className="relative min-w-0">
              <div className="shadow-premium-md w-full overflow-hidden rounded-[1.75rem] border border-white bg-white p-2">
                <div className="relative aspect-[1672/941] overflow-hidden rounded-[1.35rem] bg-[#fff8ed]">
                  <Image
                    src={content.hero.image.src}
                    alt={content.hero.image.alt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(min-width: 1024px) 52vw, 100vw"
                  />
                </div>
              </div>

              <div className="shadow-premium-sm relative mt-5 max-w-full rounded-[1.25rem] border border-slate-200 bg-white p-5 md:absolute md:-bottom-8 md:left-8 md:max-w-sm">
                <p className="text-[11px] font-black text-amber-700 uppercase">
                  {heroCallout.eyebrow}
                </p>
                <p className="mt-2 text-lg leading-snug font-bold text-slate-950">
                  {heroCallout.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 -mt-6 box-border pb-10 md:-mt-10 md:pb-14">
        <div className="mx-auto box-border w-full max-w-7xl px-6">
          <div className="grid min-w-0 gap-4 md:grid-cols-3">
            {content.highlights.map((item, index) => {
              const Icon = getIcon(highlightIconNames[index]);

              return (
                <article
                  key={item.title}
                  className="shadow-premium-sm hover:shadow-premium-md min-h-[210px] min-w-0 rounded-[1.25rem] border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5"
                >
                  <div
                    className={`mb-5 flex size-11 items-center justify-center rounded-2xl border ${accentClassNames[index]}`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <h2 className="text-lg font-bold break-words text-slate-950">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-6 break-words text-slate-600">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="box-border bg-white pt-10 pb-16 md:pt-14 md:pb-24">
        <div className="mx-auto box-border w-full max-w-7xl px-6">
          <SectionIntro
            eyebrow={experience.eyebrow}
            title={experience.title}
            description={experience.description}
            align="center"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {experience.assurances.map((item, index) => {
              const Icon = getIcon(item.icon);

              return (
                <div
                  key={item.title}
                  className="shadow-premium-sm flex min-h-[132px] gap-4 rounded-[1.25rem] border border-slate-200 bg-[#fff8ed] p-4"
                >
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-2xl border ${accentClassNames[index]}`}
                  >
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {content.sections.map((section, index) => {
              const Icon = getIcon(experience.icons[index]);

              return (
                <article
                  key={section.title}
                  className="shadow-premium-sm min-w-0 rounded-[1.5rem] border border-slate-200 bg-white p-6 md:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className={`flex size-12 shrink-0 items-center justify-center rounded-2xl border ${accentClassNames[index]}`}
                    >
                      <Icon className="size-6" />
                    </div>
                    <span className="text-4xl leading-none font-black text-slate-100">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-6 text-[11px] font-black text-amber-700 uppercase">
                    {section.eyebrow}
                  </p>
                  <h2 className="mt-2 text-xl leading-tight font-semibold text-slate-950 md:text-2xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {section.lead}
                  </p>

                  <div className="mt-6 grid gap-3">
                    {section.points.map((point) => (
                      <div
                        key={point}
                        className="flex gap-3 rounded-2xl border border-slate-200 bg-[#fff8ed] p-3 text-sm leading-6 text-slate-700"
                      >
                        <Check className="mt-1 size-4 shrink-0 text-amber-700" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  <p className="mt-6 border-t border-slate-200 pt-5 text-sm leading-6 font-semibold text-slate-800">
                    {section.closing}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="box-border bg-[#fff8ed] py-16 md:py-24">
        <div className="mx-auto box-border w-full max-w-7xl px-6">
          <div className="grid min-w-0 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <SectionIntro
              eyebrow="Nearby Areas"
              title={content.families.title}
              description={content.families.description}
            />

            <div className="shadow-premium-md min-w-0 rounded-[1.5rem] border border-slate-200 bg-white p-6 md:p-8">
              <div className="grid gap-3 sm:grid-cols-3">
                {content.families.notes.map((note) => (
                  <div
                    key={note}
                    className="rounded-2xl border border-slate-200 bg-[#fff8ed] p-4 text-sm leading-6 font-bold text-slate-800"
                  >
                    {note}
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm font-bold text-amber-700 uppercase">
                Commonly served neighborhoods
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                {content.families.areas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-slate-200 bg-[#fff8ed] px-4 py-2 text-sm font-bold text-slate-800"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="box-border bg-white py-16 md:py-24">
        <div className="mx-auto box-border w-full max-w-7xl px-6">
          <FinalCta
            image={content.cta.image}
            className="border-white/70"
            contentClassName="md:grid-cols-[1fr_0.98fr] lg:px-14"
            badge={content.cta.badge}
            title={content.cta.title}
            description={content.cta.description}
            primaryAction={{
              text: primaryCtaAction.text,
              href: primaryCtaAction.href,
            }}
            secondaryAction={
              secondaryCtaAction
                ? {
                    text: secondaryCtaAction.text,
                    href: secondaryCtaAction.href,
                  }
                : undefined
            }
            accent="gold"
          />
        </div>
      </section>
    </main>
  );
}
