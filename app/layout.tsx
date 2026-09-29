import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Vision Landscapes – Landscape Construction in Dublin",
    template: "%s – Vision Landscapes",
  },
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
        <div className="min-h-screen">
          <Header />
          <main className="transition-opacity duration-300">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
