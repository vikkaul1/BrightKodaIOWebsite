import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BrightKoda – Technology for Home Care & Senior Care",
  description: "BrightKoda builds modern, affordable technology solutions for home care and senior care agencies. Compliance-ready tools that simplify caregiver management, training, and operations.",
  metadataBase: new URL("https://brightkoda.io"),
  openGraph: {
    title: "BrightKoda – Technology for Home Care & Senior Care",
    description: "Modern, affordable technology for home care and senior care agencies.",
    url: "https://brightkoda.io",
    siteName: "BrightKoda",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
