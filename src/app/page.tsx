import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  School,
  ShieldCheck,
  Smile,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { HeroSlide } from "@/components/reusable/HeroCarousel";
import AnnouncementPopup from "@/components/AnnouncementPopup";
import HeroCarousel from "@/components/reusable/HeroCarousel";
import content from "./home-content.json";

const heroSlides = content.hero.slides as HeroSlide[];

const whoWeAreBullets = [
  "Warm, welcoming mornings that help children settle with confidence.",
  "Play-based learning that gently builds speech, creativity, and social skills.",
  "A secure campus supported by caring teachers and a structured routine.",
  "Convenient location for families from Velachery, Guindy, and nearby neighborhoods.",
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
    className: "border-rose-100 bg-rose-50 text-rose-700",
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
      <span className="inline-flex rounded-full border border-coral-line bg-coral-mist px-4 py-2 text-[10px] font-black tracking-[0.24em] text-coral-ink uppercase">
        {badge}
      </span>
      <h2 className="font-playful-display mt-5 text-4xl leading-[1.03] font-extrabold text-forest-dark md:text-6xl">
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

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <SectionIntro
                badge="Who We Are"
                title="Best Preschool in Velachery, Chennai"
                description="Families looking for a preschool in Velachery usually want more than a classroom. They want a place where children feel welcomed each morning, teachers guide them patiently, and early learning feels joyful instead of pressured."
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
                {whoWeAreBullets.map((text) => (
                  <div
                    key={text}
                    className="rounded-[1.25rem] border border-peach-line bg-peach-mist p-4 text-sm leading-6 shadow-forest-value"
                  >
                    <p className="font-bold text-forest-dark">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="shadow-sky-media overflow-hidden rounded-[1.75rem] border border-sky-line bg-sky-mist p-2">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/about.webp"
                    alt="Teachers and children engaging in creative classroom activities"
                    fill
                    className="rounded-[1.35rem] object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>

              <div className="shadow-forest-floating relative mt-5 rounded-[1.25rem] border border-white/70 bg-white/92 p-5 backdrop-blur-md md:absolute md:right-6 md:-bottom-8 md:max-w-sm">
                <p className="text-[10px] font-black tracking-[0.24em] text-gold-ink uppercase">
                  Nearby communities
                </p>
                <h3 className="font-playful-display mt-2 text-2xl leading-tight font-extrabold text-forest-dark">
                  Convenient for Guindy, Adambakkam, Madipakkam and beyond
                </h3>
                <p className="mt-3 text-sm leading-6 font-semibold text-forest-soft">
                  A warm, accessible start to school for families who want an
                  inspiring early learning environment close to home.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="shadow-forest-value rounded-[1.25rem] border border-gold-line bg-gold-mist p-5 text-center"
              >
                <p className="font-playful-display text-4xl font-extrabold text-gold-ink">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-bold text-forest-soft">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold-mist py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionIntro
            badge="Explore Programs"
            title="A trusted preschool choice for families across Velachery and nearby neighborhoods."
            align="center"
          />

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {programLinks.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group block min-h-[210px] rounded-[1.25rem] border border-white/80 bg-white p-6 text-left shadow-forest-card transition-all hover:-translate-y-0.5 hover:shadow-forest-floating"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-2xl border border-coral-line bg-coral-mist text-coral-ink">
                  <School className="size-5" />
                </div>
                <h3 className="font-playful-display text-2xl leading-tight font-extrabold text-forest-dark">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 font-semibold text-forest-soft">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex items-center text-sm font-black text-coral-ink">
                  Learn more
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
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
          <div className="shadow-sky-media relative overflow-hidden rounded-[2rem] border border-white/60 bg-forest-dark">
            <Image
              src="/images/contact-classroom.png"
              alt="A warm Sanskriti Kindergarten classroom"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-forest-dark/72" />
            <div className="relative z-10 grid min-h-[360px] gap-8 px-6 py-10 text-white md:grid-cols-[1fr_auto] md:items-end md:px-10 md:py-14">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full border border-white/20 bg-white/12 px-4 py-2 text-[11px] font-black text-amber-100 uppercase backdrop-blur-md">
                  Admissions Open
                </span>
                <h2 className="font-playful-display mt-5 text-4xl leading-tight font-extrabold md:text-5xl">
                  Give your child a joyful start to learning.
                </h2>
                <p className="mt-5 text-base leading-7 font-semibold text-white/82 md:text-[17px]">
                  Visit our Velachery campus and experience the calm, caring
                  environment behind the learning journey.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/admissions"
                  className="inline-flex h-[3.25rem] items-center justify-center rounded-full bg-white px-8 text-sm font-black text-forest-dark transition hover:-translate-y-0.5 hover:bg-gold-mist"
                >
                  Start Admissions
                  <ArrowRight className="ml-2 size-4" />
                </Link>
                <Link
                  href="/curriculum"
                  className="inline-flex h-[3.25rem] items-center justify-center rounded-full border border-white/35 bg-white/10 px-8 text-sm font-black text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/16"
                >
                  View Curriculum
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
