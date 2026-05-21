import Image from "next/image";
import type { Metadata } from "next";
import { constructMetadata } from "@/lib/seo";
import { getBreadcrumbSchema } from "@/lib/schema";
import Schema from "@/components/Schema";
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

export const metadata: Metadata = constructMetadata({
  title: content.metadata.title,
  description: content.metadata.description,
  canonicalUrl: "/contact",
});

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
      className="group shadow-forest-card hover:shadow-forest-floating flex min-w-0 items-center gap-4 rounded-[1.25rem] border border-white/50 bg-white/96 p-5 transition-all duration-300 hover:-translate-y-1"
    >
      <span
        className={`flex size-14 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${detail.accent}`}
      >
        <Icon className="size-6" />
      </span>
      <span className="max-w-full min-w-0 flex-1">
        <span className="text-forest-muted block text-[10px] font-black tracking-[0.25em] uppercase">
          {detail.title}
        </span>
        <span className="text-forest-dark mt-1 block max-w-full text-base leading-6 font-bold break-words whitespace-normal">
          {value}
        </span>
      </span>
      <span className="bg-forest-dark/5 text-forest-dark flex size-8 shrink-0 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
        <ArrowRight className="size-4" />
      </span>
    </a>
  );
}

export default function ContactPage() {
  const [addressDetail, phoneDetail, emailDetail, hoursDetail] =
    content.contactDetails;

  return (
    <main className="bg-sage-mist font-rounded-body text-forest-dark min-h-screen overflow-hidden">
      <Schema
        data={getBreadcrumbSchema([
          { name: "Home", url: "" },
          { name: "Contact", url: "/contact" },
        ])}
      />
      <HeroBanner
        image={content.hero.image}
        imageClassName="object-[64%_center] md:object-center"
      >
        <div className="relative z-10 container mx-auto flex min-h-[100svh] items-center px-6 py-24">
          <div className="hero-copy-panel motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-left-12 max-w-[32rem] duration-1000">
            <div className="mb-7 inline-flex items-center gap-3">
              <span className="size-2 rounded-full bg-sky" />
              <span className="text-sky-ink text-[10px] font-black tracking-[0.26em] uppercase drop-shadow-[0_2px_8px_rgb(255_255_255_/_90%)]">
                {content.hero.badge}
              </span>
            </div>

            <h1 className="font-premium-display text-forest-dark max-w-[32rem] text-[2.85rem] leading-[1.04] font-bold drop-shadow-[0_4px_14px_rgb(255_255_255_/_88%)] sm:text-5xl md:text-6xl">
              {content.hero.title.line1}{" "}
              <span className="text-gold-ink">{content.hero.title.word1}</span>{" "}
              <span className="text-sky-ink">{content.hero.title.word2}</span>{" "}
              <span className="text-forest-dark">{content.hero.title.word3}</span>
            </h1>

            <p className="hero-subheading text-forest-soft mt-6 max-w-[32rem] drop-shadow-[0_3px_12px_rgb(255_255_255_/_90%)] md:text-xl">
              {content.hero.subtitle}{" "}
              <span className="text-gold-ink">
                {content.hero.subtitleHighlight}
              </span>
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={phoneHref}
                className="bg-mint shadow-[0_18px_45px_rgb(22_97_63_/_22%)] hover:bg-mint-ink inline-flex h-14 items-center justify-center rounded-full px-8 text-base font-black text-white transition-all hover:-translate-y-0.5"
              >
                Call Us
                <Phone className="ml-3 size-5" />
              </a>
              <a
                href={emailHref}
                className="text-forest-dark inline-flex h-14 items-center justify-center rounded-full border border-forest-dark/20 bg-white/76 px-8 text-base font-black backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-white/88"
              >
                Send a Message
                <Mail className="ml-3 size-5" />
              </a>
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

              <div className="shadow-premium-sm mt-6 flex min-w-0 flex-col gap-4 rounded-[1.25rem] border border-sky-100 bg-sky-50/50 p-5 sm:flex-row sm:items-center">
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
        className="relative overflow-hidden bg-sky-mist text-forest-dark py-16 md:py-24"
      >
        <Image
          src="/images/contact-hero-sanskriti-reception.png"
          alt=""
          fill
          className="object-cover object-center opacity-[0.24]"
          sizes="100vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(255_248_232_/_90%)_0%,rgb(255_255_255_/_86%)_52%,rgb(238_248_255_/_82%)_100%)]" />
        <div className="container relative mx-auto px-6">
          <div className="border-sky-line shadow-sky-card overflow-hidden rounded-[2rem] border bg-white lg:grid lg:min-h-[460px] lg:grid-cols-[0.36fr_0.64fr]">
            <div className="bg-sky-mist/50 flex flex-col justify-center p-8 lg:p-12">
              <span className="border-sky-line text-sky-ink w-fit rounded-full border bg-white px-4 py-2 text-[10px] font-black tracking-[0.24em] uppercase">
                {content.mapSection.badge}
              </span>
              <h2 className="font-playful-display text-forest-dark mt-6 text-3xl leading-tight font-extrabold md:text-5xl">
                {content.mapSection.title}
              </h2>
              <p className="text-forest-soft mt-5 text-sm leading-7 font-semibold md:text-base">
                {content.contact.address}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="border-gold-line bg-gold-mist text-gold-ink inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-black">
                  <Star className="size-4 fill-amber-400 text-amber-500" />
                  {content.mapSection.rating}
                </span>
                <span className="text-forest-muted text-sm font-bold">
                  {content.mapSection.reviews}
                </span>
              </div>

              <a
                href={mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky shadow-sky-media hover:bg-sky-ink mt-8 inline-flex h-14 w-full items-center justify-center rounded-full px-8 text-base font-black text-white transition-all hover:-translate-y-0.5 sm:w-fit"
              >
                {content.mapSection.button.text}
                <ArrowRight className="ml-2 size-5" />
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
