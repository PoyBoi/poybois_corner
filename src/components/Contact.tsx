"use client";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, MapPin, Copy, Check } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@PoyBoi",
    href: "https://github.com/PoyBoi",
    color: "#00f5ff",
    lightColor: "#0055ff",
    desc: "11 repos · 74+ stars",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "parv--sharma",
    href: "https://linkedin.com/in/parv--sharma/",
    color: "#ff0080",
    lightColor: "#cc0066",
    desc: "Professional network",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    handle: "@poyboi_",
    href: "https://x.com/poyboi_",
    color: "#39ff14",
    lightColor: "#007700",
    desc: "Thoughts & updates",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "parvsharma0104",
    href: "mailto:parvsharma0104@gmail.com",
    color: "#bf5af2",
    lightColor: "#7700cc",
    desc: "Best for collabs",
  },
];

export default function Contact({ isDark }: { isDark: boolean }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("parvsharma0104@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const accent = isDark ? "#00f5ff" : "#0055ff";
  const magenta = isDark ? "#ff0080" : "#cc0066";

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-28 relative overflow-hidden ${isDark ? "bg-[#050508]" : "bg-[#f0f4ff]"}`}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(${isDark ? "rgba(0,245,255,0.08)" : "rgba(0,85,255,0.06)"} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? "rgba(0,245,255,0.08)" : "rgba(0,85,255,0.06)"} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, ${accent}15 0%, transparent 70%)`,
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-20 relative z-10">
        {/* Header */}
        <div
          className={`text-center transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="font-mono text-xs tracking-widest mb-2" style={{ color: isDark ? "#6b6b9a" : "#6070a0" }}>
            // 04. CONTACT
          </p>
          <h2
            className="font-orbitron font-bold text-3xl md:text-4xl mb-4"
            style={{ color: isDark ? "#e0e0ff" : "#0a0a2e" }}
          >
            LET'S CONNECT
          </h2>
          <div className="w-16 h-px mx-auto mb-6" style={{ background: accent, boxShadow: isDark ? `0 0 8px ${accent}` : "none" }} />
          <p
            className="font-rajdhani text-lg max-w-xl mx-auto"
            style={{ color: isDark ? "#9090b8" : "#4a5080" }}
          >
            Open to collaborations, interesting projects, and good conversations.
            Don't hesitate to reach out.
          </p>
        </div>

        {/* Email CTA */}
        <div
          className={`mt-12 flex justify-center transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div
            className="relative flex items-center gap-0 border overflow-hidden"
            style={{
              borderColor: `${accent}40`,
              boxShadow: isDark ? `0 0 20px ${accent}10` : `0 4px 20px ${accent}10`,
            }}
          >
            <div
              className="absolute left-0 top-0 bottom-0 w-0.5"
              style={{ background: accent }}
            />
            <a
              href="mailto:parvsharma0104@gmail.com"
              className="px-8 py-4 font-mono text-sm transition-all duration-300"
              style={{
                color: isDark ? "#e0e0ff" : "#0a0a2e",
                background: isDark ? "#0d0d1a" : "#ffffff",
              }}
            >
              parvsharma0104@gmail.com
            </a>
            <button
              onClick={copyEmail}
              className="px-4 py-4 border-l transition-all duration-300"
              style={{
                borderColor: `${accent}40`,
                background: isDark ? "#0d0d1a" : "#ffffff",
                color: copied ? accent : (isDark ? "#6b6b9a" : "#6070a0"),
              }}
              title="Copy email"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
        </div>

        {/* Social links grid */}
        <div
          className={`mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 transition-all duration-700 delay-300 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {socialLinks.map(({ icon: Icon, label, handle, href, color, lightColor, desc }) => {
            const c = isDark ? color : lightColor;
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 border transition-all duration-300 group hover:-translate-y-1"
                style={{
                  background: isDark ? "#0d0d1a" : "#ffffff",
                  borderColor: isDark ? "#1a1a2e" : "#d0d8f0",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${c}60`;
                  (e.currentTarget as HTMLElement).style.boxShadow = isDark ? `0 0 20px ${c}15` : `0 4px 16px ${c}15`;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = isDark ? "#1a1a2e" : "#d0d8f0";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center border mb-4 transition-all duration-300"
                  style={{
                    borderColor: `${c}40`,
                    background: `${c}10`,
                    color: c,
                  }}
                >
                  <Icon size={18} />
                </div>
                <h4
                  className="font-orbitron font-bold text-xs tracking-widest mb-1"
                  style={{ color: isDark ? "#e0e0ff" : "#0a0a2e" }}
                >
                  {label}
                </h4>
                <p className="font-mono text-xs mb-2" style={{ color: c }}>
                  {handle}
                </p>
                <p className="font-rajdhani text-sm" style={{ color: isDark ? "#6b6b9a" : "#8090b0" }}>
                  {desc}
                </p>
              </a>
            );
          })}
        </div>

        {/* Location */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 border"
            style={{
              borderColor: isDark ? "#1a1a2e" : "#d0d8f0",
              color: isDark ? "#6b6b9a" : "#6070a0",
            }}
          >
            <MapPin size={12} />
            <span className="font-mono text-xs">Noida, Delhi/NCR, India — UTC+05:30</span>
          </div>
        </div>
      </div>
    </section>
  );
}
