import Link from "next/link";
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
    <footer className="border-t border-premium-line bg-premium-bg text-premium-ink">
      <div className="container mx-auto px-6 py-14 md:py-18">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.75fr_1fr_0.8fr]">
          <div className="max-w-sm">
            <div className="mb-4 inline-flex items-center gap-3">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-premium-forest-soft text-premium-forest shadow-premium-sm">
                <span className="text-lg font-bold">S</span>
              </div>
              <span className="font-serif text-2xl font-medium tracking-tight">
                {content.brand.name}
              </span>
            </div>
            <p className="text-sm leading-6 text-premium-muted">
              {content.brand.tagline}
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-premium-line bg-premium-bg px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-premium-forest">
              <div className="size-1.5 rounded-full bg-premium-forest" />
              {content.brand.badge}
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-premium-forest">
              {content.navigation.label}
            </h3>
            <ul className="space-y-2.5">
              {content.navigation.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-premium-muted transition-colors hover:text-premium-ink"
                  >
                    {link.name}
                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-premium-forest">
              {content.contact.label}
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${content.contact.email}`}
                  className="flex items-start gap-3 text-sm text-premium-muted transition-colors hover:text-premium-ink"
                >
                  <Mail className="mt-0.5 size-4 shrink-0 text-premium-forest" />
                  <span className="break-all">{content.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${content.contact.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-sm text-premium-muted transition-colors hover:text-premium-ink"
                >
                  <Phone className="mt-0.5 size-4 shrink-0 text-premium-forest" />
                  {content.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm leading-6 text-premium-muted">
                <MapPin className="mt-0.5 size-4 shrink-0 text-premium-forest" />
                {content.contact.address}
              </li>
              <li className="flex items-start gap-3 text-sm text-premium-muted">
                <Clock className="mt-0.5 size-4 shrink-0 text-premium-forest" />
                {content.contact.hours}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-[10px] font-black uppercase tracking-[0.3em] text-premium-forest">
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
                    className="flex size-10 items-center justify-center rounded-2xl border border-premium-line bg-premium-bg text-premium-muted transition-all hover:-translate-y-0.5 hover:text-premium-forest hover:shadow-premium-sm"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
            <p className="mt-5 text-sm leading-6 text-premium-muted">
              Stay connected with our latest updates and learning moments.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-premium-line pt-6 md:flex-row">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-premium-muted">
            &copy; {new Date().getFullYear()} Sanskriti Kindergarten. All rights
            reserved.
          </p>
          <div className="flex items-center gap-5">
            <Link
              href="/faq"
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-premium-muted transition-colors hover:text-premium-forest"
            >
              FAQ
            </Link>
            <span className="text-premium-line">|</span>
            <Link
              href="/contact"
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-premium-muted transition-colors hover:text-premium-forest"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
