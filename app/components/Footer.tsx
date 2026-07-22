export default function Footer() {
  return (
    <footer className="relative pt-16 pb-10">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="hairline mb-10" />
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-7 h-7 rounded-full bg-gradient-to-br from-white via-aura-blush to-aura-hot" />
              <span className="font-display text-lg text-aura-ink">aura</span>
            </div>
            <p className="text-sm text-aura-ink/60 leading-relaxed max-w-xs">
              Nagelstudio in Saarlouis. Präzises Handwerk, ruhige Atmosphäre,
              individuelle Beratung.
            </p>
          </div>
          <div className="text-sm text-aura-ink/70 space-y-1">
            <div className="text-[11px] uppercase tracking-widest text-aura-deep mb-2">
              Studio
            </div>
            <div>Provinzialstraße 69</div>
            <div>66740 Saarlouis</div>
          </div>
          <div className="text-sm text-aura-ink/70 space-y-1">
            <div className="text-[11px] uppercase tracking-widest text-aura-deep mb-2">
              Rechtliches
            </div>
            <a href="#" className="block hover:text-aura-ink">Impressum</a>
            <a href="#" className="block hover:text-aura-ink">Datenschutz</a>
          </div>
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-aura-ink/50">
          <div>© {new Date().getFullYear()} Aura Nagelstudio</div>
          <div>Handgemacht mit Liebe.</div>
        </div>
      </div>
    </footer>
  );
}
