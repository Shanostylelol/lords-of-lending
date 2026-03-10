import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preview V1: The Selector - Lords of Lending",
  robots: { index: false, follow: false },
};

export default function PreviewV1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
