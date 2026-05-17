import type { Metadata } from "next";
import {
  Geist_Mono,
  Roboto,
} from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MotionProvider } from "@/components/providers/motion-provider";
import { AuthProvider } from "@/components/providers/auth-provider";
import LayoutShell from "@/components/providers/layout-shell";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sans = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanskriti Kindergarten",
  description: "A premium early childhood education center.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <AuthProvider>
          <MotionProvider>
            <TooltipProvider>
              <LayoutShell>{children}</LayoutShell>
            </TooltipProvider>
          </MotionProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
