import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-10 dark:border-surface-border dark:bg-surface-card">
      <div className="section-container">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="mb-1 font-mono font-semibold text-brand-400">&lt;AH /&gt;</p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Desenvolvido por {profile.name}
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <ul className="flex items-center gap-4">
              {profile.github && (
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-sm text-gray-400 transition-colors hover:text-gray-900 dark:hover:text-white"
                  >
                    GitHub
                  </a>
                </li>
              )}
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-sm text-gray-400 transition-colors hover:text-[#0077B5]"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  aria-label="E-mail"
                  className="text-sm text-gray-400 transition-colors hover:text-brand-400"
                >
                  E-mail
                </a>
              </li>
            </ul>
          </nav>

          <p className="text-xs text-gray-400 dark:text-gray-500">
            © {year} {profile.shortName}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
