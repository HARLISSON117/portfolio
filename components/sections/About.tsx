import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";

const stats = [
  { label: "Formações simultâneas", value: "3", emoji: "🎓" },
  { label: "Área de interesse",     value: "Full Stack", emoji: "💻" },
  { label: "Localização",           value: "MA, Brasil", emoji: "📍" },
  { label: "Status",                value: "Disponível", emoji: "🟢" },
];

export default function About() {
  return (
    <SectionWrapper
      id="sobre"
      className="bg-gray-50 dark:bg-surface-card/50"
    >
      <SectionHeader
        eyebrow="Quem sou eu"
        title="Sobre"
        titleHighlight="mim"
      />

      <div className="grid lg:grid-cols-5 gap-12 items-start">
        {/* Text */}
        <div className="lg:col-span-3 space-y-5">
          {profile.bio.trim().split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg"
            >
              {paragraph.trim()}
            </p>
          ))}

          <div className="flex flex-wrap gap-3 pt-2">
            <a href="#projetos" className="btn-primary">
              Ver meus projetos
            </a>
            <a href="#contato" className="btn-secondary">
              Fale comigo
            </a>
          </div>
        </div>

        {/* Stats / highlights */}
        <div className="lg:col-span-2 space-y-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="card p-4 flex items-center gap-4"
            >
              <span className="text-2xl" aria-hidden="true">{stat.emoji}</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{stat.value}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
              </div>
            </div>
          ))}

          {/* Multi-area highlight */}
          <div className="card p-5 bg-gradient-to-br from-brand-500/10 to-accent-500/10
                          border-brand-500/20 dark:border-brand-500/20">
            <p className="text-sm text-brand-400 font-semibold mb-2">Diferencial</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              A combinação de Tecnologia + Engenharia Civil + Eletromecânica traz
              um olhar multidisciplinar para resolução de problemas complexos.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
