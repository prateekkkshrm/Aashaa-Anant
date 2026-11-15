import Link from 'next/link'
import { Camera, MessageCircle } from 'lucide-react'
import { NAV_LINKS, EXTERNAL_LINKS } from '@/lib/links'

export function SiteFooter() {
  return (
    <footer className="bg-brand-green text-brand-green-foreground">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="max-w-sm">
            <h2 className="font-serif text-2xl font-semibold">Aashaa Anant</h2>
            <p className="mt-4 text-sm leading-relaxed text-brand-green-foreground/70">
              A community welfare initiative creating practical, local pathways to dignity and
              opportunity.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={EXTERNAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-foreground/10 transition-colors hover:bg-brand-green-foreground/20"
                aria-label="Follow Aashaa Anant on Instagram"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href={EXTERNAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-green-foreground/10 transition-colors hover:bg-brand-green-foreground/20"
                aria-label="Join the Aashaa Anant WhatsApp community"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {NAV_LINKS.filter((l) => l.href !== '/').map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-brand-green-foreground/75 transition-colors hover:text-brand-green-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow">
              Connect
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=ouraashaaanant@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ouraashaaanant@gmail.com
             </a>
              </li>
              <li>
                <a
                  href={EXTERNAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-green-foreground/75 transition-colors hover:text-brand-green-foreground"
                >
                  WhatsApp community
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/aashaa-anant/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-green-foreground/75 transition-colors hover:text-brand-green-foreground"
                >
                LinkedIn – Aashaa Anant
               </a>
              </li>
              <li className="text-brand-green-foreground/75">Community-led • India</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-brand-green-foreground/15 pt-6">
          <p className="text-xs text-brand-green-foreground/50">
            Aashaa Anant is a community welfare initiative and is not a registered NGO. &copy;{' '}
            {new Date().getFullYear()} Aashaa Anant.
          </p>
        </div>
      </div>
    </footer>
  )
}
