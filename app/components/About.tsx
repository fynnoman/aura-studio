"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" ref={ref} className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1240px] px-6 grid lg:grid-cols-[1fr_1.1fr] gap-14 lg:gap-24 items-center">
        {/* image */}
        <motion.div
          style={{ y: imgY, scale: imgScale }}
          className="relative aspect-[4/5] max-w-[440px] mx-auto lg:mx-0"
        >
          <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-white/60 to-aura-blush/40 backdrop-blur-xl border border-white/60 shadow-2xl" />
          <div className="relative w-full h-full rounded-[28px] overflow-hidden shadow-2xl">
            <Image
              src="/gallery/nails-03.jpg"
              alt="Aura Studio Detail"
              fill
              sizes="(max-width: 1024px) 90vw, 440px"
              className="object-cover"
            />
          </div>

          {/* floating glass card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="absolute -bottom-6 -right-4 md:-right-10 glass rounded-2xl p-4 w-56"
          >
            <div className="text-[11px] uppercase tracking-widest text-aura-deep">
              seit erster stunde
            </div>
            <div className="font-display text-lg mt-1 leading-tight text-aura-ink">
              Ruhige Atmosphäre, präzises Handwerk.
            </div>
          </motion.div>
        </motion.div>

        {/* text */}
        <motion.div style={{ y: textY }}>
          <div className="kicker mb-6">Über Aura</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.02] text-aura-ink tracking-tight">
            Ein Ort für Nägel,{" "}
            <span className="italic font-light text-aura-deep">
              die dir gefallen sollen.
            </span>
          </h2>

          <div className="mt-8 space-y-5 text-aura-ink/75 text-lg leading-relaxed max-w-xl">
            <p>
              Aura ist kein Massenstudio. Wir nehmen uns Zeit — für die Form
              deiner Nägel, für die Wahl der Farbe, für dich als Gast. Jede
              Behandlung fühlt sich an wie eine kleine Pause vom Alltag.
            </p>
            <p>
              Von klassischer Maniküre und Pediküre bis zu modellierten
              Verlängerungen, Shellac und Nageldesign — alles unter einem Dach,
              alles aus einer Hand.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 max-w-md">
            {[
              "Präzise Formgebung",
              "Hochwertige Materialien",
              "Individuelle Beratung",
              "Ruhige Atmosphäre",
            ].map((f) => (
              <div key={f} className="glass rounded-xl px-4 py-3 flex items-center gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-aura-hot to-aura-deep" />
                {f}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
