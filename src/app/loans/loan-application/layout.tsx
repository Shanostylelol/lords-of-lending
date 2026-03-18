import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "SBA Loan Application",
  description:
    "Apply for an SBA loan with Lords of Lending. Nationwide PLP lender offering up to $5 million in SBA 7(a) financing for business acquisitions, expansions, and working capital.",
  alternates: { canonical: `${SITE_CONFIG.url}/loans/loan-application` },
  openGraph: {
    title: "SBA Loan Application - Lords of Lending",
    description:
      "Apply for an SBA loan with Lords of Lending. Nationwide PLP lender offering up to $5 million in SBA 7(a) financing.",
    url: `${SITE_CONFIG.url}/loans/loan-application`,
    siteName: "Lords of Lending",
    type: "website",
  },
};

export default function LoanApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
