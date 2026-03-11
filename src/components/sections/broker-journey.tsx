import Link from "next/link";
import { BookOpen, GraduationCap, Send, TrendingUp } from "lucide-react";

const STEPS = [
  {
    step: "01",
    icon: BookOpen,
    heading: "Master SBA Fundamentals",
    description:
      "Start with our originator training articles and podcast episodes. Build the knowledge base that separates closers from collectors.",
    cta: "Start Reading",
    href: "#broker-library",
    external: false,
  },
  {
    step: "02",
    icon: GraduationCap,
    heading: "Complete Originator Training",
    description:
      "Our structured training program covers everything from sourcing to packaging to closing. Real deals, real scenarios.",
    cta: "Start Training",
    href: "https://learn.lordsoflending.com",
    external: true,
  },
  {
    step: "03",
    icon: Send,
    heading: "Package and Submit",
    description:
      "When you've got a deal, bring it to us. We'll tell you in one conversation whether it's fundable and what needs to happen next.",
    cta: "Submit a Deal",
    href: "/loans/loan-application",
    external: false,
  },
  {
    step: "04",
    icon: TrendingUp,
    heading: "Build Your Pipeline",
    description:
      "Competitive referral fees, direct lender access, and deal support. This isn't a one-deal relationship — it's a career.",
    cta: "Learn About Fees",
    href: "/sba-referral-fee-structures",
    external: false,
  },
] as const;

export function BrokerJourney() {
  return (
    <section className="bg-[var(--color-dark)] px-6 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
          Your Path to Closing Deals
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/50">
          Four steps from learning the fundamentals to building a sustainable
          origination practice.
        </p>

        {/* Desktop: 4 columns with dotted connectors */}
        <div className="relative mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Dotted connector line — visible only on large screens */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-16 right-[12.5%] left-[12.5%] hidden h-px lg:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, var(--color-gold) 0, var(--color-gold) 6px, transparent 6px, transparent 14px)",
              opacity: 0.3,
            }}
          />

          {STEPS.map((step) => {
            const Icon = step.icon;
            const linkProps = step.external
              ? { target: "_blank" as const, rel: "noopener noreferrer" }
              : {};

            return (
              <div
                key={step.step}
                className="group relative rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 transition-all hover:border-[var(--color-gold)]/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-[var(--color-gold)]/5"
              >
                {/* Step number */}
                <span className="absolute top-4 left-4 font-[family-name:var(--font-montserrat)] text-xs font-bold tracking-widest text-white/20">
                  {step.step}
                </span>

                {/* Icon */}
                <div className="mt-4 flex justify-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-gold)]/10">
                    <Icon
                      size={28}
                      className="text-[var(--color-gold)]"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>

                {/* Content */}
                <h3 className="mt-5 text-center font-[family-name:var(--font-montserrat)] text-base font-bold text-white">
                  {step.heading}
                </h3>
                <p className="mt-2 text-center text-sm leading-relaxed text-white/50">
                  {step.description}
                </p>

                {/* CTA */}
                {step.external ? (
                  <a
                    href={step.href}
                    {...linkProps}
                    className="mt-4 block text-center text-sm font-semibold text-[var(--color-gold)] transition-colors hover:text-[var(--color-gold-light)]"
                  >
                    {step.cta} &rarr;
                  </a>
                ) : (
                  <Link
                    href={step.href}
                    className="mt-4 block text-center text-sm font-semibold text-[var(--color-gold)] transition-colors hover:text-[var(--color-gold-light)]"
                  >
                    {step.cta} &rarr;
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
