import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "XOT Studio – Creative Agency & Design Studio",
  description: "Premium creative agency and design studio. Brand strategy, motion design, social media, packaging, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
