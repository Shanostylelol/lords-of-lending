import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Storyteller - Preview V4",
  robots: { index: false, follow: false },
};

export default function PreviewV4Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
