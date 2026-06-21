// ============================================================
// FORMAÇÃO ACADÊMICA — edite, adicione ou remova
// status: "ongoing" | "completed" | "paused"
// ============================================================

export type EducationStatus = "ongoing" | "completed" | "paused";

export interface Education {
  id: string;
  degree: string;
  institution: string;
  area: string;
  status: EducationStatus;
  startYear: number;
  endYear?: number;
  description?: string;
  icon: string;
}

export const educations: Education[] = [
  {
    id: "ads",
    degree: "Tecnólogo",
    institution: "Faculdade Anhanguera",
    area: "Análise e Desenvolvimento de Sistemas",
    status: "ongoing",
    startYear: 2025,
    endYear: 2027,
    description:
      "Curso superior em andamento, com foco em desenvolvimento de software, lógica de programação, banco de dados e desenvolvimento web.",
    icon: "💻",
  },
  {
    id: "civil",
    degree: "Bacharelado",
    institution: "Universidade Estadual da Região Tocantina do Maranhão — UEMASUL",
    area: "Engenharia Civil",
    status: "ongoing",
    startYear: 2022,
    endYear: 2027,
    description:
      "Formação que contribui para raciocínio lógico, planejamento, organização e resolução de problemas.",
    icon: "🏗️",
  },
  {
    id: "eletro",
    degree: "Técnico",
    institution: "Instituto Federal do Maranhão — IFMA, Campus Açailândia",
    area: "Eletromecânica",
    status: "completed",
    startYear: 2018,
    endYear: 2021,
    description:
      "Formação técnica em sistemas elétricos e mecânicos, manutenção de equipamentos e fundamentos industriais.",
    icon: "⚡",
  },
];

export const educationStatusLabel: Record<EducationStatus, string> = {
  ongoing: "Em andamento",
  completed: "Concluído",
  paused: "Pausado",
};

export const educationStatusColor: Record<EducationStatus, string> = {
  ongoing: "bg-brand-500/20 text-brand-400 border-brand-500/30",
  completed: "bg-accent-500/20 text-accent-400 border-accent-500/30",
  paused: "bg-gray-500/20 text-gray-400 border-gray-500/30",
};
