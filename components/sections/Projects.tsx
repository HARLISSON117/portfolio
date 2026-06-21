import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeader from "@/components/ui/SectionHeader";
import { profile } from "@/data/profile";
import { projects, projectStatusColor, projectStatusLabel } from "@/data/projects";

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GithubSmIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Projects() {
  return (
    <SectionWrapper id="projetos" className="bg-gray-50 dark:bg-surface-card/30">
      <SectionHeader
        eyebrow="O que construí"
        title="Meus"
        titleHighlight="Projetos"
        subtitle="Projetos práticos e estudos que mostram minha evolução como desenvolvedor. Os cards são fáceis de editar no arquivo data/projects.ts."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => {
          const hasGithub = Boolean(project.githubUrl);
          const hasDemo = Boolean(project.demoUrl);
          const hasPdf = Boolean(project.pdfUrl);

          return (
            <article key={project.id} className="card card-hover group flex flex-col overflow-hidden">
              <div className="relative h-44 flex-shrink-0 overflow-hidden bg-gradient-to-br from-brand-900/80 to-surface-dark">
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-brand-600/30 to-accent-600/20">
                  <span className="text-4xl opacity-30" aria-hidden="true">💻</span>
                </div>
                <Image
                  src={project.image}
                  alt={`Imagem ilustrativa do projeto ${project.title}`}
                  fill
                  className="object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
                />
                <span className={`tag absolute right-3 top-3 ${projectStatusColor[project.status]}`}>
                  {projectStatusLabel[project.status]}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 font-bold text-gray-900 dark:text-white">{project.title}</h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag border-brand-500/20 bg-brand-500/10 text-[11px] text-brand-400">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 border-t border-gray-100 pt-2 dark:border-surface-border">
                  {hasGithub && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver código do projeto ${project.title} no GitHub`}
                      className="flex-1 justify-center text-xs btn-ghost"
                    >
                      <GithubSmIcon />
                      Código
                    </a>
                  )}
                  {hasDemo && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver demonstração do projeto ${project.title}`}
                      className="flex-1 justify-center text-xs btn-ghost"
                    >
                      <ExternalLinkIcon />
                      Demo
                    </a>
                  )}
                  {hasPdf && (
                    <a
                      href={project.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir PDF do projeto ${project.title}`}
                      className="flex-1 justify-center text-xs btn-ghost"
                    >
                      <ExternalLinkIcon />
                      Ver PDF
                    </a>
                  )}
                  {!hasGithub && !hasDemo && !hasPdf && (
                    <span className="px-2 py-1 text-xs text-gray-400 dark:text-gray-500">Links em breve</span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {profile.github && (
        <p className="mt-10 text-center text-sm text-gray-400 dark:text-gray-500">
          Mais projetos em desenvolvimento. {" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:underline">
            Ver GitHub →
          </a>
        </p>
      )}
    </SectionWrapper>
  );
}
