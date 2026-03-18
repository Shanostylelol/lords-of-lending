import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact Brian Congelliere",
  description:
    "Get in touch with Brian Congelliere, VP SBA Business Development Officer at Community Bank & Trust. Expert guidance on SBA loan origination and deal structuring.",
  alternates: { canonical: `${SITE_CONFIG.url}/contact-us-bc` },
};

export default function ContactBrianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
