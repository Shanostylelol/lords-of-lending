import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Business Acquisition Loans",
  description:
    "SBA loans for buying a business. Up to 90% financing on acquisitions with Lords of Lending — a nationwide PLP lender with $450M+ in deals funded.",
  alternates: { canonical: `${SITE_CONFIG.url}/loans/business-acquisition` },
  openGraph: {
    title: "Business Acquisition Loans - Lords of Lending",
    description:
      "SBA loans for buying a business. Up to 90% financing on acquisitions with a nationwide PLP lender.",
    url: `${SITE_CONFIG.url}/loans/business-acquisition`,
    siteName: "Lords of Lending",
    type: "website",
  },
};

export default function BusinessAcquisitionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
