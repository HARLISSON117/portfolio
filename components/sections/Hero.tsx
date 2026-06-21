import Image from "next/image";
import { profile } from "@/data/profile";

// Ícones sociais inline para zero dependências
function GithubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
               0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
               -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
               .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
               -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1
               2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028
               2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747
               0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  );
}
function LinkedinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136
               1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85
               3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065
               2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771
               C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227
               24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  );
}
function WhatsappIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15
               -.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475
               -.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521
               .149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207
               -.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372
               -.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2
               5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085
               1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.854L.057 23.857
               a.5.5 0 0 0 .609.609l6.007-1.476A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373
               12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.012-1.371l-.36-.214-3.722.977
               .977-3.603-.235-.371A9.818 9.818 0 1 1 12 21.818z"/>
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden
                 bg-white dark:bg-surface-dark"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl"/>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"/>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-[0.03] dark:opacity-[0.05]"/>
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="order-2 opacity-0 animate-fade-up lg:order-1">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                            bg-brand-500/10 border border-brand-500/20 mb-6">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse-slow"/>
              <span className="text-xs font-medium text-brand-400 tracking-wide">
                Disponível para oportunidades
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight
                           text-gray-900 dark:text-white mb-4">
              Olá, sou{" "}
              <span className="gradient-text block">Antonio Harlisson</span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-8 font-light leading-relaxed">
              Desenvolvedor em formação · Estudante de ADS ·{" "}
              <span className="text-brand-400 font-medium">Futuro Full Stack Developer</span>
            </p>

            <p className="text-gray-600 dark:text-gray-300 mb-10 leading-relaxed max-w-lg">
              Construindo minha trajetória no desenvolvimento de software com dedicação,
              curiosidade e projetos práticos. Cada linha de código é um passo rumo ao
              desenvolvedor que quero ser.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <a href="#projetos" className="btn-primary">
                Ver projetos
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#contato" className="btn-secondary">
                Entrar em contato
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Currículo
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400 mr-1">Conecte-se:</span>
              {profile.github && (
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub de Antonio Harlisson"
                  className="p-2.5 rounded-xl text-gray-500 dark:text-gray-400
                             hover:text-gray-900 dark:hover:text-white
                             hover:bg-gray-100 dark:hover:bg-white/10
                             transition-all duration-200"
                >
                  <GithubIcon />
                </a>
              )}
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Antonio Harlisson"
                className="p-2.5 rounded-xl text-gray-500 dark:text-gray-400
                           hover:text-[#0077B5]
                           hover:bg-gray-100 dark:hover:bg-white/10
                           transition-all duration-200"
              >
                <LinkedinIcon />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Enviar e-mail para Antonio Harlisson"
                className="p-2.5 rounded-xl text-gray-500 dark:text-gray-400
                           hover:text-brand-400
                           hover:bg-gray-100 dark:hover:bg-white/10
                           transition-all duration-200"
              >
                <MailIcon />
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp de Antonio Harlisson"
                className="p-2.5 rounded-xl text-gray-500 dark:text-gray-400
                           hover:text-[#25D366]
                           hover:bg-gray-100 dark:hover:bg-white/10
                           transition-all duration-200"
              >
                <WhatsappIcon />
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br
                              from-brand-500 to-accent-500 blur-2xl opacity-30 scale-110"
                   aria-hidden="true"/>
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 rounded-full
                              border-4 border-brand-500/30 overflow-hidden
                              bg-gradient-to-br from-brand-900 to-surface-dark">
                <div className="absolute inset-0 z-0 flex items-center justify-center text-5xl font-bold text-brand-300/50 select-none">
                  AH
                </div>
                <Image
                  src={profile.avatarUrl}
                  alt={`Foto de ${profile.name}`}
                  fill
                  className="z-10 object-cover"
                  priority
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -bottom-3 -right-3 bg-white dark:bg-surface-card
                              border border-gray-200 dark:border-surface-border
                              rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2">
                <span className="text-lg" aria-hidden="true">💻</span>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                  Dev em formação
                </span>
              </div>
              <div className="absolute -top-3 -left-3 bg-white dark:bg-surface-card
                              border border-gray-200 dark:border-surface-border
                              rounded-2xl px-3 py-2 shadow-lg flex items-center gap-2">
                <span className="text-lg" aria-hidden="true">🎓</span>
                <span className="text-xs font-semibold text-gray-700 dark:text-gray-200">
                  ADS
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex
                        flex-col items-center gap-2 text-gray-400 animate-bounce"
             aria-hidden="true">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>
    </section>
  );
}
