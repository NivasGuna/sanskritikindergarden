import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, ArrowUpRight } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube, FaGoogle } from "react-icons/fa";
import content from "./footer-content.json";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/sanskriti_guindy/",
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/velachery.sanskriti/",
    icon: FaFacebookF,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@SanskritiKindergartenSanskriti",
    icon: FaYoutube,
  },
  {
    name: "Google Reviews",
    href: "https://share.google/sbCKLa2EUkgHW1MEJ",
    icon: FaGoogle,
  },
];

export default function Footer() {
  return (
    <footer className="border-mint-line/70 text-forest-dark border-t bg-[#fff8ed]">
      <div className="container mx-auto px-6 py-14 md:py-18">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.75fr_1fr_0.8fr]">
          <div className="max-w-sm">
            <div className="mb-4 inline-flex items-center gap-3">
              <div className="relative size-16 overflow-hidden rounded-full border border-white bg-white shadow-[0_14px_34px_rgba(23,53,47,0.10)]">
                <Image
                  src={content.brand.logo}
                  alt={content.brand.logoAlt}
                  fill
                  className="object-contain p-0.5"
                  sizes="64px"
                />
              </div>
              <span className="font-premium-display text-2xl leading-tight font-bold tracking-normal">
                {content.brand.name}
              </span>
            </div>
            <p className="text-forest-soft text-sm leading-6 font-semibold">
              {content.brand.tagline}
            </p>
            <div className="border-gold-line text-gold-ink mt-5 inline-flex items-center gap-2 rounded-full border bg-white px-4 py-1.5 text-[10px] font-black tracking-[0.25em] uppercase">
              <div className="bg-gold size-1.5 rounded-full" />
              {content.brand.badge}
            </div>
          </div>

          <div>
            <h3 className="text-forest-dark mb-4 text-[10px] font-black tracking-[0.3em] uppercase">
              {content.navigation.label}
            </h3>
            <ul className="space-y-2.5">
              {content.navigation.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group text-forest-soft hover:text-sky-ink inline-flex items-center gap-2 text-sm font-bold transition-colors"
                  >
                    {link.name}
                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-forest-dark mb-4 text-[10px] font-black tracking-[0.3em] uppercase">
              {content.contact.label}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${content.contact.email}`}
                  className="text-forest-soft hover:text-sky-ink flex items-start gap-3 text-sm font-semibold transition-colors"
                >
                  <Mail className="text-gold mt-0.5 size-4 shrink-0" />
                  <span className="break-all">{content.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
                  className="text-forest-soft hover:text-sky-ink flex items-start gap-3 text-sm font-semibold transition-colors"
                >
                  <Phone className="text-sky mt-0.5 size-4 shrink-0" />
                  {content.contact.phone}
                </a>
              </li>
              <li className="text-forest-soft flex items-start gap-3 text-sm leading-6 font-semibold">
                <MapPin className="text-gold mt-0.5 size-4 shrink-0" />
                {content.contact.address}
              </li>
              <li className="text-forest-soft flex items-start gap-3 text-sm font-semibold">
                <Clock className="text-mint mt-0.5 size-4 shrink-0" />
                {content.contact.hours}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-forest-dark mb-4 text-[10px] font-black tracking-[0.3em] uppercase">
              {content.social.label}
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="border-mint-line text-forest-soft hover:bg-mint-mist hover:text-mint-ink flex size-10 items-center justify-center rounded-2xl border bg-white transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgb(47_125_91_/_12%)]"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
            <p className="text-forest-soft mt-5 text-sm leading-6 font-semibold">
              Stay connected with our latest updates and learning moments.
            </p>
          </div>
        </div>

        <div className="border-peach-line mt-10 flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">
          <p className="text-forest-muted text-[11px] font-bold tracking-[0.25em] uppercase">
            &copy; {new Date().getFullYear()} Sanskriti Kindergarten. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/faq"
              className="text-forest-muted hover:text-sky-ink text-[11px] font-bold tracking-[0.2em] uppercase transition-colors"
            >
              FAQ
            </Link>
            <span className="text-peach-line">|</span>
            <Link
              href="/contact"
              className="text-forest-muted hover:text-sky-ink text-[11px] font-bold tracking-[0.2em] uppercase transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
