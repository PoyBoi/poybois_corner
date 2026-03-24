"use client";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Star, GitFork, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    id: "01",
    name: "MindEase",
    tagline: "AI Mental Health Counsellor",
    description:
      "An AI-powered personal mental health coach that analyzes your mental state, suggests coping strategies, and helps manage stress and anxiety through NLP-driven conversations. Designed to break the stigma around mental health in India.",
    tech: ["Python", "LangChain", "NLP", "LLaMA", "HTML/CSS", "JavaScript"],
    stars: 40,
    forks: 10,
    github: "https://github.com/PoyBoi/MindEase",
    color: "#00f5ff",
    lightColor: "#0055ff",
    accentGlyph: "🧠",
    highlights: ["NLP-driven diagnosis", "Anonymous counseling", "Coping strategy engine"],
  },
  {
    id: "02",
    name: "StableDiffusionHelper",
    tagline: "AI Image Processing Toolkit",
    description:
      "Advanced automated image processing tool for Stable Diffusion workflows — featuring auto face detection, smart cropping, background removal, batch processing, caption editing, and a full Gradio GUI.",
    tech: ["Python", "OpenCV", "dlib", "Gradio", "Stable Diffusion", "PIL"],
    stars: 34,
    forks: 2,
    github: "https://github.com/PoyBoi/StableDiffusionHelper",
    color: "#ff0080",
    lightColor: "#cc0066",
    accentGlyph: "📸",
    highlights: ["Auto face detection", "Batch processing", "Gradio GUI"],
  },
  {
    id: "03",
    name: "SBUH_1285",
    tagline: "AI Legal Documentation Assistant",
    description:
      "An AI-powered legal documentation assistant built under selbide-py. Automates the creation and analysis of legal documents, reducing the overhead of complex legal paperwork through LLM-powered document intelligence.",
    tech: ["Python", "LangChain", "LLM", "NLP", "Document AI"],
    stars: 5,
    forks: 0,
    github: "https://github.com/selbide-py/SBUH_1285",
    color: "#bf5af2",
    lightColor: "#7700cc",
    accentGlyph: "⚖️",
    highlights: ["Legal NLP pipeline", "Document generation", "LLM reasoning"],
  },
  {
    id: "04",
    name: "BW2RGB",
    tagline: "AI Historical Image Colorization",
    description:
      "Revive historical black and white photographs with AI-powered restoration and colorization. Uses deep learning models to intelligently reconstruct realistic color data from grayscale imagery.",
    tech: ["Python", "Jupyter Notebook", "Deep Learning", "Computer Vision", "Image Restoration"],
    stars: 0,
    forks: 0,
    github: "https://github.com/PoyBoi/BW2RGB",
    color: "#39ff14",
    lightColor: "#008800",
    accentGlyph: "🎨",
    highlights: ["Deep learning colorization", "Historical photo restoration", "AI color reconstruction"],
  },
];

export default function Projects({ isDark }: { isDark: boolean }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [active, setActive] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragStart = useRef<number | null>(null);

  const next = () => setActive(v => (v + 1) % projects.length);
  const prev = () => setActive(v => (v - 1 + projects.length) % projects.length);

  const handleDragStart = (x: number) => { dragStart.current = x; setDragging(true); };
  const handleDragEnd = (x: number) => {
    if (dragStart.current !== null) {
      const diff = dragStart.current - x;
      if (diff > 40) next();
      else if (diff < -40) prev();
    }
    setDragging(false);
    dragStart.current = null;
  };

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, []);

  const p = projects[active];
  const accent = isDark ? p.color : p.lightColor;

  return (
    <section
      id="projects"
      ref={ref}
      className={`py-28 relative overflow-hidden ${isDark ? "bg-[#050508]" : "bg-[#f0f4ff]"}`}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, ${accent}10 0%, transparent 70%)`,
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Section header */}
        <div
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="font-mono text-xs tracking-widest mb-2" style={{ color: isDark ? "#6b6b9a" : "#6070a0" }}>
            // 02. PROJECTS
          </p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2
              className="font-orbitron font-bold text-3xl md:text-4xl section-heading"
              style={{ color: isDark ? "#e0e0ff" : "#0a0a2e" }}
            >
              FEATURED WORK
            </h2>
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="p-3 border transition-all duration-300 hover:scale-110"
                style={{
                  borderColor: isDark ? "#1a1a2e" : "#d0d8f0",
                  color: isDark ? "#6b6b9a" : "#6070a0",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = accent;
                  (e.currentTarget as HTMLElement).style.color = accent;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = isDark ? "#1a1a2e" : "#d0d8f0";
                  (e.currentTarget as HTMLElement).style.color = isDark ? "#6b6b9a" : "#6070a0";
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <span className="font-mono text-xs" style={{ color: isDark ? "#6b6b9a" : "#6070a0" }}>
                {active + 1} / {projects.length}
              </span>
              <button
                onClick={next}
                className="p-3 border transition-all duration-300 hover:scale-110"
                style={{
                  borderColor: isDark ? "#1a1a2e" : "#d0d8f0",
                  color: isDark ? "#6b6b9a" : "#6070a0",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = accent;
                  (e.currentTarget as HTMLElement).style.color = accent;
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = isDark ? "#1a1a2e" : "#d0d8f0";
                  (e.currentTarget as HTMLElement).style.color = isDark ? "#6b6b9a" : "#6070a0";
                }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div
          className="mt-12 relative"
          onMouseDown={e => handleDragStart(e.clientX)}
          onMouseUp={e => handleDragEnd(e.clientX)}
          onTouchStart={e => handleDragStart(e.touches[0].clientX)}
          onTouchEnd={e => handleDragEnd(e.changedTouches[0].clientX)}
          style={{ cursor: dragging ? "grabbing" : "grab" }}
        >
          <div
            key={active}
            className="grid grid-cols-1 lg:grid-cols-5 gap-6 transition-all duration-500"
            style={{ animation: "slideUp 0.5s ease-out" }}
          >
            {/* Main project card */}
            <div
              className="lg:col-span-3 relative p-8 border overflow-hidden group transition-all duration-300"
              style={{
                background: isDark ? "#0d0d1a" : "#ffffff",
                borderColor: `${accent}40`,
                boxShadow: isDark ? `0 0 30px ${accent}15` : `0 4px 24px ${accent}15`,
              }}
            >
              {/* HUD corners */}
              <div className="absolute top-0 left-0 w-5 h-5" style={{ borderTop: `2px solid ${accent}`, borderLeft: `2px solid ${accent}` }} />
              <div className="absolute bottom-0 right-0 w-5 h-5" style={{ borderBottom: `2px solid ${accent}`, borderRight: `2px solid ${accent}` }} />

              {/* Project ID */}
              <span
                className="font-orbitron font-black text-6xl absolute top-4 right-6 select-none pointer-events-none"
                style={{ color: `${accent}10` }}
              >
                {p.id}
              </span>

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <span className="text-3xl">{p.accentGlyph}</span>
                  <div>
                    <h3
                      className="font-orbitron font-bold text-2xl"
                      style={{ color: isDark ? "#e0e0ff" : "#0a0a2e" }}
                    >
                      {p.name}
                    </h3>
                    <p className="font-mono text-xs mt-1" style={{ color: accent }}>
                      {p.tagline}
                    </p>
                  </div>
                </div>

                <p
                  className="font-rajdhani text-base leading-relaxed mb-6"
                  style={{ color: isDark ? "#9090b8" : "#4a5080" }}
                >
                  {p.description}
                </p>

                {/* Highlights */}
                <div className="mb-6 space-y-2">
                  {p.highlights.map(h => (
                    <div key={h} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full" style={{ background: accent }} />
                      <span className="font-rajdhani text-sm" style={{ color: isDark ? "#e0e0ff" : "#0a0a2e" }}>
                        {h}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tech.map(t => (
                    <span
                      key={t}
                      className="px-3 py-1 font-mono text-xs border"
                      style={{
                        borderColor: `${accent}40`,
                        color: accent,
                        background: `${accent}08`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyber-btn"
                      style={{
                        color: accent,
                        border: `1px solid ${accent}`,
                        padding: "10px 20px",
                        fontSize: "0.7rem",
                        fontFamily: "Orbitron, sans-serif",
                        fontWeight: 600,
                        letterSpacing: "2px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        boxShadow: isDark ? `0 0 10px ${accent}30` : "none",
                      }}
                    >
                      <Github size={12} />
                      SOURCE
                    </a>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1" style={{ color: isDark ? "#6b6b9a" : "#6070a0" }}>
                      <Star size={12} />
                      <span className="font-mono text-xs">{p.stars}</span>
                    </div>
                    <div className="flex items-center gap-1" style={{ color: isDark ? "#6b6b9a" : "#6070a0" }}>
                      <GitFork size={12} />
                      <span className="font-mono text-xs">{p.forks}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side project list */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              {projects.map((proj, i) => {
                const pAccent = isDark ? proj.color : proj.lightColor;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setActive(i)}
                    className="p-4 border text-left transition-all duration-300 relative overflow-hidden group"
                    style={{
                      background: i === active
                        ? isDark ? "#0d0d1a" : "#ffffff"
                        : isDark ? "#0a0a12" : "#f8f9ff",
                      borderColor: i === active ? `${pAccent}60` : isDark ? "#1a1a2e" : "#d0d8f0",
                      boxShadow: i === active
                        ? isDark ? `0 0 15px ${pAccent}15` : `0 2px 12px ${pAccent}15`
                        : "none",
                    }}
                  >
                    {i === active && (
                      <div
                        className="absolute left-0 top-0 bottom-0 w-0.5"
                        style={{ background: pAccent, boxShadow: isDark ? `0 0 6px ${pAccent}` : "none" }}
                      />
                    )}
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-xs" style={{ color: pAccent }}>{proj.id}</span>
                      <span className="text-sm">{proj.accentGlyph}</span>
                    </div>
                    <h4
                      className="font-orbitron font-bold text-sm"
                      style={{ color: i === active ? (isDark ? "#e0e0ff" : "#0a0a2e") : (isDark ? "#6b6b9a" : "#8090b0") }}
                    >
                      {proj.name}
                    </h4>
                    <p className="font-mono text-xs mt-1" style={{ color: isDark ? "#4a4a6a" : "#a0aac0" }}>
                      {proj.tagline}
                    </p>
                  </button>
                );
              })}

              {/* View all repos */}
              <a
                href="https://github.com/PoyBoi?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 border transition-all duration-300 flex items-center justify-center gap-2 group"
                style={{
                  borderColor: isDark ? "#1a1a2e" : "#d0d8f0",
                  color: isDark ? "#6b6b9a" : "#8090b0",
                  borderStyle: "dashed",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = isDark ? "#00f5ff40" : "#0055ff40";
                  (e.currentTarget as HTMLElement).style.color = isDark ? "#00f5ff" : "#0055ff";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = isDark ? "#1a1a2e" : "#d0d8f0";
                  (e.currentTarget as HTMLElement).style.color = isDark ? "#6b6b9a" : "#8090b0";
                }}
              >
                <Github size={14} />
                <span className="font-orbitron text-xs tracking-widest">ALL REPOS</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {projects.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="transition-all duration-300"
                style={{
                  width: i === active ? "24px" : "6px",
                  height: "6px",
                  background: i === active ? (isDark ? projects[i].color : projects[i].lightColor) : (isDark ? "#1a1a2e" : "#d0d8f0"),
                  borderRadius: i === active ? "3px" : "50%",
                  boxShadow: i === active && isDark ? `0 0 6px ${projects[i].color}` : "none",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
