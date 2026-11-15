import type { Metadata } from 'next'
import { Clock, DoorOpen, Sparkles } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Eyebrow } from '@/components/eyebrow'
import { SubmissionForm } from '@/components/submission-form'
import { EXTERNAL_LINKS } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Volunteer — Aashaa Anant',
  description:
    'Bring what you know. Come as you are. Share your time and skills with the Aashaa Anant community.',
}

const ways = [
  {
    icon: Clock,
    title: 'Give time',
    body: 'Support a learning session, community meet-up or local activity.',
  },
  {
    icon: Sparkles,
    title: 'Share a skill',
    body: 'Offer teaching, design, health awareness, mentoring or coordination skills.',
  },
  {
    icon: DoorOpen,
    title: 'Open a door',
    body: 'Connect us with a space, resource, expert or neighbourhood group.',
  },
]

export default function VolunteerPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-brand-cream-deep">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <Eyebrow>Volunteer</Eyebrow>
            <h1 className="mt-5 max-w-2xl font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-balance md:text-5xl">
              Bring what you know. Come as you are.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Whether you have one afternoon or a long-term skill to share, your time can become
              practical hope for someone else.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={EXTERNAL_LINKS.joinForm}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Join as volunteer
              </a>
              <a
                href={EXTERNAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Join the WhatsApp group
              </a>
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <Eyebrow>Choose your way</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Many hands make the circle stronger
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {ways.map((w) => (
                <div key={w.title} className="rounded-xl border border-border bg-card p-7">
                  <w.icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                  <h3 className="mt-5 font-serif text-xl font-semibold">{w.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-sage text-brand-sage-foreground">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
            <div>
              <Eyebrow>Join us</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight tracking-tight text-balance md:text-4xl">
                Tell us how you would like to help
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-sage-foreground/80">
                We will respond personally and find a thoughtful fit. No prior volunteering
                experience is required.
              </p>
            </div>
            <div className="rounded-2xl bg-card p-6 text-card-foreground md:p-8">
              <SubmissionForm
                type="volunteer"
                submitLabel="Send my interest"
                fields={[
                  { name: 'name', label: 'Your name', placeholder: 'Type here', required: true },
                  {
                    name: 'email',
                    label: 'Email or phone',
                    type: 'email',
                    placeholder: 'Type here',
                    required: true,
                  },
                  { name: 'phone', label: 'Phone (optional)', type: 'tel', placeholder: 'Type here' },
                  {
                    name: 'message',
                    label: 'How would you like to contribute?',
                    type: 'textarea',
                    placeholder: 'Share a little about your interests…',
                  },
                ]}
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
