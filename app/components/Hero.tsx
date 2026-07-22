"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const formY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative pt-32 md:pt-40 pb-24 md:pb-32 overflow-hidden"
    >
      {/* Full-bleed hero background image */}
      <motion.div
        style={{ scale: bgScale, y: bgY }}
        className="absolute inset-0 -z-20 pointer-events-none"
      >
        <Image
          src="/gallery/nails-red-almond.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Soft cream/pink wash to keep content readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF6F5]/95 via-[#FFEAF2]/70 to-[#FFF6F5]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF6F5]/70 via-transparent to-[#FFEAF2]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_50%,rgba(255,246,245,0.85),transparent_70%)]" />
      </motion.div>

      {/* Animated pink blobs on top of the image */}
      <motion.div style={{ y: blobY }} className="absolute inset-0 -z-10 pointer-events-none">
        <div className="blob w-[520px] h-[520px] bg-aura-hot/40 -top-32 -left-24 animate-drift" />
        <div className="blob w-[600px] h-[600px] bg-aura-rose/50 top-24 -right-40 animate-drift2" />
        <div className="blob w-[400px] h-[400px] bg-aura-blush/60 bottom-0 left-1/3 animate-drift" />
      </motion.div>

      <div className="mx-auto max-w-[1240px] px-6 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        {/* LEFT — copy */}
        <motion.div style={{ y: titleY, opacity: titleOpacity }} className="relative">
          <div className="kicker mb-6">Nagelstudio · Saarlouis</div>

          <h1 className="font-display text-[clamp(3rem,7vw,6.5rem)] leading-[0.95] tracking-tight text-aura-ink">
            <span className="block">Handwerk,</span>
            <span className="block italic font-light text-aura-deep">
              das dich
            </span>
            <span className="block">strahlen lässt.</span>
          </h1>

          <p className="mt-8 max-w-lg text-lg text-aura-ink/70 leading-relaxed">
            Präzise, ehrlich, ruhig. Wir arbeiten an deinen Nägeln wie an einem
            kleinen Kunstwerk — von der klassischen Maniküre bis zur
            modellierten Verlängerung.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#services" className="btn-glass">
              Leistungen ansehen
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#gallery" className="text-sm text-aura-deep underline-offset-4 hover:underline">
              zur Galerie →
            </a>
          </div>

          {/* Trust row */}
          <div className="mt-14 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: "23+", v: "Leistungen" },
              { k: "★★★★★", v: "Handwerk" },
              { k: "1:1", v: "Betreuung" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl px-4 py-3">
                <div className="font-display text-lg text-aura-ink">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-aura-ink/60 mt-0.5">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — big liquid glass contact form */}
        <motion.div style={{ y: formY }} className="relative">
          <div className="absolute -inset-8 -z-10">
            <div className="blob w-[380px] h-[380px] bg-aura-hot/40 -top-8 -right-4 animate-drift" />
            <div className="blob w-[260px] h-[260px] bg-white/60 bottom-0 -left-6 animate-drift2" />
          </div>
          <ContactForm variant="hero" />
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-aura-ink/50 text-xs tracking-widest uppercase"
      >
        <span>scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-aura-deep/60 to-transparent" />
      </motion.div>
    </section>
  );
}
