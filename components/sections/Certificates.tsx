import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { certificates } from "@/data/certificates";

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const months = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
  return `${months[parseInt(month) - 1]} de ${year}`;
}

function AwardIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <circle cx="12" cy="8" r="6"/>
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  );
}

export default function Certificates() {
  const hasCertificates = certificates.length > 0;

  return (
    <SectionWrapper id="certificados">
      <SectionHeader
        eyebrow="Aprendizado contínuo"
        title="Certificados &"
        titleHighlight="Cursos"
        subtitle="Formações complementares que reforçam minha base técnica e minha disposição para aprender sempre."
      />

      {hasCertificates ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificates.map((cert) => (
            <div key={cert.id} className="card card-hover p-5 flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-brand-500/10 text-brand-400 flex-shrink-0">
                  <AwardIcon />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-brand-400 mt-0.5">{cert.issuer}</p>
                </div>
              </div>

              {cert.description && (
                <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                  {cert.description}
                </p>
              )}

              <div className="flex flex-wrap gap-1.5">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag bg-brand-500/10 text-brand-400 border-brand-500/20 text-[10px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2 border-t
                              border-gray-100 dark:border-surface-border mt-auto">
                <span className="text-xs text-gray-400 dark:text-gray-500">
                  {formatDate(cert.date)}
                </span>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-brand-400 hover:underline"
                    aria-label={`Verificar certificado ${cert.title}`}
                  >
                    Verificar →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Estado vazio enquanto não há certificados
        <div className="text-center py-16">
          <div className="inline-flex p-4 rounded-2xl bg-brand-500/10 text-brand-400 mb-4">
            <AwardIcon />
          </div>
          <p className="text-gray-500 dark:text-gray-400 mb-2">
            Certificados sendo adicionados em breve.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Edite <code className="font-mono text-brand-400">data/certificates.ts</code> para adicionar os seus.
          </p>
        </div>
      )}
    </SectionWrapper>
  );
}
