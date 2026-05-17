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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 shadow-[0_4px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl border-b border-premium-line"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative size-11 overflow-hidden rounded-xl border-2 border-white/20 shadow-md transition-transform duration-300 group-hover:scale-105">
            <Image
              src={content.brand.logo}
              alt={content.brand.logoAlt}
              fill
              className="object-cover"
              sizes="44px"
            />
          </div>
          <span
            className="font-serif text-xl font-semibold tracking-tight text-premium-ink transition-colors duration-500"
          >
            {content.brand.name}
          </span>
        </Link>

        {/* ── Desktop Links ── */}
        <ul className="hidden items-center gap-1 md:flex">
          {content.links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-premium-forest text-white shadow-premium-sm"
                      : "text-premium-ink/70 hover:bg-premium-bg hover:text-premium-ink"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}

          {/* ── App Name (shown only when logged in) ── */}
          {isLoggedIn && (
            <li className="ml-2 flex items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-premium-forest/10 px-4 py-2 text-sm font-bold text-premium-forest">
                <span className="size-2 rounded-full bg-premium-forest animate-pulse" />
                Sanskriti Kindergarten
              </span>
            </li>
          )}
        </ul>



        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex size-10 items-center justify-center rounded-xl text-premium-ink transition-all duration-300 hover:bg-premium-bg md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* ── Mobile Menu Overlay ── */}
      <div
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-white/10 bg-white/95 px-6 pb-6 pt-4 shadow-xl backdrop-blur-xl">
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
                        ? "bg-amber-600/10 text-amber-700"
                        : "text-premium-ink/70 hover:bg-premium-bg hover:text-premium-ink"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}

            {/* ── Mobile: App Name (shown only when logged in) ── */}
            {isLoggedIn && (
              <li className="border-t border-premium-line pt-3 mt-2">
                <span className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-premium-forest">
                  <span className="size-2 rounded-full bg-premium-forest animate-pulse" />
                  Sanskriti Kindergarten
                </span>
              </li>
            )}
          </ul>

        </div>
      </div>
    </header>
  );
}

