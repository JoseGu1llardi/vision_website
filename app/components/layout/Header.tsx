"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";
import { NAV_LINKS } from "./constants";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Next.js scrolls to the top on route changes; only the mobile menu needs closing
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background transition-all duration-300 py-3">
      <div className="container mx-auto px-6 lg:px-12">
        <DesktopHeader scrolled={scrolled} pathname={pathname} />

        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between">
          {/* Spacer matching the menu button width to keep the title centered */}
          <div className="w-10" aria-hidden="true" />

          <div className="text-center flex-1">
            <h1 className="text-base tracking-[0.3em] font-light text-black">
              VISION LANDSCAPES
            </h1>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 hover:opacity-70 transition-opacity"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
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
          pathname={pathname}
          onNavigate={closeMobileMenu}
        />
      </div>
    </header>
  );
}

interface DesktopHeaderProps {
  scrolled: boolean;
  pathname: string;
}

function DesktopHeader({ scrolled, pathname }: DesktopHeaderProps) {
  return (
    <div className="hidden md:block">
      {/* Unscrolled State */}
      <div
        className={`transition-all duration-300 ${
          scrolled ? "hidden" : "block"
        }`}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-2xl tracking-[0.3em] font-light text-black mb-2">
            VISION LANDSCAPES
          </h1>
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-foreground/30"></div>
            <p className="text-xs tracking-[0.3em] text-black/90 font-light">
              LIMITED
            </p>
            <div className="h-px w-8 bg-foreground/30"></div>
          </div>
          <nav className="flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={pathname === link.href}
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
        <div className="flex items-center justify-end">
          <div className="absolute left-1/2 -translate-x-1/2">
            <h1 className="text-lg tracking-[0.3em] font-light text-black whitespace-nowrap">
              VISION LANDSCAPES
            </h1>
          </div>
          <nav className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                href={link.href}
                label={link.label}
                active={pathname === link.href}
              />
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}

interface NavLinkProps {
  href: string;
  label: string;
  active?: boolean;
}

function NavLink({ href, label, active }: NavLinkProps) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
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
