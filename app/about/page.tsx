import Image from 'next/image'
import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Eyebrow } from '@/components/eyebrow'

export const metadata: Metadata = {
  title: 'About us — Aashaa Anant',
  description:
    'Aashaa Anant is a living network of neighbours and well-wishers. Rooted in empathy, built with community.',
}

const values = [
  { n: '01', title: 'Dignity', body: 'People are participants, never projects.' },
  { n: '02', title: 'Listening', body: 'Context comes before action.' },
  { n: '03', title: 'Transparency', body: 'We communicate honestly about scope and resources.' },
  { n: '04', title: 'Continuity', body: 'We favour steady relationships over one-time gestures.' },
]

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-background">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
            <div>
              <Eyebrow>Our story</Eyebrow>
              <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-balance md:text-5xl">
                Rooted in empathy. Built with community.
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Aashaa Anant began with a simple belief: help becomes meaningful when it respects
                context, dignity and local wisdom.
              </p>
            </div>
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
              <Image
                src="/IMG-20250625-WA0006.jpg"
                alt="Picture from feeding drive for stray cows"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 md:grid-cols-2 md:pb-20">
            <div>
              <Eyebrow>Who we are</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-balance">
                A living network of neighbours and well-wishers
              </h2>
            </div>
            <div className="space-y-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                We are citizens, educators, professionals, homemakers and students choosing to act
                together. We are not a registered NGO. We are a community welfare initiative shaped
                by trust, voluntary participation and shared responsibility.
              </p>
              <p>
                Our name combines <span className="text-foreground">aashaa</span> — hope — with{' '}
                <span className="text-foreground">anant</span> — endless. It reminds us that care
                does not need to be grand to continue. It needs to be sincere, useful and passed
                forward.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-brand-sage text-brand-sage-foreground">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <Eyebrow>Our compass</Eyebrow>
            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Four values guide every decision
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-4">
              {values.map((v) => (
                <div key={v.n} className="rounded-xl bg-card p-6 text-card-foreground">
                  <span className="text-xs font-semibold tracking-widest text-primary">{v.n}</span>
                  <h3 className="mt-4 font-serif text-xl font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-3xl px-5 py-16 text-center md:py-24">
            <Eyebrow>Our promise</Eyebrow>
            <p className="mt-6 font-serif text-2xl font-semibold leading-snug tracking-tight text-balance md:text-3xl">
              To stay human, humble and accountable as the circle grows.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
