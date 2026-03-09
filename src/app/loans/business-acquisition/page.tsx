"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const SEGMENTS = [
  {
    id: "experienced",
    label: "Experienced Owners",
    headline: "Growth Capital Without the Runaround",
    subheadline:
      "You've done this before. You know what you need — and you need it fast.",
    description:
      "We help experienced owners secure capital efficiently, with zero fluff and total clarity.",
    cta: "Request Funding Now",
    badges: ["Clear Timelines", "Minimal Friction", "Experienced Advisors"],
  },
  {
    id: "new",
    label: "New Borrowers",
    headline: "Don't Let Growth Outpace Your Cashflow",
    subheadline:
      "Big opportunities require smart funding. We help new borrowers secure the right capital — without delays, confusion, or bank-speak.",
    description: "",
    cta: "Let's Grow My Business",
    badges: ["Personalized Guidance", "Clear Requirements", "Fast Approvals"],
  },
  {
    id: "repeat",
    label: "Repeat Buyers",
    headline: "Fund My Next Deal. Faster.",
    subheadline:
      "Whether it's your second business or your seventh, we treat returning buyers like partners.",
    description:
      "Expect clarity, speed, and no-nonsense lending support.",
    cta: "Accelerate My Funding",
    badges: ["Streamlined Docs", "Priority Review", "Minimal Downtime"],
  },
  {
    id: "general",
    label: "General",
    headline: "Own the Business. Not the Headache.",
    subheadline:
      "You focus on the opportunity — we'll handle the financing.",
    description:
      "From first inquiry to final approval, we keep the process human, clear, and moving forward.",
    cta: "Get Funded Now",
    badges: ["Faster Closings", "Real Advice", "Zero Surprises"],
  },
] as const;

export default function BusinessAcquisitionPage() {
  const [activeSegment, setActiveSegment] = useState(0);
  const segment = SEGMENTS[activeSegment];

  return (
    <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Hero section */}
      <Section dark>
        <div className="text-center">
          {/* Segment switcher */}
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {SEGMENTS.map((seg, i) => (
              <button
                key={seg.id}
                onClick={() => setActiveSegment(i)}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  i === activeSegment
                    ? "bg-[var(--color-gold)] text-white"
                    : "border border-white/20 text-white/60 hover:border-white/40 hover:text-white"
                }`}
              >
                {seg.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={segment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-white md:text-5xl">
                {segment.headline}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
                {segment.subheadline}
              </p>
              {segment.description && (
                <p className="mx-auto mt-2 max-w-xl text-white/50">
                  {segment.description}
                </p>
              )}
              <div className="mt-8">
                <Button href="/loans/loan-application" variant="primary">
                  {segment.cta}
                </Button>
              </div>
              <p className="mt-6 text-sm font-semibold text-[var(--color-gold)]">
                500+ businesses funded this year
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                {segment.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/70"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>

      {/* Why Business Acquisition */}
      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-[var(--color-text)] md:text-3xl">
            Why Lords of Lending for Business Acquisition?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-muted)]">
            Whether you&rsquo;re buying your first business or your next one, we
            specialize in SBA-backed acquisition financing that moves as fast as
            you do.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-3">
          {[
            {
              title: "Expert Guidance",
              desc: "Our team has closed hundreds of SBA acquisition deals. We know what lenders want before they ask.",
            },
            {
              title: "Speed to Close",
              desc: "We pre-qualify your deal, prep your package, and match you with the right lender — cutting weeks off the process.",
            },
            {
              title: "Full Transparency",
              desc: "No hidden fees, no surprises. You'll know exactly where your deal stands at every stage.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-[var(--color-text)]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold text-white md:text-3xl">
            Ready to Make Your Move?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/70">
            Start your acquisition loan application today. Our team will review
            your deal and get back to you within 24 hours.
          </p>
          <div className="mt-8">
            <Button href="/loans/loan-application" variant="primary">
              Start My Application
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
}
