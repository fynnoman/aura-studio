"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Studio", href: "#about" },
  { label: "Leistungen", href: "#services" },
  { label: "Galerie", href: "#gallery" },
  { label: "Kontakt", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.2, 0.9, 0.2, 1] }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <div
        className={`glass rounded-full inline-flex items-center gap-2 pl-3 pr-2 py-2 pointer-events-auto max-w-full transition-all duration-500 ${
          scrolled ? "shadow-2xl" : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2 group pr-2">
          <span className="relative w-7 h-7 rounded-full bg-gradient-to-br from-white via-aura-blush to-aura-hot shadow-inner">
            <span className="absolute inset-1 rounded-full bg-gradient-to-br from-white/80 to-transparent" />
          </span>
          <span className="font-display text-lg tracking-tight text-aura-ink">
            aura
          </span>
        </a>

        <span className="hidden md:block w-px h-5 bg-aura-deep/15" />

        <nav className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-1.5 rounded-full text-sm text-aura-ink/80 hover:text-aura-ink hover:bg-white/60 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-pink text-sm !py-1.5 !px-4 ml-1">
          Termin
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </motion.header>
  );
}
