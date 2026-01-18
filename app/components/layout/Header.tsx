"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 ${
        scrolled ? "py-3 shadow-md" : "py-3"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Desktop Header */}
        <DesktopHeader scrolled={scrolled} />

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between">
          <div
            className={`transition-all duration-300 ${
              scrolled ? "w-8 h-8" : "w-10 h-10"
            }`}
          >
            <Image
              src="/ar-logo.svg"
              alt="AR Design Logo"
              className="w-full h-full"
              width={100}
              height={50}
            />
          </div>

          <div className="text-center flex-1">
            <h1
              className={`tracking-[0.3em] font-light text-black transition-all duration-300 ${
                scrolled ? "text-base" : "text-xl"
              }`}
            >
              VISION LANDSCAPE
            </h1>
            <p
              className={`text-xs tracking-[0.4em] text-black transition-all duration-300 ${
                scrolled ? "hidden" : "block"
              }`}
            >
              STUDIO
            </p>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:opacity-70 transition-opacity"
            aria-label="Menu"
          >
            <span
              className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                mobileMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-foreground transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>

        <MobileMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
}

function DesktopHeader({ scrolled }: { scrolled: boolean }) {
  const navLinks = [
    { href: "/", label: "HOME", active: true },
    { href: "/portfolio", label: "PORTFOLIO" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <div className="hidden md:block">
      {/* Unscrolled State */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "hidden" : "block"
        }`}
      >
        <div className="flex flex-col items-center">
          <Image
            src="/ar-logo.svg"
            alt="AR Design Logo"
            className="w-12 h-12 mb-4"
            width={100}
            height={50}
          />
          <h1 className="text-2xl tracking-[0.3em] font-light text-black mb-1">
            VISION LANDSCAPE
          </h1>
          <p className="text-xs tracking-[0.4em] text-black mb-6">STUDIO</p>
          <nav className="flex items-center gap-12">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
        </div>
      </div>

      {/* Scrolled State */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-between">
          <Image
            src="/ar-logo.svg"
            alt="AR Design Logo"
            className="w-10 h-10"
            width={100}
            height={50}
          />
          <div className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-lg tracking-[0.3em] font-light text-black whitespace-nowrap">
              VISION LANDSCAPE
            </h1>
          </div>
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} {...link} />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

function NavLink({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      className="text-sm tracking-wider text-foreground/70 hover:text-foreground transition-colors relative group"
    >
      {label}
      <span
        className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}
