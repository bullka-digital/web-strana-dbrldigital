"use client";

import { useState } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

const navItems = [
  { number: "01", label: "Dobrodošli", href: "#welcome" },
  { number: "02", label: "Usluge", href: "#services" },
  { number: "03", label: "Zašto Mi", href: "#work" },
  { number: "04", label: "Proces Rada", href: "#process" },
  { number: "05", label: "FAQ", href: "#faq" },
  { number: "06", label: "Kontakt", href: "#contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="flex items-center justify-between px-8 py-3">
        <Link
          href="#welcome"
          className="font-heading text-xl font-extrabold tracking-tight"
        >
          Brooklyn
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.number}
              href={item.href}
              className="group flex items-center gap-1.5 text-sm font-medium uppercase tracking-wide"
            >
              <span className="text-accent">{item.number}</span>
              <span className="transition-colors group-hover:text-accent">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="#contact">Zakaži Konsultacije</Button>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Otvori meni"
          aria-expanded={isMenuOpen}
        >
          <span className="h-0.5 w-7 bg-black" />
          <span className="h-0.5 w-7 bg-black" />
          <span className="h-0.5 w-5 bg-black" />
        </button>
      </div>

      {isMenuOpen && (
        <nav className="flex flex-col gap-4 border-t border-black/10 px-8 py-6 lg:hidden">
          {navItems.map((item) => (
            <a
              key={item.number}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-2 text-base font-medium uppercase tracking-wide"
            >
              <span className="text-accent">{item.number}</span>
              {item.label}
            </a>
          ))}
          <Button href="#contact" className="mt-2 w-fit">
            Zakaži Konsultacije
          </Button>
        </nav>
      )}

      <div className="mx-8 h-px bg-black/15" />
    </header>
  );
}
