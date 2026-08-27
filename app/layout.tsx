import type { Metadata } from "next";
import { Fraunces, Inter_Tight } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aura Nagelstudio · Saarlouis — Handwerk, das dich strahlen lässt.",
  description:
    "Aura Nagelstudio in Saarlouis. Präzises Handwerk, ruhige Atmosphäre, individuelle Beratung. Maniküre, Pediküre, Gel- und Acrylnägel, Shellac, Nageldesign — mitten in Saarlouis, Provinzialstraße 69.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${display.variable} ${sans.variable}`}>
      <body>
        <div className="page-bg" />
        <div className="grain" />
        {children}
      </body>
    </html>
  );
}
