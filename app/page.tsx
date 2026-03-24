import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ProjectsCarousel from "@/components/projects-carousel";
import SkillsDropdowns from "@/components/skills-dropdowns";
import ContactCard from "@/components/contact-card";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Fixed background grid */}
      <div aria-hidden className="cyber-grid fixed inset-0 -z-10" />

      <Navbar />

      {/* Hero */}
      <section id="home" className="pt-16">
        <Hero />
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-6xl px-4 py-24">
        <h2 className="section-title">Featured Projects</h2>
        <ProjectsCarousel />
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-6xl px-4 py-24">
        <h2 className="section-title">Skillsets</h2>
        <SkillsDropdowns />
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-28">
        <h2 className="section-title">Get in Touch</h2>
        <ContactCard />
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-xs text-muted-foreground">
        <p>
          Built by{" "}
          <a
            href="https://github.com/PoyBoi"
            className="text-cyan-400 hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            PoyBoi
          </a>{" "}
          · Parv Sharma
        </p>
      </footer>
    </main>
  );
}
