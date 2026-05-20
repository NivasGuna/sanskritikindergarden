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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll(); // check on mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-[#f3dfc8] bg-white/94 shadow-[0_10px_35px_rgba(23,53,47,0.08)] backdrop-blur-xl"
          : "bg-gradient-to-b from-black/24 to-transparent"
      }`}
    >
      <nav className="container mx-auto flex min-h-[5.5rem] items-center justify-between gap-5 px-6 py-3">
        {/* ── Logo ── */}
        <Link
          href="/"
          className={`group flex min-w-0 items-center gap-3 rounded-full border px-3 py-2 transition-all duration-300 ${
            scrolled
              ? "border-[#f3dfc8] bg-white shadow-[0_14px_34px_rgba(23,53,47,0.08)]"
              : "border-white/20 bg-white/12 shadow-[0_14px_34px_rgba(15,23,42,0.14)] backdrop-blur-md hover:bg-white/18"
          }`}
        >
          <div
            className={`relative size-12 shrink-0 overflow-hidden rounded-full transition-all duration-300 group-hover:scale-105 sm:size-13 ${
              scrolled
                ? "bg-white shadow-[0_10px_22px_rgba(23,53,47,0.10)]"
                : "bg-white shadow-[0_10px_22px_rgba(15,23,42,0.16)]"
            }`}
          >
            <Image
              src={content.brand.logo}
              alt={content.brand.logoAlt}
              fill
              className="object-contain p-1"
              sizes="56px"
            />
          </div>
          <span className="hidden min-w-0 leading-none sm:block">
            <span
              className={`font-premium-display block text-[1.05rem] font-bold tracking-normal ${
                scrolled ? "text-forest-dark" : "text-white"
              }`}
            >
              {content.brand.name}
            </span>
            <span
              className={`mt-1 block text-[10px] font-black tracking-[0.2em] uppercase ${
                scrolled ? "text-sky-ink" : "text-white/78"
              }`}
            >
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
                  className={`relative rounded-full px-3.5 py-2 text-[15px] font-extrabold transition-all duration-300 ${
                    isActive
                      ? scrolled
                        ? "bg-coral-mist text-coral-ink shadow-[0_10px_22px_rgba(255,127,110,0.14)]"
                        : "text-forest-dark bg-white/92 shadow-[0_10px_22px_rgba(15,23,42,0.16)] backdrop-blur-md"
                      : scrolled
                        ? "text-forest-soft hover:bg-peach-mist hover:text-coral-ink"
                        : "text-white drop-shadow-[0_2px_8px_rgba(15,23,42,0.45)] hover:bg-white/22 hover:text-white hover:backdrop-blur-md"
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
                className={`relative rounded-full px-3.5 py-2 text-[15px] font-extrabold transition-all duration-300 ${
                  pathname === "/applications"
                    ? scrolled
                      ? "bg-coral-mist text-coral-ink shadow-[0_10px_22px_rgba(255,127,110,0.14)]"
                      : "text-forest-dark bg-white/92 shadow-[0_10px_22px_rgba(15,23,42,0.16)] backdrop-blur-md"
                    : scrolled
                      ? "text-forest-soft hover:bg-peach-mist hover:text-coral-ink"
                      : "text-white drop-shadow-[0_2px_8px_rgba(15,23,42,0.45)] hover:bg-white/22 hover:text-white hover:backdrop-blur-md"
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
            scrolled
              ? "text-forest-dark hover:bg-coral-mist hover:text-coral-ink"
              : "bg-white/24 text-white shadow-[0_10px_22px_rgba(15,23,42,0.12)] backdrop-blur-md hover:bg-white/32"
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
        <div className="border-t border-[#f3dfc8] bg-white/98 px-6 pt-4 pb-6 shadow-xl backdrop-blur-xl">
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
                        ? "bg-coral-mist text-coral-ink"
                        : "text-forest-soft hover:bg-peach-mist hover:text-coral-ink"
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
                      ? "bg-coral-mist text-coral-ink"
                      : "text-forest-soft hover:bg-peach-mist hover:text-coral-ink"
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
