"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import type { ReactNode } from "react";

/** Hides the Navbar and Footer on standalone pages like /login */
const HIDDEN_ROUTES = ["/login"];

export default function LayoutShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const hideChrome = HIDDEN_ROUTES.includes(pathname);

  if (hideChrome) {
    return <>{children}</>;
  }

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <WhatsAppButton />
    </>
  );
}
