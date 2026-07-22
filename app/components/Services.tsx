"use client";

import { motion } from "framer-motion";

type Service = {
  name: string;
  price: string;
  duration?: string;
};

const services: Service[] = [
  { name: "Maniküre", price: "ab 25 €", duration: "30 min" },
  { name: "Maniküre für Herren", price: "ab 25 €", duration: "30 min" },
  { name: "Pediküre", price: "ab 35 €", duration: "45 min" },
  { name: "Gelnägel", price: "ab 45 €", duration: "60 min" },
  { name: "Acrylnägel", price: "ab 50 €", duration: "75 min" },
  { name: "Modellierte Nägel", price: "ab 55 €", duration: "75 min" },
  { name: "Nagelverlängerung", price: "ab 55 €", duration: "75 min" },
  { name: "Stiletto-Nägel", price: "ab 60 €", duration: "90 min" },
  { name: "Shellac / Gellack", price: "ab 30 €", duration: "45 min" },
  { name: "Nagelpuder", price: "ab 40 €", duration: "60 min" },
  { name: "Nageldesign", price: "ab 5 € / Nagel" },
  { name: "Nagelklebebilder", price: "ab 2 € / Nagel" },
  { name: "Nagellackierung", price: "ab 12 €", duration: "20 min" },
  { name: "Nagellackänderungen", price: "ab 8 €" },
  { name: "Nagellackentfernung", price: "ab 8 €" },
  { name: "Nägel schneiden & feilen", price: "ab 10 €" },
  { name: "Nagelreparatur", price: "ab 5 € / Nagel" },
  { name: "Auffüllen Acryl", price: "ab 40 €", duration: "60 min" },
  { name: "Neuauflage Acryl", price: "ab 50 €", duration: "75 min" },
  { name: "Fußmassage", price: "ab 25 €", duration: "30 min" },
  { name: "Hand- und Fußmassage", price: "ab 40 €", duration: "50 min" },
  { name: "Hornhautentfernung", price: "ab 20 €", duration: "30 min" },
  { name: "Peeling", price: "ab 15 €", duration: "20 min" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.9, 0.2, 1] as const } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="max-w-3xl">
          <div className="kicker mb-6">Leistungen &amp; Preise</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.02] text-aura-ink tracking-tight">
            Vom Basispflege bis zum{" "}
            <span className="italic font-light text-aura-deep">Statement.</span>
          </h2>
          <p className="mt-6 text-lg text-aura-ink/70 leading-relaxed">
            Alle Preise als Richtwerte — der genaue Preis hängt von Länge,
            Zustand und Design ab. Frag uns einfach.
          </p>
        </div>

        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {services.map((s, i) => (
            <motion.li
              key={s.name}
              variants={item}
              whileHover={{ y: -4, scale: 1.015 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-2xl p-5 group relative overflow-hidden"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-aura-hot/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative flex items-start justify-between gap-3">
                <div>
                  <div className="text-[11px] font-medium text-aura-deep/60 tracking-widest">
                    0{Math.min(i + 1, 9)}
                    {i + 1 > 9 ? i + 1 - 9 : ""}
                  </div>
                  <div className="font-display text-lg text-aura-ink mt-1 leading-tight">
                    {s.name}
                  </div>
                  {s.duration && (
                    <div className="text-xs text-aura-ink/50 mt-1">{s.duration}</div>
                  )}
                </div>
                <div className="text-right shrink-0">
                  <div className="text-aura-ink font-medium">{s.price}</div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-14 glass-strong rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-display text-2xl text-aura-ink">
              Unsicher, was passt?
            </div>
            <p className="text-aura-ink/70 mt-1 max-w-xl">
              Wir beraten dich gerne persönlich — schreib uns kurz, was du dir
              vorstellst.
            </p>
          </div>
          <a href="#contact" className="btn-pink">
            Beratung anfragen
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
