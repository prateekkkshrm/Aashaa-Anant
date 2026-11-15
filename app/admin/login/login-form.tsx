'use client'

import { useActionState } from 'react'
import { loginAction } from '@/app/admin/actions'

export function LoginForm() {
  const [state, formAction, pending] = useActionState(loginAction, { error: '' })

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label htmlFor="password" className="mb-2 block text-sm font-medium text-foreground">
          Admin password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {pending ? 'Signing in…' : 'Sign in'}
      </button>
      {state.error && (
        <p role="status" className="text-sm text-destructive">
          {state.error}
        </p>
      )}
    </form>
  )
}
