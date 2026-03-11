import {
  DollarSign,
  Users,
  LifeBuoy,
  Globe,
  BookOpen,
  Handshake,
} from "lucide-react";

const BENEFITS = [
  {
    icon: DollarSign,
    heading: "Competitive Referral Fees",
    description:
      "Transparent fee structures. You know exactly what you earn on every deal.",
  },
  {
    icon: Users,
    heading: "Direct Lender Access",
    description:
      "No middlemen. Work directly with our SBA lending team \u2014 Shane, Steph, and Brian.",
  },
  {
    icon: LifeBuoy,
    heading: "Deal Support",
    description:
      "We don\u2019t just take your deals \u2014 we help you structure them. Packaging assistance, underwriting guidance, and honest feedback.",
  },
  {
    icon: Globe,
    heading: "Nationwide Coverage",
    description:
      "We fund SBA deals across all 50 states. Your geography isn\u2019t a limitation.",
  },
  {
    icon: BookOpen,
    heading: "Training & Education",
    description:
      "Free access to our podcast, articles, and originator training resources. We invest in your growth.",
  },
  {
    icon: Handshake,
    heading: "Long-Term Partnership",
    description:
      "This isn\u2019t transactional. We\u2019ve worked with brokers for 25 years. First deals become second deals become careers.",
  },
] as const;

export function BrokerBenefits() {
  return (
    <section className="relative bg-[var(--color-surface)] px-6 py-16 md:px-8 md:py-24">
      {/* Faint fleur-de-lis pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Ctext x='40' y='48' text-anchor='middle' font-size='24' fill='%23aa712c' font-family='serif'%3E%E2%9A%9C%3C/text%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
        <h2 className="text-center font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
          Why Partner With Lords of Lending
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-white/50">
          We don&apos;t just accept deals &mdash; we build originators.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.heading}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-dark)] p-6 transition-all hover:border-[var(--color-gold)]/30"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-gold)]/10">
                  <Icon
                    size={20}
                    className="text-[var(--color-gold)]"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-wide text-white">
                  {benefit.heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
