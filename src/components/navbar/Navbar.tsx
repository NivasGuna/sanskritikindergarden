"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useAuth } from "@/components/providers/auth-provider";
import content from "./navbar-content.json";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { isLoggedIn } = useAuth();
  const isSolid = scrolled || mobileOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll(); // check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isSolid
          ? "border-b border-[#f3dfc8]/80 bg-white/96 shadow-[0_10px_28px_rgba(23,53,47,0.06)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        className={`container mx-auto flex min-h-[5.5rem] items-center justify-between gap-5 px-6 transition-all duration-500 ${
          isSolid ? "py-3" : "py-4"
        }`}
      >
        {/* ── Logo ── */}
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-3 rounded-2xl bg-white/80 p-2 shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-white/95 sm:gap-3.5 sm:px-3 sm:py-2"
        >
          <div className="relative size-11 shrink-0 transition-all duration-300 group-hover:scale-105 sm:size-12">
            <Image
              src={content.brand.logo}
              alt={content.brand.logoAlt}
              fill
              className="object-contain"
              priority
              sizes="48px"
            />
          </div>
          <span className="hidden min-w-0 leading-none sm:block">
            <span className="font-premium-display text-forest-dark block text-[1.15rem] leading-tight font-bold tracking-normal">
              {content.brand.name}
            </span>
            <span className="text-mint-ink mt-1 block text-[10px] font-black tracking-[0.2em] uppercase">
              {content.brand.subline}
            </span>
          </span>
        </Link>

        {/* ── Desktop Links ── */}
        <ul className="hidden items-center gap-2 xl:flex">
          {content.links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-2 text-base font-extrabold transition-all duration-300 ${
                    isActive
                      ? isSolid
                        ? "bg-mint-mist text-mint-ink"
                        : "bg-white/76 text-mint-ink"
                      : isSolid
                        ? "text-forest-dark hover:bg-sky-mist hover:text-sky-ink"
                        : "text-forest-dark hover:bg-white/72 hover:text-sky-ink"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

          {/* ── App Name (shown only when logged in) ── */}
          {isLoggedIn && (
            <li>
              <Link
                href="/applications"
                className={`relative rounded-full px-3.5 py-2 text-base font-extrabold transition-all duration-300 ${
                  pathname === "/applications"
                    ? isSolid
                      ? "bg-mint-mist text-mint-ink"
                      : "bg-white/76 text-mint-ink"
                    : isSolid
                      ? "text-forest-dark hover:bg-sky-mist hover:text-sky-ink"
                      : "text-forest-dark hover:bg-white/72 hover:text-sky-ink"
                }`}
              >
                Applications
              </Link>
            </li>
          )}
        </ul>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`flex size-11 items-center justify-center rounded-xl transition-all duration-300 xl:hidden ${
            isSolid
              ? "text-forest-dark hover:bg-mint-mist hover:text-mint-ink"
              : "bg-white/88 text-forest-dark hover:bg-white hover:text-mint-ink"
          }`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`overflow-hidden transition-all duration-500 xl:hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-[#f3dfc8] bg-white/98 px-6 pt-4 pb-6 shadow-xl">
          <ul className="space-y-1">
            {content.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-mint-mist text-mint-ink"
                        : "text-forest-soft hover:bg-sky-mist hover:text-sky-ink"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}

            {/* ── Mobile: App Name (shown only when logged in) ── */}
            {isLoggedIn && (
              <li>
                <Link
                  href="/applications"
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                    pathname === "/applications"
                      ? "bg-mint-mist text-mint-ink"
                      : "text-forest-soft hover:bg-sky-mist hover:text-sky-ink"
                  }`}
                >
                  Applications
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
}
