import Image from 'next/image'
import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Eyebrow } from '@/components/eyebrow'
import { SubmissionForm } from '@/components/submission-form'
import { EXTERNAL_LINKS } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Contact — Aashaa Anant',
  description:
    'Every meaningful effort starts with a conversation. Reach out to Aashaa Anant with a question, an idea or a wish to contribute.',
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-background">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-balance md:text-5xl">
                Every meaningful effort starts with a conversation.
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Reach out with a question, an idea, a need you have noticed or a wish to contribute.
                We would be glad to listen.
              </p>
            </div>
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
              <Image
                src="/contact_main.jpeg"
                alt="Volunteers and community members leaning in together during a gathering"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 md:grid-cols-[1fr_1.4fr] md:pb-24">
            <div>
              <Eyebrow>Get in touch</Eyebrow>
              <h2 className="mt-4 font-serif text-2xl font-semibold tracking-tight">
                Let&apos;s begin with hello
              </h2>

              <dl className="mt-8 space-y-6 text-sm">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${EXTERNAL_LINKS.email}`}
                      className="text-foreground hover:text-primary"
                    >
                      {EXTERNAL_LINKS.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Community
                  </dt>
                  <dd className="mt-1 text-muted-foreground">Local circles across India</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Stay connected
                  </dt>
                  <dd className="mt-2 flex flex-col gap-1">
                    <a
                      href={EXTERNAL_LINKS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary"
                    >
                      Join the WhatsApp community
                    </a>
                    <a
                      href={EXTERNAL_LINKS.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground hover:text-primary"
                    >
                      Follow us on Instagram
                    </a>
                  </dd>
                </div>
              </dl>

              <div className="mt-8 rounded-xl bg-brand-cream-deep p-5 text-sm leading-relaxed text-muted-foreground">
                Aashaa Anant is a community welfare initiative, not a registered NGO. Please contact
                us before offering funds or materials.
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
              <SubmissionForm
                type="contact"
                submitLabel="Send message"
                fields={[
                  { name: 'name', label: 'Your name', placeholder: 'Type here', required: true },
                  {
                    name: 'email',
                    label: 'Email address',
                    type: 'email',
                    placeholder: 'Type here',
                    required: true,
                  },
                  { name: 'phone', label: 'Phone (optional)', type: 'tel', placeholder: 'Type here' },
                  {
                    name: 'message',
                    label: 'Your message',
                    type: 'textarea',
                    placeholder: 'How can we help?',
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
