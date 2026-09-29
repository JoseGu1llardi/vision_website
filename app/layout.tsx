import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vision Landscapes – Landscape Construction in Dublin",
  description:
    "Landscape construction and garden transformations in Dublin, Ireland — paving, outdoor kitchens, pergolas, driveways and more, from concept to completion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.className} antialiased h-screen`}>
        {children}
      </body>
    </html>
  );
}
