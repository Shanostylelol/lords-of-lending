"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const INDUSTRIES = [
  "Agriculture, Forestry, Fishing and Hunting",
  "Arts, Entertainment, and Recreation",
  "Automobile Dealers & Parts",
  "Construction",
  "Ecommerce",
  "Education",
  "Finance and Insurance",
  "Healthcare",
  "Social Assistance",
  "IT, Media, or Publishing",
  "Legal Services",
  "Manufacturing",
  "Mining (except Oil and Gas)",
  "Oil and Gas Extraction",
  "Real Estate",
  "Restaurants and Food Services",
  "Retail Shops",
  "Transportation and Warehousing",
  "Freight Trucking",
  "Travel Agencies",
  "Utilities",
  "Wholesale Trade",
  "All other",
];

const BUSINESS_STATUSES = [
  "New Business I Own",
  "Existing Business I Own",
  "Business I am Buying",
];

const FUND_USES = [
  "Equipment Purchase",
  "Inventory",
  "Working Capital",
  "Business Only Purchase or Partner Buyout",
  "Real Estate Purchase or Refinance",
  "Business Debt Refinance (non-real estate)",
  "Construction or Tenant Improvements",
  "Furniture and Fixtures Purchase",
  "Marketing & Advertising",
  "Other",
];

const REVENUE_RANGES = [
  "Less than $50,000",
  "$50,000–$100,000",
  "$100,000–$250,000",
  "$250,000–$500,000",
  "$500,000–$1,000,000",
  "$1,000,000–$5,000,000",
  "More than $5,000,000",
];

const CREDIT_RANGES = [
  "300–579 (Poor)",
  "580–669 (Fair)",
  "670–739 (Good)",
  "740–799 (Very Good)",
  "800–850 (Excellent)",
];

const inputClass =
  "w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm text-[var(--color-text)] outline-none focus:border-[var(--color-gold)] focus:ring-1 focus:ring-[var(--color-gold)]";
const labelClass = "mb-1 block text-sm font-medium text-[var(--color-text)]";
const required = <span className="text-red-500">*</span>;

export default function LoanApplicationPage() {
  const [step, setStep] = useState(1);

  return (
    <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="text-center">
          <h1 className="font-[family-name:var(--font-montserrat)] text-3xl font-bold text-[var(--color-text)] md:text-4xl">
            Your Growth Starts Here
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-muted)]">
            Ready to secure your business financing? Fill out the application
            below and our team will guide you through every step of the process.
          </p>
        </div>

        {/* Progress bar */}
        <div className="mt-8 flex items-center justify-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <button
                onClick={() => s < step && setStep(s)}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                  s === step
                    ? "bg-[var(--color-gold)] text-white"
                    : s < step
                      ? "bg-[var(--color-gold)]/20 text-[var(--color-gold)] cursor-pointer"
                      : "bg-[var(--color-border)] text-[var(--color-text-light)]"
                }`}
              >
                {s}
              </button>
              {s < 3 && (
                <div
                  className={`h-0.5 w-12 rounded ${
                    s < step ? "bg-[var(--color-gold)]" : "bg-[var(--color-border)]"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <p className="mt-2 text-center text-sm text-[var(--color-text-light)]">
          Step {step} of 3
        </p>

        {/* Form */}
        <div className="mt-8 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <h2 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-[var(--color-text)]">
                  Basic Business Information
                </h2>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Let&rsquo;s start with some basic information about your
                  business and funding needs.
                </p>

                <div>
                  <label htmlFor="industry" className={labelClass}>
                    Business Industry {required}
                  </label>
                  <select id="industry" required className={inputClass}>
                    <option value="">Select your industry</option>
                    {INDUSTRIES.map((i) => (
                      <option key={i} value={i}>
                        {i}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="status" className={labelClass}>
                    Business Status {required}
                  </label>
                  <select id="status" required className={inputClass}>
                    <option value="">Select status</option>
                    {BUSINESS_STATUSES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="bizName" className={labelClass}>
                    Business Name {required}
                  </label>
                  <input
                    type="text"
                    id="bizName"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="loanAmount" className={labelClass}>
                    Loan Amount Requested {required}
                  </label>
                  <input
                    type="text"
                    id="loanAmount"
                    required
                    placeholder="$"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>
                    How will you use the funds? {required}
                  </label>
                  <div className="mt-1 grid gap-2 sm:grid-cols-2">
                    {FUND_USES.map((use) => (
                      <label
                        key={use}
                        className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]"
                      >
                        <input
                          type="checkbox"
                          value={use}
                          className="accent-[var(--color-gold)]"
                        />
                        {use}
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="state" className={labelClass}>
                    Where is the business headquartered? {required}
                  </label>
                  <input
                    type="text"
                    id="state"
                    required
                    placeholder="State"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="startYear" className={labelClass}>
                    What year did the business start? {required}
                  </label>
                  <input
                    type="number"
                    id="startYear"
                    required
                    min={1776}
                    max={new Date().getFullYear()}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="revenue" className={labelClass}>
                    Business revenue over past 12 months {required}
                  </label>
                  <select id="revenue" required className={inputClass}>
                    <option value="">Select range</option>
                    {REVENUE_RANGES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-end pt-4">
                  <Button
                    variant="primary"
                    onClick={() => setStep(2)}
                  >
                    Next: Owner Information
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <h2 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-[var(--color-text)]">
                  Owner Information
                </h2>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Please provide information about the primary business owner.
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className={labelClass}>
                      First Name {required}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={labelClass}>
                      Last Name {required}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Phone {required}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="ownerEmail" className={labelClass}>
                    Email {required}
                  </label>
                  <input
                    type="email"
                    id="ownerEmail"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="creditScore" className={labelClass}>
                    Personal Credit Score {required}
                  </label>
                  <select id="creditScore" required className={inputClass}>
                    <option value="">Select the range that best matches</option>
                    {CREDIT_RANGES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Back
                  </Button>
                  <Button variant="primary" onClick={() => setStep(3)}>
                    Next: Terms &amp; Agreement
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-5"
              >
                <h2 className="font-[family-name:var(--font-montserrat)] text-lg font-bold text-[var(--color-text)]">
                  Terms and Agreement
                </h2>
                <p className="text-sm text-[var(--color-text-muted)]">
                  Final step! Please review and agree to our terms and policies.
                </p>

                <label className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 accent-[var(--color-gold)]"
                  />
                  <span>
                    I agree to the{" "}
                    <Link
                      href="/terms-of-application"
                      className="text-[var(--color-gold)] underline"
                    >
                      Terms of Application
                    </Link>
                    ,{" "}
                    <Link
                      href="/terms-of-use"
                      className="text-[var(--color-gold)] underline"
                    >
                      Terms of Use
                    </Link>{" "}
                    (which includes an arbitration agreement),{" "}
                    <Link
                      href="/electronic-disclosure"
                      className="text-[var(--color-gold)] underline"
                    >
                      Electronic Disclosure
                    </Link>
                    , and{" "}
                    <Link
                      href="/privacy-policy"
                      className="text-[var(--color-gold)] underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>

                <label className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 accent-[var(--color-gold)]"
                  />
                  <span>
                    I confirm that I am a U.S. citizen or lawful permanent
                    resident (green card holder).
                    <br />
                    <span className="text-xs text-[var(--color-text-light)]">
                      SBA loan programs are only available to U.S. citizens or
                      lawful permanent residents.
                    </span>
                  </span>
                </label>

                <label className="flex items-start gap-3 text-sm text-[var(--color-text-muted)]">
                  <input
                    type="checkbox"
                    required
                    className="mt-0.5 accent-[var(--color-gold)]"
                  />
                  <span>
                    By checking this box and clicking &ldquo;Submit&rdquo;, I
                    consent to receive recorded marketing phone calls (both
                    human and artificial intelligence) and/or text messages from
                    Lords of Lending, including autodialed and pre-recorded calls
                    delivered using automated means. I acknowledge consent is not
                    a condition of purchase or submission and I may opt out at
                    any time.
                  </span>
                </label>

                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    Back
                  </Button>
                  <Button variant="primary">
                    Submit Application
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
