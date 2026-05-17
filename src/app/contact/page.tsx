import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
} from "lucide-react";
import HeroBanner from "@/components/reusable/HeroBanner";
import content from "./contact-content.json";

export const metadata: Metadata = content.metadata;

const contactIconMap = {
  clock: Clock,
  mail: Mail,
  mapPin: MapPin,
  phone: Phone,
} as const;

const noteIconMap = {
  calendar: CalendarDays,
  sparkles: Sparkles,
  star: Star,
} as const;

type ContactKey = keyof typeof content.contact;
type ContactHrefType = (typeof content.contactDetails)[number]["hrefType"];

const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  content.school.mapQuery
)}`;
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
  content.school.mapQuery
)}&output=embed`;
const phoneHref = `tel:${content.contact.phone.replace(/\s/g, "")}`;
const emailHref = `mailto:${content.contact.email}`;

function getContactHref(type: ContactHrefType) {
  switch (type) {
    case "email":
      return emailHref;
    case "maps":
      return mapsHref;
    case "phone":
      return phoneHref;
    case "mapAnchor":
      return `#${content.mapSection.id}`;
  }
}

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-premium-bg font-sans text-premium-ink">
      <HeroBanner
        image={content.hero.image}
      >
        <div className="container relative z-10 mx-auto flex min-h-[100svh] items-center px-6 py-24">
          <div className="w-full min-w-0 max-w-[330px] overflow-hidden sm:max-w-[620px] min-[1000px]:max-w-3xl min-[1000px]:overflow-visible motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-12 duration-1000">
            <div className="mb-6 inline-flex items-center gap-3 md:mb-8">
              <span className="h-px w-6 bg-amber-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-700">
                {content.hero.badge}
              </span>
            </div>

            <h1 className="max-w-full break-words text-4xl font-medium leading-[1.1] tracking-tight text-premium-ink drop-shadow-sm md:text-6xl">
              {content.hero.title.line1}{" "}
              <span className="block italic text-premium-forest min-[1000px]:inline">
                {content.hero.title.highlight}
              </span>
            </h1>

            <p className="mt-6 max-w-xl break-words text-base font-medium leading-relaxed text-premium-muted md:text-xl">
              {content.hero.subtitle}
            </p>

            <div className="mt-8 w-full max-w-full">
              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <a
                  href={phoneHref}
                  className="inline-flex h-14 w-full items-center justify-center rounded-full bg-premium-forest px-8 text-base font-bold text-white shadow-premium-md transition-all hover:-translate-y-0.5 hover:bg-premium-forest/90 sm:w-auto"
                >
                  {content.hero.buttons.primary.text}
                  <Phone className="ml-3 size-5" />
                </a>
                <a
                  href={content.hero.buttons.secondary.link}
                  className="inline-flex h-14 w-full items-center justify-center rounded-full border border-premium-line bg-white/80 px-8 text-base font-bold text-premium-ink backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white sm:w-auto"
                >
                  {content.hero.buttons.secondary.text}
                  <ArrowRight className="ml-3 size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </HeroBanner>

      <section className="bg-white py-16 md:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-premium-forest">
                {content.detailsSection.badge}
              </span>
              <h2 className="mt-4 max-w-xl font-serif text-3xl font-medium leading-tight text-premium-ink sm:text-4xl md:text-6xl">
                {content.detailsSection.title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-premium-muted md:text-lg md:leading-8">
                {content.detailsSection.description}
              </p>

              <div className="mt-10 grid gap-4">
                {content.contactDetails.map((detail) => {
                  const Icon =
                    contactIconMap[
                      detail.icon as keyof typeof contactIconMap
                    ];
                  const value =
                    content.contact[detail.valueKey as ContactKey];

                  return (
                    <a
                      key={detail.title}
                      href={getContactHref(detail.hrefType)}
                      className="group flex min-w-0 flex-col items-start gap-4 rounded-[1.25rem] border border-premium-line bg-premium-bg p-4 shadow-premium-sm transition-all hover:-translate-y-0.5 hover:shadow-premium-md sm:flex-row sm:gap-5 sm:rounded-[1.5rem] sm:p-5"
                    >
                      <span
                        className={`flex size-11 shrink-0 items-center justify-center rounded-2xl sm:size-12 ${detail.accent}`}
                      >
                        <Icon className="size-5" />
                      </span>
                      <span className="min-w-0 max-w-full">
                        <span className="block text-[11px] font-black uppercase tracking-[0.25em] text-premium-forest">
                          {detail.title}
                        </span>
                        <span className="mt-1 block max-w-full whitespace-normal break-words text-base font-bold leading-7 text-premium-ink sm:text-lg">
                          {value}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-8 border-premium-bg shadow-premium-md md:aspect-[5/4] lg:aspect-[4/5]">
                <Image
                  src={content.detailsSection.image.src}
                  alt={content.detailsSection.image.alt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
              </div>
              <div className="absolute -bottom-8 -left-6 hidden max-w-sm rounded-[1.5rem] border border-premium-line bg-white p-6 shadow-premium-md md:block">
                <p className="font-serif text-2xl font-medium leading-snug text-premium-ink">
                  {content.detailsSection.callout}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-3">
            {content.visitNotes.map((note) => {
              const Icon = noteIconMap[note.icon as keyof typeof noteIconMap];

              return (
                <div
                  key={note.title}
                  className="rounded-[1.5rem] border border-premium-line bg-premium-bg p-6 shadow-premium-sm"
                >
                  <div className="mb-5 flex size-11 items-center justify-center rounded-2xl bg-white text-premium-forest">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="font-bold text-premium-ink">{note.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-premium-muted">
                    {note.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id={content.mapSection.id} className="bg-white py-10 md:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="overflow-hidden rounded-[1.25rem] border border-premium-line bg-premium-bg shadow-premium-sm sm:rounded-[1.5rem] lg:grid lg:min-h-[420px] lg:grid-cols-[0.34fr_0.66fr]">
            <div className="flex flex-col justify-center p-5 text-premium-ink sm:p-6 lg:p-8">
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-premium-forest sm:text-[11px]">
                {content.mapSection.badge}
              </span>
              <h2 className="mt-4 font-serif text-2xl font-medium leading-tight sm:text-3xl md:text-4xl">
                {content.mapSection.title}
              </h2>
              <p className="mt-4 break-words text-sm leading-6 text-premium-muted md:text-base md:leading-7">
                {content.contact.address}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-premium-line bg-white px-4 py-2 text-sm font-bold text-premium-ink">
                  <Star className="size-4 fill-amber-400 text-amber-400" />
                  {content.mapSection.rating}
                </span>
                <span className="text-sm font-semibold text-premium-muted">
                  {content.mapSection.reviews}
                </span>
              </div>

              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-premium-forest px-7 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-premium-forest/90 sm:w-fit"
              >
                {content.mapSection.button.text}
                <ArrowRight className="ml-3 size-5" />
              </a>
            </div>

            <div className="relative h-[300px] w-full sm:h-[340px] lg:h-auto lg:min-h-full">
              <iframe
                title={`${content.school.name} location map`}
                src={mapSrc}
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
