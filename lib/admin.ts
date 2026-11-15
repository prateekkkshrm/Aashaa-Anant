import { cookies } from 'next/headers'
import { createHmac, timingSafeEqual } from 'crypto'

const COOKIE_NAME = 'aa_admin'

function sessionToken(): string {
  const secret = process.env.ADMIN_PASSWORD ?? ''
  return createHmac('sha256', secret).update('aashaa-anant-admin-v1').digest('hex')
}

function safeEqual(a: string, b: string): boolean {
  const ab = Buffer.from(a)
  const bb = Buffer.from(b)
  if (ab.length !== bb.length) return false
  return timingSafeEqual(ab, bb)
}

export async function isAdmin(): Promise<boolean> {
  const store = await cookies()
  const value = store.get(COOKIE_NAME)?.value
  if (!value) return false
  return safeEqual(value, sessionToken())
}

export async function signInAdmin(password: string): Promise<boolean> {
  const expected = process.env.ADMIN_PASSWORD ?? ''
  if (!expected || !safeEqual(password, expected)) {
    return false
  }
  const store = await cookies()
  store.set(COOKIE_NAME, sessionToken(), {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
  })
  return true
}

export async function signOutAdmin(): Promise<void> {
  const store = await cookies()
  store.delete(COOKIE_NAME)
}
