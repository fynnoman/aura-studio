"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const steps = [
  {
    n: "01",
    time: "min 0",
    h: "Ankommen.",
    p: "Ein warmes Getränk, ein kurzer Moment. Wir hören dir zu — welche Form, welche Länge, welcher Anlass.",
  },
  {
    n: "02",
    time: "min 10",
    h: "Vorbereitung.",
    p: "Nagelhaut, Form, Feilung. Alles wird sauber angelegt, bevor Farbe oder Modellage überhaupt zur Sprache kommen.",
  },
  {
    n: "03",
    time: "min 25",
    h: "Handwerk.",
    p: "Gel, Acryl, Shellac oder Design — präzise gesetzt, Schicht für Schicht, unter ruhiger Beleuchtung.",
  },
  {
    n: "04",
    time: "min 75",
    h: "Finish.",
    p: "Pflege, Kontrolle, ein letzter Blick im Tageslicht. Du gehst mit Nägeln, die sich anfühlen wie deine eigenen — nur besser.",
  },
];

export default function Ritual() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineScale = useTransform(scrollYProgress, [0.15, 0.9], [0, 1]);

  return (
    <section id="ritual" ref={ref} className="relative py-28 md:py-40 overflow-hidden">
      {/* Ambient rose glow */}
      <div className="absolute -z-10 inset-0 pointer-events-none">
        <div className="blob w-[600px] h-[600px] bg-aura-hot/20 top-32 -left-24 animate-drift" />
        <div className="blob w-[500px] h-[500px] bg-aura-rose/25 bottom-0 right-0 animate-drift2" />
      </div>

      <div className="mx-auto max-w-[1280px] px-6">
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className="kicker mb-6">Das Ritual</div>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.98] tracking-tight text-aura-ink">
            Vier Kapitel. Ein
            <br />
            <span className="serif-i text-aura-plum">stiller Nachmittag.</span>
          </h2>
          <p className="mt-8 text-aura-ink/70 text-lg leading-relaxed">
            Ein Termin bei Aura ist kein Slot im 15-Minuten-Takt. Er ist ein
            Ritual — kurz, aber vollständig. So sieht ein Besuch bei uns aus.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-14 lg:gap-24">
          {/* Timeline */}
          <div className="relative">
            {/* vertical rail */}
            <div className="absolute left-[22px] top-2 bottom-2 w-px bg-aura-plum/15 rounded-full" />
            <motion.div
              style={{ scaleY: lineScale, transformOrigin: "top" }}
              className="absolute left-[22px] top-2 bottom-2 w-px bg-gradient-to-b from-aura-hot via-aura-plum to-aura-deep rounded-full"
            />

            <ol className="space-y-6">
              {steps.map((s, i) => (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease: [0.2, 0.9, 0.2, 1] }}
                  className="relative pl-16"
                >
                  {/* node */}
                  <span className="absolute left-0 top-1 w-11 h-11 rounded-full glass-strong flex items-center justify-center font-display text-sm text-aura-plum shadow-[0_10px_24px_-8px_rgba(67,9,37,0.4)]">
                    {s.n}
                  </span>

                  <div className="glass rounded-2xl p-5 md:p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-[10px] uppercase tracking-[0.28em] text-aura-plum">
                        {s.time}
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.28em] text-aura-ink/40">
                        Kapitel {s.n}
                      </div>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl text-aura-ink leading-tight">
                      {s.h}
                    </h3>
                    <p className="mt-2 text-aura-ink/70 leading-relaxed">{s.p}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Sticky visual */}
          <div className="lg:sticky lg:top-32 self-start">
            <div className="relative aspect-[4/5] rounded-[36px] overflow-hidden shadow-[0_50px_100px_-40px_rgba(67,9,37,0.55)] border border-white/60">
              <Image
                src="/gallery/nails-02.jpg"
                alt="Aura Ritual"
                fill
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#170812]/60 via-transparent to-transparent" />

              <div className="absolute top-5 left-5 kicker kicker-light">
                Signature Silver
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] opacity-70">Dauer</div>
                  <div className="font-display text-2xl italic font-light mt-1">
                    ~ 75 Minuten
                  </div>
                </div>
                <div className="glass rounded-full px-3 py-1 text-[11px] text-aura-ink">
                  1 : 1
                </div>
              </div>
            </div>

            <div className="mt-6 glass-strong rounded-2xl p-5 flex items-center justify-between gap-4">
              <div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-aura-plum">
                  Bereit?
                </div>
                <div className="font-display text-lg text-aura-ink mt-0.5 leading-tight">
                  Sichere dir deinen Slot.
                </div>
              </div>
              <a href="#studio" className="btn-glass !py-2 !px-4 text-sm">
                Termin
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
