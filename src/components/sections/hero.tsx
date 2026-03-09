"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-dark)] pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Subtle gold gradient overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(170,113,44,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl px-6 text-center md:px-8">
        {/* Logo mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-center"
        >
          <Image
            src="/images/logos/logomark-black.svg"
            alt=""
            width={80}
            height={80}
            className="h-16 w-auto brightness-0 invert opacity-30 md:h-20"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="font-[family-name:var(--font-montserrat)] text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
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
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          We remove the guesswork from securing business financing. Our team
          manages the details, aligns funding with your goals, and keeps your
          deal moving forward so you can focus on running your business.
        </motion.p>

        {/* CTA */}
        <motion.div
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button href="/loans/loan-application" className="px-8 py-4 text-base">
            Start My Loan Application
          </Button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-sm font-medium text-white/40">
            425+ Businesses Funded &middot; Funds Guaranteed by the SBA
          </p>
          <Image
            src="/images/partners/sba-logo-white.svg"
            alt="US Small Business Administration"
            width={200}
            height={40}
            className="h-8 w-auto opacity-40"
          />
        </motion.div>
      </div>
    </section>
  );
}
