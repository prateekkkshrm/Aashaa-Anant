import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { isAdmin } from '@/lib/admin'
import { LoginForm } from './login-form'

export const metadata: Metadata = {
  title: 'Admin sign in – Aashaa Anant',
  robots: { index: false, follow: false },
}

export default async function AdminLoginPage() {
  if (await isAdmin()) {
    redirect('/admin')
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-brand-green px-5">
      <div className="w-full max-w-sm rounded-2xl bg-card p-8 text-card-foreground">
        <h1 className="font-serif text-2xl font-semibold">
          Admin sign in
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Enter the admin password to view submissions.
        </p>
        <div className="mt-6">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
