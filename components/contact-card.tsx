import { profile } from "@/data/profile";
import { GitBranch, Briefcase, Mail, X } from "lucide-react";

const contacts = [
  {
    label: "GitHub",
    href: profile.github,
    icon: GitBranch,
    description: "See my code & projects",
  },
  {
    label: "LinkedIn",
    href: profile.linkedin,
    icon: Briefcase,
    description: "Connect professionally",
  },
  {
    label: "X / Twitter",
    href: profile.twitter,
    icon: X,
    description: "@poyboi_",
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    description: profile.email,
  },
];

export default function ContactCard() {
  return (
    <div className="glass-card overflow-hidden">
      {/* Top gradient strip */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />

      <div className="p-7">
        <p className="text-lg font-semibold">Let&rsquo;s build something great.</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Open to freelance work, collaborations, and interesting conversations.
          Reach out through any of the channels below.
        </p>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {contacts.map(({ label, href, icon: Icon, description }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              className="flex items-center gap-4 rounded-xl border border-white/15 px-4 py-3 transition hover:border-cyan-400/50 hover:bg-cyan-400/5 hover:shadow-[0_0_14px_rgba(34,211,238,0.15)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/30 bg-cyan-400/10 text-cyan-400">
                <Icon size={16} />
              </span>
              <div>
                <p className="text-sm font-semibold">{label}</p>
                <p className="text-xs text-muted-foreground">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
