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
    text: "Warm, welcoming mornings that help children settle with confidence.",
    className: "border-gold-line bg-gold-mist text-gold-ink",
  },
  {
    icon: Palette,
    text: "Play-based learning that gently builds speech, creativity, and social skills.",
    className: "border-sky-line bg-sky-mist text-sky-ink",
  },
  {
    icon: ShieldCheck,
    text: "A secure campus supported by caring teachers and a structured routine.",
    className: "border-mint-line bg-mint-mist text-mint-ink",
  },
  {
    icon: MapPin,
    text: "Convenient location for families from Velachery, Guindy, and nearby neighborhoods.",
    className: "border-peach-line bg-peach-mist text-peach-ink",
  },
];

const programLinks = [
  {
    title: "Preschool in Velachery",
    description:
      "A fuller look at our preschool environment, learning approach, and family experience.",
    href: "/preschool-in-velachery",
  },
  {
    title: "Daycare in Velachery",
    description:
      "Information for parents balancing reliable care, daily routine, and convenience.",
    href: "/daycare-in-velachery",
  },
  {
    title: "Kindergarten in Velachery",
    description:
      "How we support children moving into more confident and independent learning.",
    href: "/kindergarten-in-velachery",
  },
  {
    title: "Play School in Velachery",
    description:
      "A gentle introduction to group learning for younger children and first-time school families.",
    href: "/play-school-in-velachery",
  },
  {
    title: "Preschool Near Guindy",
    description:
      "A nearby option for Guindy families considering a Velachery preschool setting.",
    href: "/preschool-near-guindy",
  },
  {
    title: "Daycare Near Guindy",
    description:
      "Guidance for working families looking for daycare access close to Guindy and Velachery.",
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
    description:
      "Fully secured campus with CCTV, trained staff, and child-safe facilities.",
    className: "border-amber-100 bg-amber-50 text-amber-700",
  },
  {
    icon: Users,
    title: "Experienced Teachers",
    description:
      "Dedicated educators with years of experience in early childhood development.",
    className: "border-teal-100 bg-teal-50 text-teal-700",
  },
  {
    icon: Smile,
    title: "Fun Learning",
    description:
      "Play-based curriculum that sparks imagination and builds foundational skills.",
    className: "border-sky-100 bg-sky-50 text-sky-700",
  },
];

const quickStats = [
  { value: "2012", label: "Nurturing children since" },
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
        className={`font-playful-display mt-5 text-4xl leading-[1.04] font-extrabold text-forest-dark md:text-6xl ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 font-semibold text-forest-muted md:text-[17px] md:leading-8">
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
        <div className="absolute top-12 right-[-4rem] h-40 w-40 rounded-full bg-gold-mist/70" />
        <div className="absolute bottom-16 left-[-5rem] h-52 w-52 rounded-full bg-mint-mist/80" />
        <div className="container relative mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <SectionIntro
                badge="Who We Are"
                title="Best Preschool in Velachery, Chennai"
                description="Families looking for a preschool in Velachery usually want more than a classroom. They want a place where children feel welcomed each morning, teachers guide them patiently, and early learning feels joyful instead of pressured."
                accent="mint"
              />

              <div className="mt-7 space-y-4 text-base leading-8 font-semibold text-forest-soft">
                <p>
                  At Sanskriti Kindergarten, our programs are shaped around the
                  needs of young children who are learning to explore,
                  communicate, build friendships, and grow in confidence.
                </p>
                <p>
                  We support preschool, kindergarten, play school, and daycare
                  in Velachery with a play-based approach that encourages
                  curiosity, language development, movement, creativity, and
                  everyday independence.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {whoWeAreBullets.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.text}
                      className="group rounded-[1.25rem] border border-white/80 bg-white/90 p-4 text-sm leading-6 shadow-forest-value transition-all hover:-translate-y-0.5 hover:shadow-forest-card"
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`flex size-10 shrink-0 items-center justify-center rounded-2xl border ${item.className}`}
                        >
                          <Icon className="size-5" />
                        </span>
                        <p className="font-bold text-forest-dark">
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
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.55rem] bg-sky-mist">
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
                    className={`rounded-[1.15rem] border bg-white/94 p-4 text-center shadow-forest-floating backdrop-blur-md ${
                      index === 0
                        ? "border-gold-line"
                        : index === 1
                          ? "border-mint-line"
                          : "border-sky-line"
                    }`}
                  >
                    <p className="font-playful-display text-3xl font-extrabold text-forest-dark">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs leading-5 font-black text-forest-soft uppercase">
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
            title="A trusted preschool choice for families across Velachery and nearby neighborhoods."
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
                  className="group relative block min-h-[240px] overflow-hidden rounded-[1.5rem] border border-white/80 bg-white p-6 text-left shadow-forest-card transition-all hover:-translate-y-1 hover:shadow-forest-floating"
                >
                  <div
                    className={`mb-6 flex size-13 items-center justify-center rounded-2xl border ${programAccents[index % programAccents.length]}`}
                  >
                    <Icon className="size-6" />
                  </div>
                  <h3 className="font-playful-display text-2xl leading-tight font-extrabold text-forest-dark">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 font-semibold text-forest-soft">
                    {item.description}
                  </p>
                  <span className="mt-6 inline-flex items-center text-sm font-black text-mint-ink">
                    Learn more
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute right-5 bottom-5 h-14 w-14 rounded-full bg-sky-mist opacity-0 transition-opacity group-hover:opacity-100" />
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
              description="The school day is designed to feel calm, caring, and active, with a balance of safety, teacher attention, and meaningful play."
            />

            <div className="grid gap-4 md:grid-cols-3">
              {whyItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-[1.25rem] border border-peach-line bg-peach-mist p-6 shadow-forest-value"
                  >
                    <div
                      className={`mb-5 flex size-11 items-center justify-center rounded-2xl border ${item.className}`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <h3 className="font-playful-display text-2xl font-extrabold text-forest-dark">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 font-semibold text-forest-soft">
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
            description="Visit our Velachery campus and experience the calm, caring environment behind the learning journey."
            primaryAction={{ text: "Start Admissions", href: "/admissions" }}
            secondaryAction={{ text: "View Curriculum", href: "/curriculum" }}
            accent="mint"
          />
        </div>
      </section>
    </main>
  );
}
