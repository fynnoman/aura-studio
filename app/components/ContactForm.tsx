"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Maniküre",
  "Pediküre",
  "Gelnägel",
  "Acrylnägel",
  "Modellierte Nägel",
  "Stiletto-Nägel",
  "Shellac / Gellack",
  "Nagelpuder",
  "Nageldesign",
  "Nagelverlängerung",
  "Auffüllen",
  "Fußmassage",
  "Beratung / anderes",
];

export default function ContactForm({
  variant = "hero",
}: {
  variant?: "hero" | "section";
}) {
  const [sent, setSent] = useState(false);

  return (
    <motion.form
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.2, 0.9, 0.2, 1] }}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
      }}
      className={`glass-strong rounded-[32px] p-7 md:p-9 relative ${
        variant === "hero" ? "" : ""
      }`}
    >
      {/* Corner shine */}
      <span className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/40 via-transparent to-transparent" />

      <div className="relative">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.28em] text-aura-plum mb-2">
              Termin anfragen
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-aura-ink leading-[1] tracking-tight">
              Kurz beschreiben.<br />
              <span className="serif-i text-aura-plum">Wir melden uns.</span>
            </h3>
            <p className="text-sm text-aura-ink/60 mt-2">
              Antwort innerhalb von 24 Stunden.
            </p>
          </div>
          <span className="hidden md:inline-flex w-11 h-11 rounded-full bg-gradient-to-br from-aura-hot to-aura-plum items-center justify-center text-white shadow-lg shrink-0">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M3 8l9 6 9-6M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.22em] text-aura-ink/55 mb-1.5 block">
              Name
            </span>
            <input required className="field" placeholder="Vor- & Nachname" />
          </label>
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.22em] text-aura-ink/55 mb-1.5 block">
              Telefon
            </span>
            <input required className="field" placeholder="+49 …" />
          </label>
        </div>

        <label className="block mt-3">
          <span className="text-[11px] uppercase tracking-[0.22em] text-aura-ink/55 mb-1.5 block">
            E-Mail
          </span>
          <input type="email" required className="field" placeholder="name@mail.de" />
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.22em] text-aura-ink/55 mb-1.5 block">
              Leistung
            </span>
            <select className="field appearance-none">
              {services.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-[11px] uppercase tracking-[0.22em] text-aura-ink/55 mb-1.5 block">
              Wunschtermin
            </span>
            <input type="date" className="field" />
          </label>
        </div>

        <label className="block mt-3">
          <span className="text-[11px] uppercase tracking-[0.22em] text-aura-ink/55 mb-1.5 block">
            Nachricht (optional)
          </span>
          <textarea
            rows={3}
            className="field resize-none"
            placeholder="Wünsche, Länge, Design, Referenzen …"
          />
        </label>

        <button type="submit" className="btn-pink mt-6 w-full justify-center text-base py-3">
          {sent ? "Danke — wir melden uns." : "Anfrage senden"}
          {!sent && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>

        <p className="text-[11px] text-aura-ink/50 mt-4 text-center">
          Deine Angaben werden ausschließlich zur Terminvereinbarung genutzt.
        </p>
      </div>
    </motion.form>
  );
}
