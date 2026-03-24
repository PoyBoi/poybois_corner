"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ExternalLink, GitBranch, ChevronLeft, ChevronRight } from "lucide-react";

export default function ProjectsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const scroll = (dir: "left" | "right") => {
    const next =
      dir === "right"
        ? Math.min(active + 1, projects.length - 1)
        : Math.max(active - 1, 0);
    setActive(next);

    if (scrollRef.current) {
      const card = scrollRef.current.children[next] as HTMLElement;
      card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  return (
    <div className="relative">
      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            onClick={() => setActive(i)}
            className={`glass-card relative min-w-[min(340px,90vw)] shrink-0 snap-center cursor-pointer overflow-hidden p-6 transition-all duration-300 md:min-w-[420px] ${
              active === i
                ? "border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.18)]"
                : "hover:border-white/25"
            }`}
          >
            {/* Card number accent */}
            <span
              aria-hidden
              className="pointer-events-none absolute right-4 top-3 font-mono text-5xl font-bold text-white/5 select-none"
            >
              {String(i + 1).padStart(2, "0")}
            </span>

            {/* Active indicator */}
            {active === i && (
              <motion.div
                layoutId="active-card"
                className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-cyan-400 to-purple-500"
              />
            )}

            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            {/* Tech stack chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="mt-6 flex gap-3">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="icon-link"
                  aria-label={`${project.title} repository`}
                >
                  <GitBranch size={14} />
                  Repo
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="icon-link"
                  aria-label={`${project.title} live demo`}
                >
                  <ExternalLink size={14} />
                  Live
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>

      {/* Arrow controls */}
      <div className="mt-5 flex items-center justify-center gap-4">
        <button
          aria-label="Previous project"
          disabled={active === 0}
          onClick={() => scroll("left")}
          className="rounded-xl border border-white/20 p-2 transition hover:border-cyan-400/60 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={18} />
        </button>

        {/* Dot indicators */}
        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to project ${i + 1}`}
              onClick={() => {
                setActive(i);
                const card = scrollRef.current?.children[i] as HTMLElement;
                card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                active === i ? "w-6 bg-cyan-400" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>

        <button
          aria-label="Next project"
          disabled={active === projects.length - 1}
          onClick={() => scroll("right")}
          className="rounded-xl border border-white/20 p-2 transition hover:border-cyan-400/60 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
