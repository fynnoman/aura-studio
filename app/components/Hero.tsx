"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, []);

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.28]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.9], [0.35, 0.9]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -140]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate min-h-[112vh] pt-28"
    >
      {/* Sticky full-bleed cinematic image */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.div
            style={{ scale: imgScale, y: imgY }}
            className="absolute inset-0 will-change-transform"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/gallery/hero-v2.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </motion.div>

          {/* Editorial gradient wash */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#170812]/25 via-transparent to-[#FBEFEB]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#430925]/45 via-transparent to-[#430925]/20" />
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FBEFEB]"
          />

          {/* Drifting rose blobs on top of image */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="blob w-[600px] h-[600px] bg-aura-hot/25 -top-32 -left-24 animate-drift" />
            <div className="blob w-[540px] h-[540px] bg-aura-rose/30 top-48 -right-40 animate-drift2" />
          </div>
        </div>
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-[1280px] px-6 pt-28 md:pt-40 pb-40 min-h-[95vh] flex flex-col justify-between">
        {/* Top row — meta */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center justify-between text-aura-porcelain/85 text-[11px] tracking-[0.28em] uppercase"
        >
          <div className="glass rounded-full px-3.5 py-1.5 text-aura-ink">
            Est. Saarlouis · MMXVIII
          </div>
          <div className="hidden md:flex items-center gap-3">
            <span>49° 18′ N</span>
            <span className="w-6 h-px bg-white/40" />
            <span>06° 45′ E</span>
          </div>
        </motion.div>

        {/* Hero headline */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="max-w-[980px] mt-16 md:mt-24"
        >
          <div className="kicker kicker-light mb-8">
            Nagelstudio · Saarlouis
          </div>

          <h1 className="font-display text-white leading-[0.9] tracking-tight text-[clamp(3.5rem,10vw,10rem)] drop-shadow-[0_6px_40px_rgba(23,8,18,0.55)]">
            <span className="block">Handwerk,</span>
            <span className="block serif-i text-aura-blush/95 -mt-1 md:-mt-3">
              das dich
            </span>
            <span className="block">strahlen lässt.</span>
          </h1>

          <p className="mt-10 max-w-xl text-white/85 text-lg md:text-xl leading-relaxed">
            Präzise. Ehrlich. Ruhig. Aura ist kein Massenstudio — jede Behandlung
            ist eine kleine Pause vom Alltag, an einem Ort, an dem Nägel zu einem
            kleinen Kunstwerk werden.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#studio" className="btn-glass">
              Termin anfragen
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#looks"
              className="inline-flex items-center gap-2 text-white/85 hover:text-white text-sm tracking-widest uppercase transition-colors"
            >
              Signature Looks
              <span className="w-6 h-px bg-white/60" />
            </a>
          </div>
        </motion.div>

        {/* Bottom row — floating glass stat cards */}
        <motion.div
          style={{ y: cardY, opacity: cardOpacity }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl"
        >
          {[
            { k: "23+", v: "Signature Leistungen" },
            { k: "1:1", v: "Persönliche Betreuung" },
            { k: "★★★★★", v: "Präzision" },
            { k: "6 Tage", v: "in der Woche geöffnet" },
          ].map((s) => (
            <div key={s.v} className="glass rounded-2xl px-4 py-3.5">
              <div className="font-display text-xl text-aura-ink leading-none">{s.k}</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-aura-ink/60 mt-1.5 leading-tight">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.9 }}
        className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/70 text-[10px] tracking-[0.32em] uppercase"
      >
        <span>scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-white/80 to-transparent" />
      </motion.div>
    </section>
  );
}
