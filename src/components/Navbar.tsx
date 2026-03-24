"use client";
import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "INIT", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navbar({ isDark, setIsDark }: { isDark: boolean; setIsDark: (v: boolean) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    setActiveSection(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? isDark
            ? "bg-[#050508]/90 border-b border-[#1a1a2e] backdrop-blur-xl"
            : "bg-white/80 border-b border-[#d0d8f0] backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => handleNav("#hero")}
          className={`font-orbitron font-bold text-lg tracking-widest transition-all ${
            isDark ? "text-[#00f5ff]" : "text-[#0055ff]"
          }`}
          style={isDark ? { textShadow: "0 0 10px #00f5ff" } : {}}
        >
          POY<span className={isDark ? "text-[#ff0080]" : "text-[#cc0066]"}>BOI</span>
          <span className={`text-xs ml-2 font-mono font-normal ${isDark ? "text-[#6b6b9a]" : "text-[#6070a0]"}`}>
            v2.0
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`font-orbitron text-xs font-medium tracking-widest transition-all duration-200 relative group ${
                activeSection === link.href
                  ? isDark ? "text-[#00f5ff]" : "text-[#0055ff]"
                  : isDark ? "text-[#6b6b9a] hover:text-[#00f5ff]" : "text-[#6070a0] hover:text-[#0055ff]"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                  activeSection === link.href ? "w-full" : "w-0 group-hover:w-full"
                } ${isDark ? "bg-[#00f5ff]" : "bg-[#0055ff]"}`}
              />
            </button>
          ))}

          {/* Theme toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 border transition-all duration-300 ${
              isDark
                ? "border-[#1a1a2e] text-[#6b6b9a] hover:border-[#00f5ff] hover:text-[#00f5ff]"
                : "border-[#d0d8f0] text-[#6070a0] hover:border-[#0055ff] hover:text-[#0055ff]"
            }`}
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 border transition-all ${
              isDark ? "border-[#1a1a2e] text-[#6b6b9a]" : "border-[#d0d8f0] text-[#6070a0]"
            }`}
          >
            {isDark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={isDark ? "text-[#00f5ff]" : "text-[#0055ff]"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden border-t ${
            isDark
              ? "bg-[#050508]/95 border-[#1a1a2e] backdrop-blur-xl"
              : "bg-white/95 border-[#d0d8f0] backdrop-blur-xl"
          } px-6 py-4 flex flex-col gap-4`}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className={`font-orbitron text-xs tracking-widest text-left transition-all ${
                isDark ? "text-[#e0e0ff] hover:text-[#00f5ff]" : "text-[#0a0a2e] hover:text-[#0055ff]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
