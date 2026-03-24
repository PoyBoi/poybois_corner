"use client";

export default function Footer({ isDark }: { isDark: boolean }) {
  const year = new Date().getFullYear();
  const accent = isDark ? "#00f5ff" : "#0055ff";

  return (
    <footer
      className={`py-8 border-t ${isDark ? "border-[#1a1a2e] bg-[#0a0a12]" : "border-[#d0d8f0] bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className="font-orbitron font-bold text-sm"
            style={{ color: accent, textShadow: isDark ? `0 0 8px ${accent}` : "none" }}
          >
            POYBOI
          </span>
          <span
            className="font-mono text-xs"
            style={{ color: isDark ? "#4a4a6a" : "#8090b0" }}
          >
            — Parv Sharma
          </span>
        </div>

        <p
          className="font-mono text-xs"
          style={{ color: isDark ? "#4a4a6a" : "#8090b0" }}
        >
          © {year} · Built with{" "}
          <span style={{ color: accent }}>Next.js</span> &amp;{" "}
          <span style={{ color: isDark ? "#ff0080" : "#cc0066" }}>TailwindCSS</span>
        </p>

        <div className="flex items-center gap-2">
          <div
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: isDark ? "#39ff14" : "#00aa00", boxShadow: isDark ? "0 0 6px #39ff14" : "none" }}
          />
          <span className="font-mono text-xs" style={{ color: isDark ? "#39ff14" : "#007700" }}>
            SYSTEM ONLINE
          </span>
        </div>
      </div>
    </footer>
  );
}
