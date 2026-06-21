// ============================================================
// HABILIDADES — edite, adicione ou remova à vontade
// level: "learning" | "basic" | "intermediate" | "advanced"
// ============================================================

export type SkillLevel = "learning" | "basic" | "intermediate" | "advanced";

export interface Skill {
  name: string;
  level: SkillLevel;
  icon?: string; // emoji ou nome de ícone
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Front-end",
    icon: "🎨",
    skills: [
      { name: "HTML5",       level: "intermediate" },
      { name: "CSS3",        level: "intermediate" },
      { name: "JavaScript",  level: "basic" },
      { name: "React",       level: "learning" },
      { name: "Next.js",     level: "learning" },
      { name: "Tailwind CSS",level: "basic" },
    ],
  },
  {
    category: "Back-end",
    icon: "⚙️",
    skills: [
      { name: "Python",    level: "basic" },
      { name: "Node.js",   level: "learning" },
      { name: "APIs REST", level: "learning" },
    ],
  },
  {
    category: "Banco de Dados",
    icon: "🗄️",
    skills: [
      { name: "MySQL",      level: "learning" },
      { name: "PostgreSQL", level: "learning" },
      { name: "MongoDB",    level: "learning" },
    ],
  },
  {
    category: "Ferramentas",
    icon: "🛠️",
    skills: [
      { name: "Git",     level: "basic" },
      { name: "GitHub",  level: "basic" },
      { name: "VS Code", level: "intermediate" },
      { name: "Vercel",  level: "learning" },
    ],
  },
  {
    category: "Competências",
    icon: "🧠",
    skills: [
      { name: "Organização",          level: "advanced" },
      { name: "Comunicação",          level: "intermediate" },
      { name: "Trabalho em equipe",   level: "intermediate" },
      { name: "Gestão do tempo",      level: "intermediate" },
      { name: "Aprendizado rápido",   level: "advanced" },
      { name: "Resolução de problemas", level: "intermediate" },
    ],
  },
];

export const levelLabel: Record<SkillLevel, string> = {
  learning:     "Aprendendo",
  basic:        "Básico",
  intermediate: "Intermediário",
  advanced:     "Avançado",
};

export const levelColor: Record<SkillLevel, string> = {
  learning:     "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  basic:        "bg-blue-500/20 text-blue-400 border-blue-500/30",
  intermediate: "bg-brand-500/20 text-brand-400 border-brand-500/30",
  advanced:     "bg-accent-500/20 text-accent-400 border-accent-500/30",
};
