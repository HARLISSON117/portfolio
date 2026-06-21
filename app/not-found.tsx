import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4 text-gray-900 dark:bg-surface-dark dark:text-gray-100">
      <section className="max-w-md text-center">
        <p className="mb-3 font-mono text-sm text-brand-400">404</p>
        <h1 className="mb-4 text-3xl font-bold">Página não encontrada</h1>
        <p className="mb-8 text-gray-500 dark:text-gray-400">
          O endereço acessado não existe ou foi movido. Volte para a página inicial do portfólio.
        </p>
        <Link href="/" className="btn-primary">
          Voltar ao início
        </Link>
      </section>
    </main>
  );
}
