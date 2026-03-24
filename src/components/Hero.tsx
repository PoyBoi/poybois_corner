"use client";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { ChevronDown, Github, Linkedin, Twitter, Mail } from "lucide-react";

const GRID_COLS = 20;
const GRID_ROWS = 12;

export default function Hero({ isDark }: { isDark: boolean }) {
  const [mounted, setMounted] = useState(false);
  const [gridCells, setGridCells] = useState<boolean[]>([]);

  useEffect(() => {
    setMounted(true);
    const cells = Array(GRID_COLS * GRID_ROWS).fill(false).map(() => Math.random() < 0.06);
    setGridCells(cells);
    
    const interval = setInterval(() => {
      setGridCells(prev => prev.map(c => Math.random() < 0.02 ? !c : c));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const accent = isDark ? "#00f5ff" : "#0055ff";
  const magenta = isDark ? "#ff0080" : "#cc0066";

  return (
    <section
      id="hero"
      className={`relative min-h-screen flex flex-col justify-center overflow-hidden ${
        isDark ? "bg-[#050508]" : "bg-[#f0f4ff]"
      }`}
    >
      {/* Animated grid background */}
      {mounted && isDark && (
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(0,245,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,255,0.15) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      )}
      {mounted && !isDark && (
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `linear-gradient(rgba(0,85,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,85,255,0.1) 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      )}

      {/* Flicker grid cells */}
      {mounted && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${GRID_COLS}, 1fr)`,
            gridTemplateRows: `repeat(${GRID_ROWS}, 1fr)`,
          }}
        >
          {gridCells.map((active, i) => (
            <div
              key={i}
              className="transition-opacity duration-700"
              style={{
                opacity: active ? 1 : 0,
                background: isDark
                  ? 'rgba(0,245,255,0.05)'
                  : 'rgba(0,85,255,0.05)',
              }}
            />
          ))}
        </div>
      )}

      {/* Left vertical text */}
      <div
        className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4"
        style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
      >
        <span
          className="font-mono text-xs tracking-widest"
          style={{ color: isDark ? "#6b6b9a" : "#6070a0" }}
        >
          // PORTFOLIO_2025
        </span>
        <div className="w-px h-16" style={{ background: `linear-gradient(to bottom, transparent, ${accent})` }} />
      </div>

      {/* Right vertical social links */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4">
        {[
          { icon: Github, href: "https://github.com/PoyBoi", label: "GitHub" },
          { icon: Linkedin, href: "https://linkedin.com/in/parv--sharma/", label: "LinkedIn" },
          { icon: Twitter, href: "https://x.com/poyboi_", label: "Twitter" },
          { icon: Mail, href: "mailto:parvsharma0104@gmail.com", label: "Email" },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-300 group"
            aria-label={label}
          >
            <Icon
              size={16}
              className="transition-all duration-300"
              style={{ color: isDark ? "#6b6b9a" : "#6070a0" }}
              onMouseEnter={e => (e.currentTarget.style.color = accent)}
              onMouseLeave={e => (e.currentTarget.style.color = isDark ? "#6b6b9a" : "#6070a0")}
            />
          </a>
        ))}
        <div className="w-px h-16" style={{ background: `linear-gradient(to bottom, ${accent}, transparent)` }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-20">
        {/* System tag */}
        <div className="flex items-center gap-3 mb-8">
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: isDark ? "#39ff14" : "#00aa00", boxShadow: isDark ? "0 0 8px #39ff14" : "none" }}
          />
          <span
            className="font-mono text-xs tracking-widest"
            style={{ color: isDark ? "#39ff14" : "#008800" }}
          >
            SYS::ONLINE — AI_ENGINEER.EXE
          </span>
        </div>

        {/* HUD container */}
        <div className="relative inline-block mb-2">
          <div
            className="absolute -top-3 -left-3 w-6 h-6"
            style={{
              borderTop: `2px solid ${accent}`,
              borderLeft: `2px solid ${accent}`,
              boxShadow: isDark ? `0 0 10px ${accent}` : 'none',
            }}
          />
          <div
            className="absolute -bottom-3 -right-3 w-6 h-6"
            style={{
              borderBottom: `2px solid ${magenta}`,
              borderRight: `2px solid ${magenta}`,
              boxShadow: isDark ? `0 0 10px ${magenta}` : 'none',
            }}
          />

          {/* Dev name */}
          <h2
            className="font-orbitron font-medium text-sm tracking-[0.5em] mb-3"
            style={{ color: isDark ? "#6b6b9a" : "#6070a0" }}
          >
            &lt; PARV SHARMA /&gt;
          </h2>

          {/* Main name with glitch */}
          <h1
            className={`font-orbitron font-black leading-none glitch`}
            data-text="POYBOI"
            style={{
              fontSize: "clamp(4rem, 12vw, 10rem)",
              color: accent,
              textShadow: isDark ? `0 0 30px ${accent}, 0 0 60px ${accent}40` : `0 2px 20px ${accent}30`,
              letterSpacing: "0.02em",
            }}
          >
            POYBOI
          </h1>
        </div>

        {/* Animated role */}
        <div className="mt-6 mb-8 flex items-start gap-3">
          <span
            className="font-mono text-sm mt-1"
            style={{ color: isDark ? "#6b6b9a" : "#6070a0" }}
          >
            $&gt;
          </span>
          <div
            className="font-rajdhani font-medium text-xl sm:text-2xl"
            style={{ color: isDark ? "#e0e0ff" : "#0a0a2e" }}
          >
            {mounted && (
              <TypeAnimation
                sequence={[
                  "AI Engineer & Python Dev",
                  2000,
                  "LangChain & LLaMA Specialist",
                  2000,
                  "Music Producer & DJ",
                  2000,
                  "Building the Future",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            )}
            <span
              className="animate-blink ml-1 font-thin"
              style={{ color: accent }}
            >
              |
            </span>
          </div>
        </div>

        {/* Description */}
        <p
          className="font-rajdhani text-lg max-w-xl leading-relaxed mb-10"
          style={{ color: isDark ? "#9090b8" : "#4a5080" }}
        >
          Crafting intelligent systems at the intersection of AI, NLP, and Computer Vision.
          Based in <span style={{ color: accent }}>Noida, Delhi/NCR</span> — building tech that
          actually <span style={{ color: magenta }}>matters</span>.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="cyber-btn cyber-btn-primary"
          >
            VIEW PROJECTS
          </button>
          <a
            href="mailto:parvsharma0104@gmail.com"
            className="cyber-btn cyber-btn-secondary"
          >
            CONTACT ME
          </a>
        </div>

        {/* Stats bar */}
        <div className={`mt-16 flex flex-wrap gap-8 pt-8 border-t ${isDark ? "border-[#1a1a2e]" : "border-[#d0d8f0]"}`}>
          {[
            { value: "74+", label: "GitHub Stars" },
            { value: "12+", label: "Repositories" },
            { value: "4+", label: "OSS Projects" },
            { value: "∞", label: "Beats Dropped" },
          ].map(({ value, label }) => (
            <div key={label} className="flex flex-col">
              <span
                className="font-orbitron font-bold text-2xl"
                style={{ color: accent, textShadow: isDark ? `0 0 10px ${accent}` : "none" }}
              >
                {value}
              </span>
              <span
                className="font-mono text-xs mt-1"
                style={{ color: isDark ? "#6b6b9a" : "#6070a0" }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all hover:opacity-80 group"
        aria-label="Scroll down"
      >
        <span
          className="font-mono text-xs tracking-widest"
          style={{ color: isDark ? "#6b6b9a" : "#6070a0" }}
        >
          SCROLL
        </span>
        <ChevronDown
          size={16}
          className="animate-bounce"
          style={{ color: accent }}
        />
      </button>
    </section>
  );
}
