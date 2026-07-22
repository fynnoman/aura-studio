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
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1180px,calc(100%-2rem))]"
    >
      <div
        className={`glass rounded-full grid grid-cols-[1fr_auto_1fr] items-center px-5 py-3 transition-all duration-500 ${
          scrolled ? "shadow-2xl" : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2 group justify-self-start">
          <span className="relative w-8 h-8 rounded-full bg-gradient-to-br from-white via-aura-blush to-aura-hot shadow-inner">
            <span className="absolute inset-1 rounded-full bg-gradient-to-br from-white/80 to-transparent" />
          </span>
          <span className="font-display text-xl tracking-tight text-aura-ink">
            aura
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1 justify-self-center">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-full text-sm text-aura-ink/80 hover:text-aura-ink hover:bg-white/50 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn-pink text-sm !py-2 !px-4 justify-self-end">
          Termin
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </motion.header>
  );
}
