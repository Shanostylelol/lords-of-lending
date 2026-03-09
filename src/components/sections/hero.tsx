"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const BADGE_PILLS = [
  "425+ Businesses Funded",
  "Funds Guaranteed by the SBA",
  "Funding Secured",
  "Stress-Free Process",
  "Freedom to Focus",
  "Faster Approvals",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-dark)] pt-28 pb-20 md:pt-36 md:pb-28">
      {/* Subtle warm gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(170,113,44,0.1) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center md:px-8">
        {/* Badge pills */}
        <motion.div
          className="mb-8 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0 }}
        >
          {BADGE_PILLS.map((pill) => (
            <span
              key={pill}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-sm"
            >
              {pill}
            </span>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-[family-name:var(--font-montserrat)] text-4xl font-bold uppercase leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Business Loans{" "}
          <br className="hidden sm:block" />
          <span className="text-[var(--color-gold-light)]">
            Made Simple and Successful
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We remove the guesswork from securing business financing. Our team
          manages the details, aligns funding with your goals, and keeps your
          deal moving forward so you can focus on running your business.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Button href="/loans/loan-application" className="px-8 py-4 text-base">
            Start My Loan Application
          </Button>
          <Button href="/contact" variant="outline" className="px-8 py-4 text-base border-white/30 text-white hover:bg-white/10 hover:text-white">
            Schedule a Call
          </Button>
        </motion.div>

        {/* SBA trust line */}
        <motion.div
          className="mt-12 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <Image
            src="/images/partners/sba-logo-white.svg"
            alt="US Small Business Administration"
            width={200}
            height={40}
            className="h-7 w-auto opacity-50"
          />
          <span className="text-sm text-white/40">|</span>
          <p className="text-sm font-medium tracking-wide text-white/40">
            Nationwide SBA PLP Lender
          </p>
        </motion.div>
      </div>
    </section>
  );
}
