"use client";

import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link
          href="#home"
          className="font-mono text-sm font-semibold tracking-widest neon-text"
          onClick={() => setOpen(false)}
        >
          POYBOI<span className="text-cyan-400">{`//`}</span>PORTFOLIO
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          {/* Mobile menu button */}
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="rounded-xl border border-white/20 p-2 transition hover:border-cyan-400/60 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-white/10 bg-background/90 px-4 py-4 md:hidden">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-sm text-muted-foreground transition hover:text-cyan-300"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
