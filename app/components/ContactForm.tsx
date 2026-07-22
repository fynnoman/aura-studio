"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  "Maniküre",
  "Pediküre",
  "Gelnägel",
  "Acrylnägel",
  "Nageldesign",
  "Shellac / Gellack",
  "Nagelverlängerung",
  "Stiletto-Nägel",
  "Auffüllen",
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
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.2, 0.9, 0.2, 1] }}
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 4000);
      }}
      className={`glass-strong rounded-[32px] p-7 md:p-9 relative ${
        variant === "hero" ? "" : "max-w-2xl mx-auto"
      }`}
    >
      {/* Corner shine */}
      <span className="pointer-events-none absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/40 via-transparent to-transparent" />

      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl text-aura-ink">
              Termin anfragen
            </h2>
            <p className="text-sm text-aura-ink/60 mt-1">
              Wir melden uns innerhalb von 24 Stunden zurück.
            </p>
          </div>
          <span className="hidden md:inline-flex w-10 h-10 rounded-full bg-gradient-to-br from-aura-hot to-aura-deep items-center justify-center text-white shadow-lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-aura-ink/60 mb-1.5 block">Name</span>
            <input required className="field" placeholder="Vor- & Nachname" />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-aura-ink/60 mb-1.5 block">Telefon</span>
            <input required className="field" placeholder="+49 …" />
          </label>
        </div>

        <label className="block mt-3">
          <span className="text-xs uppercase tracking-widest text-aura-ink/60 mb-1.5 block">E-Mail</span>
          <input type="email" required className="field" placeholder="name@mail.de" />
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-aura-ink/60 mb-1.5 block">Leistung</span>
            <select className="field appearance-none">
              {services.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-aura-ink/60 mb-1.5 block">Wunschtermin</span>
            <input type="date" className="field" />
          </label>
        </div>

        <label className="block mt-3">
          <span className="text-xs uppercase tracking-widest text-aura-ink/60 mb-1.5 block">Nachricht (optional)</span>
          <textarea rows={3} className="field resize-none" placeholder="Wünsche, Länge, Design, Referenzen …" />
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
          Deine Angaben werden nur zur Terminvereinbarung genutzt.
        </p>
      </div>
    </motion.form>
  );
}
