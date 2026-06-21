import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { experiences, experienceTypeLabel } from "@/data/experience";

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const months = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
  return `${months[parseInt(month) - 1]} ${year}`;
}

export default function Experience() {
  return (
    <SectionWrapper id="experiencia">
      <SectionHeader
        eyebrow="Trajetória profissional"
        title="Experiência"
        titleHighlight="Profissional"
      />

      <div className="relative max-w-3xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b
                        from-brand-500 via-brand-500/30 to-transparent"
             aria-hidden="true"/>

        <div className="space-y-8 pl-16">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              {/* Dot */}
              <div className="absolute -left-[42px] top-6 w-4 h-4 rounded-full
                              bg-brand-500 border-4 border-white dark:border-surface-dark
                              shadow-lg shadow-brand-500/30"
                   aria-hidden="true"/>

              <div className="card p-6 card-hover">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                      {exp.role}
                    </h3>
                    <p className="text-brand-400 font-medium">{exp.company}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(exp.startDate)} —{" "}
                      {exp.endDate ? formatDate(exp.endDate) : "Atual"}
                    </p>
                    <span className="tag mt-1 bg-brand-500/10 text-brand-400 border-brand-500/20 text-[11px]">
                      {experienceTypeLabel[exp.type]}
                    </span>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <ul className="space-y-1.5">
                  {exp.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <span className="text-brand-400 mt-0.5 flex-shrink-0" aria-hidden="true">▸</span>
                      {h}
                    </li>
                  ))}
                </ul>

                {exp.techStack && exp.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-gray-100 dark:border-surface-border">
                    {exp.techStack.map((t) => (
                      <span key={t} className="tag bg-brand-500/10 text-brand-400 border-brand-500/20 text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Future placeholder */}
          <div className="relative opacity-50">
            <div className="absolute -left-[42px] top-6 w-4 h-4 rounded-full
                            border-2 border-dashed border-brand-500/50
                            bg-white dark:bg-surface-dark"
                 aria-hidden="true"/>
            <div className="card p-6 border-dashed border-gray-300 dark:border-surface-border">
              <p className="text-sm text-gray-400 dark:text-gray-500 text-center py-2">
                🚀 Próxima experiência na área de tecnologia em breve...
              </p>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
