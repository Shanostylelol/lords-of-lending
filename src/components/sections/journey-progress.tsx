const PHASE_LABELS = [
  "Readiness",
  "Search",
  "Due Diligence",
  "Valuation",
  "Financing",
  "Negotiation",
  "First 30 Days",
  "Growth",
] as const;

export function JourneyProgress() {
  return (
    <section className="bg-[var(--color-dark)] px-6 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
          The 8-Phase Journey
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/50">
          Every business acquisition follows this path. Scroll down to explore
          each phase in detail.
        </p>

        {/* Desktop: horizontal progress bar */}
        <div className="mt-10 hidden md:block">
          <div className="relative flex items-center justify-between">
            {/* Connecting line */}
            <div
              aria-hidden="true"
              className="absolute top-5 right-5 left-5 h-px bg-white/10"
            />

            {PHASE_LABELS.map((label, i) => {
              const phaseNum = String(i + 1).padStart(2, "0");
              const isFirst = i === 0;

              return (
                <a
                  key={label}
                  href={`#phase-${phaseNum}`}
                  className="group relative z-10 flex flex-col items-center gap-2"
                >
                  {/* "Start Here" label on phase 01 */}
                  {isFirst && (
                    <span className="absolute -top-6 text-xs font-semibold tracking-wide text-[var(--color-gold)]">
                      Start Here &rarr;
                    </span>
                  )}

                  {/* Circle */}
                  <div
                    className={`flex items-center justify-center rounded-full border-2 font-[family-name:var(--font-montserrat)] text-xs font-bold transition-all group-hover:border-[var(--color-gold)] group-hover:bg-[var(--color-gold)] group-hover:text-white ${
                      isFirst
                        ? "h-11 w-11 border-[var(--color-gold)] bg-[var(--color-gold)]/20 text-[var(--color-gold)] shadow-[0_0_12px_rgba(170,113,44,0.3)]"
                        : "h-10 w-10 border-white/20 bg-[var(--color-surface)] text-white/60"
                    }`}
                  >
                    {phaseNum}
                  </div>

                  {/* Label */}
                  <span className="max-w-[5.5rem] text-center text-xs leading-tight text-white/40 transition-colors group-hover:text-white/70">
                    {label}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Mobile: horizontal scroll with snap */}
        <div className="mt-10 md:hidden">
          <div className="-mx-6 overflow-x-auto px-6 pb-4">
            <div className="flex w-max items-start gap-3 snap-x snap-mandatory">
              {PHASE_LABELS.map((label, i) => {
                const phaseNum = String(i + 1).padStart(2, "0");
                const isFirst = i === 0;

                return (
                  <a
                    key={label}
                    href={`#phase-${phaseNum}`}
                    className="group flex snap-start flex-col items-center gap-1.5"
                  >
                    {/* "Start" label on phase 01 */}
                    {isFirst && (
                      <span className="text-[10px] font-semibold text-[var(--color-gold)]">
                        Start &rarr;
                      </span>
                    )}
                    {!isFirst && (
                      <span className="text-[10px] text-transparent">
                        &nbsp;
                      </span>
                    )}

                    <div className="relative flex items-center">
                      {/* Connecting line (not on first) */}
                      {i > 0 && (
                        <div
                          aria-hidden="true"
                          className="absolute -left-3 top-1/2 h-px w-3 bg-white/10"
                        />
                      )}
                      <div
                        className={`flex items-center justify-center rounded-full border-2 font-[family-name:var(--font-montserrat)] text-[10px] font-bold ${
                          isFirst
                            ? "h-9 w-9 border-[var(--color-gold)] bg-[var(--color-gold)]/20 text-[var(--color-gold)]"
                            : "h-8 w-8 border-white/20 bg-[var(--color-surface)] text-white/50"
                        }`}
                      >
                        {phaseNum}
                      </div>
                    </div>

                    <span className="w-16 text-center text-[10px] leading-tight text-white/40">
                      {label}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
