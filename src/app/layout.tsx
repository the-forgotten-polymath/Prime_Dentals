import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prime Dental - Modern Dentistry With Gentle Care",
  description: "Expert dental care for healthy, confident smiles at every age—delivered with comfort, precision, and trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="page-wrapper">
          {children}
        </div>
      </body>
    </html>
  );
}
