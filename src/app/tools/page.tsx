import type { Metadata } from "next";
import { LoanProgram } from "@/components/sections/loan-program";

export const metadata: Metadata = {
  title: "Loan Tools",
  description:
    "Access our SBA loan program details, document checklists, and free tools to streamline your business financing.",
};

export default function ToolsPage() {
  return (
    <main id="main-content" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto max-w-5xl px-6 md:px-8">
        <LoanProgram variant="tools" />
      </div>
    </main>
  );
}
