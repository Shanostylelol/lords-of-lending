import Link from "next/link";
import { Calculator, BarChart3, CheckCircle, ArrowRight } from "lucide-react";

const TOOLS = [
  {
    icon: Calculator,
    title: "SBA Loan Calculator",
    description: "Estimate your monthly payment and total cost",
    href: "/tools/sba-loan-calculator",
  },
  {
    icon: BarChart3,
    title: "DSCR Calculator",
    description: "Check if the business can cover loan payments",
    href: "/tools/dscr-calculator",
  },
  {
    icon: CheckCircle,
    title: "SBA Eligibility Checker",
    description: "See if you qualify for SBA financing",
    href: "/tools/sba-eligibility-checker",
  },
] as const;

export function ToolQuickAccess() {
  return (
    <section className="border-t border-white/5 bg-[var(--color-surface)] px-6 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
          Free Tools to Help You Plan
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/50">
          Run the numbers before you make your move.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TOOLS.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="group flex items-start gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-dark)] p-5 transition-all hover:-translate-y-1 hover:border-[var(--color-gold)]/50 hover:shadow-[0_0_20px_rgba(170,113,44,0.15)]"
            >
              {/* Icon */}
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--color-gold)]/10">
                <tool.icon size={20} className="text-[var(--color-gold)]" />
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <h3 className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-white">
                  {tool.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-white/50">
                  {tool.description}
                </p>
                <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[var(--color-gold)] transition-transform group-hover:translate-x-1">
                  Use Tool <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
