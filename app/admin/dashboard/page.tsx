'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Home, ArrowLeft, Package, Check, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AdminList } from '@/components/admin-list'
import { AdminItemForm } from '@/components/admin-item-form'
import { LogoutButton } from '@/components/logout-button'
import { getGiftItems } from '@/lib/actions'
import type { GiftItem } from '@/lib/types'

export default function AdminDashboardPage() {
  const router = useRouter()
  const [isAuthorized, setIsAuthorized] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [items, setItems] = useState<GiftItem[]>([])

  useEffect(() => {
    const checkAuth = async () => {
      const isLoggedIn = sessionStorage.getItem('admin_logged_in')
      
      if (isLoggedIn !== 'true') {
        router.replace('/admin')
        return
      }
      
      setIsAuthorized(true)
      
      // Carregar itens
      const fetchedItems = await getGiftItems()
      setItems(fetchedItems)
      setIsLoading(false)
    }
    
    checkAuth()
  }, [router])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-muted-foreground">Carregando...</p>
        </div>
      </div>
    )
  }

  if (!isAuthorized) {
    return null
  }

  const totalItems = items.length
  const reservedItems = items.filter(i => i.is_reserved).length
  const availableItems = totalItems - reservedItems

  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b bg-card">
        <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <Button variant="ghost" size="icon" className="shrink-0" asChild>
                <Link href="/">
                  <ArrowLeft className="h-5 w-5" />
                </Link>
              </Button>
              <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                <Home className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <h1 className="text-base sm:text-xl font-bold text-foreground truncate">Administrar Lista</h1>
                <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">Gerencie seus itens</p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <AdminItemForm />
              <LogoutButton />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-8">
          <Card className="p-2 sm:p-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-2 sm:p-6 sm:pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Total</CardTitle>
              <Package className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground hidden sm:block" />
            </CardHeader>
            <CardContent className="p-2 pt-0 sm:p-6 sm:pt-0">
              <div className="text-lg sm:text-2xl font-bold">{totalItems}</div>
            </CardContent>
          </Card>
          <Card className="p-2 sm:p-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-2 sm:p-6 sm:pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Reservados</CardTitle>
              <Check className="h-3 w-3 sm:h-4 sm:w-4 text-primary hidden sm:block" />
            </CardHeader>
            <CardContent className="p-2 pt-0 sm:p-6 sm:pt-0">
              <div className="text-lg sm:text-2xl font-bold text-primary">{reservedItems}</div>
            </CardContent>
          </Card>
          <Card className="p-2 sm:p-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 p-2 sm:p-6 sm:pb-2">
              <CardTitle className="text-xs sm:text-sm font-medium">Disponiveis</CardTitle>
              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground hidden sm:block" />
            </CardHeader>
            <CardContent className="p-2 pt-0 sm:p-6 sm:pt-0">
              <div className="text-lg sm:text-2xl font-bold">{availableItems}</div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-card rounded-lg p-3 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Todos os Itens</h2>
          <AdminList items={items} />
        </div>
      </main>
    </div>
  )
}
