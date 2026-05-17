import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Mail,
  MapPin,
  Phone,
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

type ContactKey = keyof typeof content.contact;
type ContactDetail = (typeof content.contactDetails)[number];
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

function ContactDetailLink({ detail }: { detail: ContactDetail }) {
  const Icon = contactIconMap[detail.icon as keyof typeof contactIconMap];
  const value = content.contact[detail.valueKey as ContactKey];

  return (
    <a
      href={getContactHref(detail.hrefType)}
      className="group border-premium-line shadow-premium-sm hover:shadow-premium-md flex min-w-0 items-start gap-4 rounded-[1rem] border bg-white/96 p-4 transition-all hover:-translate-y-0.5"
    >
      <span
        className={`flex size-11 shrink-0 items-center justify-center rounded-2xl ${detail.accent}`}
      >
        <Icon className="size-5" />
      </span>
      <span className="max-w-full min-w-0">
        <span className="text-premium-forest block text-[11px] font-black tracking-[0.25em] uppercase">
          {detail.title}
        </span>
        <span className="text-premium-ink mt-1 block max-w-full text-sm leading-6 font-bold break-words whitespace-normal sm:text-base">
          {value}
        </span>
      </span>
    </a>
  );
}

export default function ContactPage() {
  const [addressDetail, phoneDetail, emailDetail, hoursDetail] =
    content.contactDetails;

  return (
    <main className="bg-premium-bg text-premium-ink min-h-screen overflow-hidden font-sans">
      <HeroBanner image={content.hero.image}>
        <div className="relative z-10 container mx-auto flex min-h-[100svh] items-center px-6 py-24">
          <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-12 w-full max-w-[330px] min-w-0 overflow-hidden duration-1000 min-[1000px]:max-w-3xl min-[1000px]:overflow-visible sm:max-w-[620px]">
            <div className="mb-6 inline-flex items-center gap-3 md:mb-8">
              <span className="h-px w-6 bg-amber-600" />
              <span className="text-[10px] font-black tracking-[0.3em] text-amber-700 uppercase">
                {content.hero.badge}
              </span>
            </div>

            <h1 className="text-premium-ink max-w-full text-4xl leading-[1.1] font-medium tracking-tight break-words drop-shadow-sm md:text-6xl">
              {content.hero.title.line1}{" "}
              <span className="text-premium-forest block italic min-[1000px]:inline">
                {content.hero.title.highlight}
              </span>
            </h1>

            <p className="text-premium-muted mt-6 max-w-xl text-base leading-relaxed font-medium break-words md:text-xl">
              {content.hero.subtitle}
            </p>

            <div className="mt-8 w-full max-w-full">
              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <a
                  href={phoneHref}
                  className="bg-premium-forest shadow-premium-md hover:bg-premium-forest/90 inline-flex h-14 w-full items-center justify-center rounded-full px-8 text-base font-bold text-white transition-all hover:-translate-y-0.5 sm:w-auto"
                >
                  {content.hero.buttons.primary.text}
                  <Phone className="ml-3 size-5" />
                </a>
                <a
                  href={content.hero.buttons.secondary.link}
                  className="border-premium-line text-premium-ink inline-flex h-14 w-full items-center justify-center rounded-full border bg-white/80 px-8 text-base font-bold backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white sm:w-auto"
                >
                  {content.hero.buttons.secondary.text}
                  <ArrowRight className="ml-3 size-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </HeroBanner>

      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid items-center gap-8 lg:grid-cols-[0.84fr_1.16fr] xl:gap-10">
            <div className="relative z-10 min-w-0">
              <span className="inline-flex items-center rounded-full border border-amber-100 bg-amber-50 px-4 py-2 text-[10px] font-black tracking-[0.25em] text-amber-700 uppercase">
                {content.detailsSection.badge}
              </span>
              <h2 className="text-premium-ink mt-5 max-w-xl text-3xl leading-tight font-bold sm:text-4xl md:text-5xl">
                {content.detailsSection.title}
              </h2>
              <p className="text-premium-muted mt-4 max-w-xl text-base leading-7 md:text-lg md:leading-8">
                {content.detailsSection.description}
              </p>

              <div className="mt-7 grid gap-3">
                <ContactDetailLink detail={addressDetail} />
                <ContactDetailLink detail={phoneDetail} />
                <ContactDetailLink detail={emailDetail} />
                <ContactDetailLink detail={hoursDetail} />
              </div>

              <div className="shadow-premium-sm mt-6 flex min-w-0 flex-col gap-4 rounded-[1.25rem] border border-emerald-100 bg-emerald-50/50 p-5 sm:flex-row sm:items-center">
                <span className="text-premium-forest flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white">
                  <CalendarDays className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="text-premium-ink block text-base font-bold">
                    {content.visitCta.title}
                  </span>
                  <span className="text-premium-muted mt-1 block text-sm leading-6">
                    {content.visitCta.text}
                  </span>
                </span>
                <a
                  href={phoneHref}
                  className="bg-premium-forest hover:bg-premium-forest/90 inline-flex h-12 shrink-0 items-center justify-center rounded-full px-6 text-sm font-bold text-white transition-all hover:-translate-y-0.5"
                >
                  {content.visitCta.button.text}
                  <ArrowRight className="ml-3 size-4" />
                </a>
              </div>
            </div>

            <div className="relative min-w-0">
              <div className="relative h-[440px] w-full overflow-hidden sm:h-[560px] lg:h-[720px] xl:h-[780px]">
                <Image
                  src={content.detailsSection.image.src}
                  alt={content.detailsSection.image.alt}
                  fill
                  className="object-contain object-center"
                  sizes="(min-width: 1024px) 48vw, 100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id={content.mapSection.id}
        className="bg-[#f4f9ef] py-14 md:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="shadow-premium-md overflow-hidden rounded-[1.5rem] border border-emerald-100 bg-white lg:grid lg:min-h-[460px] lg:grid-cols-[0.36fr_0.64fr]">
            <div className="text-premium-ink flex flex-col justify-center bg-[#fbfff7] p-5 sm:p-7 lg:p-9">
              <span className="text-premium-forest w-fit rounded-full border border-emerald-100 bg-white px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase sm:text-[11px]">
                {content.mapSection.badge}
              </span>
              <h2 className="mt-5 text-2xl leading-tight font-bold sm:text-3xl md:text-4xl">
                {content.mapSection.title}
              </h2>
              <p className="text-premium-muted mt-4 text-sm leading-6 break-words md:text-base md:leading-7">
                {content.contact.address}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <span className="border-premium-line text-premium-ink inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm font-bold">
                  <Star className="size-4 fill-amber-400 text-amber-400" />
                  {content.mapSection.rating}
                </span>
                <span className="text-premium-muted text-sm font-semibold">
                  {content.mapSection.reviews}
                </span>
              </div>

              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-premium-forest hover:bg-premium-forest/90 mt-7 inline-flex h-12 w-full items-center justify-center rounded-full px-7 text-sm font-bold text-white transition-all hover:-translate-y-0.5 sm:w-fit"
              >
                {content.mapSection.button.text}
                <ArrowRight className="ml-3 size-5" />
              </a>
            </div>

            <div className="bg-white p-3 sm:p-4">
              <div className="relative h-[320px] w-full overflow-hidden rounded-[1.25rem] sm:h-[380px] lg:h-full lg:min-h-full">
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
        </div>
      </section>
    </main>
  );
}
