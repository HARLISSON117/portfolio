// ============================================================
// PROJETOS — edite, adicione ou remova à vontade
// status: "completed" | "in-progress" | "study"
// pdfUrl: use para projetos documentados em PDF
// ============================================================

export type ProjectStatus = "completed" | "in-progress" | "study";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  status: ProjectStatus;
  githubUrl?: string;
  demoUrl?: string;
  pdfUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Portfólio Pessoal",
    description:
      "Site profissional desenvolvido para apresentar minha trajetória, habilidades, formação e projetos na área de tecnologia.",
    image: "/projects/portfolio.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    status: "in-progress",
    githubUrl: "",
    demoUrl: "",
    featured: true,
  },
  {
    id: "banco-java",
    title: "Gerenciamento Bancário em Java",
    description:
      "Aplicação de console desenvolvida em Java para praticar Programação Orientada a Objetos, cadastro de cliente, consulta de saldo, depósito e saque.",
    image: "/projects/banco-java.svg",
    technologies: ["Java", "POO", "Console", "Lógica"],
    status: "completed",
    githubUrl: "",
    demoUrl: "",
    pdfUrl: "/projects/pdfs/gerenciamento-bancario-java.pdf",
    featured: true,
  },
  {
    id: "uml-locacao-veiculos",
    title: "Diagrama de Classes - Locação de Veículos",
    description:
      "Modelagem UML para um sistema de locação de veículos, com classes, atributos, relacionamentos e multiplicidades entre cliente, carro, modelo, marca e locação.",
    image: "/projects/uml-locacao.svg",
    technologies: ["UML", "Modelagem", "POO", "Diagrama de Classes"],
    status: "completed",
    githubUrl: "",
    demoUrl: "",
    pdfUrl: "/projects/pdfs/uml-locacao-veiculos.pdf",
  },
  {
    id: "der-biblioteca",
    title: "DER - Sistema de Biblioteca",
    description:
      "Modelagem de banco de dados para biblioteca universitária, com entidades, atributos, chaves primárias, chaves estrangeiras e relacionamentos no MySQL Workbench.",
    image: "/projects/der-biblioteca.svg",
    technologies: ["Banco de Dados", "DER", "MySQL", "Modelagem"],
    status: "completed",
    githubUrl: "",
    demoUrl: "",
    pdfUrl: "/projects/pdfs/der-biblioteca-mysql.pdf",
  },
  {
    id: "linux-ubuntu-virtualbox",
    title: "Linux Ubuntu em Máquina Virtual",
    description:
      "Prática de instalação e configuração do Ubuntu no VirtualBox, com uso de comandos básicos do terminal Linux para manipulação de diretórios e arquivos.",
    image: "/projects/linux-ubuntu.svg",
    technologies: ["Linux", "Ubuntu", "VirtualBox", "Terminal"],
    status: "completed",
    githubUrl: "",
    demoUrl: "",
    pdfUrl: "/projects/pdfs/sistemas-operacionais-linux.pdf",
  },
  {
    id: "extensao-inclusao-digital",
    title: "Projeto de Extensão - Inclusão Digital",
    description:
      "Ação extensionista voltada à inclusão digital, com oficina básica de informática, navegação na internet, criação de e-mail e noções de segurança digital.",
    image: "/projects/extensao-digital.svg",
    technologies: ["Inclusão Digital", "ADS", "Educação", "Tecnologia"],
    status: "completed",
    githubUrl: "",
    demoUrl: "",
    pdfUrl: "/projects/pdfs/projeto-extensao-inclusao-digital.pdf",
  },
];

export const projectStatusLabel: Record<ProjectStatus, string> = {
  completed: "Concluído",
  "in-progress": "Em desenvolvimento",
  study: "Estudo",
};

export const projectStatusColor: Record<ProjectStatus, string> = {
  completed: "bg-accent-500/20 text-accent-400 border-accent-500/30",
  "in-progress": "bg-brand-500/20 text-brand-400 border-brand-500/30",
  study: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
};
