import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fajar Kristiono — Portfolio",
    template: "%s | Fajar Kristiono",
  },
  description:
    "Portfolio of Fajar Kristiono — Work, Campaigns, Tours, Series, and Tearsheets.",
  metadataBase: new URL("https://fajarkristiono.com"),
  openGraph: {
    title: "Fajar Kristiono — Portfolio",
    description:
      "Portfolio of Fajar Kristiono — Work, Campaigns, Tours, Series, and Tearsheets.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fajar Kristiono — Portfolio",
    description:
      "Portfolio of Fajar Kristiono — Work, Campaigns, Tours, Series, and Tearsheets.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
