import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { isAdmin } from '@/lib/admin'
import { getSubmissions } from '@/app/actions/submissions'
import { logoutAction } from './actions'

export const metadata: Metadata = {
  title: 'Submissions — Aashaa Anant',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

function formatDate(value: string) {
  return new Date(value).toLocaleString('en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}

export default async function AdminPage() {
  if (!(await isAdmin())) {
    redirect('/admin/login')
  }

  const submissions = await getSubmissions()
  const volunteers = submissions.filter((s) => s.type === 'volunteer').length
  const contacts = submissions.filter((s) => s.type === 'contact').length

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-brand-green text-brand-green-foreground">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-6">
          <div>
            <h1 className="font-serif text-2xl font-semibold">Submissions</h1>
            <p className="mt-1 text-sm text-brand-green-foreground/70">
              {submissions.length} total · {volunteers} volunteer · {contacts} contact
            </p>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="rounded-full border border-brand-green-foreground/30 px-5 py-2 text-sm font-semibold transition-colors hover:bg-brand-green-foreground/10"
            >
              Sign out
            </button>
          </form>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-5 py-10">
        {submissions.length === 0 ? (
          <p className="rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
            No submissions yet. Messages from the volunteer and contact forms will appear here.
          </p>
        ) : (
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-border bg-secondary/50 text-xs uppercase tracking-wider text-muted-foreground">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Type</th>
                    <th className="px-4 py-3 font-semibold">Name</th>
                    <th className="px-4 py-3 font-semibold">Email</th>
                    <th className="px-4 py-3 font-semibold">Phone</th>
                    <th className="px-4 py-3 font-semibold">Message</th>
                    <th className="px-4 py-3 font-semibold">Received</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((s) => (
                    <tr key={s.id} className="border-b border-border/60 last:border-0 align-top">
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                            s.type === 'volunteer'
                              ? 'bg-primary/15 text-primary'
                              : 'bg-brand-sage text-brand-sage-foreground'
                          }`}
                        >
                          {s.type}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-medium text-foreground">{s.name}</td>
                      <td className="px-4 py-3 text-muted-foreground">{s.email}</td>
                      <td className="px-4 py-3 text-muted-foreground">{s.phone ?? '—'}</td>
                      <td className="max-w-xs px-4 py-3 text-muted-foreground">
                        {s.message ?? '—'}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3 text-muted-foreground">
                        {formatDate(s.created_at)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
