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
  title: "Aura Nagelstudio · Saarlouis",
  description:
    "Aura Nagelstudio in Saarlouis — Maniküre, Pediküre, Gel- und Acrylnägel, Nageldesign. Präzises Handwerk in ruhiger Atmosphäre.",
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
