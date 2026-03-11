"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type BusinessType = "for-profit" | "non-profit" | "government";
type BusinessSize = "under-5m" | "5m-20m" | "20m-plus";
type USBased = "yes" | "no";
type UseOfFunds =
  | "working-capital"
  | "acquisition"
  | "real-estate"
  | "equipment"
  | "refinance"
  | "other";
type Citizenship = "citizen" | "permanent-resident" | "other";
type YesNo = "yes" | "no";

interface Answers {
  businessType: BusinessType | null;
  businessSize: BusinessSize | null;
  usBased: USBased | null;
  useOfFunds: UseOfFunds | null;
  citizenship: Citizenship | null;
  criminalHistory: YesNo | null;
  previousDefault: YesNo | null;
}

type Result = "likely-eligible" | "may-have-challenges" | "likely-ineligible";

const TOTAL_STEPS = 7;

/* ------------------------------------------------------------------ */
/*  Questions Data                                                     */
/* ------------------------------------------------------------------ */

const STEPS: {
  label: string;
  description: string;
  key: keyof Answers;
  options: { value: string; label: string; sublabel?: string }[];
}[] = [
  {
    label: "Business Type",
    description: "What type of business do you operate?",
    key: "businessType",
    options: [
      {
        value: "for-profit",
        label: "For-Profit Business",
        sublabel: "LLC, S-Corp, C-Corp, Sole Proprietorship, Partnership",
      },
      {
        value: "non-profit",
        label: "Non-Profit Organization",
        sublabel: "501(c)(3) or other tax-exempt entity",
      },
      {
        value: "government",
        label: "Government Entity",
        sublabel: "Federal, state, or local government",
      },
    ],
  },
  {
    label: "Business Size",
    description: "What is your business's approximate annual revenue?",
    key: "businessSize",
    options: [
      {
        value: "under-5m",
        label: "Under $5 Million",
        sublabel: "Most SBA-eligible businesses fall here",
      },
      {
        value: "5m-20m",
        label: "$5M – $20M",
        sublabel: "May qualify depending on industry size standards",
      },
      {
        value: "20m-plus",
        label: "$20M+",
        sublabel: "May exceed SBA size standards for some industries",
      },
    ],
  },
  {
    label: "Business Location",
    description: "Is your business located in and operating within the United States?",
    key: "usBased",
    options: [
      {
        value: "yes",
        label: "Yes",
        sublabel: "Business operates in the U.S. or its territories",
      },
      {
        value: "no",
        label: "No",
        sublabel: "Business is based outside the United States",
      },
    ],
  },
  {
    label: "Use of Funds",
    description: "What do you plan to use the loan funds for?",
    key: "useOfFunds",
    options: [
      { value: "working-capital", label: "Working Capital", sublabel: "Day-to-day operating expenses" },
      { value: "acquisition", label: "Business Acquisition", sublabel: "Buy an existing business" },
      { value: "real-estate", label: "Commercial Real Estate", sublabel: "Purchase or refinance real estate" },
      { value: "equipment", label: "Equipment Purchase", sublabel: "Machinery, vehicles, or technology" },
      { value: "refinance", label: "Debt Refinance", sublabel: "Refinance existing business debt" },
      { value: "other", label: "Other", sublabel: "Leasehold improvements, expansion, etc." },
    ],
  },
  {
    label: "Owner Citizenship",
    description: "What is the citizenship status of the majority owner (20%+ ownership)?",
    key: "citizenship",
    options: [
      { value: "citizen", label: "U.S. Citizen", sublabel: "Born or naturalized citizen" },
      { value: "permanent-resident", label: "Permanent Resident", sublabel: "Green card holder" },
      { value: "other", label: "Other", sublabel: "Visa holder, DACA, or non-resident" },
    ],
  },
  {
    label: "Criminal History",
    description:
      "Has any owner (20%+ ownership) been arrested, charged, or convicted of a criminal offense in the last 7 years?",
    key: "criminalHistory",
    options: [
      { value: "no", label: "No", sublabel: "No criminal history" },
      { value: "yes", label: "Yes", sublabel: "Has criminal history — may still qualify" },
    ],
  },
  {
    label: "Previous SBA Default",
    description:
      "Has any owner (20%+ ownership) previously defaulted on a federal loan or SBA-guaranteed loan?",
    key: "previousDefault",
    options: [
      { value: "no", label: "No", sublabel: "No previous defaults" },
      { value: "yes", label: "Yes", sublabel: "Has previous SBA/federal default" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Determine result                                                   */
/* ------------------------------------------------------------------ */

function getResult(answers: Answers): {
  result: Result;
  headline: string;
  explanation: string;
  flags: string[];
} {
  const flags: string[] = [];

  // Hard disqualifiers
  if (answers.businessType === "non-profit") {
    flags.push("Non-profit organizations are not eligible for SBA 7(a) loans.");
  }
  if (answers.businessType === "government") {
    flags.push("Government entities are not eligible for SBA 7(a) loans.");
  }
  if (answers.usBased === "no") {
    flags.push(
      "SBA loans require the business to operate within the United States or its territories."
    );
  }

  if (flags.length > 0) {
    return {
      result: "likely-ineligible",
      headline: "Likely Ineligible",
      explanation:
        "Based on your answers, your business may not meet the basic eligibility requirements for an SBA loan. However, there may be alternative financing options available to you.",
      flags,
    };
  }

  // Soft flags
  if (answers.businessSize === "20m-plus") {
    flags.push(
      "Your revenue may exceed SBA size standards for some industries. Eligibility depends on your specific NAICS code and industry."
    );
  }
  if (answers.citizenship === "other") {
    flags.push(
      "Non-citizen, non-permanent-resident owners may face additional challenges. Some visa types may still allow SBA eligibility with proper documentation."
    );
  }
  if (answers.criminalHistory === "yes") {
    flags.push(
      "Criminal history does not automatically disqualify you, but you will need to provide a written explanation and the SBA will review your case individually."
    );
  }
  if (answers.previousDefault === "yes") {
    flags.push(
      "A previous SBA or federal loan default is a significant flag. You may need to demonstrate that the default has been resolved and that you are creditworthy."
    );
  }

  if (flags.length > 0) {
    return {
      result: "may-have-challenges",
      headline: "May Have Challenges",
      explanation:
        "You may still qualify for an SBA loan, but there are factors in your profile that could require additional documentation, explanation, or lender review. Working with an experienced SBA professional can help you navigate these issues.",
      flags,
    };
  }

  return {
    result: "likely-eligible",
    headline: "Likely Eligible",
    explanation:
      "Based on your answers, you appear to meet the general eligibility criteria for an SBA loan. The next step is to prepare your documentation and connect with an SBA lending professional who can provide a formal prequalification.",
    flags: [],
  };
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function EligibilityChecker() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    businessType: null,
    businessSize: null,
    usBased: null,
    useOfFunds: null,
    citizenship: null,
    criminalHistory: null,
    previousDefault: null,
  });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = useCallback(
    (value: string) => {
      const step = STEPS[currentStep];
      const updated = { ...answers, [step.key]: value };
      setAnswers(updated);

      // Check for hard disqualifiers — skip remaining questions
      if (
        (step.key === "businessType" &&
          (value === "non-profit" || value === "government")) ||
        (step.key === "usBased" && value === "no")
      ) {
        setShowResult(true);
        return;
      }

      if (currentStep < TOTAL_STEPS - 1) {
        setCurrentStep((s) => s + 1);
      } else {
        setShowResult(true);
      }
    },
    [currentStep, answers]
  );

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((s) => s - 1);
    }
  }, [currentStep]);

  const handleRestart = useCallback(() => {
    setCurrentStep(0);
    setAnswers({
      businessType: null,
      businessSize: null,
      usBased: null,
      useOfFunds: null,
      citizenship: null,
      criminalHistory: null,
      previousDefault: null,
    });
    setShowResult(false);
  }, []);

  const progress = showResult
    ? 100
    : Math.round((currentStep / TOTAL_STEPS) * 100);

  const resultData = showResult ? getResult(answers) : null;

  const resultColor =
    resultData?.result === "likely-eligible"
      ? "#22C55E"
      : resultData?.result === "may-have-challenges"
        ? "#EAB308"
        : "#EF4444";

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="mb-2 flex items-center justify-between text-xs text-white/50">
          <span>
            {showResult
              ? "Complete"
              : `Step ${currentStep + 1} of ${TOTAL_STEPS}`}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${progress}%`,
              backgroundColor: showResult ? resultColor : "var(--color-gold)",
            }}
          />
        </div>
        {/* Step indicators */}
        {!showResult && (
          <div className="mt-3 flex gap-1.5">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className="h-1 flex-1 rounded-full transition-colors duration-300"
                style={{
                  backgroundColor:
                    i < currentStep
                      ? "var(--color-gold)"
                      : i === currentStep
                        ? "var(--color-gold)"
                        : "rgba(255,255,255,0.1)",
                  opacity: i === currentStep ? 0.6 : 1,
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Question */}
      {!showResult && (
        <div>
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-[var(--color-gold)]">
            {STEPS[currentStep].label}
          </p>
          <h3 className="mb-6 font-[family-name:var(--font-montserrat)] text-lg font-bold text-white md:text-xl">
            {STEPS[currentStep].description}
          </h3>

          <div className="space-y-3">
            {STEPS[currentStep].options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="group flex w-full items-start gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-dark)] p-4 text-left transition-all hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/5 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/50"
              >
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/20 transition-colors group-hover:border-[var(--color-gold)]">
                  <div className="h-2 w-2 rounded-full bg-transparent transition-colors group-hover:bg-[var(--color-gold)]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {option.label}
                  </p>
                  {option.sublabel && (
                    <p className="mt-0.5 text-xs text-white/50">
                      {option.sublabel}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>

          {currentStep > 0 && (
            <button
              onClick={handleBack}
              className="mt-6 text-sm text-white/40 transition-colors hover:text-white/70"
            >
              &larr; Back
            </button>
          )}
        </div>
      )}

      {/* Result */}
      {showResult && resultData && (
        <div>
          {/* Result Badge */}
          <div className="mb-6 text-center">
            <div
              className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full"
              style={{ backgroundColor: `${resultColor}20` }}
            >
              {resultData.result === "likely-eligible" && (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={resultColor}
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
              {resultData.result === "may-have-challenges" && (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={resultColor}
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              )}
              {resultData.result === "likely-ineligible" && (
                <svg
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke={resultColor}
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
            <h3
              className="font-[family-name:var(--font-montserrat)] text-2xl font-bold"
              style={{ color: resultColor }}
            >
              {resultData.headline}
            </h3>
          </div>

          <p className="mb-6 text-sm leading-relaxed text-white/60">
            {resultData.explanation}
          </p>

          {/* Flags */}
          {resultData.flags.length > 0 && (
            <div className="mb-6 space-y-3">
              <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                Items to Address
              </p>
              {resultData.flags.map((flag, i) => (
                <div
                  key={i}
                  className="flex gap-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] p-3"
                >
                  <span
                    className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full"
                    style={{ backgroundColor: resultColor }}
                  />
                  <p className="text-sm leading-relaxed text-white/60">
                    {flag}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Recommended Reading */}
          <div className="mb-6">
            <p className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
              Recommended Reading
            </p>
            <div className="space-y-2">
              {resultData.result === "likely-ineligible" && (
                <Link
                  href="/sba-loan-denied"
                  className="flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] p-3 text-sm font-medium text-[var(--color-gold)] transition-colors hover:border-[var(--color-gold)]/40 hover:bg-[var(--color-gold)]/5"
                >
                  <span>&#8594;</span> SBA Loan Denial: Why It Happens and What
                  to Do Next
                </Link>
              )}
              {answers.useOfFunds === "acquisition" && (
                <Link
                  href="/buy-business-sba-loan"
                  className="flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] p-3 text-sm font-medium text-[var(--color-gold)] transition-colors hover:border-[var(--color-gold)]/40 hover:bg-[var(--color-gold)]/5"
                >
                  <span>&#8594;</span> Can You Use an SBA Loan to Buy a
                  Business?
                </Link>
              )}
              <Link
                href="/complete-guide-sba-7a-loans"
                className="flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] p-3 text-sm font-medium text-[var(--color-gold)] transition-colors hover:border-[var(--color-gold)]/40 hover:bg-[var(--color-gold)]/5"
              >
                <span>&#8594;</span> The Complete Guide to SBA 7(a) Loans in
                2026
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl border border-[var(--color-gold)]/20 bg-[var(--color-gold)]/5 p-5 text-center">
            <p className="font-[family-name:var(--font-montserrat)] text-base font-bold text-white">
              Ready to explore your options?
            </p>
            <p className="mt-1 text-sm text-white/60">
              Get expert SBA lending training and connect with experienced
              originators.
            </p>
            <a
              href="https://learn.lordsoflending.com/pricing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-md bg-[var(--color-gold)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gold-dark)]"
            >
              Explore Training &amp; Pricing
            </a>
          </div>

          {/* Disclaimer */}
          <p className="mt-6 text-xs leading-relaxed text-white/30">
            <strong className="text-white/40">Disclaimer:</strong> This is an
            educational screening tool, not a formal eligibility determination.
            Results are based on general SBA guidelines and may not reflect your
            specific situation. Consult with an SBA lending professional for
            personalized guidance.
          </p>

          {/* Restart */}
          <div className="mt-6 text-center">
            <button
              onClick={handleRestart}
              className="text-sm text-white/40 underline transition-colors hover:text-[var(--color-gold)]"
            >
              Start Over
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
