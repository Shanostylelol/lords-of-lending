"use client";

import { useState, useCallback, useMemo } from "react";

/** Monthly payment using standard amortization formula */
function calcMonthlyPayment(principal: number, annualRate: number, termYears: number): number {
  const monthlyRate = annualRate / 100 / 12;
  const n = termYears * 12;
  if (monthlyRate === 0) return principal / n;
  return (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
}

type DebtMethod = "direct" | "calculate";

export function DscrCalculator() {
  // NOI
  const [noi, setNoi] = useState("");

  // Debt service — direct entry
  const [debtMethod, setDebtMethod] = useState<DebtMethod>("direct");
  const [annualDebtService, setAnnualDebtService] = useState("");

  // Debt service — calculated from loan details
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTermYears, setLoanTermYears] = useState("");

  // Add-backs
  const [showAddBacks, setShowAddBacks] = useState(false);
  const [ownerSalary, setOwnerSalary] = useState("");
  const [oneTimeExpenses, setOneTimeExpenses] = useState("");

  const parsedNoi = useMemo(() => parseFloat(noi) || 0, [noi]);
  const parsedOwnerSalary = useMemo(() => parseFloat(ownerSalary) || 0, [ownerSalary]);
  const parsedOneTimeExpenses = useMemo(() => parseFloat(oneTimeExpenses) || 0, [oneTimeExpenses]);

  const totalAddBacks = useMemo(
    () => (showAddBacks ? parsedOwnerSalary + parsedOneTimeExpenses : 0),
    [showAddBacks, parsedOwnerSalary, parsedOneTimeExpenses]
  );

  const computedDebtService = useMemo(() => {
    if (debtMethod === "direct") {
      return parseFloat(annualDebtService) || 0;
    }
    const p = parseFloat(loanAmount) || 0;
    const r = parseFloat(interestRate) || 0;
    const t = parseFloat(loanTermYears) || 0;
    if (p <= 0 || r < 0 || t <= 0) return 0;
    return calcMonthlyPayment(p, r, t) * 12;
  }, [debtMethod, annualDebtService, loanAmount, interestRate, loanTermYears]);

  const baseDscr = useMemo(() => {
    if (computedDebtService <= 0) return null;
    return parsedNoi / computedDebtService;
  }, [parsedNoi, computedDebtService]);

  const adjustedDscr = useMemo(() => {
    if (computedDebtService <= 0) return null;
    return (parsedNoi + totalAddBacks) / computedDebtService;
  }, [parsedNoi, totalAddBacks, computedDebtService]);

  const dscrColor = useCallback((ratio: number | null) => {
    if (ratio === null) return "text-[var(--color-text-muted)]";
    if (ratio < 1.0) return "text-red-400";
    if (ratio <= 1.25) return "text-amber-400";
    return "text-emerald-400";
  }, []);

  const dscrLabel = useCallback((ratio: number | null) => {
    if (ratio === null) return "Enter values above";
    if (ratio < 1.0) return "Below breakeven -- will not qualify";
    if (ratio < 1.15) return "Below most SBA lender minimums";
    if (ratio <= 1.25) return "Meets minimum -- may qualify with strong deal";
    return "Strong coverage -- likely qualifies";
  }, []);

  const sbaPassFail = useCallback((ratio: number | null) => {
    if (ratio === null) return null;
    if (ratio >= 1.25) return { pass: true, label: "Passes SBA minimum (1.25x)" };
    if (ratio >= 1.15)
      return { pass: true, label: "Passes some lenders (1.15x min)" };
    return { pass: false, label: "Below SBA minimum threshold" };
  }, []);

  const formatCurrency = useCallback((value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  }, []);

  const passFailResult = sbaPassFail(adjustedDscr ?? baseDscr);

  return (
    <div className="space-y-8">
      {/* Calculator Card */}
      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 md:p-10">
        <h2 className="font-[family-name:var(--font-montserrat)] text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
          DSCR Calculator
        </h2>
        <p className="mt-2 text-sm text-[var(--color-text-muted)]">
          Calculate your Debt Service Coverage Ratio to see if your deal qualifies for SBA financing.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {/* Left Column — Inputs */}
          <div className="space-y-6">
            {/* NOI */}
            <div>
              <label
                htmlFor="noi"
                className="block text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]"
              >
                Annual Net Operating Income (NOI)
              </label>
              <p className="mt-1 text-xs text-[var(--color-text-muted)]">
                Revenue minus operating expenses (before debt payments)
              </p>
              <div className="relative mt-2">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
                  $
                </span>
                <input
                  id="noi"
                  type="number"
                  inputMode="numeric"
                  min="0"
                  value={noi}
                  onChange={(e) => setNoi(e.target.value)}
                  placeholder="0"
                  className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] py-3 pl-8 pr-4 text-lg text-white placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]"
                />
              </div>
            </div>

            {/* Debt Service Method Toggle */}
            <div>
              <label className="block text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]">
                Annual Debt Service
              </label>
              <div className="mt-2 flex rounded-lg border border-[var(--color-border)] overflow-hidden">
                <button
                  type="button"
                  onClick={() => setDebtMethod("direct")}
                  className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                    debtMethod === "direct"
                      ? "bg-[var(--color-gold)] text-white"
                      : "bg-[var(--color-dark)] text-[var(--color-text-muted)] hover:text-white"
                  }`}
                >
                  Enter Directly
                </button>
                <button
                  type="button"
                  onClick={() => setDebtMethod("calculate")}
                  className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
                    debtMethod === "calculate"
                      ? "bg-[var(--color-gold)] text-white"
                      : "bg-[var(--color-dark)] text-[var(--color-text-muted)] hover:text-white"
                  }`}
                >
                  Calculate from Loan
                </button>
              </div>
            </div>

            {debtMethod === "direct" ? (
              <div>
                <p className="text-xs text-[var(--color-text-muted)]">
                  Total annual principal + interest payments on all business debt
                </p>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
                    $
                  </span>
                  <input
                    id="debt-service"
                    type="number"
                    inputMode="numeric"
                    min="0"
                    value={annualDebtService}
                    onChange={(e) => setAnnualDebtService(e.target.value)}
                    placeholder="0"
                    className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] py-3 pl-8 pr-4 text-lg text-white placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]"
                  />
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="loan-amount"
                    className="block text-xs font-medium text-white/70"
                  >
                    Loan Amount
                  </label>
                  <div className="relative mt-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
                      $
                    </span>
                    <input
                      id="loan-amount"
                      type="number"
                      inputMode="numeric"
                      min="0"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      placeholder="0"
                      className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] py-2.5 pl-8 pr-4 text-white placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="interest-rate"
                      className="block text-xs font-medium text-white/70"
                    >
                      Interest Rate (%)
                    </label>
                    <input
                      id="interest-rate"
                      type="number"
                      inputMode="decimal"
                      min="0"
                      max="30"
                      step="0.125"
                      value={interestRate}
                      onChange={(e) => setInterestRate(e.target.value)}
                      placeholder="0.0"
                      className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] py-2.5 px-4 text-white placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="loan-term"
                      className="block text-xs font-medium text-white/70"
                    >
                      Term (Years)
                    </label>
                    <input
                      id="loan-term"
                      type="number"
                      inputMode="numeric"
                      min="1"
                      max="30"
                      value={loanTermYears}
                      onChange={(e) => setLoanTermYears(e.target.value)}
                      placeholder="10"
                      className="mt-1 w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] py-2.5 px-4 text-white placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]"
                    />
                  </div>
                </div>
                {computedDebtService > 0 && (
                  <p className="text-sm text-[var(--color-text-muted)]">
                    Calculated annual debt service:{" "}
                    <span className="font-semibold text-white">
                      {formatCurrency(computedDebtService)}
                    </span>
                  </p>
                )}
              </div>
            )}

            {/* Add-backs Toggle */}
            <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-dark)] p-4">
              <button
                type="button"
                onClick={() => setShowAddBacks(!showAddBacks)}
                className="flex w-full items-center justify-between text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)]"
              >
                <span>Add-Backs (Optional)</span>
                <svg
                  className={`h-4 w-4 transition-transform ${showAddBacks ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {showAddBacks && (
                <div className="mt-4 space-y-4">
                  <div>
                    <label
                      htmlFor="owner-salary"
                      className="block text-xs font-medium text-white/70"
                    >
                      Owner&apos;s Salary / Compensation
                    </label>
                    <div className="relative mt-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
                        $
                      </span>
                      <input
                        id="owner-salary"
                        type="number"
                        inputMode="numeric"
                        min="0"
                        value={ownerSalary}
                        onChange={(e) => setOwnerSalary(e.target.value)}
                        placeholder="0"
                        className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] py-2.5 pl-8 pr-4 text-white placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="one-time-expenses"
                      className="block text-xs font-medium text-white/70"
                    >
                      One-Time / Non-Recurring Expenses
                    </label>
                    <div className="relative mt-1">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
                        $
                      </span>
                      <input
                        id="one-time-expenses"
                        type="number"
                        inputMode="numeric"
                        min="0"
                        value={oneTimeExpenses}
                        onChange={(e) => setOneTimeExpenses(e.target.value)}
                        placeholder="0"
                        className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] py-2.5 pl-8 pr-4 text-white placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-gold)] focus:outline-none focus:ring-1 focus:ring-[var(--color-gold)]"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column — Results */}
          <div className="flex flex-col items-center justify-center rounded-xl border border-[var(--color-border)] bg-[var(--color-dark)] p-6 text-center md:p-10">
            {/* Base DSCR */}
            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
              {showAddBacks && totalAddBacks > 0 ? "Base DSCR" : "Your DSCR"}
            </p>
            <p className={`mt-2 text-6xl font-bold tabular-nums md:text-7xl ${dscrColor(baseDscr)}`}>
              {baseDscr !== null ? baseDscr.toFixed(2) : "--"}
              <span className="text-2xl font-normal">x</span>
            </p>
            <p className={`mt-3 text-sm font-medium ${dscrColor(baseDscr)}`}>
              {dscrLabel(baseDscr)}
            </p>

            {/* Adjusted DSCR */}
            {showAddBacks && totalAddBacks > 0 && adjustedDscr !== null && (
              <div className="mt-8 w-full border-t border-[var(--color-border)] pt-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                  Adjusted DSCR (with Add-Backs)
                </p>
                <p
                  className={`mt-2 text-5xl font-bold tabular-nums md:text-6xl ${dscrColor(adjustedDscr)}`}
                >
                  {adjustedDscr.toFixed(2)}
                  <span className="text-xl font-normal">x</span>
                </p>
                <p className={`mt-2 text-sm font-medium ${dscrColor(adjustedDscr)}`}>
                  {dscrLabel(adjustedDscr)}
                </p>
                <p className="mt-2 text-xs text-[var(--color-text-muted)]">
                  Add-backs: {formatCurrency(totalAddBacks)}
                </p>
              </div>
            )}

            {/* SBA Pass/Fail */}
            {passFailResult && (
              <div className="mt-8 w-full border-t border-[var(--color-border)] pt-6">
                <div
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                    passFailResult.pass
                      ? "bg-emerald-400/10 text-emerald-400"
                      : "bg-red-400/10 text-red-400"
                  }`}
                >
                  {passFailResult.pass ? (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                  {passFailResult.label}
                </div>
              </div>
            )}

            {/* Formula reminder */}
            <div className="mt-8 w-full rounded-lg bg-[var(--color-surface)] p-4">
              <p className="text-xs text-[var(--color-text-muted)]">
                <span className="font-semibold text-white">Formula:</span>{" "}
                DSCR = (NOI + Add-Backs) / Annual Debt Service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
