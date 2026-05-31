import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Blocks,
  BookOpenCheck,
  HeartHandshake,
  MapPin,
  Palette,
  School,
  ShieldCheck,
  Smile,
  Sparkles,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { HeroSlide } from "@/components/reusable/HeroCarousel";
import AnnouncementPopup from "@/components/AnnouncementPopup";
import HeroCarousel from "@/components/reusable/HeroCarousel";
import FinalCta from "@/components/reusable/FinalCta";
import content from "./home-content.json";

const heroSlides = content.hero.slides as HeroSlide[];

const iconMap = {
  Sprout,
  HeartHandshake,
  BookOpenCheck,
  Blocks,
  School,
  ShieldCheck,
  Smile,
  Palette,
  MapPin,
  Users,
} as const satisfies Record<string, LucideIcon>;

const accentClassNames = {
  gold: "border-gold-line bg-gold-mist text-gold-ink",
  sky: "border-sky-line bg-sky-mist text-sky-ink",
  mint: "border-mint-line bg-mint-mist text-mint-ink",
  peach: "border-peach-line bg-peach-mist text-peach-ink",
  lavender: "border-lavender-line bg-lavender-mist text-lavender-ink",
  coral: "border-coral-line bg-coral-mist text-coral-ink",
} as const;

type AccentKey = keyof typeof accentClassNames;

function getIcon(name: string) {
  return iconMap[name as keyof typeof iconMap] ?? Sparkles;
}

function getAccentClassName(name: string | undefined, fallback: AccentKey) {
  return accentClassNames[name as AccentKey] ?? accentClassNames[fallback];
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

export default function Home() {
  return (
    <main className="font-rounded-body bg-sage-mist text-forest-dark">
      <AnnouncementPopup />
      <HeroCarousel slides={heroSlides} />

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#ffffff_0%,#f7fbf3_48%,#eef8ff_100%)] py-16 md:py-24">
        <div className="bg-gold-mist/70 absolute top-12 right-[-4rem] h-40 w-40 rounded-full" />
        <div className="bg-mint-mist/80 absolute bottom-16 left-[-5rem] h-52 w-52 rounded-full" />
        <div className="relative container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionIntro
                badge={content.whoWeAre.badge}
                title={content.whoWeAre.title}
                description={content.whoWeAre.description}
                accent="mint"
              />

              <div className="text-forest-soft mt-7 space-y-4 text-base leading-8 font-semibold">
                {content.whoWeAre.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {content.whoWeAre.bullets.map((item) => {
                  const Icon = getIcon(item.icon);

                  return (
                    <div
                      key={item.text}
                      className="group shadow-forest-value hover:shadow-forest-card rounded-[1.25rem] border border-white/80 bg-white/90 p-4 text-sm leading-6 transition-all hover:-translate-y-0.5"
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`flex size-10 shrink-0 items-center justify-center rounded-2xl border ${getAccentClassName(
                            item.accent,
                            "mint"
                          )}`}
                        >
                          <Icon className="size-5" />
                        </span>
                        <p className="text-forest-dark font-bold">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="shadow-sky-media overflow-hidden rounded-[2rem] border border-white bg-white p-3">
                <div className="bg-sky-mist relative aspect-[4/3] overflow-hidden rounded-[1.55rem]">
                  <Image
                    src={content.whoWeAre.image.src}
                    alt={content.whoWeAre.image.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#f7fbf3_0%,#ffffff_52%,#eef8ff_100%)] py-12 md:py-16">
        <div className="bg-mint-mist/65 absolute top-8 left-[-4rem] h-40 w-40 rounded-full" />
        <div className="bg-gold-mist/65 absolute right-[-4rem] bottom-8 h-44 w-44 rounded-full" />
        <div className="relative container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <span className="border-sky-line bg-sky-mist text-sky-ink inline-flex rounded-full border px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase">
              {content.socialMetrics.badge}
            </span>
            <h2 className="font-playful-display text-forest-dark mt-4 text-3xl leading-tight font-extrabold md:text-4xl">
              {content.socialMetrics.title}
            </h2>
            <p className="text-forest-muted mt-3 text-sm leading-6 font-semibold md:text-base">
              {content.socialMetrics.description}
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {content.socialMetrics.items.map((item) => {
              const Icon = getIcon(item.icon);

              return (
                <article
                  key={`${item.value}-${item.label || item.description}`}
                  className="group shadow-forest-card hover:shadow-forest-floating relative overflow-hidden rounded-[1.25rem] border border-white/80 bg-white/92 p-5 transition-all hover:-translate-y-1"
                >
                  <div className="bg-sky-mist/70 absolute right-3 bottom-3 h-14 w-14 rounded-full transition-transform group-hover:scale-125" />
                  <div className="relative z-10 flex items-start gap-4">
                    <span
                      className={`flex size-11 shrink-0 items-center justify-center rounded-2xl border ${getAccentClassName(
                        item.accent,
                        "sky"
                      )}`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-playful-display text-forest-dark text-3xl leading-none font-extrabold">
                        {item.value}
                      </p>
                      {item.label ? (
                        <h3 className="text-forest-dark mt-2 text-xs font-black tracking-[0.16em] uppercase">
                          {item.label}
                        </h3>
                      ) : null}
                    </div>
                  </div>
                  <p className="text-forest-soft relative z-10 mt-4 text-sm leading-5 font-semibold">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#fff8de_0%,#fff5e7_100%)] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionIntro
            badge={content.programs.badge}
            title={content.programs.title}
            align="center"
            accent="gold"
            titleClassName="mx-auto max-w-4xl text-3xl md:text-5xl"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {content.programs.items.map((item) => {
              const Icon = getIcon(item.icon);

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group shadow-forest-card hover:shadow-forest-floating relative block min-h-[240px] overflow-hidden rounded-[1.5rem] border border-white/80 bg-white p-6 text-left transition-all hover:-translate-y-1"
                >
                  <div
                    className={`mb-6 flex size-13 items-center justify-center rounded-2xl border ${getAccentClassName(
                      item.accent,
                      "mint"
                    )}`}
                  >
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-playful-display text-forest-dark text-2xl leading-tight font-extrabold">
                    {item.title}
                  </h3>
                  <p className="text-forest-soft mt-3 text-sm leading-6 font-semibold">
                    {item.description}
                  </p>
                  <span className="text-mint-ink mt-6 inline-flex items-center text-sm font-black">
                    Learn more
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="bg-sky-mist absolute right-5 bottom-5 h-14 w-14 rounded-full opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <SectionIntro
              badge={content.whyFamiliesChoose.badge}
              title={content.whyFamiliesChoose.title}
              description={content.whyFamiliesChoose.description}
            />

            <div className="grid gap-4 md:grid-cols-3">
              {content.whyFamiliesChoose.items.map((item) => {
                const Icon = getIcon(item.icon);
                return (
                  <article
                    key={item.title}
                    className="border-peach-line bg-peach-mist shadow-forest-value rounded-[1.25rem] border p-6"
                  >
                    <div
                      className={`mb-5 flex size-11 items-center justify-center rounded-2xl border ${getAccentClassName(
                        item.accent,
                        "gold"
                      )}`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-playful-display text-forest-dark text-2xl font-extrabold">
                      {item.title}
                    </h3>
                    <p className="text-forest-soft mt-3 text-sm leading-6 font-semibold">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <FinalCta
            image={content.finalCta.image}
            badge={content.finalCta.badge}
            title={content.finalCta.title}
            description={content.finalCta.description}
            primaryAction={content.finalCta.primaryAction}
            secondaryAction={content.finalCta.secondaryAction}
            accent="mint"
          />
        </div>
      </section>
    </main>
  );
}
