import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preview V2: The Authority - Lords of Lending",
  robots: { index: false, follow: false },
};

export default function PreviewV2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
