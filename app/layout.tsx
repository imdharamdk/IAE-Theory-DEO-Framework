import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IAE Universal Intelligence Engine",
  description: "Comparative Theory Analysis & Dynamic Existence Optimization"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-b from-midnight to-deepBlue">{children}</body>
    </html>
  );
}
