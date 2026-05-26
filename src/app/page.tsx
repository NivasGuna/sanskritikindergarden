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

const whoWeAreBullets: {
  icon: LucideIcon;
  text: string;
  className: string;
}[] = [
  {
    icon: Smile,
    text: "Warm mornings for a confident start.",
    className: "border-gold-line bg-gold-mist text-gold-ink",
  },
  {
    icon: Palette,
    text: "Play-based learning for creativity & language.",
    className: "border-sky-line bg-sky-mist text-sky-ink",
  },
  {
    icon: ShieldCheck,
    text: "Secure campus with caring routines.",
    className: "border-mint-line bg-mint-mist text-mint-ink",
  },
  {
    icon: MapPin,
    text: "Easy access for Velachery & Guindy families.",
    className: "border-peach-line bg-peach-mist text-peach-ink",
  },
];

const programLinks = [
  {
    title: "Preschool in Velachery",
    description: "Explore our playful learning approach and daily rhythm.",
    href: "/preschool-in-velachery",
  },
  {
    title: "Daycare in Velachery",
    description: "Reliable care routines for working families.",
    href: "/daycare-in-velachery",
  },
  {
    title: "Kindergarten in Velachery",
    description: "Building school readiness with confidence.",
    href: "/kindergarten-in-velachery",
  },
  {
    title: "Play School in Velachery",
    description: "A gentle group learning start for little ones.",
    href: "/play-school-in-velachery",
  },
  {
    title: "Preschool Near Guindy",
    description: "Premium early education options near Guindy.",
    href: "/preschool-near-guindy",
  },
  {
    title: "Daycare Near Guindy",
    description: "Practical daycare access for nearby families.",
    href: "/daycare-near-guindy",
  },
];

const programAccents = [
  "border-mint-line bg-mint-mist text-mint-ink",
  "border-sky-line bg-sky-mist text-sky-ink",
  "border-gold-line bg-gold-mist text-gold-ink",
  "border-peach-line bg-peach-mist text-peach-ink",
  "border-lavender-line bg-lavender-mist text-lavender-ink",
  "border-coral-line bg-coral-mist text-coral-ink",
] as const;

const programIcons = [
  Sprout,
  HeartHandshake,
  BookOpenCheck,
  Blocks,
  School,
  ShieldCheck,
] as const;

const whyItems: {
  icon: LucideIcon;
  title: string;
  description: string;
  className: string;
}[] = [
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    description: "Secured campus with CCTV and child-safe facilities.",
    className: "border-amber-100 bg-amber-50 text-amber-700",
  },
  {
    icon: Users,
    title: "Experienced Teachers",
    description: "Dedicated educators in early childhood development.",
    className: "border-teal-100 bg-teal-50 text-teal-700",
  },
  {
    icon: Smile,
    title: "Fun Learning",
    description: "Play-based curriculum to spark imagination.",
    className: "border-sky-100 bg-sky-50 text-sky-700",
  },
];

const quickStats = [
  { value: "2012", label: "Serving families since" },
  { value: "1:6", label: "Playgroup care ratio" },
  { value: "3", label: "Core early-years programs" },
];

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
                badge="Who We Are"
                title="Best Preschool in Velachery, Chennai"
                description="Families choose us for a calm start, caring teachers, and joyful early learning."
                accent="mint"
              />

              <div className="text-forest-soft mt-7 space-y-4 text-base leading-8 font-semibold">
                <p>
                  We encourage children to explore, express, and grow in confidence.
                </p>
                <p>
                  Our programs use play-based learning to build curiosity, language, and independence.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {whoWeAreBullets.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className="group shadow-forest-value hover:shadow-forest-card rounded-[1.25rem] border border-white/80 bg-white/90 p-4 text-sm leading-6 transition-all hover:-translate-y-0.5"
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`flex size-10 shrink-0 items-center justify-center rounded-2xl border ${item.className}`}
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
                    src="/images/who-we-are-kindergarten-learning.png"
                    alt="Teachers and children engaging in creative classroom activities"
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>

              <div className="grid gap-4 pt-5 sm:grid-cols-3 lg:absolute lg:right-6 lg:-bottom-8 lg:left-6 lg:pt-0">
                {quickStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`shadow-forest-floating rounded-[1.15rem] border bg-white/94 p-4 text-center backdrop-blur-md ${
                      index === 0
                        ? "border-gold-line"
                        : index === 1
                          ? "border-mint-line"
                          : "border-sky-line"
                    }`}
                  >
                    <p className="font-playful-display text-forest-dark text-3xl font-extrabold">
                      {stat.value}
                    </p>
                    <p className="text-forest-soft mt-1 text-xs leading-5 font-black uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#fff8de_0%,#fff5e7_100%)] py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionIntro
            badge="Explore Programs"
            title="Trusted early-years programs for Velachery and nearby families."
            align="center"
            accent="gold"
            titleClassName="mx-auto max-w-4xl text-3xl md:text-5xl"
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {programLinks.map((item, index) => {
              const Icon = programIcons[index % programIcons.length];

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group shadow-forest-card hover:shadow-forest-floating relative block min-h-[240px] overflow-hidden rounded-[1.5rem] border border-white/80 bg-white p-6 text-left transition-all hover:-translate-y-1"
                >
                  <div
                    className={`mb-6 flex size-13 items-center justify-center rounded-2xl border ${programAccents[index % programAccents.length]}`}
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
              badge="Why Families Choose Us"
              title="Warm, secure, and joyful early learning."
              description="Our school day balances safety, teacher attention, and meaningful play."
            />

            <div className="grid gap-4 md:grid-cols-3">
              {whyItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="border-peach-line bg-peach-mist shadow-forest-value rounded-[1.25rem] border p-6"
                  >
                    <div
                      className={`mb-5 flex size-11 items-center justify-center rounded-2xl border ${item.className}`}
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
            image={{
              src: "/images/who-we-are-kindergarten-learning.png",
              alt: "Children enjoying a warm Sanskriti Kindergarten classroom",
            }}
            badge="Admissions Open"
            title="Give your child a joyful start to learning."
            description="Visit our Velachery campus and experience the calm, caring school day."
            primaryAction={{ text: "Start Admissions", href: "/admissions" }}
            secondaryAction={{ text: "View Curriculum", href: "/curriculum" }}
            accent="mint"
          />
        </div>
      </section>
    </main>
  );
}
