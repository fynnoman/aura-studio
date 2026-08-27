export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12">
      <div className="mx-auto max-w-[1280px] px-6">
        {/* huge wordmark */}
        <div className="relative overflow-hidden mb-14">
          <h2 className="font-display leading-[0.85] tracking-tight text-aura-plum/25 text-[clamp(5rem,18vw,18rem)] select-none pointer-events-none">
            aura<span className="serif-i text-aura-hot/40">.</span>
          </h2>
        </div>

        <div className="hairline mb-10" />

        <div className="grid md:grid-cols-4 gap-10 items-start">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-8 rounded-full bg-gradient-to-br from-white via-aura-blush to-aura-hot shadow-inner" />
              <span className="font-display text-xl text-aura-ink">
                aura<span className="text-aura-plum">.</span>
              </span>
            </div>
            <p className="text-sm text-aura-ink/60 leading-relaxed max-w-xs">
              Nagelstudio in Saarlouis. Präzises Handwerk, ruhige Atmosphäre,
              individuelle Beratung.
            </p>
          </div>

          <div className="text-sm text-aura-ink/70 space-y-1.5">
            <div className="text-[10px] uppercase tracking-[0.28em] text-aura-plum mb-3">
              Studio
            </div>
            <div>Provinzialstraße 69</div>
            <div>66740 Saarlouis</div>
            <div className="pt-2">
              <a
                href="https://maps.google.com/?q=Provinzialstraße+69,+66740+Saarlouis"
                target="_blank"
                rel="noopener noreferrer"
                className="text-aura-plum hover:text-aura-hot transition-colors underline underline-offset-4"
              >
                In Karte öffnen
              </a>
            </div>
          </div>

          <div className="text-sm text-aura-ink/70 space-y-1.5">
            <div className="text-[10px] uppercase tracking-[0.28em] text-aura-plum mb-3">
              Öffnungszeiten
            </div>
            <div>Mo – Mi &nbsp; 09 – 18 h</div>
            <div>Do – Fr &nbsp; 09 – 19 h</div>
            <div>Sa &nbsp; 09 – 15 h</div>
            <div className="text-aura-ink/40">So &nbsp; geschlossen</div>
          </div>

          <div className="text-sm text-aura-ink/70 space-y-1.5">
            <div className="text-[10px] uppercase tracking-[0.28em] text-aura-plum mb-3">
              Rechtliches
            </div>
            <a href="#" className="block hover:text-aura-ink transition-colors">Impressum</a>
            <a href="#" className="block hover:text-aura-ink transition-colors">Datenschutz</a>
            <a href="#" className="block hover:text-aura-ink transition-colors">AGB</a>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-aura-ink/50">
          <div>© {new Date().getFullYear()} Aura Nagelstudio · Saarlouis</div>
          <div className="serif-i text-aura-plum/70 text-sm">
            Handwerk, das dich strahlen lässt.
          </div>
        </div>
      </div>
    </footer>
  );
}
