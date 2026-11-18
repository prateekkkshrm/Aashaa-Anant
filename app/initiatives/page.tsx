
import Image from 'next/image'
import type { Metadata } from 'next'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Eyebrow } from '@/components/eyebrow'
import { EXTERNAL_LINKS } from '@/lib/links'

export const metadata: Metadata = {
  title: 'Initiatives — Aashaa Anant',
  description:
    'Explore the work of Project Tinka, Project Umeed and Project Saanjh through our community drives and initiatives.',
}

const projects = [
  {
    name: 'Project Tinka',
    image: '/tinka.jpeg',
    body: 'Community feeding and animal-welfare initiatives that support local strays through nourishment, care and collective responsibility.',
    tags: 'Animal welfare · Feeding drives · Community care',
    intro: 'Every animal deserves nourishment, safety and compassion. These drives reflect our efforts to make animal care a shared responsibility.',
    drives: [
      {
        name: 'Project Tinka',
        date: '11 June 2025',
        location: 'Noida',
        category: 'Animal Welfare',
        objective: 'To support stray and community animals through feeding activities and encourage compassionate treatment.',
        activities: [
          'Feeding approximately 20 cows.',
          'Providing food to approximately 15–20 monkeys.',
          'Stray dogs were also included in the activity, although their number was not recorded.',
        ],
        impact: 'The drive supported local animals and reinforced the importance of consistent care for animals in the community.',
        beneficiaries: 'Approximately 20 cows and 15–20 monkeys. Stray dogs were also mentioned, without a recorded count.',
      },
      {
        name: 'Feed the Needy',
        date: '21 June 2025',
        location: 'Gurgaon',
        category: 'Animal Welfare',
        objective: 'To provide food to stray animals and promote responsible community participation in animal welfare.',
        activities: [
          'Feeding approximately 15 cows.',
          'Providing food to approximately 25–30 stray dogs.',
        ],
        impact: 'The activity supported local stray animals and continued our commitment to compassion-driven service.',
        beneficiaries: 'Approximately 15 cows and 25–30 stray dogs.',
      },
      {
        name: 'Stray Feeding Drive',
        date: '7 September 2025',
        location: 'Kanpur, Delhi–NCR and Bengaluru',
        category: 'Animal Welfare',
        objective: 'To extend animal-feeding efforts across multiple locations and encourage volunteers to participate in service activities.',
        activities: [
          'Feeding activities for stray animals across the recorded locations.',
          'Outreach involving five shelters.',
          'Volunteer participation across multiple geographical areas.',
        ],
        impact: 'The drive expanded our animal-welfare outreach across different locations and highlighted the importance of collective participation.',
        beneficiaries: 'Approximately 70 stray animals. Five shelters were mentioned in the records; a city-wise beneficiary breakdown was not recorded.',
      },
      {
        name: 'Ahaar 2.0',
        date: '18 October 2026',
        location: 'Greater Noida',
        category: 'Animal Welfare',
        objective: 'To extend food support to community animals as part of a broader welfare initiative.',
        activities: [
          'Feeding support for 30 cows.',
          'Including animal welfare alongside the drive’s wider community-support activities.',
        ],
        impact: 'Ahaar 2.0 brought animal care into a wider community initiative, reflecting our belief that compassion should extend to both people and animals.',
        beneficiaries: '30 cows recorded under the animal-welfare component.',
      },
    ],
  },
  {
    name: 'Project Umeed',
    image: '/umeed.png',
    body: 'Child-centred outreach that creates moments of happiness, inclusion and encouragement through food, festive sharing and community engagement.',
    tags: 'Child welfare · Festive outreach · Community support',
    intro: 'Every child deserves to feel included, supported and valued. Umeed brings people together to create meaningful experiences for children.',
    drives: [
      {
        name: 'Sneh Diwali Drive',
        date: '15 October 2025',
        location: 'Gurgaon',
        category: 'Child Welfare',
        objective: 'To share the joy of Diwali with children and promote kindness, inclusion and community bonding during the festive season.',
        activities: [
          'Distribution of sweets among children.',
          'Creating moments of festive sharing and happiness.',
          'Encouraging kindness and community participation.',
        ],
        impact: 'The drive brought festive happiness to children and created an opportunity to make the celebrations more inclusive.',
        beneficiaries: 'Approximately 50 children.',
      },
      {
        name: 'Umeed',
        date: '7 December 2025',
        location: 'Greater Noida',
        category: 'Child Welfare',
        objective: 'To bring happiness to children through refreshments and a community-oriented activity that encourages togetherness.',
        activities: [
          'Distribution of cake, snacks and chocolates.',
          'Creating positive shared experiences for children.',
          'Encouraging young volunteers to participate in welfare activities.',
        ],
        impact: 'The drive provided refreshments and a shared experience for children while strengthening our commitment to child welfare.',
        beneficiaries: 'Approximately 30 children.',
      },
      {
        name: 'Secret Santa',
        date: '25 December 2025',
        location: 'Gurgaon and Greater Noida',
        category: 'Child Welfare',
        objective: 'To spread warmth and happiness during the Christmas season by distributing useful items and food to children.',
        activities: [
          'Distribution of socks and gloves.',
          'Sharing burgers and other food items.',
          'Festive gift distribution and outreach.',
        ],
        impact: 'The drive combined practical winter support with festive outreach, promoting care and community spirit among children.',
        beneficiaries: 'Approximately 50 children.',
      },
      {
        name: 'Ahaar',
        date: '5 January 2026',
        location: 'Greater Noida',
        category: 'Community Food Support',
        objective: 'To address immediate food needs by distributing food to children and other community members.',
        activities: [
          'Food distribution for people in the community.',
          'Reaching children as part of a wider community-support effort.',
        ],
        impact: 'The drive supported community members through food distribution. The available records do not provide a separate count for children.',
        beneficiaries: 'Approximately 110 people in total. A separate child and adult count was not recorded.',
      },
      {
        name: 'Nishant',
        date: '5 May 2026',
        location: 'Greater Noida',
        category: 'Child Welfare',
        objective: 'To extend food and welfare support to children in the community and address immediate needs through direct outreach.',
        activities: [
          'Food and welfare support for children.',
          'Community-based distribution and volunteer participation.',
        ],
        impact: 'The child-welfare component of Nishant reached 70 children as part of a wider community drive that also supported adults.',
        beneficiaries: '70 children. The complete drive reached 110 people, including 40 adults.',
      },
      {
        name: 'Ahaar 2.0',
        date: '18 October 2026',
        location: 'Greater Noida',
        category: 'Child Welfare',
        objective: 'To include children in a wider community-support initiative through food-related assistance.',
        activities: [
          'Food-related support for children.',
          'Community outreach involving different beneficiary groups.',
        ],
        impact: 'The child-welfare component of Ahaar 2.0 reached 20 children as part of a broader drive that also supported adults, elderly people and animals.',
        beneficiaries: '20 children.',
      },
    ],
  },
  {
    name: 'Project Saanjh',
    image: '/saanjh.jpeg',
    body: 'Compassionate outreach for older community members through food, refreshments, companionship and gestures that uphold dignity and belonging.',
    tags: 'Elderly welfare · Food support · Companionship',
    intro: 'Care should never be limited by age. Saanjh focuses on supporting older members of society through direct engagement, respect and meaningful community connections.',
    drives: [
      {
        name: 'Ahaar',
        date: '5 January 2026',
        location: 'Greater Noida',
        category: 'Community Food Support',
        objective: 'To address immediate food needs among children and adults through community-based distribution.',
        activities: [
          'Food distribution among community members.',
          'Support for adults as part of a wider food-support initiative.',
        ],
        impact: 'The drive extended food support to community members, including adults. The available records do not provide a separate adult or elderly count.',
        beneficiaries: 'Approximately 110 people in total. A separate child and adult count was not recorded.',
      },
      {
        name: 'Nishant',
        date: '5 May 2026',
        location: 'Greater Noida',
        category: 'Community Welfare',
        objective: 'To extend food and welfare support to adults in the community through direct outreach.',
        activities: [
          'Food and welfare support for adults.',
          'Community-based distribution and volunteer participation.',
        ],
        impact: 'The adult-welfare component of Nishant reached 40 adults as part of a wider drive that also supported children.',
        beneficiaries: '40 adults. The complete drive reached 110 people, including 70 children.',
      },
      {
        name: 'Saanjh',
        date: '23 August 2026',
        location: 'Ramlal Vridhashram, Greater Noida',
        category: 'Elderly Welfare',
        objective: 'To engage with elderly residents and provide food and refreshments as a gesture of care, companionship and respect.',
        activities: [
          'Distribution of drinks and refreshments.',
          'Sharing bananas and biscuits with elderly residents.',
          'Direct volunteer engagement and community interaction.',
        ],
        impact: 'The activity provided refreshments to elderly residents and created an opportunity for volunteers to engage with and support the community at the old-age home.',
        beneficiaries: 'Approximately 60 elderly people.',
      },
      {
        name: 'Ahaar 2.0',
        date: '18 October 2026',
        location: 'Greater Noida',
        category: 'Elderly and Community Welfare',
        objective: 'To extend food-related support to elderly people and adults through a wider community-welfare initiative.',
        activities: [
          'Food-related support for 60 elderly people and adults.',
          'Community outreach alongside child-welfare and animal-feeding activities.',
        ],
        impact: 'The elderly and adult-welfare component of Ahaar 2.0 supported 60 people as part of a wider initiative reaching children and animals too.',
        beneficiaries: '60 elderly people and adults.',
      },
    ],
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
                Explore the projects and the drives that bring them to life.
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

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Each project responds to a different area of community welfare. Select a project to
              explore its drives, dates and the work carried out through each initiative.
            </p>
          </div>

          <div className="mx-auto max-w-6xl space-y-5 px-5 pb-16 md:pb-20">
            {projects.map((project) => (
              <details
                key={project.name}
                className="group overflow-hidden rounded-2xl border border-border bg-card"
              >
                <summary className="grid cursor-pointer list-none gap-6 p-5 transition-colors hover:bg-muted/30 md:grid-cols-[280px_1fr] md:items-center md:p-6 [&::-webkit-details-marker]:hidden">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                    <Image
                      src={project.image}
                      alt={`${project.name} in action`}
                      fill
                      className="object-cover transition-transform duration-500 group-open:scale-[1.02]"
                      sizes="(max-width: 768px) 100vw, 280px"
                    />
                  </div>

                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-serif text-2xl font-semibold">
                          {project.name}
                        </h3>

                        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                          {project.body}
                        </p>

                        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                          {project.tags}
                        </p>
                      </div>

                      <span className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-border text-xl text-primary transition-transform group-open:rotate-45">
                        +
                      </span>
                    </div>

                    <p className="mt-5 text-xs font-medium text-muted-foreground">
                      {project.drives.length} recorded drives · Click to explore
                    </p>
                  </div>
                </summary>

                <div className="border-t border-border px-5 py-7 md:px-8 md:py-9">
                  <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
                    {project.intro}
                  </p>

                  <div className="mt-7 space-y-3">
                    {project.drives.map((drive) => (
                      <details
                        key={`${project.name}-${drive.name}`}
                        className="group/drive rounded-xl border border-border bg-background"
                      >
                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 md:p-5 [&::-webkit-details-marker]:hidden">
                          <div>
                            <h4 className="font-serif text-lg font-semibold">
                              {drive.name}
                            </h4>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {drive.date} <span className="mx-1">·</span> {drive.location}
                            </p>
                          </div>

                          <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-primary transition-transform group-open/drive:rotate-45">
                            +
                          </span>
                        </summary>

                        <div className="border-t border-border px-4 py-5 md:px-6">
                          <div className="flex flex-wrap gap-2">
                            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                              {drive.category}
                            </span>
                            <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                              {drive.date}
                            </span>
                          </div>

                          <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <div>
                              <h5 className="font-serif text-lg font-semibold">
                                The purpose
                              </h5>
                              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {drive.objective}
                              </p>
                            </div>

                            <div>
                              <h5 className="font-serif text-lg font-semibold">
                                What we did
                              </h5>
                              <ul className="mt-2 space-y-2">
                                {drive.activities.map((activity) => (
                                  <li
                                    key={activity}
                                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                                  >
                                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                                    {activity}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="mt-6 grid gap-4 rounded-xl bg-muted/50 p-4 md:grid-cols-2 md:p-5">
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                                Beneficiaries
                              </p>
                              <p className="mt-2 text-sm leading-relaxed text-foreground">
                                {drive.beneficiaries}
                              </p>
                            </div>

                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                                Our impact
                              </p>
                              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {drive.impact}
                              </p>
                            </div>
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </details>
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
