"use client";
import { useInView } from "react-intersection-observer";
import { Github, Linkedin, Twitter, Mail, MapPin, Code2, Music, Brain } from "lucide-react";

export default function About({ isDark }: { isDark: boolean }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const accent = isDark ? "#00f5ff" : "#0055ff";
  const magenta = isDark ? "#ff0080" : "#cc0066";
  const green = isDark ? "#39ff14" : "#00aa00";

  return (
    <section
      id="about"
      ref={ref}
      className={`py-28 relative ${isDark ? "bg-[#0a0a12]" : "bg-white"}`}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Section header */}
        <div
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p
            className="font-mono text-xs tracking-widest mb-2"
            style={{ color: isDark ? "#6b6b9a" : "#6070a0" }}
          >
            // 01. ABOUT_ME
          </p>
          <h2
            className="font-orbitron font-bold text-3xl md:text-4xl section-heading"
            style={{ color: isDark ? "#e0e0ff" : "#0a0a2e" }}
          >
            WHO AM I?
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <div className="space-y-6 font-rajdhani text-lg leading-relaxed" style={{ color: isDark ? "#9090b8" : "#4a5080" }}>
              <p>
                I'm <span className="font-semibold" style={{ color: isDark ? "#e0e0ff" : "#0a0a2e" }}>Parv Sharma</span> — aka{" "}
                <span style={{ color: accent, fontWeight: 700 }}>PoyBoi</span>. An AI Engineer,
                Python developer, and music producer operating out of{" "}
                <span className="inline-flex items-center gap-1" style={{ color: isDark ? "#e0e0ff" : "#0a0a2e" }}>
                  <MapPin size={14} />
                  Noida, Delhi/NCR
                </span>.
              </p>
              <p>
                I specialize in building intelligent systems powered by large language models,
                with deep expertise in <span style={{ color: accent }}>LangChain</span>,{" "}
                <span style={{ color: magenta }}>LLaMA</span>, and{" "}
                <span style={{ color: green }}>LLaMA-CPP</span>. My work spans
                from AI mental health tools to computer vision pipelines.
              </p>
              <p>
                When I'm not engineering AI systems, I'm in the studio as a DJ and music
                producer — blending the same creative problem-solving energy that drives my
                code into sounds that hit different.
              </p>
            </div>

            {/* Trait badges */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { icon: Brain, label: "AI Engineer", color: accent },
                { icon: Code2, label: "Python Dev", color: magenta },
                { icon: Music, label: "Music Producer", color: green },
              ].map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-4 py-2 border transition-all duration-300 hover:scale-105"
                  style={{
                    borderColor: `${color}40`,
                    background: `${color}08`,
                    color,
                    boxShadow: isDark ? `0 0 10px ${color}20` : "none",
                  }}
                >
                  <Icon size={14} />
                  <span className="font-orbitron text-xs font-medium tracking-wider">{label}</span>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-8 flex gap-4">
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
                  className="p-3 border transition-all duration-300 hover:scale-110 group"
                  style={{
                    borderColor: isDark ? "#1a1a2e" : "#d0d8f0",
                    color: isDark ? "#6b6b9a" : "#6070a0",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = accent;
                    (e.currentTarget as HTMLElement).style.color = accent;
                    (e.currentTarget as HTMLElement).style.boxShadow = isDark ? `0 0 10px ${accent}40` : "none";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = isDark ? "#1a1a2e" : "#d0d8f0";
                    (e.currentTarget as HTMLElement).style.color = isDark ? "#6b6b9a" : "#6070a0";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                  aria-label={label}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Visual card — system info */}
          <div
            className={`transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            <div
              className="relative p-8 border font-mono text-sm"
              style={{
                background: isDark ? "#0d0d1a" : "#f8f8ff",
                borderColor: `${accent}30`,
                boxShadow: isDark ? `0 0 30px ${accent}10` : "none",
              }}
            >
              {/* HUD corners */}
              <div className="absolute top-0 left-0 w-4 h-4" style={{ borderTop: `2px solid ${accent}`, borderLeft: `2px solid ${accent}` }} />
              <div className="absolute top-0 right-0 w-4 h-4" style={{ borderTop: `2px solid ${magenta}`, borderRight: `2px solid ${magenta}` }} />
              <div className="absolute bottom-0 left-0 w-4 h-4" style={{ borderBottom: `2px solid ${magenta}`, borderLeft: `2px solid ${magenta}` }} />
              <div className="absolute bottom-0 right-0 w-4 h-4" style={{ borderBottom: `2px solid ${accent}`, borderRight: `2px solid ${accent}` }} />

              {/* Header */}
              <div className="flex items-center gap-2 mb-6 pb-4" style={{ borderBottom: `1px solid ${isDark ? "#1a1a2e" : "#e0e8ff"}` }}>
                <div className="w-2 h-2 rounded-full" style={{ background: "#ff5f57" }} />
                <div className="w-2 h-2 rounded-full" style={{ background: "#ffbd2e" }} />
                <div className="w-2 h-2 rounded-full" style={{ background: "#28c840" }} />
                <span className="ml-4 text-xs" style={{ color: isDark ? "#6b6b9a" : "#6070a0" }}>
                  parv_sharma.config
                </span>
              </div>

              {/* System info */}
              <div className="space-y-3">
                {[
                  { key: "name", value: "Parv Sharma" },
                  { key: "alias", value: "PoyBoi" },
                  { key: "role", value: "AI Engineer" },
                  { key: "location", value: "Noida, Delhi/NCR" },
                  { key: "primary_stack", value: "Python, LangChain" },
                  { key: "llm_tools", value: "LLaMA, LLaMA-CPP" },
                  { key: "cv_tools", value: "OpenCV, dlib" },
                  { key: "side_quest", value: "Music Production" },
                  { key: "status", value: "ONLINE ✓" },
                ].map(({ key, value }) => (
                  <div key={key} className="flex gap-3 items-start">
                    <span style={{ color: accent, minWidth: "140px" }}>{key}:</span>
                    <span style={{ color: isDark ? "#e0e0ff" : "#0a0a2e" }}>
                      {key === "status" ? (
                        <span style={{ color: green }}>{value}</span>
                      ) : (
                        `"${value}"`
                      )}
                    </span>
                  </div>
                ))}
              </div>

              {/* Pulsing cursor */}
              <div className="mt-6 flex items-center gap-2" style={{ color: isDark ? "#6b6b9a" : "#6070a0" }}>
                <span>$&gt;</span>
                <span className="animate-blink" style={{ color: accent }}>█</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${magenta}, transparent)` }}
      />
    </section>
  );
}
