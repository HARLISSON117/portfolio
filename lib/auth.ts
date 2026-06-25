'use server'

import { cookies } from 'next/headers'

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin'
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'casanova123'
const SESSION_COOKIE = 'admin_session'

export async function login(username: string, password: string): Promise<{ success: boolean; error?: string }> {
  console.log('[v0] Login attempt - username:', username)
  console.log('[v0] Expected username:', ADMIN_USERNAME)
  console.log('[v0] Password match:', password === ADMIN_PASSWORD)
  
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const cookieStore = await cookies()
    const sessionToken = Buffer.from(`${username}:${Date.now()}`).toString('base64')
    
    console.log('[v0] Setting cookie with token:', sessionToken)
    
    cookieStore.set(SESSION_COOKIE, sessionToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })
    
    console.log('[v0] Cookie set successfully')
    return { success: true }
  }
  
  console.log('[v0] Login failed - credentials do not match')
  return { success: false, error: 'Usuario ou senha incorretos' }
}

export async function logout(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete(SESSION_COOKIE)
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies()
  const session = cookieStore.get(SESSION_COOKIE)
  console.log('[v0] Checking authentication - session:', session?.value ? 'exists' : 'not found')
  return !!session?.value
}

// Verificação de credenciais sem cookies (para ambientes que não suportam cookies)
export async function verifyCredentials(username: string, password: string): Promise<boolean> {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD
}
