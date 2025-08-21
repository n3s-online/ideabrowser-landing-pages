import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SaaS Billing in a Day - Deploy Enterprise Billing in 24 Hours",
  description:
    "Stop losing revenue to broken billing systems. Get Stripe-powered subscription management that deploys instantly and reduces billing errors by 80%. Join 200+ SaaS founders who got their time back.",
  keywords:
    "SaaS billing, subscription management, Stripe integration, billing automation, dunning campaigns, tax compliance, revenue analytics",
  authors: [{ name: "SaaS Billing in a Day" }],
  openGraph: {
    title: "SaaS Billing in a Day - Deploy Enterprise Billing in 24 Hours",
    description:
      "Stop losing revenue to broken billing systems. Get enterprise billing that deploys in 24 hours, not 24 days.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SaaS Billing in a Day - Deploy Enterprise Billing in 24 Hours",
    description:
      "Stop losing revenue to broken billing systems. Get enterprise billing that deploys in 24 hours, not 24 days.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
