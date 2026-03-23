import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Antony Kimpton",
  description: "Software engineer. UK.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
