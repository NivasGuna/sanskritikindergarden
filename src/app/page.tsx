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
      <span className="text-[11px] font-black text-amber-700 uppercase">
        {badge}
      </span>
      <h2 className="mt-4 text-2xl leading-tight font-semibold text-slate-950 md:text-4xl">
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

export default function Home() {
  return (
    <main className="bg-white text-slate-950">
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

              <div className="mt-7 space-y-4 text-base leading-8 text-slate-600">
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
                    className="rounded-[1.25rem] border border-slate-200 bg-[#fff8ed] p-4 text-sm leading-6 shadow-sm"
                  >
                    <p className="font-semibold text-slate-900">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="shadow-premium-md overflow-hidden rounded-[1.75rem] border border-slate-200 bg-[#fff8ed] p-2">
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

              <div className="shadow-premium-sm relative mt-5 rounded-[1.25rem] border border-slate-200 bg-white p-5 md:absolute md:right-6 md:-bottom-8 md:max-w-sm">
                <p className="text-[11px] font-black text-amber-700 uppercase">
                  Nearby communities
                </p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">
                  Convenient for Guindy, Adambakkam, Madipakkam and beyond
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
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
                className="shadow-premium-sm rounded-[1.25rem] border border-slate-200 bg-white p-5 text-center"
              >
                <p className="text-3xl font-black text-amber-700">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-600">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff8ed] py-16 md:py-24">
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
                className="group shadow-premium-sm hover:shadow-premium-md block min-h-[210px] rounded-[1.25rem] border border-slate-200 bg-white p-6 text-left transition-all hover:-translate-y-0.5"
              >
                <div className="mb-5 flex size-11 items-center justify-center rounded-2xl border border-amber-100 bg-amber-50 text-amber-700">
                  <School className="size-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex items-center text-sm font-bold text-amber-700">
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
                    className="shadow-premium-sm rounded-[1.25rem] border border-slate-200 bg-[#fff8ed] p-6"
                  >
                    <div
                      className={`mb-5 flex size-11 items-center justify-center rounded-2xl border ${item.className}`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
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
          <div className="shadow-premium-md relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950">
            <Image
              src="/images/contact-classroom.png"
              alt="A warm Sanskriti Kindergarten classroom"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-slate-950/70" />
            <div className="relative z-10 grid min-h-[360px] gap-8 px-6 py-10 text-white md:grid-cols-[1fr_auto] md:items-end md:px-10 md:py-14">
              <div className="max-w-2xl">
                <span className="inline-flex rounded-full border border-white/20 bg-white/12 px-4 py-2 text-[11px] font-black text-amber-100 uppercase backdrop-blur-md">
                  Admissions Open
                </span>
                <h2 className="mt-5 text-3xl leading-tight font-semibold md:text-4xl">
                  Give your child a joyful start to learning.
                </h2>
                <p className="mt-5 text-base leading-7 text-white/78 md:text-[17px]">
                  Visit our Velachery campus and experience the calm, caring
                  environment behind the learning journey.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-13 items-center justify-center rounded-full bg-white px-8 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-50"
                >
                  Start Admissions
                  <ArrowRight className="ml-2 size-4" />
                </Link>
                <Link
                  href="/curriculum"
                  className="inline-flex h-13 items-center justify-center rounded-full border border-white/35 bg-white/8 px-8 text-sm font-bold text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/14"
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
