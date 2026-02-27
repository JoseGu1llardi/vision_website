"use client";

import { NAV_LINKS } from "./constants";
import type { Page } from "../../types";

interface MobileMenuProps {
  isOpen: boolean;
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function MobileMenu({ isOpen, currentPage, onNavigate }: MobileMenuProps) {
  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-60 mt-6" : "max-h-0"
      }`}
    >
      <nav className="flex flex-col items-center gap-6 py-4">
        {NAV_LINKS.map((link) => (
          <button
            key={link.page}
            onClick={() => onNavigate(link.page)}
            className="text-sm tracking-wider text-foreground/70 hover:text-foreground transition-colors relative group"
          >
            {link.label}
            <span
              className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                currentPage === link.page ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </button>
        ))}
      </nav>
    </div>
  );
}
