"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ContactForm from "./ContactForm";

const hours: [string, string][] = [
  ["Montag", "09:00 – 18:00"],
  ["Dienstag", "09:00 – 18:00"],
  ["Mittwoch", "09:00 – 18:00"],
  ["Donnerstag", "09:00 – 19:00"],
  ["Freitag", "09:00 – 19:00"],
  ["Samstag", "09:00 – 15:00"],
  ["Sonntag", "geschlossen"],
];

export default function Studio() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const mapY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="studio" ref={ref} className="relative py-28 md:py-40 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute -z-10 inset-0 pointer-events-none">
        <div className="blob w-[700px] h-[700px] bg-aura-hot/15 -top-24 right-0 animate-drift2" />
        <div className="blob w-[500px] h-[500px] bg-aura-rose/25 bottom-0 -left-24 animate-drift" />
      </div>

      <div className="mx-auto max-w-[1280px] px-6">
        <div className="max-w-3xl mb-14">
          <div className="kicker mb-6">Studio &amp; Termin</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.98] tracking-tight text-aura-ink">
            Komm vorbei —
            <br />
            <span className="serif-i text-aura-plum">mitten in Saarlouis.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          {/* Left column — infos */}
          <div className="space-y-5">
            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="glass-strong rounded-3xl p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] text-aura-plum mb-2">
                    Adresse
                  </div>
                  <div className="font-display text-2xl text-aura-ink leading-tight">
                    Aura Nagelstudio
                  </div>
                  <div className="text-aura-ink/75 mt-1.5 leading-relaxed">
                    Provinzialstraße 69
                    <br />
                    66740 Saarlouis
                    <br />
                    Deutschland
                  </div>
                </div>
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-aura-hot to-aura-plum flex items-center justify-center text-white shadow-lg">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s-8-7.5-8-13a8 8 0 1116 0c0 5.5-8 13-8 13z" stroke="currentColor" strokeWidth="1.8"/>
                    <circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
                  </svg>
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Provinzialstraße+69,+66740+Saarlouis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-sm text-aura-plum underline underline-offset-4 hover:text-aura-hot transition-colors"
              >
                In Karte öffnen
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </motion.div>

            {/* Contact chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass rounded-2xl p-5">
                <div className="text-[10px] uppercase tracking-[0.24em] text-aura-plum mb-1.5">
                  Telefon
                </div>
                <div className="font-display text-lg text-aura-ink">
                  auf Anfrage
                </div>
                <div className="text-[11px] text-aura-ink/50 mt-1">
                  über Formular ↓
                </div>
              </div>
              <div className="glass rounded-2xl p-5">
                <div className="text-[10px] uppercase tracking-[0.24em] text-aura-plum mb-1.5">
                  E-Mail
                </div>
                <div className="font-display text-lg text-aura-ink">
                  auf Anfrage
                </div>
                <div className="text-[11px] text-aura-ink/50 mt-1">
                  über Formular ↓
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="glass rounded-3xl p-6 md:p-7"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-[10px] uppercase tracking-[0.28em] text-aura-plum">
                  Öffnungszeiten
                </div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-aura-ink/40">
                  6 Tage
                </div>
              </div>
              <ul className="divide-y divide-aura-plum/10">
                {hours.map(([d, h]) => (
                  <li
                    key={d}
                    className="flex items-center justify-between py-2.5 text-aura-ink/85 text-sm"
                  >
                    <span className="font-medium">{d}</span>
                    <span
                      className={`font-mono tracking-tight ${
                        h === "geschlossen" ? "text-aura-ink/35" : "text-aura-ink"
                      }`}
                    >
                      {h}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="text-[11px] text-aura-ink/50 mt-4 italic">
                Termine bevorzugt nach Vereinbarung.
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              style={{ y: mapY }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden aspect-[16/10] border border-white/60 shadow-[0_40px_80px_-30px_rgba(67,9,37,0.45)]"
            >
              <iframe
                title="Aura Nagelstudio · Saarlouis"
                src="https://www.google.com/maps?q=Provinzialstra%C3%9Fe+69,+66740+Saarlouis&output=embed"
                className="w-full h-full grayscale-[15%] contrast-[1.05]"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-white/40 rounded-3xl" />
              <div className="pointer-events-none absolute top-4 left-4 kicker">
                Provinzialstraße 69
              </div>
            </motion.div>
          </div>

          {/* Right column — form (sticky) */}
          <div className="lg:sticky lg:top-28">
            <ContactForm variant="section" />
          </div>
        </div>
      </div>
    </section>
  );
}
