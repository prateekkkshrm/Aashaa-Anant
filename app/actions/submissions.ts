'use server'

import { pool } from '@/lib/db'
import { isAdmin } from '@/lib/admin'

export type SubmissionState = {
  ok: boolean
  message: string
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function createSubmission(
  _prevState: SubmissionState,
  formData: FormData,
): Promise<SubmissionState> {
  const type = String(formData.get('type') ?? 'contact').slice(0, 40)
  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const phone = String(formData.get('phone') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()

  if (name.length < 2) {
    return { ok: false, message: 'Please enter your name.' }
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, message: 'Please enter a valid email address.' }
  }

  try {
    await pool.query(
      `INSERT INTO submissions (type, name, email, phone, message)
       VALUES ($1, $2, $3, $4, $5)`,
      [
        type === 'volunteer' ? 'volunteer' : 'contact',
        name.slice(0, 200),
        email.slice(0, 200),
        phone.slice(0, 60) || null,
        message.slice(0, 5000) || null,
      ],
    )
    return {
      ok: true,
      message: 'Thank you. Your message has reached us — we will be in touch soon.',
    }
  } catch (err) {
    console.log('[v0] createSubmission error:', err)
    return {
      ok: false,
      message: 'Something went wrong saving your message. Please try again.',
    }
  }
}

export type SubmissionRow = {
  id: number
  type: string
  name: string
  email: string
  phone: string | null
  message: string | null
  created_at: string
}

export async function getSubmissions(): Promise<SubmissionRow[]> {
  if (!(await isAdmin())) {
    throw new Error('Unauthorized')
  }
  const { rows } = await pool.query<SubmissionRow>(
    `SELECT id, type, name, email, phone, message, created_at
     FROM submissions
     ORDER BY created_at DESC`,
  )
  return rows
}
