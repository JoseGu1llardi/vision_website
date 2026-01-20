"use client";

import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background py-8 px-4 border-t border-foreground/10">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <button
            onClick={scrollToTop}
            className="cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Scroll to top"
          >
            <Image
              src="/ar-logo.svg"
              alt="AR Design Logo"
              className="w-12 h-12 opacity-60"
              width={100}
              height={50}
            />
          </button>

          {/* Brand Name */}
          <div>
            <h2 className="text-lg tracking-[0.3em] text-foreground/70 font-light mb-1">
              VISION LANDSCAPE
            </h2>
            <p className="text-xs tracking-[0.4em] text-foreground/50">
              STUDIO
            </p>
          </div>

          {/* Copyright */}
          <div className="text-sm text-foreground/60 pt-4 border-t border-foreground/10 w-full">
            © 2025 Vision Landscape Limited. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
