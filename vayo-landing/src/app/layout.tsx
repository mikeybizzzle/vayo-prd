import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Analytics from "@/components/Analytics";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vayo - Save Up to 70% on Hotels, Cruises & Resorts | 14-Day Free Trial",
  description: "Join thousands of smart travelers saving up to 70% on luxury travel. Access exclusive member-only rates at 500,000+ hotels worldwide. Start your 14-day free trial today!",
  keywords: "travel deals, hotel discounts, vacation savings, member rates, luxury travel, cruise deals, resort discounts",
  openGraph: {
    title: "Vayo - Save Up to 70% on Your Dream Vacations",
    description: "Exclusive member-only rates on hotels, cruises, and resorts. Start your 14-day free trial!",
    type: "website",
    url: "https://vayo.travel",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vayo Travel Membership",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vayo - Save Up to 70% on Travel",
    description: "Exclusive member rates on luxury travel. 14-day free trial!",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Analytics />
        <Navbar />
        <div className="min-h-screen">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
