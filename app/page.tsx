import { Home } from 'lucide-react'
import { GiftList } from '@/components/gift-list'
import { getGiftItems } from '@/lib/actions'

export const dynamic = 'force-dynamic'

export default async function HomePage() {
  const items = await getGiftItems()

  return (
    <div className="min-h-screen">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
              <Home className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Casa Nova</h1>
              <p className="text-sm text-muted-foreground">Lista de Presentes</p>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto mb-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-3 text-balance">
            Bem-vindo a nossa Lista de Presentes!
          </h2>
          <p className="text-muted-foreground text-lg text-pretty">
            Escolha um item para nos presentear. Quando voce reservar, os outros convidados
            saberao que voce ja vai dar esse presente.
          </p>
        </div>

        <GiftList items={items} />
      </main>

      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          Feito com carinho para nossa nova casa
        </div>
      </footer>
    </div>
  )
}
