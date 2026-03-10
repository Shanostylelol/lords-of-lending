import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hero Concepts - Lords of Lending",
  robots: { index: false, follow: false },
};

export default function HeroesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
