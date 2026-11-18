
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

const impactStats = [
  { value: '10', label: 'Drives conducted' },
  { value: '490+', label: 'People reached' },
  { value: '175+', label: 'Animals reached' },
  { value: '5', label: 'Shelters mentioned' },
]

const communities = [
  {
    number: '01',
    title: 'Children',
    description: 'Supporting children through food, festive outreach and meaningful moments of care.',
  },
  {
    number: '02',
    title: 'Adults & elderly',
    description: 'Reaching individuals and elderly communities through food and welfare initiatives.',
  },
  {
    number: '03',
    title: 'Animals',
    description: 'Extending compassion to cows, monkeys, dogs and other stray animals.',
  },
]

const locations = [
  'Greater Noida',
  'Gurgaon',
  'Noida',
  'Kanpur',
  'Delhi–NCR',
  'Bengaluru',
]

const humanDrives = [
  { name: 'Ahaar', count: 110 },
  { name: 'Nishant', count: 110 },
  { name: 'Ahaar 2.0', count: 80 },
  { name: 'Saanjh', count: 60 },
  { name: 'Sneh Diwali', count: 50 },
  { name: 'Secret Santa', count: 50 },
  { name: 'Umeed', count: 30 },
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

        {/* Our impact */}
        <section className="border-y border-border bg-card/40">
          <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
            <div className="max-w-2xl">
              <Eyebrow>Our impact</Eyebrow>
              <h2 className="mt-4 font-serif text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                Small acts. A growing circle of care.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Every drive represents people coming together, communities being supported and
                compassion turning into action. Here is a glimpse of what we have done together.
              </p>
            </div>

            {/* Impact statistics */}
            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
              {impactStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-background p-5 md:p-7"
                >
                  <p className="font-serif text-3xl font-semibold tracking-tight text-primary md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Communities reached */}
            <div className="mt-16">
              <div className="max-w-xl">
                <Eyebrow>Who we serve</Eyebrow>
                <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight md:text-3xl">
                  Care has no single direction
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Our work reaches across different age groups and living beings. Every community
                  has different needs, and every initiative begins by recognising them.
                </p>
              </div>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                {communities.map((community) => (
                  <div
                    key={community.number}
                    className="rounded-2xl border border-border bg-background p-6"
                  >
                    <span className="text-xs font-semibold tracking-widest text-primary">
                      {community.number}
                    </span>
                    <h4 className="mt-4 font-serif text-xl font-semibold">
                      {community.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {community.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Geographic reach */}
            <div className="mt-16">
              <Eyebrow>Where we have been</Eyebrow>
              <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight md:text-3xl">
                From neighbourhoods to new communities
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Our recorded drives and outreach activities have connected us with communities
                across these locations.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {locations.map((location) => (
                  <span
                    key={location}
                    className="rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground"
                  >
                    {location}
                  </span>
                ))}
              </div>
            </div>

            {/* Human impact chart */}
            <div className="mt-16 rounded-2xl border border-border bg-background p-5 md:p-8">
              <div className="max-w-xl">
                <Eyebrow>Our drives in numbers</Eyebrow>
                <h3 className="mt-3 font-serif text-2xl font-semibold tracking-tight md:text-3xl">
                  Every drive, a difference
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  A look at the reported number of people reached through our recorded human
                  welfare drives.
                </p>
              </div>

              <div className="mt-8 space-y-5">
                {humanDrives.map((drive) => (
                  <div key={drive.name}>
                    <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                      <span className="font-medium text-foreground">{drive.name}</span>
                      <span className="tabular-nums text-muted-foreground">
                        {drive.count}
                      </span>
                    </div>
                    <div
                      className="h-2.5 overflow-hidden rounded-full bg-muted"
                      role="img"
                      aria-label={`${drive.name}: ${drive.count} people reached`}
                    >
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${(drive.count / 110) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                Figures are based on reported drive-level activity counts and are approximate.
                They represent cumulative reach, not deduplicated unique individuals. Some
                activities do not have a recorded beneficiary breakdown.
              </p>
            </div>

            <p className="mx-auto mt-12 max-w-3xl text-center font-serif text-xl font-medium leading-relaxed text-foreground md:text-2xl">
              Every number represents a moment of care, every location a community we connected
              with, and every drive a reminder that meaningful change begins with showing up.
            </p>
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
