"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const links = [
  { label: "Philosophie", href: "#philosophy" },
  { label: "Looks", href: "#looks" },
  { label: "Preise", href: "#services" },
  { label: "Ritual", href: "#ritual" },
  { label: "Studio", href: "#studio" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const width = useTransform(scrollY, [0, 200], ["min(96vw, 980px)", "min(88vw, 780px)"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.2, 0.9, 0.2, 1] }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <motion.div
        style={{ width }}
        className={`glass rounded-full flex items-center justify-between gap-2 pl-4 pr-2 py-2 pointer-events-auto transition-shadow duration-500 ${
          scrolled ? "shadow-[0_30px_60px_-25px_rgba(67,9,37,0.5)]" : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative w-8 h-8 rounded-full bg-gradient-to-br from-white via-aura-blush to-aura-hot shadow-inner overflow-hidden">
            <span className="absolute inset-1 rounded-full bg-gradient-to-br from-white/85 via-white/10 to-transparent" />
            <span className="absolute inset-0 rounded-full ring-1 ring-white/50" />
          </span>
          <span className="font-display text-lg tracking-tight text-aura-ink leading-none">
            aura<span className="text-aura-plum">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-0.5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3.5 py-1.5 rounded-full text-[13px] text-aura-ink/75 hover:text-aura-ink hover:bg-white/60 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#studio" className="btn-pink text-[13px] !py-1.5 !px-4">
          Termin
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </motion.div>
    </motion.header>
  );
}
