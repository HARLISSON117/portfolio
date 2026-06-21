import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { educations, educationStatusColor, educationStatusLabel } from "@/data/education";

export default function Education() {
  return (
    <SectionWrapper
      id="formacao"
      className="bg-gray-50 dark:bg-surface-card/30"
    >
      <SectionHeader
        eyebrow="Onde aprendo"
        title="Formação"
        titleHighlight="Acadêmica"
        subtitle="Uma trajetória educacional multidisciplinar que fundamenta minha visão como desenvolvedor."
      />

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {educations.map((edu) => (
          <div key={edu.id} className="card card-hover p-6 flex flex-col gap-4">
            {/* Icon & status */}
            <div className="flex items-start justify-between">
              <span className="text-4xl" aria-hidden="true">{edu.icon}</span>
              <span className={`tag ${educationStatusColor[edu.status]}`}>
                {educationStatusLabel[edu.status]}
              </span>
            </div>

            {/* Info */}
            <div>
              <p className="text-xs text-brand-400 font-semibold uppercase tracking-wider mb-1">
                {edu.degree}
              </p>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg leading-tight mb-1">
                {edu.area}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{edu.institution}</p>
            </div>

            {/* Years */}
            <p className="text-sm text-gray-400 dark:text-gray-500 font-mono">
              {edu.startYear} — {edu.endYear ?? "Presente"}
            </p>

            {edu.description && (
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed border-t
                            border-gray-100 dark:border-surface-border pt-4">
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
