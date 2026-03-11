import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { organizationJsonLd, websiteJsonLd } from "@/lib/structured-data";
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
    default: "SBA Lending Knowledge & Originator Training - Lords of Lending",
    template: "%s - Lords of Lending",
  },
  description:
    "The #1 resource for SBA lending education, broker training, and small business financing tools. Podcast, articles, and a learning platform for originators and business owners.",
  keywords: [
    "SBA loan training",
    "SBA broker training",
    "SBA lending education",
    "SBA 7a loans",
    "small business lending",
    "loan originator training",
    "SBA loan podcast",
    "business acquisition loans",
    "Lords of Lending",
    "SBA loan broker",
    "how to source SBA loans",
    "SBA lending tools",
  ],
  openGraph: {
    title: "SBA Lending Knowledge & Originator Training - Lords of Lending",
    description:
      "The #1 resource for SBA lending education, broker training, and small business financing tools. Podcast, articles, and a learning platform.",
    url: "https://lordsoflending.com",
    siteName: "Lords of Lending",
    images: [{ url: "/images/pillar/complete-guide-sba-7a-loans.webp", width: 1200, height: 630 }],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SBA Lending Knowledge & Originator Training - Lords of Lending",
    description:
      "The #1 resource for SBA lending education, broker training, and small business financing tools.",
    images: ["/images/pillar/complete-guide-sba-7a-loans.webp"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://lordsoflending.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WW1N5KBXQM" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-WW1N5KBXQM');`,
          }}
        />
      </head>
      <body className="font-[family-name:var(--font-open-sans)] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
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
