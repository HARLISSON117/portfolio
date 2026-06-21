import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { skillCategories, levelLabel, levelColor } from "@/data/skills";

export default function Skills() {
  return (
    <SectionWrapper id="habilidades">
      <SectionHeader
        eyebrow="O que sei fazer"
        title="Habilidades &"
        titleHighlight="Tecnologias"
        subtitle="Sou honesto sobre meu nível em cada tecnologia. Os badges mostram onde estou agora, não onde quero chegar."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((cat) => (
          <div key={cat.category} className="card p-6 card-hover">
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl" aria-hidden="true">{cat.icon}</span>
              <h3 className="font-bold text-gray-900 dark:text-white">{cat.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`tag ${levelColor[skill.level]}`}
                  title={levelLabel[skill.level]}
                >
                  {skill.name}
                  <span className="ml-1.5 opacity-60 text-[10px]">
                    {levelLabel[skill.level]}
                  </span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-yellow-400/70 inline-block"/>
          Aprendendo
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-blue-400/70 inline-block"/>
          Básico
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-brand-400/70 inline-block"/>
          Intermediário
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-accent-400/70 inline-block"/>
          Avançado
        </span>
      </div>
    </SectionWrapper>
  );
}
