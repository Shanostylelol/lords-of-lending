"use client";

import { useState, useMemo, useCallback } from "react";

/* ── Constants ────────────────────────────────────────────────── */

const MIN_LOAN = 50_000;
const MAX_LOAN = 5_000_000;
const LOAN_STEP = 5_000;
const DEFAULT_RATE = 10.5;
const TERM_OPTIONS = [7, 10, 25] as const;

/* ── SBA Guarantee Fee Schedule ───────────────────────────────── */

function getSbaGuaranteePortion(loanAmount: number): number {
  return loanAmount <= 150_000 ? 0.85 : 0.75;
}

function getSbaGuaranteeFeeRate(loanAmount: number): number {
  if (loanAmount <= 150_000) return 0.02;
  if (loanAmount <= 700_000) return 0.03;
  if (loanAmount <= 1_000_000) return 0.035;
  return 0.0375;
}

function calculateGuaranteeFee(loanAmount: number): number {
  const guaranteedPortion = loanAmount * getSbaGuaranteePortion(loanAmount);
  const feeRate = getSbaGuaranteeFeeRate(loanAmount);
  return guaranteedPortion * feeRate;
}

/* ── Amortization ─────────────────────────────────────────────── */

function calculateMonthlyPayment(
  principal: number,
  annualRate: number,
  termYears: number
): number {
  const r = annualRate / 100 / 12;
  const n = termYears * 12;
  if (r === 0) return principal / n;
  return (principal * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
}

/* ── Formatting ───────────────────────────────────────────────── */

function fmt(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}

function fmtDecimal(value: number): string {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/* ── Component ────────────────────────────────────────────────── */

export function SbaCalculator() {
  const [loanAmount, setLoanAmount] = useState(500_000);
  const [termYears, setTermYears] = useState<(typeof TERM_OPTIONS)[number]>(25);
  const [rate, setRate] = useState(DEFAULT_RATE);
  const [includeGuaranteeFee, setIncludeGuaranteeFee] = useState(true);

  const handleLoanInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/[^0-9]/g, "");
      const num = Math.min(Math.max(Number(raw) || MIN_LOAN, MIN_LOAN), MAX_LOAN);
      setLoanAmount(num);
    },
    []
  );

  const handleSliderChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoanAmount(Number(e.target.value));
    },
    []
  );

  const handleRateChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = parseFloat(e.target.value);
      if (!isNaN(val) && val >= 0 && val <= 30) {
        setRate(val);
      }
    },
    []
  );

  const results = useMemo(() => {
    const monthly = calculateMonthlyPayment(loanAmount, rate, termYears);
    const totalPayments = monthly * termYears * 12;
    const totalInterest = totalPayments - loanAmount;
    const guaranteeFee = calculateGuaranteeFee(loanAmount);
    const totalCost = includeGuaranteeFee
      ? totalPayments + guaranteeFee
      : totalPayments;

    // Year-by-year amortization summary (first 5 years + last year)
    const r = rate / 100 / 12;
    let balance = loanAmount;
    const yearSummaries: {
      year: number;
      principalPaid: number;
      interestPaid: number;
      endBalance: number;
    }[] = [];

    const totalMonths = termYears * 12;
    for (let year = 1; year <= termYears; year++) {
      let yearPrincipal = 0;
      let yearInterest = 0;
      for (let m = 1; m <= 12; m++) {
        const monthIndex = (year - 1) * 12 + m;
        if (monthIndex > totalMonths) break;
        const interestPayment = balance * r;
        const principalPayment = monthly - interestPayment;
        yearPrincipal += principalPayment;
        yearInterest += interestPayment;
        balance -= principalPayment;
      }
      if (balance < 0) balance = 0;
      yearSummaries.push({
        year,
        principalPaid: yearPrincipal,
        interestPaid: yearInterest,
        endBalance: balance,
      });
    }

    return {
      monthly,
      totalInterest,
      totalCost,
      guaranteeFee,
      guaranteePortion: getSbaGuaranteePortion(loanAmount),
      guaranteeFeeRate: getSbaGuaranteeFeeRate(loanAmount),
      yearSummaries,
    };
  }, [loanAmount, rate, termYears, includeGuaranteeFee]);

  // Show first 5 years + last year if term > 5
  const displayYears = useMemo(() => {
    const summaries = results.yearSummaries;
    if (summaries.length <= 6) return summaries;
    return [...summaries.slice(0, 5), summaries[summaries.length - 1]];
  }, [results.yearSummaries]);

  return (
    <div className="space-y-8">
      {/* ── Calculator Card ── */}
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* ── Inputs ── */}
          <div className="space-y-8">
            {/* Loan Amount */}
            <div>
              <label
                htmlFor="loan-amount"
                className="block font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]"
              >
                Loan Amount
              </label>
              <div className="relative mt-2">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-lg font-bold text-[var(--color-gold)]">
                  $
                </span>
                <input
                  id="loan-amount"
                  type="text"
                  inputMode="numeric"
                  value={loanAmount.toLocaleString("en-US")}
                  onChange={handleLoanInputChange}
                  className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] py-3 pl-10 pr-4 text-xl font-bold text-white transition-colors focus:border-[var(--color-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]"
                />
              </div>
              <input
                type="range"
                min={MIN_LOAN}
                max={MAX_LOAN}
                step={LOAN_STEP}
                value={loanAmount}
                onChange={handleSliderChange}
                aria-label="Loan amount slider"
                className="mt-3 w-full cursor-pointer accent-[var(--color-gold)]"
              />
              <div className="mt-1 flex justify-between text-xs text-[var(--color-text-muted)]">
                <span>{fmt(MIN_LOAN)}</span>
                <span>{fmt(MAX_LOAN)}</span>
              </div>
            </div>

            {/* Loan Term */}
            <div>
              <span className="block font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Loan Term
              </span>
              <div className="mt-3 flex gap-3">
                {TERM_OPTIONS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTermYears(t)}
                    className={`flex-1 rounded-lg border py-3 text-center font-[family-name:var(--font-montserrat)] text-sm font-bold transition-all cursor-pointer ${
                      termYears === t
                        ? "border-[var(--color-gold)] bg-[var(--color-gold)]/15 text-[var(--color-gold)]"
                        : "border-[var(--color-border)] bg-[var(--color-dark)] text-[var(--color-text-muted)] hover:border-[var(--color-gold)]/50 hover:text-white"
                    }`}
                  >
                    {t} Years
                  </button>
                ))}
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <label
                htmlFor="interest-rate"
                className="block font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)]"
              >
                Interest Rate (%)
              </label>
              <div className="relative mt-2">
                <input
                  id="interest-rate"
                  type="number"
                  min={0}
                  max={30}
                  step={0.1}
                  value={rate}
                  onChange={handleRateChange}
                  className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] py-3 pl-4 pr-10 text-xl font-bold text-white transition-colors focus:border-[var(--color-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]"
                />
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-lg font-bold text-[var(--color-gold)]">
                  %
                </span>
              </div>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                Current SBA 7(a) rates: WSJ Prime + 1% to 3% (typically 9.5% - 11.5%)
              </p>
            </div>

            {/* SBA Guarantee Fee Toggle */}
            <div className="flex items-center justify-between rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] px-4 py-3">
              <div>
                <span className="block text-sm font-semibold text-white">
                  Include SBA Guarantee Fee
                </span>
                <span className="text-xs text-[var(--color-text-muted)]">
                  {(results.guaranteeFeeRate * 100).toFixed(1)}% of{" "}
                  {(results.guaranteePortion * 100).toFixed(0)}% guaranteed
                  portion
                </span>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={includeGuaranteeFee}
                onClick={() => setIncludeGuaranteeFee(!includeGuaranteeFee)}
                className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors ${
                  includeGuaranteeFee
                    ? "bg-[var(--color-gold)]"
                    : "bg-[var(--color-border)]"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-6 w-6 rounded-full bg-white shadow-md transition-transform ${
                    includeGuaranteeFee ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* ── Results ── */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Monthly Payment — Hero */}
            <div className="rounded-xl border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/5 p-6 text-center">
              <p className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                Monthly Payment
              </p>
              <p className="mt-2 font-[family-name:var(--font-montserrat)] text-4xl font-extrabold text-white md:text-5xl">
                {fmtDecimal(results.monthly)}
              </p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                {termYears}-year term at {rate}% APR
              </p>
            </div>

            {/* Summary Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Total Interest
                </p>
                <p className="mt-1 font-[family-name:var(--font-montserrat)] text-lg font-bold text-white">
                  {fmt(results.totalInterest)}
                </p>
              </div>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Total Cost
                </p>
                <p className="mt-1 font-[family-name:var(--font-montserrat)] text-lg font-bold text-white">
                  {fmt(results.totalCost)}
                </p>
              </div>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  SBA Guarantee Fee
                </p>
                <p className="mt-1 font-[family-name:var(--font-montserrat)] text-lg font-bold text-[var(--color-gold)]">
                  {fmt(results.guaranteeFee)}
                </p>
              </div>
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Loan Amount
                </p>
                <p className="mt-1 font-[family-name:var(--font-montserrat)] text-lg font-bold text-white">
                  {fmt(loanAmount)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Amortization Summary ── */}
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-10">
        <h2 className="font-[family-name:var(--font-montserrat)] text-xl font-bold uppercase tracking-wide text-white">
          Amortization Summary
        </h2>
        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
          Year-by-year breakdown of principal and interest
        </p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[480px] text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="pb-3 pr-4 font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Year
                </th>
                <th className="pb-3 pr-4 text-right font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Principal Paid
                </th>
                <th className="pb-3 pr-4 text-right font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Interest Paid
                </th>
                <th className="pb-3 text-right font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Remaining Balance
                </th>
              </tr>
            </thead>
            <tbody>
              {displayYears.map((row, i) => {
                const isSkipped =
                  i > 0 && row.year - displayYears[i - 1].year > 1;
                return (
                  <>
                    {isSkipped && (
                      <tr key={`gap-${row.year}`}>
                        <td
                          colSpan={4}
                          className="py-2 text-center text-xs text-[var(--color-text-muted)]"
                        >
                          ...
                        </td>
                      </tr>
                    )}
                    <tr
                      key={row.year}
                      className="border-b border-[var(--color-border)]/50 transition-colors hover:bg-[var(--color-gold)]/5"
                    >
                      <td className="py-3 pr-4 font-semibold text-white">
                        Year {row.year}
                      </td>
                      <td className="py-3 pr-4 text-right text-white">
                        {fmt(row.principalPaid)}
                      </td>
                      <td className="py-3 pr-4 text-right text-[var(--color-text-muted)]">
                        {fmt(row.interestPaid)}
                      </td>
                      <td className="py-3 text-right font-semibold text-white">
                        {fmt(row.endBalance)}
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
