"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { ChevronDown } from "lucide-react";

export default function SkillsDropdowns() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {skillCategories.map((cat, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={cat.label} className="glass-card overflow-hidden">
            <button
              aria-expanded={isOpen}
              aria-controls={`skill-panel-${i}`}
              id={`skill-btn-${i}`}
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-400"
            >
              <span className="flex items-center gap-3 font-semibold">
                <span aria-hidden>{cat.emoji}</span>
                {cat.label}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                aria-hidden
              >
                <ChevronDown size={18} className="text-muted-foreground" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`skill-panel-${i}`}
                  role="region"
                  aria-labelledby={`skill-btn-${i}`}
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-wrap gap-2 border-t border-white/10 px-5 py-4">
                    {cat.skills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
