import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: `${siteConfig.businessName} | Bacliff, TX`,
  description:
    "Fiberglass and gelcoat repair in Bacliff, Texas. A private website concept for Sam's Boat Repair.",
  robots: siteConfig.previewMode
    ? { index: false, follow: false, googleBot: { index: false, follow: false } }
    : { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
