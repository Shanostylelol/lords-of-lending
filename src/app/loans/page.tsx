import type { Metadata } from "next";
import { LoanProgram } from "@/components/sections/loan-program";

export const metadata: Metadata = {
  title: "Loans",
  description:
    "Nationwide SBA PLP Lender. Loans up to $5 million with up to 90% financing on business acquisitions.",
};

export default function LoansPage() {
  return (
    <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <LoanProgram variant="loans" />
      </div>
    </main>
  );
}
