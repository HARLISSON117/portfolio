// ============================================================
// CERTIFICADOS — edite, adicione ou remova à vontade
// ============================================================

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;        // ex: "2024-03"
  credentialUrl?: string;  // link para verificar o certificado
  description?: string;
  tags: string[];
  featured?: boolean;
}

export const certificates: Certificate[] = [
  {
    id: "trilhas-backend",
    title: "Programa Trilhas Inova Maranhão — Back-End",
    issuer: "Trilhas Inova Maranhão",
    date: "2025-08",
    credentialUrl: "",          // 🔧 Adicione o link do certificado se houver
    description:
      "Formação complementar em back-end, lógica de programação e fundamentos para construção de aplicações.",
    tags: ["Back-end", "Programação", "APIs"],
    featured: true,
  },
  // 🔧 Adicione seus certificados reais abaixo:
  // {
  //   id: "html-css",
  //   title: "HTML e CSS para Iniciantes",
  //   issuer: "Nome da Plataforma",
  //   date: "2024-06",
  //   credentialUrl: "https://...",
  //   tags: ["HTML", "CSS", "Front-end"],
  // },
  // {
  //   id: "javascript",
  //   title: "JavaScript Completo",
  //   issuer: "Nome da Plataforma",
  //   date: "2024-08",
  //   credentialUrl: "https://...",
  //   tags: ["JavaScript", "Front-end"],
  // },
  // {
  //   id: "python-basico",
  //   title: "Python para Iniciantes",
  //   issuer: "Nome da Plataforma",
  //   date: "2024-10",
  //   credentialUrl: "https://...",
  //   tags: ["Python", "Back-end"],
  // },
  // {
  //   id: "git-github",
  //   title: "Git e GitHub: Controle de Versão",
  //   issuer: "Nome da Plataforma",
  //   date: "2024-12",
  //   credentialUrl: "https://...",
  //   tags: ["Git", "GitHub", "Ferramentas"],
  // },
];
