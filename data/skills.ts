export type SkillCategory = {
  label: string;
  emoji: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    emoji: "⚡",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "HTML5",
      "CSS3",
    ],
  },
  {
    label: "Backend",
    emoji: "🔧",
    skills: [
      "Node.js",
      "Express",
      "FastAPI",
      "Python",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Auth / JWT",
    ],
  },
  {
    label: "Data & AI",
    emoji: "🧠",
    skills: [
      "OpenAI API",
      "LangChain",
      "Vercel AI SDK",
      "PostgreSQL",
      "Supabase",
      "MongoDB",
      "Prisma",
      "Redis",
    ],
  },
  {
    label: "Tools & Platforms",
    emoji: "🛠",
    skills: [
      "Git",
      "GitHub",
      "Vercel",
      "Docker",
      "Postman",
      "Figma",
      "Linux",
      "VS Code",
    ],
  },
  {
    label: "Core Strengths",
    emoji: "🎯",
    skills: [
      "System Design",
      "UI / UX Thinking",
      "Performance Optimisation",
      "Clean Architecture",
      "Problem Solving",
      "Open Source",
    ],
  },
];
