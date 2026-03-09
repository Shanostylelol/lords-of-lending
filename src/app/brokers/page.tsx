import type { Metadata } from "next";
import { LoanProgram } from "@/components/sections/loan-program";

export const metadata: Metadata = {
  title: "Brokers",
  description:
    "Submit your SBA loan deals through Lords of Lending. Referral fee schedule, program basics, and direct lender access.",
};

export default function BrokersPage() {
  return (
    <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <LoanProgram variant="brokers" />
      </div>
    </main>
  );
}
