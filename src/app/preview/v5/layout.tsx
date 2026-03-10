import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Empire (V5) - Landing Page Preview - Lords of Lending",
  robots: { index: false, follow: false },
};

export default function V5Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
