import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lordsoflending.com"),
  title: {
    default: "Business Loans & Financing Experts - Lords of Lending",
    template: "%s - Lords of Lending",
  },
  description:
    "Lords of Lending connects small businesses with SBA loans and funding. Expert help, clear steps, and fast approvals to fuel your business growth.",
  keywords: [
    "SBA loans",
    "business loans",
    "small business financing",
    "SBA 7a loans",
    "business acquisition loans",
    "Lords of Lending",
    "business funding",
  ],
  openGraph: {
    title: "Business Loans & Financing Experts - Lords of Lending",
    description:
      "Lords of Lending connects small businesses with SBA loans and funding. Expert help, clear steps, and fast approvals to fuel your business growth.",
    url: "https://lordsoflending.com",
    siteName: "Lords of Lending - Purveyors of Honest Capital",
    images: [{ url: "/images/logos/wordmark-vert.png", width: 800, height: 1036 }],
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Loans & Financing Experts - Lords of Lending",
    description:
      "Lords of Lending connects small businesses with SBA loans and funding. Expert help, clear steps, and fast approvals to fuel your business growth.",
    images: ["/images/logos/wordmark-vert.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="font-[family-name:var(--font-open-sans)] antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-[var(--color-gold)] focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold"
        >
          Skip to main content
        </a>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
