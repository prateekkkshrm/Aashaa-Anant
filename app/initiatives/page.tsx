import Image from 'next/image'
import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Eyebrow } from '@/components/eyebrow'
import { EXTERNAL_LINKS } from '@/lib/links'
import { Images } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Initiatives — Aashaa Anant',
  description:
    'Practical care, shaped around real lives. Three connected pathways: Project Tinka, Project Umeed and Project Saanjh.',
}

const projects = [
  {
    name: 'Project Tinka',
    image: '/tinka.jpeg',
    body: 'Community feeding, rescue coordination and meet-ups to support that keep local strays safe, healthy and given care.',
    tags: 'Rescue drives · Foster care · Feeding',
  },
  {
    name: 'Project Umeed',
    image: '/umeed.png',
    body: 'Homework help, reading companionship and foundational learning circles that help children feel seen, confident and capable.',
    tags: 'Learning hub · Mentor pairing · Community schools',
  },
  {
    name: 'Project Saanjh',
    image: '/saanjh.jpeg',
    body: 'Compassionate circles, wellness check-ins and practical assistance that ensures no one feels isolated, unheard, or unseen.',
    tags: 'Home visits · Healthcare nudge · Social circles',
  },
]

export default function InitiativesPage() {
  return (
    <>
      <SiteHeader />

      <main>
        <section className="bg-background">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
            <div>
              <Eyebrow>Our work</Eyebrow>

              <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-balance md:text-5xl">
                Practical care, shaped around real lives.
              </h1>

              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                We focus on small, responsive programmes that can be sustained by the people closest to them.
              </p>
            </div>

            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
              <Image
                src="/Ini_main.jpeg"
                alt="Group Photo of Aashaa Anant volunteers and community members"
                fill
                priority
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-5 pb-8">
            <Eyebrow>Connected pathways</Eyebrow>

            <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Three connected pathways
            </h2>

            <p className="mt-4 text-sm text-muted-foreground">
              Each pathway steps to needs noticed by the community.
            </p>
          </div>

          <div className="mx-auto max-w-6xl space-y-6 px-5 pb-16 md:pb-20">
            {projects.map((p) => (
              <article
                key={p.name}
                className="grid gap-6 rounded-xl border border-border bg-card p-5 md:grid-cols-[280px_1fr] md:items-center md:p-6"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={p.image}
                    alt={`${p.name} in action`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 280px"
                  />
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-semibold">
                    {p.name}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>

                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {p.tags}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-brand-yellow text-brand-yellow-foreground">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-12 md:flex-row md:items-center">
            <div>
              <h2 className="font-serif text-2xl font-semibold tracking-tight text-balance md:text-3xl">
                Have a skill or local insight to share?
              </h2>

              <p className="mt-2 text-sm text-brand-yellow-foreground/80">
                Help us shape an upcoming circle with care and initiative.
              </p>
            </div>

            <a
              href={EXTERNAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Join the group
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}