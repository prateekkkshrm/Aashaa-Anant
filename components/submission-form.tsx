'use client'

import { useActionState } from 'react'
import { createSubmission, type SubmissionState } from '@/app/actions/submissions'

const initialState: SubmissionState = { ok: false, message: '' }

type Field = {
  name: 'name' | 'email' | 'phone' | 'message'
  label: string
  type?: 'text' | 'email' | 'tel' | 'textarea'
  placeholder?: string
  required?: boolean
}

export function SubmissionForm({
  type,
  fields,
  submitLabel,
}: {
  type: 'volunteer' | 'contact'
  fields: Field[]
  submitLabel: string
}) {
  const [state, formAction, pending] = useActionState(createSubmission, initialState)

  return (
    <form action={formAction} className="space-y-5">
      <input type="hidden" name="type" value={type} />
      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={`${type}-${field.name}`}
            className="mb-2 block text-sm font-medium text-foreground"
          >
            {field.label}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={`${type}-${field.name}`}
              name={field.name}
              rows={4}
              required={field.required}
              placeholder={field.placeholder}
              className="w-full resize-none rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          ) : (
            <input
              id={`${type}-${field.name}`}
              name={field.name}
              type={field.type ?? 'text'}
              required={field.required}
              placeholder={field.placeholder}
              className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-primary px-7 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        {pending ? 'Sending…' : submitLabel}
      </button>

      {state.message && (
        <p
          role="status"
          className={`text-sm ${state.ok ? 'text-brand-green' : 'text-destructive'}`}
        >
          {state.message}
        </p>
      )}
    </form>
  )
}
