import Link from "next/link";
import { Compass, Target, Rocket, ArrowRight } from "lucide-react";

const PATHS = [
  {
    icon: Compass,
    title: "I'm Just Exploring",
    description:
      "New to buying a business? Start from the beginning with our step-by-step guide.",
    href: "#phase-01",
  },
  {
    icon: Target,
    title: "I Found a Business",
    description:
      "Already have a deal in mind? Jump to due diligence and valuation.",
    href: "#phase-03",
  },
  {
    icon: Rocket,
    title: "I'm Ready to Apply",
    description:
      "Know what you want and ready to move? Apply for SBA financing now.",
    href: "/loans/loan-application",
  },
] as const;

export function QuickStartCards() {
  return (
    <section className="bg-[var(--color-dark)] px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
          Where Should I Start?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/50">
          Pick the path that matches where you are in the process.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PATHS.map((path) => {
            const isExternal = path.href.startsWith("/");
            const CardWrapper = isExternal ? Link : "a";

            return (
              <CardWrapper
                key={path.title}
                href={path.href}
                className="group relative flex flex-col rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:-translate-y-1 hover:border-[var(--color-gold)]/50 hover:shadow-[0_0_20px_rgba(170,113,44,0.15)]"
              >
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-gold)]/10">
                  <path.icon
                    size={24}
                    className="text-[var(--color-gold)]"
                  />
                </div>

                {/* Content */}
                <h3 className="mt-4 font-[family-name:var(--font-montserrat)] text-lg font-bold text-white">
                  {path.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/50">
                  {path.description}
                </p>

                {/* Arrow indicator */}
                <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-[var(--color-gold)] transition-transform group-hover:translate-x-1">
                  <span>
                    {path.href.startsWith("/") ? "Apply Now" : "Jump In"}
                  </span>
                  <ArrowRight size={14} />
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
