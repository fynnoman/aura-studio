"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const stanzas = [
  {
    n: "01",
    h: "Ruhige Atmosphäre.",
    p: "Kein Trubel, keine überbuchten Slots. Aura nimmt sich Zeit — für dich, für deine Nägel, für den Moment.",
  },
  {
    n: "02",
    h: "Präzises Handwerk.",
    p: "Jede Form, jede Kante, jede Farbe wird bewusst gesetzt. Handwerk statt Massenware — das ist der Unterschied.",
  },
  {
    n: "03",
    h: "Ehrliche Beratung.",
    p: "Wir sagen dir, was zu dir passt — und was nicht. Länge, Farbe, Design werden gemeinsam auf dich abgestimmt.",
  },
  {
    n: "04",
    h: "Ein kleiner Rückzug.",
    p: "Manche kommen für die Nägel. Manche für die Pause. Bei Aura bekommst du beides.",
  },
];

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1.15, 1.35]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-4%", "6%"]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section
      id="philosophy"
      ref={ref}
      className="relative py-24 md:py-40"
    >
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid lg:grid-cols-[0.95fr_1.1fr] gap-14 lg:gap-24 items-start">
          {/* Sticky image column */}
          <div className="relative lg:sticky lg:top-32 h-[min(72vh,780px)]">
            <div className="relative w-full h-full rounded-[36px] overflow-hidden shadow-[0_50px_100px_-40px_rgba(67,9,37,0.55)] border border-white/60">
              <motion.div
                style={{ scale: imgScale, y: imgY }}
                className="absolute inset-0 will-change-transform"
              >
                <Image
                  src="/gallery/nails-03.jpg"
                  alt="Aura Detail"
                  fill
                  sizes="(max-width: 1024px) 90vw, 560px"
                  className="object-cover"
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#170812]/40 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-white/40 rounded-[36px] pointer-events-none" />

              {/* corner meta */}
              <div className="absolute top-5 left-5 kicker kicker-light">
                Detail · Aura Studio
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.28em] opacity-70">Signature</div>
                  <div className="font-display text-2xl italic font-light mt-1">Almond, Burgundy.</div>
                </div>
                <div className="glass rounded-full px-3 py-1 text-[11px] text-aura-ink">nº 03</div>
              </div>
            </div>

            {/* floating pill */}
            <motion.div
              style={{ y: badgeY }}
              className="glass-strong rounded-2xl p-4 w-56 absolute -bottom-8 -right-4 md:-right-10"
            >
              <div className="text-[10px] uppercase tracking-[0.24em] text-aura-plum">
                seit erster stunde
              </div>
              <div className="font-display text-lg mt-1 leading-tight text-aura-ink">
                Ruhig, ehrlich, präzise.
              </div>
            </motion.div>
          </div>

          {/* Text stanzas */}
          <div>
            <div className="kicker mb-6">Philosophie</div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.98] tracking-tight text-aura-ink">
              Ein Ort für Nägel,{" "}
              <span className="serif-i text-aura-plum block md:inline">
                die dir gefallen sollen.
              </span>
            </h2>

            <p className="mt-8 text-aura-ink/75 text-lg leading-relaxed max-w-xl">
              Aura wurde aus einer einfachen Idee heraus geboren: dass Nagelpflege
              nicht nach Fließband aussehen darf. Bei uns entstehen Nägel in
              Ruhe, mit Zeit, mit Handwerk — nicht zwischen zwei Türen.
            </p>

            <div className="mt-14 space-y-3">
              {stanzas.map((s, i) => (
                <motion.article
                  key={s.n}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.05, ease: [0.2, 0.9, 0.2, 1] }}
                  className="glass rounded-2xl p-6 md:p-7 grid grid-cols-[auto_1fr] gap-5 md:gap-7 items-start"
                >
                  <div className="chapter-num text-4xl md:text-5xl leading-none pt-1">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="font-display text-xl md:text-2xl text-aura-ink leading-tight">
                      {s.h}
                    </h3>
                    <p className="mt-2 text-aura-ink/70 leading-relaxed">{s.p}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
