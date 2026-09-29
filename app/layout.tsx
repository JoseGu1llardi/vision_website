import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AR Design – Award Winning Landscape Designers",
  description: "Professional landscape design studio based in Dublin, Ireland",
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
