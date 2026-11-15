'use server'

import { redirect } from 'next/navigation'
import { signInAdmin, signOutAdmin } from '@/lib/admin'

export async function loginAction(
  _prevState: { error: string },
  formData: FormData,
): Promise<{ error: string }> {
  const password = String(formData.get('password') ?? '')
  const ok = await signInAdmin(password)
  if (!ok) {
    return { error: 'Incorrect password. Please try again.' }
  }
  redirect('/admin')
}

export async function logoutAction(): Promise<void> {
  await signOutAdmin()
  redirect('/admin/login')
}
