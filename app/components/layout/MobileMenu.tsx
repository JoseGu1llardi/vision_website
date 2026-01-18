"use client";

import Link from "next/link";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const links = [
    { href: "/", label: "HOME", active: true },
    { href: "/portfolio", label: "PORTFOLIO" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <div
      className={`md:hidden overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-60 mt-6" : "max-h-0"
      }`}
    >
      <nav className="flex flex-col items-center gap-6 py-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="text-sm tracking-wider text-foreground/70 hover:text-foreground transition-colors relative group"
          >
            {link.label}
            <span
              className={`absolute -bottom-1 left-0 h-px bg-foreground transition-all duration-300 ${
                link.active ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        ))}
      </nav>
    </div>
  );
}
