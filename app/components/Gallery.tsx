"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const images = [
  { src: "/gallery/nails-red-almond.jpg", label: "Ruby Almond", tag: "Stiletto · rot" },
  { src: "/gallery/nails-stiletto-white.png", label: "White Stiletto", tag: "Modelliert · nude" },
  { src: "/gallery/nails-nude.png", label: "Soft Nude", tag: "Klassisch · gepflegt" },
  { src: "/gallery/nails-red-short.png", label: "Cherry Short", tag: "Kurz · rot" },
  { src: "/gallery/nails-red-almond.jpg", label: "Bold Statement", tag: "Nageldesign" },
  { src: "/gallery/nails-stiletto-white.png", label: "Glass Finish", tag: "Shellac" },
];

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Horizontal translate for the row of images
  const x = useTransform(scrollYProgress, [0.05, 0.95], ["2%", "-72%"]);

  // Header animations
  const headerScale = useTransform(scrollYProgress, [0, 0.15], [1, 0.94]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.15, 0.9, 1], [1, 1, 1, 0.7]);

  return (
    <section id="gallery" ref={ref} className="relative h-[420vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {/* header */}
        <motion.div
          style={{ scale: headerScale, opacity: headerOpacity }}
          className="mx-auto max-w-[1240px] w-full px-6 flex items-end justify-between gap-8 mb-10"
        >
          <div>
            <div className="kicker mb-4">Galerie</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[1] text-aura-ink tracking-tight">
              Arbeiten aus{" "}
              <span className="italic font-light text-aura-deep">unserem Studio.</span>
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-3 text-aura-ink/60">
            <span className="text-xs uppercase tracking-widest">scroll ↓</span>
            <span className="w-10 h-px bg-aura-deep/40" />
          </div>
        </motion.div>

        {/* Horizontal scroll row */}
        <motion.div
          style={{ x }}
          className="flex gap-6 md:gap-10 pl-6 will-change-transform"
        >
          {images.map((img, i) => (
            <Card key={i} src={img.src} label={img.label} tag={img.tag} index={i} progress={scrollYProgress} />
          ))}
          {/* trailing spacer */}
          <div className="shrink-0 w-24" />
        </motion.div>

        {/* progress line */}
        <div className="mx-auto max-w-[1240px] w-full px-6 mt-10">
          <div className="relative h-px bg-aura-deep/15">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
              className="absolute inset-0 bg-gradient-to-r from-aura-hot to-aura-deep"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({
  src,
  label,
  tag,
  index,
  progress,
}: {
  src: string;
  label: string;
  tag: string;
  index: number;
  progress: MotionValue<number>;
}) {
  // Each card peaks at a different scroll point
  const total = 6;
  const step = 1 / (total + 1);
  const peak = (index + 1) * step;
  const start = Math.max(0, peak - 0.18);
  const end = Math.min(1, peak + 0.18);

  const scale = useTransform(progress, [start, peak, end], [0.86, 1.06, 0.92]);
  const rotate = useTransform(progress, [start, peak, end], [-2, 0, 2]);
  const y = useTransform(progress, [start, peak, end], [40, -30, 40]);

  return (
    <motion.figure
      style={{ scale, rotate, y }}
      className="shrink-0 relative w-[68vw] sm:w-[46vw] md:w-[36vw] lg:w-[30vw] max-w-[520px] aspect-[3/4]"
    >
      <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-white/50 to-aura-blush/40 backdrop-blur-xl border border-white/60 shadow-2xl" />
      <div className="relative w-full h-full rounded-[28px] overflow-hidden shadow-2xl">
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 768px) 68vw, 30vw"
          className="object-cover"
        />
        {/* bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        <figcaption className="absolute left-5 bottom-5 right-5 text-white">
          <div className="text-[11px] uppercase tracking-[0.2em] opacity-80">{tag}</div>
          <div className="font-display text-2xl mt-1">{label}</div>
        </figcaption>

        {/* index chip */}
        <div className="absolute top-4 right-4 glass rounded-full px-3 py-1 text-[11px] font-medium text-aura-ink">
          0{index + 1}
        </div>
      </div>
    </motion.figure>
  );
}
