"use client";

import Link from "next/link";
import { NAV_LINKS } from "./constants";

interface MobileMenuProps {
  isOpen: boolean;
  pathname: string;
  onNavigate: () => void;
}

export function MobileMenu({ isOpen, pathname, onNavigate }: MobileMenuProps) {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-60 mt-6" : "max-h-0"
      }`}
    >
      <nav className="flex flex-col items-center gap-6 py-4">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            aria-current={pathname === link.href ? "page" : undefined}
            className="text-sm tracking-wider text-foreground/70 hover:text-foreground transition-colors relative group"
          >
            {link.label}
            <span
              className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        ))}
      </nav>
    </div>
  );
}
