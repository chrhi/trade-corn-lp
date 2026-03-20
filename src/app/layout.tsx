import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Figtree,
  Geist,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";
import { MotionLayout } from "@/components/motion/motion-layout";
import { cn } from "@/lib/utils";

const figtree = Figtree({ subsets: ["latin"], variable: "--font-sans" });

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading-family",
  weight: ["400", "600", "700"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trydecorn — structured trading journal",
  description:
    "Log trades with setups, sessions, and mindset tags—then see equity, daily P&L, and core stats in one place.",
  applicationName: "Trydecorn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "dark h-full scroll-smooth",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        figtree.variable,
        cormorant.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full flex flex-col">
        <MotionLayout>{children}</MotionLayout>
      </body>
    </html>
  );
}
