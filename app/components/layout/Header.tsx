"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { MobileMenu } from "./MobileMenu";

type Page = "home" | "portfolio" | "contact";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (page: Page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 py-3">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Desktop Header */}
        <DesktopHeader
          scrolled={scrolled}
          currentPage={currentPage}
          onNavigate={handleNavigation}
        />

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between">
          <div className="w-8 h-8">
            <Image
              src="/ar-logo.svg"
              alt="AR Design Logo"
              className="w-full h-full"
              width={100}
              height={50}
            />
          </div>

          <div className="text-center flex-1">
            <h1 className="text-base tracking-[0.3em] font-light text-black">
              VISION LANDSCAPE
            </h1>
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
          currentPage={currentPage}
          onNavigate={handleNavigation}
          onClose={() => setMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
}

interface DesktopHeaderProps {
  scrolled: boolean;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

function DesktopHeader({
  scrolled,
  currentPage,
  onNavigate,
}: DesktopHeaderProps) {
  const navLinks: { page: Page; label: string }[] = [
    { page: "home", label: "HOME" },
    { page: "portfolio", label: "PORTFOLIO" },
    { page: "contact", label: "CONTACT" },
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
              <NavLink
                key={link.page}
                page={link.page}
                label={link.label}
                active={currentPage === link.page}
                onClick={() => onNavigate(link.page)}
              />
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
              <NavLink
                key={link.page}
                page={link.page}
                label={link.label}
                active={currentPage === link.page}
                onClick={() => onNavigate(link.page)}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

interface NavLinkProps {
  page: Page;
  label: string;
  active?: boolean;
  onClick: () => void;
}

function NavLink({ label, active, onClick }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className="text-sm tracking-wider text-foreground/70 hover:text-foreground transition-colors relative group"
    >
      {label}
      <span
        className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </button>
  );
}
