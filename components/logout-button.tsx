'use client'

import { useRouter } from 'next/navigation'
import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { logout } from '@/lib/auth'

export function LogoutButton() {
  const router = useRouter()

  async function handleLogout() {
    await logout()
    sessionStorage.removeItem('admin_logged_in')
    router.replace('/admin')
  }

  return (
    <Button variant="outline" size="icon" onClick={handleLogout} title="Sair">
      <LogOut className="h-4 w-4" />
    </Button>
  )
}
