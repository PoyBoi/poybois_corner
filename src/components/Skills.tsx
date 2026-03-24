"use client";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

const skillGroups = [
  {
    id: "ai-ml",
    label: "AI & Machine Learning",
    icon: "🤖",
    color: "#00f5ff",
    lightColor: "#0055ff",
    skills: [
      { name: "Python", level: 95 },
      { name: "LangChain", level: 90 },
      { name: "LLaMA / LLaMA-CPP", level: 88 },
      { name: "NLP & Transformers", level: 82 },
      { name: "TensorFlow / Keras", level: 75 },
      { name: "Scikit-learn", level: 80 },
    ],
  },
  {
    id: "cv",
    label: "Computer Vision",
    icon: "👁️",
    color: "#ff0080",
    lightColor: "#cc0066",
    skills: [
      { name: "OpenCV", level: 88 },
      { name: "dlib (Face Detection)", level: 85 },
      { name: "Stable Diffusion", level: 80 },
      { name: "PIL / Pillow", level: 90 },
      { name: "Image Processing", level: 85 },
      { name: "Background Removal (remBG)", level: 78 },
    ],
  },
  {
    id: "dev",
    label: "Development & Tools",
    icon: "⚙️",
    color: "#39ff14",
    lightColor: "#007700",
    skills: [
      { name: "Gradio (GUI)", level: 85 },
      { name: "FastAPI", level: 75 },
      { name: "HTML / CSS / JS", level: 80 },
      { name: "Jupyter Notebook", level: 92 },
      { name: "Git & GitHub", level: 88 },
      { name: "VS Code", level: 95 },
    ],
  },
  {
    id: "llm",
    label: "LLM Ecosystem",
    icon: "🧬",
    color: "#bf5af2",
    lightColor: "#7700cc",
    skills: [
      { name: "Prompt Engineering", level: 90 },
      { name: "RAG Pipelines", level: 82 },
      { name: "Fine-tuning LLMs", level: 75 },
      { name: "LlamaIndex", level: 78 },
      { name: "Vector Databases", level: 72 },
      { name: "Agent Frameworks", level: 80 },
    ],
  },
];

function SkillBar({ name, level, color, isDark }: { name: string; level: number; color: string; isDark: boolean }) {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span
          className="font-rajdhani font-semibold text-sm"
          style={{ color: isDark ? "#e0e0ff" : "#0a0a2e" }}
        >
          {name}
        </span>
        <span className="font-mono text-xs" style={{ color }}>
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: isDark ? "#1a1a2e" : "#e0e8ff" }}
      >
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${level}%` : "0%",
            background: `linear-gradient(90deg, ${color}, ${color}88)`,
            boxShadow: isDark ? `0 0 8px ${color}60` : "none",
          }}
        />
      </div>
    </div>
  );
}

function SkillGroup({
  group,
  isDark,
  isOpen,
  onToggle,
}: {
  group: typeof skillGroups[0];
  isDark: boolean;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const accent = isDark ? group.color : group.lightColor;

  return (
    <div
      className="border transition-all duration-300 overflow-hidden"
      style={{
        borderColor: isOpen ? `${accent}50` : isDark ? "#1a1a2e" : "#d0d8f0",
        background: isDark ? "#0d0d1a" : "#ffffff",
        boxShadow: isOpen && isDark ? `0 0 20px ${accent}10` : "none",
      }}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left group"
      >
        <div className="flex items-center gap-3">
          <span className="text-xl">{group.icon}</span>
          <div>
            <h3
              className="font-orbitron font-bold text-sm tracking-wide"
              style={{ color: isOpen ? accent : isDark ? "#e0e0ff" : "#0a0a2e" }}
            >
              {group.label}
            </h3>
            <p className="font-mono text-xs mt-0.5" style={{ color: isDark ? "#4a4a6a" : "#8090b0" }}>
              {group.skills.length} skills
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* Skill count dots */}
          <div className="hidden sm:flex gap-1">
            {group.skills.map((s, i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full transition-all duration-300"
                style={{ background: isOpen ? accent : isDark ? "#2a2a3e" : "#c0cce0" }}
              />
            ))}
          </div>
          <ChevronDown
            size={14}
            className="transition-transform duration-300"
            style={{
              color: isOpen ? accent : isDark ? "#6b6b9a" : "#8090b0",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </div>
      </button>

      {/* Content */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: isOpen ? "400px" : "0px" }}
      >
        <div
          className="px-5 pb-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 border-t"
          style={{ borderColor: isDark ? "#1a1a2e" : "#e8eeff" }}
        >
          <div className="sm:col-span-2 h-3" />
          {group.skills.map(skill => (
            <SkillBar
              key={skill.name}
              name={skill.name}
              level={skill.level}
              color={accent}
              isDark={isDark}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Skills({ isDark }: { isDark: boolean }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [openGroup, setOpenGroup] = useState<string | null>("ai-ml");

  const toggleGroup = (id: string) => {
    setOpenGroup(prev => (prev === id ? null : id));
  };

  const accent = isDark ? "#00f5ff" : "#0055ff";

  return (
    <section
      id="skills"
      ref={ref}
      className={`py-28 relative ${isDark ? "bg-[#0a0a12]" : "bg-white"}`}
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${isDark ? "#00f5ff" : "#0055ff"}, transparent)` }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        {/* Header */}
        <div
          className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="font-mono text-xs tracking-widest mb-2" style={{ color: isDark ? "#6b6b9a" : "#6070a0" }}>
            // 03. SKILL_SET
          </p>
          <h2
            className="font-orbitron font-bold text-3xl md:text-4xl section-heading"
            style={{ color: isDark ? "#e0e0ff" : "#0a0a2e" }}
          >
            ARSENAL
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Skill dropdowns */}
          <div
            className={`lg:col-span-2 space-y-4 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {skillGroups.map(group => (
              <SkillGroup
                key={group.id}
                group={group}
                isDark={isDark}
                isOpen={openGroup === group.id}
                onToggle={() => toggleGroup(group.id)}
              />
            ))}
          </div>

          {/* Right side — tech matrix + about */}
          <div
            className={`transition-all duration-700 delay-400 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            {/* Quick tech tags */}
            <div
              className="p-6 border mb-6"
              style={{
                background: isDark ? "#0d0d1a" : "#ffffff",
                borderColor: isDark ? "#1a1a2e" : "#d0d8f0",
              }}
            >
              <h4
                className="font-orbitron font-bold text-xs tracking-widest mb-4"
                style={{ color: isDark ? "#6b6b9a" : "#6070a0" }}
              >
                QUICK TECH MATRIX
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python", "LangChain", "LLaMA", "LLaMA-CPP",
                  "OpenCV", "dlib", "NLP", "Gradio",
                  "Stable Diffusion", "FastAPI", "Git",
                  "Jupyter", "PIL", "TensorFlow", "RAG",
                ].map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-1 font-mono text-xs border transition-all duration-200 hover:scale-105"
                    style={{
                      borderColor: isDark ? "#1a1a2e" : "#d0d8f0",
                      color: isDark ? "#9090b8" : "#4a5080",
                      background: isDark ? "#050508" : "#f4f6ff",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = accent;
                      (e.currentTarget as HTMLElement).style.color = accent;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = isDark ? "#1a1a2e" : "#d0d8f0";
                      (e.currentTarget as HTMLElement).style.color = isDark ? "#9090b8" : "#4a5080";
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Currently learning */}
            <div
              className="p-6 border"
              style={{
                background: isDark ? "#0d0d1a" : "#ffffff",
                borderColor: `${isDark ? "#ff0080" : "#cc0066"}30`,
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: isDark ? "#ff0080" : "#cc0066", boxShadow: isDark ? "0 0 8px #ff0080" : "none" }}
                />
                <h4
                  className="font-orbitron font-bold text-xs tracking-widest"
                  style={{ color: isDark ? "#ff0080" : "#cc0066" }}
                >
                  CURRENTLY LOADING
                </h4>
              </div>
              <div className="space-y-3">
                {[
                  "Advanced RAG Architectures",
                  "Multi-Agent LLM Systems",
                  "Real-time AI Inference",
                ].map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <span className="font-mono text-xs" style={{ color: isDark ? "#ff0080" : "#cc0066" }}>→</span>
                    <span className="font-rajdhani text-sm" style={{ color: isDark ? "#9090b8" : "#4a5080" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: `linear-gradient(90deg, transparent, ${isDark ? "#ff0080" : "#cc0066"}, transparent)` }}
      />
    </section>
  );
}
