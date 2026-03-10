import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Platform (V3) - Landing Page Preview",
  robots: { index: false, follow: false },
};

export default function V3Layout({ children }: { children: React.ReactNode }) {
  return children;
}
