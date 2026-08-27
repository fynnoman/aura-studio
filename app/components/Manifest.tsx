"use client";

const words = [
  "präzise",
  "ehrlich",
  "ruhig",
  "1 : 1",
  "handwerk",
  "aura",
  "porcelain",
  "burgundy",
  "matte ruby",
  "silver stiletto",
  "almond",
  "gel · acryl · shellac",
];

export default function Manifest() {
  return (
    <section className="relative -mt-2 py-10 md:py-14 overflow-hidden">
      <div className="hairline mb-10" />
      <div className="mask-fade-x overflow-hidden">
        <div className="marquee-track font-display text-4xl md:text-6xl text-aura-plum/70 tracking-tight whitespace-nowrap">
          {[...words, ...words].map((w, i) => (
            <span key={i} className="inline-flex items-center gap-12 pr-12">
              <span className={i % 2 === 1 ? "serif-i text-aura-hot" : ""}>{w}</span>
              <span className="text-aura-plum/40">✦</span>
            </span>
          ))}
        </div>
      </div>
      <div className="hairline mt-10" />
    </section>
  );
}
