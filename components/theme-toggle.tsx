"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  // resolvedTheme is undefined on the server / before hydration
  if (!resolvedTheme) {
    return (
      <div
        className="h-9 w-9 rounded-xl border border-white/20"
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-xl border border-white/20 p-2 transition hover:scale-105 hover:border-cyan-400/60 hover:shadow-[0_0_12px_rgba(34,211,238,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
