import type { Metadata, Viewport } from "next";
import {
  Baloo_2,
  Geist_Mono,
  Quicksand,
} from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MotionProvider } from "@/components/providers/motion-provider";
import { AuthProvider } from "@/components/providers/auth-provider";
import LayoutShell from "@/components/providers/layout-shell";
import { constructMetadata } from "@/lib/seo";
import { getLocalBusinessSchema } from "@/lib/schema";
import Schema from "@/components/Schema";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sans = Quicksand({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const premiumDisplay = Baloo_2({
  variable: "--premium-display-family",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = constructMetadata({
  title: "Best Preschool & Daycare in Velachery",
  description: "Best preschool and daycare in Velachery, Chennai offering activity-based learning, phonics, and child-focused education.",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sans.variable} ${geistMono.variable} ${premiumDisplay.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <AuthProvider>
          <MotionProvider>
            <TooltipProvider>
              <LayoutShell>{children}</LayoutShell>
              <Schema data={getLocalBusinessSchema()} />
            </TooltipProvider>
          </MotionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
