"use client";

import { motion } from "framer-motion";

type Item = { name: string; price: string; duration?: string; note?: string };
type Group = { kicker: string; title: string; italic: string; items: Item[] };

const groups: Group[] = [
  {
    kicker: "Basis",
    title: "Klassisch,",
    italic: "gepflegt.",
    items: [
      { name: "Maniküre", price: "ab 25 €", duration: "30 min" },
      { name: "Maniküre für Herren", price: "ab 25 €", duration: "30 min" },
      { name: "Pediküre", price: "ab 35 €", duration: "45 min" },
      { name: "Nägel schneiden & feilen", price: "ab 10 €", duration: "15 min" },
      { name: "Nagellackierung", price: "ab 12 €", duration: "20 min" },
      { name: "Nagellackentfernung", price: "ab 8 €" },
      { name: "Nagellackänderung", price: "ab 8 €" },
    ],
  },
  {
    kicker: "Modellage",
    title: "Länge,",
    italic: "Form, Halt.",
    items: [
      { name: "Gelnägel", price: "ab 45 €", duration: "60 min" },
      { name: "Acrylnägel", price: "ab 50 €", duration: "75 min" },
      { name: "Modellierte Nägel", price: "ab 55 €", duration: "75 min" },
      { name: "Nagelverlängerung", price: "ab 55 €", duration: "75 min" },
      { name: "Stiletto-Nägel", price: "ab 60 €", duration: "90 min", note: "Signature" },
      { name: "Auffüllen Acryl", price: "ab 40 €", duration: "60 min" },
      { name: "Neuauflage Acryl", price: "ab 50 €", duration: "75 min" },
      { name: "Nagelreparatur", price: "ab 5 € / Nagel" },
    ],
  },
  {
    kicker: "Design",
    title: "Farbe,",
    italic: "Detail, Statement.",
    items: [
      { name: "Shellac / Gellack", price: "ab 30 €", duration: "45 min" },
      { name: "Nagelpuder", price: "ab 40 €", duration: "60 min" },
      { name: "Nageldesign", price: "ab 5 € / Nagel", note: "individuell" },
      { name: "Nagelklebebilder", price: "ab 2 € / Nagel" },
    ],
  },
  {
    kicker: "Ritual",
    title: "Pause",
    italic: "vom Alltag.",
    items: [
      { name: "Fußmassage", price: "ab 25 €", duration: "30 min" },
      { name: "Hand- und Fußmassage", price: "ab 40 €", duration: "50 min" },
      { name: "Hornhautentfernung", price: "ab 20 €", duration: "30 min" },
      { name: "Peeling", price: "ab 15 €", duration: "20 min" },
    ],
  },
];

const container = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.2, 0.9, 0.2, 1] as const } },
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-14 lg:gap-24 items-start">
          {/* Sticky heading */}
          <div className="lg:sticky lg:top-32">
            <div className="kicker mb-6">Preise · Richtwerte</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.98] tracking-tight text-aura-ink">
              Von der Basis
              <br />
              zum <span className="serif-i text-aura-plum">Statement.</span>
            </h2>
            <p className="mt-6 text-aura-ink/70 text-lg leading-relaxed max-w-lg">
              Alle Preise sind Richtwerte — der genaue Preis hängt von Länge,
              Zustand deiner Nägel und Design ab. Schreib uns kurz, was du dir
              vorstellst; wir sagen dir vorab, mit welchem Budget du rechnen kannst.
            </p>

            <div className="mt-10 glass-strong rounded-3xl p-6 md:p-7">
              <div className="text-[10px] uppercase tracking-[0.28em] text-aura-plum">
                Beratung
              </div>
              <div className="font-display text-2xl text-aura-ink mt-2 leading-tight">
                Unsicher, was zu dir passt?
              </div>
              <p className="text-aura-ink/70 mt-2 text-sm leading-relaxed">
                Wir beraten dich persönlich — ohne Verkaufsdruck, ehrlich zur
                Form, Länge und Farbe.
              </p>
              <a href="#studio" className="btn-pink mt-5 w-full justify-center">
                Beratung anfragen
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Grouped price list */}
          <div className="space-y-16 md:space-y-20">
            {groups.map((g, gi) => (
              <div key={g.kicker}>
                <div className="flex items-baseline justify-between gap-6 mb-8">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.32em] text-aura-plum/80 mb-3">
                      Kapitel · {String(gi + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-display text-3xl md:text-5xl leading-[1] text-aura-ink tracking-tight">
                      {g.title}{" "}
                      <span className="serif-i text-aura-plum">{g.italic}</span>
                    </h3>
                  </div>
                  <div className="hidden md:block text-[11px] uppercase tracking-[0.28em] text-aura-ink/40">
                    {g.kicker}
                  </div>
                </div>

                <motion.ul
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  className="glass-strong rounded-3xl p-2 md:p-3 divide-y divide-white/50"
                >
                  {g.items.map((s) => (
                    <motion.li
                      key={s.name}
                      variants={item}
                      className="group flex items-center justify-between gap-5 px-4 md:px-5 py-4 md:py-5 rounded-2xl hover:bg-white/45 transition-colors"
                    >
                      <div className="min-w-0">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <span className="font-display text-lg md:text-xl text-aura-ink leading-tight">
                            {s.name}
                          </span>
                          {s.note && (
                            <span className="text-[10px] uppercase tracking-[0.24em] text-aura-hot bg-aura-hot/10 px-2 py-0.5 rounded-full">
                              {s.note}
                            </span>
                          )}
                        </div>
                        {s.duration && (
                          <div className="text-xs text-aura-ink/50 mt-1 tracking-wide">
                            {s.duration}
                          </div>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-aura-ink font-medium tracking-tight">
                          {s.price}
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            ))}

            <p className="text-xs text-aura-ink/50 italic pt-4">
              Änderungen vorbehalten. Preise verstehen sich in Euro, inkl. MwSt.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
