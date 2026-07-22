"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";

const hours = [
  ["Montag", "09:00 – 18:00"],
  ["Dienstag", "09:00 – 18:00"],
  ["Mittwoch", "09:00 – 18:00"],
  ["Donnerstag", "09:00 – 19:00"],
  ["Freitag", "09:00 – 19:00"],
  ["Samstag", "09:00 – 15:00"],
  ["Sonntag", "geschlossen"],
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-36">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="max-w-3xl">
          <div className="kicker mb-6">Kontakt &amp; Termin</div>
          <h2 className="font-display text-5xl md:text-6xl leading-[1.02] text-aura-ink tracking-tight">
            Komm vorbei —{" "}
            <span className="italic font-light text-aura-deep">
              mitten in Saarlouis.
            </span>
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1fr_1.05fr] gap-10 items-start">
          {/* left: infos */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8 }}
              className="glass-strong rounded-3xl p-7"
            >
              <div className="text-[11px] uppercase tracking-widest text-aura-deep mb-2">Adresse</div>
              <div className="font-display text-2xl text-aura-ink leading-tight">
                Aura Nagelstudio
              </div>
              <div className="text-aura-ink/75 mt-1">
                Provinzialstraße 69
                <br />
                66740 Saarlouis
              </div>
              <a
                href="https://maps.google.com/?q=Provinzialstraße+69,+66740+Saarlouis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 text-sm text-aura-deep underline underline-offset-4"
              >
                In Karte öffnen →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="glass rounded-2xl p-5">
                <div className="text-[11px] uppercase tracking-widest text-aura-deep mb-1">
                  Telefon
                </div>
                <div className="font-display text-lg text-aura-ink">
                  auf Anfrage
                </div>
              </div>
              <div className="glass rounded-2xl p-5">
                <div className="text-[11px] uppercase tracking-widest text-aura-deep mb-1">
                  E-Mail
                </div>
                <div className="font-display text-lg text-aura-ink">
                  auf Anfrage
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass rounded-3xl p-6"
            >
              <div className="text-[11px] uppercase tracking-widest text-aura-deep mb-3">
                Öffnungszeiten
              </div>
              <ul className="divide-y divide-aura-deep/10">
                {hours.map(([d, h]) => (
                  <li key={d} className="flex items-center justify-between py-2.5 text-aura-ink/85 text-sm">
                    <span>{d}</span>
                    <span className={h === "geschlossen" ? "text-aura-ink/40" : ""}>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="text-[11px] text-aura-ink/50 mt-3">
                Zeiten sind Platzhalter — bitte final bestätigen.
              </div>
            </motion.div>

            {/* mini map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative rounded-3xl overflow-hidden aspect-[16/9] border border-white/60 shadow-xl"
            >
              <iframe
                title="Aura Nagelstudio Saarlouis"
                src="https://www.google.com/maps?q=Provinzialstra%C3%9Fe+69,+66740+Saarlouis&output=embed"
                className="w-full h-full"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* right: contact form (reused) */}
          <div className="lg:sticky lg:top-28">
            <ContactForm variant="section" />
          </div>
        </div>
      </div>
    </section>
  );
}
