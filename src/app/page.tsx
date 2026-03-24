"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme");
    if (saved === "light") setIsDark(false);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("theme", isDark ? "dark" : "light");
    if (isDark) {
      document.body.classList.remove("light-mode");
    } else {
      document.body.classList.add("light-mode");
    }
  }, [isDark, mounted]);

  if (!mounted) return null;

  return (
    <main
      className="noise"
      style={{
        background: isDark ? "#050508" : "#f0f4ff",
        minHeight: "100vh",
      }}
    >
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Hero isDark={isDark} />
      <About isDark={isDark} />
      <Projects isDark={isDark} />
      <Skills isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer isDark={isDark} />
    </main>
  );
}
