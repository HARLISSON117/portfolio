// ============================================================
// EXPERIÊNCIA PROFISSIONAL — edite, adicione ou remova
// type: "work" | "freelance" | "academic" | "personal"
// ============================================================

export type ExperienceType = "work" | "freelance" | "academic" | "personal";

export interface Experience {
  id: string;
  role: string;
  company: string;
  type: ExperienceType;
  startDate: string;
  endDate?: string;
  description: string;
  highlights: string[];
  techStack?: string[];
}

export const experiences: Experience[] = [
  {
    id: "della-volpe",
    role: "Auxiliar de Descarga",
    company: "Della Volpe",
    type: "work",
    startDate: "2026-01",
    description:
      "Atuação em rotina operacional de carga e descarga, movimentação de mercadorias e apoio à organização logística.",
    highlights: [
      "Responsabilidade no manuseio e organização de mercadorias",
      "Trabalho em equipe em ambiente dinâmico",
      "Cumprimento de prazos e atenção aos processos",
      "Disciplina, agilidade e organização na rotina operacional",
    ],
  },
  {
    id: "tutoria-matematica-2024",
    role: "Tutor de Matemática",
    company: "Cursinho Popular — PROEXAE/UEMASUL",
    type: "academic",
    startDate: "2024-04",
    endDate: "2024-11",
    description:
      "Apoio à aprendizagem de estudantes por meio de explicações, resolução de dúvidas e acompanhamento de atividades.",
    highlights: [
      "Comunicação clara para explicar conteúdos complexos",
      "Organização de estudos e acompanhamento de atividades",
      "Desenvolvimento de didática, paciência e responsabilidade",
    ],
  },
  {
    id: "trilhas-backend",
    role: "Participante — Programa Back-End",
    company: "Trilhas Inova Maranhão",
    type: "academic",
    startDate: "2025-04",
    endDate: "2025-08",
    description:
      "Formação complementar voltada para desenvolvimento back-end e fundamentos de programação.",
    highlights: [
      "Estudos em lógica de programação e fundamentos de back-end",
      "Contato com práticas de desenvolvimento de software",
      "Construção de base técnica para projetos futuros",
    ],
    techStack: ["Back-end", "Programação", "APIs"],
  },
];

export const experienceTypeLabel: Record<ExperienceType, string> = {
  work: "Emprego",
  freelance: "Freelance",
  academic: "Formação/Projeto",
  personal: "Projeto Pessoal",
};
