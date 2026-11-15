import Image from 'next/image'
import Link from 'next/link'
import { BookOpen, HeartHandshake, Sprout } from 'lucide-react'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Eyebrow } from '@/components/eyebrow'
import { EXTERNAL_LINKS } from '@/lib/links'

const pathways = [
  {
    icon: BookOpen,
    title: 'Learning circles',
    body: 'Neighbourhood-led tutoring and thinking support for children.',
  },
  {
    icon: HeartHandshake,
    title: 'Well-being support',
    body: 'Practical care, connection and connections for families facing difficult moments.',
  },
  {
    icon: Sprout,
    title: 'Livelihood pathways',
    body: 'Skills, mentorship and local avenues to help people move forward.',
  },
]

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="bg-background">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
            <div>
              <Eyebrow>Community · Care · Continuity</Eyebrow>
              <h1 className="mt-5 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-balance md:text-5xl">
                Small acts of care. An endless circle of hope.
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
                Aashaa Anant brings neighbours together to support learning, well-being and
                livelihoods — one person, one family, one community at a time.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={EXTERNAL_LINKS.joinForm}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Join the circle
                </a>
                <Link
                  href="/initiatives"
                  className="rounded-full border border-border px-7 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  See our work
                </Link>
              </div>
              <p className="mt-6 text-xs text-muted-foreground">
                Community welfare initiative · not a registered NGO
              </p>
            </div>
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl">
              <Image
                src="/home_main.jpeg"
                alt="Children from the community holding up drawings and smiling together"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values strip */}
        <section className="bg-brand-green text-brand-green-foreground">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 md:grid-cols-3">
            {[
              { title: 'Community-first', body: 'Local voices shape every effort.' },
              { title: 'Open-hearted', body: 'Everyone has something to offer.' },
              { title: 'Practical hope', body: 'Care translated into action.' },
            ].map((item) => (
              <div key={item.title}>
                <h2 className="font-serif text-lg font-semibold text-brand-yellow">{item.title}</h2>
                <p className="mt-1 text-sm text-brand-green-foreground/75">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pathways */}
        <section className="bg-background">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 max-w-xl font-serif text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Support that begins with listening
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Our initiatives are worked out by design: important, transparent and rooted in
              relationships.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {pathways.map((p) => (
                <div key={p.title} className="rounded-xl border border-border bg-card p-7">
                  <p.icon className="h-6 w-6 text-primary" strokeWidth={1.75} />
                  <h3 className="mt-5 font-serif text-xl font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote / hope block */}
        <section className="bg-brand-sage text-brand-sage-foreground">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl md:max-w-sm">
              <Image
                src="/IMG-20250625-WA0004.jpg"
                alt="A young child from the community smiling gently"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Eyebrow>Why Aashaa Anant</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                Hope grows when it is shared
              </h2>
              <p className="mt-5 text-base leading-relaxed text-brand-sage-foreground/85">
                &ldquo;We are not here to arrive with answers. We are here to stand beside people as
                answers take shape.&rdquo;
              </p>
              <p className="mt-4 text-sm leading-relaxed text-brand-sage-foreground/70">
                We collaborate with residents, educators, volunteers and local well-wishers. Every
                circle is small, kind, and honest — so introductions or outcomes can spring from the
                same shared care.
              </p>
              <Link
                href="/about"
                className="mt-8 inline-block rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Get to know us
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-brand-yellow text-brand-yellow-foreground">
          <div className="mx-auto max-w-6xl px-5 py-16 text-center md:py-20">
            <h2 className="mx-auto max-w-2xl font-serif text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              There is a place for you in this circle.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-brand-yellow-foreground/80">
              Give an hour, share a skill, or simply help us reach someone who needs support.
            </p>
            <Link
              href="/volunteer"
              className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Become a volunteer
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
