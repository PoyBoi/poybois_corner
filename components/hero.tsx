"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import { GitBranch, Briefcase, Mail, X } from "lucide-react";

const socialLinks = [
  { href: profile.github, label: "GitHub", icon: GitBranch },
  { href: profile.linkedin, label: "LinkedIn", icon: Briefcase },
  { href: profile.twitter, label: "X / Twitter", icon: X },
  { href: `mailto:${profile.email}`, label: "Email", icon: Mail },
];

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2">
      {/* Glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-64 w-64 translate-x-1/2 translate-y-1/2 rounded-full bg-purple-500/20 blur-3xl"
      />

      {/* Left: text */}
      <motion.div
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        <motion.p
          variants={ITEM_VARIANTS}
          className="mb-3 font-mono text-xs uppercase tracking-[0.3em] text-cyan-400"
        >
          {profile.devName} &nbsp;·&nbsp; Full-Stack Developer
        </motion.p>

        <motion.h1
          variants={ITEM_VARIANTS}
          className="text-5xl font-bold leading-tight tracking-tight md:text-7xl"
        >
          {profile.name.split(" ").map((word, i) => (
            <span key={i} className={i === 1 ? "block text-gradient" : "block"}>
              {word}
            </span>
          ))}
        </motion.h1>

        <motion.p
          variants={ITEM_VARIANTS}
          className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground"
        >
          {profile.bio}
        </motion.p>

        <motion.div variants={ITEM_VARIANTS} className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-cyan-500/20 border border-cyan-400/40 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/30 hover:shadow-[0_0_18px_rgba(34,211,238,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold transition hover:border-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Social icons row */}
        <motion.div variants={ITEM_VARIANTS} className="mt-8 flex gap-4">
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="rounded-lg border border-white/15 p-2 text-muted-foreground transition hover:border-cyan-400/50 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Right: card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="glass-card relative overflow-hidden p-7"
      >
        {/* Corner accent */}
        <div
          aria-hidden
          className="absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-cyan-400/20 to-transparent"
        />

        <p className="mb-1 font-mono text-xs uppercase tracking-widest text-cyan-400">
          {`// current_status`}
        </p>
        <p className="text-xl font-semibold leading-snug">
          Building sleek, high-impact products.
        </p>
        <p className="mt-3 text-sm text-muted-foreground">
          Open to collaborations, freelance projects, and innovative product
          work.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          {[
            { label: "Stack", value: "Next.js · Python · AI/ML" },
            { label: "Focus", value: "Web Apps · AI Tools · Open Source" },
            { label: "Status", value: "Available for work 🟢" },
          ].map((row) => (
            <div key={row.label} className="flex items-start gap-3 text-sm">
              <span className="w-16 shrink-0 font-mono text-cyan-400/70">
                {row.label}
              </span>
              <span className="text-muted-foreground">{row.value}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
