import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const GA_MEASUREMENT_ID = "G-HGXEYQBRHJ"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Should I Go To School?",
  description: "Calculate the true cost of attenting college",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
    </html>
  );
}
