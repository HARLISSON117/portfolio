'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { LoginForm } from '@/components/login-form'

export default function AdminLoginPage() {
  const router = useRouter()
  const [showLogin, setShowLogin] = useState(false)

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem('admin_logged_in')
    
    if (isLoggedIn === 'true') {
      router.replace('/admin/dashboard')
    } else {
      setShowLogin(true)
    }
  }, [router])

  if (!showLogin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30">
        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
      </div>
    )
  }

  return <LoginForm />
}
