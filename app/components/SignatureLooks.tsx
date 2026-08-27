"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

type Look = {
  n: string;
  name: string;
  tag: string;
  meta: string;
  desc: string;
  src: string;
  palette: string[];
};

const looks: Look[] = [
  {
    n: "I",
    name: "Matte Ruby",
    tag: "Kurz · rot matt",
    meta: "Länge kurz · Form rund · Finish matt",
    desc: "Ein tiefes, sattes Rot mit gedämpfter Oberfläche — der Klassiker, neu gedacht. Zeitlos zu allem, was du trägst.",
    src: "/gallery/nails-01.jpg",
    palette: ["#7B1424", "#B31E31", "#3A0812"],
  },
  {
    n: "II",
    name: "Silver Stiletto",
    tag: "Modelliert · nude mit Glitter",
    meta: "Länge lang · Form stiletto · Finish glossy shimmer",
    desc: "Nude Base, feiner Silberstaub in der Spitze, spitze Form. Dramatik ohne Anstrengung — für Abende, an denen es leuchten soll.",
    src: "/gallery/nails-02.jpg",
    palette: ["#F2D6C8", "#E6E6E6", "#B79FA1"],
  },
  {
    n: "III",
    name: "Burgundy Almond",
    tag: "Almond · burgundy",
    meta: "Länge mittel · Form almond · Finish creamy gloss",
    desc: "Warme Burgundy-Cremétextur auf zart gerundeter Almond-Form. Weich in der Silhouette, kräftig in der Farbe.",
    src: "/gallery/nails-03.jpg",
    palette: ["#5C1230", "#8B1E3F", "#2E0619"],
  },
];

export default function SignatureLooks() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section id="looks" ref={ref} className="relative" style={{ height: `${100 + looks.length * 100}vh` }}>
      {/* Sticky stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Image handoff — each layer scales & fades as scroll advances */}
        {looks.map((l, i) => (
          <LookLayer key={l.n} look={l} index={i} total={looks.length} progress={scrollYProgress} />
        ))}

        {/* Persistent overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#170812]/70 via-[#170812]/25 to-[#170812]/55 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#430925]/60 via-transparent to-[#430925]/30 pointer-events-none" />

        {/* Foreground copy layers */}
        <div className="absolute inset-0 flex flex-col justify-between">
          <div className="mx-auto max-w-[1280px] w-full px-6 pt-28 md:pt-32 flex items-center justify-between text-white/85">
            <div className="kicker kicker-light">Signature Looks</div>
            <div className="hidden md:flex items-center gap-4 text-[11px] tracking-[0.28em] uppercase">
              <span>Kapitel</span>
              <span className="font-display italic text-lg leading-none">
                {looks.length} Werke
              </span>
            </div>
          </div>

          {/* Copy stack — each look copy fades in at its own segment */}
          <div className="mx-auto max-w-[1280px] w-full px-6 pb-24 md:pb-32">
            <div className="relative min-h-[380px] md:min-h-[420px]">
              {looks.map((l, i) => (
                <LookCopy key={l.n} look={l} index={i} total={looks.length} progress={scrollYProgress} />
              ))}
            </div>
          </div>
        </div>

        {/* Progress rail */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {looks.map((_, i) => (
            <Dot key={i} index={i} total={looks.length} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LookLayer({
  look,
  index,
  total,
  progress,
}: {
  look: Look;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const seg = 1 / total;
  const start = index * seg;
  const end = (index + 1) * seg;
  const mid = start + seg / 2;

  // Image layers overlap softly for the cinematic handoff.
  const opacity = useTransform(
    progress,
    [start - 0.02, start + 0.04, end - 0.02, end + 0.01],
    [0, 1, 1, 0]
  );
  const scale = useTransform(progress, [start, end], [1.02, 1.32]);
  const y = useTransform(progress, [start, end], ["0%", "-6%"]);
  const blur = useTransform(progress, [start, end - 0.03, end], ["0px", "0px", "8px"]);

  return (
    <motion.div
      style={{ opacity, filter: useTransform(blur, (b) => `blur(${b})`) }}
      className="absolute inset-0"
    >
      <motion.div
        style={{ scale, y }}
        className="absolute inset-0 will-change-transform"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={look.src}
          alt={look.name}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      </motion.div>
    </motion.div>
  );
}

function LookCopy({
  look,
  index,
  total,
  progress,
}: {
  look: Look;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const seg = 1 / total;
  const start = index * seg;
  const end = (index + 1) * seg;

  // Tight crossfade so only one chapter's copy is readable at a time.
  const opacity = useTransform(
    progress,
    [start, start + 0.02, end - 0.04, end - 0.015],
    [0, 1, 1, 0]
  );
  const y = useTransform(progress, [start, end], [30, -30]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 grid lg:grid-cols-[1.1fr_1fr] gap-10 items-end"
    >
      {/* Left: name & description */}
      <div className="text-white max-w-2xl">
        <div className="flex items-baseline gap-5 mb-4 text-white/80">
          <span className="chapter-num !text-white/50 text-3xl md:text-4xl leading-none">
            {look.n}
          </span>
          <span className="text-[11px] uppercase tracking-[0.3em]">{look.tag}</span>
        </div>
        <h3 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.9] tracking-tight">
          {look.name.split(" ").map((w, i) => (
            <span key={i} className={i === 1 ? "serif-i text-aura-blush block md:inline" : "block md:inline"}>
              {i > 0 && <>&nbsp;</>}
              {w}
            </span>
          ))}
        </h3>
        <p className="mt-6 max-w-lg text-white/85 text-lg leading-relaxed">{look.desc}</p>
        <div className="mt-6 text-[11px] uppercase tracking-[0.28em] text-white/60">
          {look.meta}
        </div>
      </div>

      {/* Right: palette card */}
      <div className="justify-self-start lg:justify-self-end w-full max-w-md">
        <div className="glass-dark rounded-3xl p-6">
          <div className="text-[10px] uppercase tracking-[0.28em] text-white/60 mb-4">
            Palette
          </div>
          <div className="flex items-center gap-3">
            {look.palette.map((c) => (
              <div key={c} className="flex-1">
                <div
                  className="aspect-square rounded-2xl shadow-inner ring-1 ring-white/25"
                  style={{ background: c }}
                />
                <div className="text-[10px] text-white/60 mt-2 font-mono tracking-widest">
                  {c}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center justify-between text-white/80">
            <span className="text-[11px] uppercase tracking-[0.28em]">Auf Anfrage</span>
            <a href="#studio" className="text-sm underline underline-offset-4 text-aura-blush hover:text-white">
              Termin →
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Dot({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const seg = 1 / total;
  const start = index * seg;
  const end = (index + 1) * seg;

  const opacity = useTransform(progress, [start, start + 0.05, end - 0.05, end], [0.35, 1, 1, 0.35]);
  const width = useTransform(progress, [start, start + 0.05, end - 0.05, end], [10, 36, 36, 10]);

  return (
    <motion.span
      style={{ opacity, width }}
      className="h-[3px] rounded-full bg-white block"
    />
  );
}
