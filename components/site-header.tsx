'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, EXTERNAL_LINKS } from '@/lib/links'

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2">

        {/* Logo and Brand Name */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white border border-border shadow-sm flex items-center justify-center">
        <Image
         src="/aa_logo.png"
         alt="Aashaa Anant Logo"
         width={52}
         height={52}
        priority
        className="h-full w-full object-contain"
        />
         </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-semibold leading-tight text-foreground">
              Aashaa Anant
            </span>
            <span className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              Community Welfare Initiative
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors hover:text-primary ${
                  active
                    ? 'font-semibold text-primary'
                    : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Join Button and Mobile Menu */}
        <div className="flex items-center gap-2">
          <a
            href={EXTERNAL_LINKS.joinForm}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
          >
            Join
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav
            className="mx-auto flex max-w-6xl flex-col px-5 py-2"
            aria-label="Mobile"
          >
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-border/40 py-3 text-sm ${
                    active
                      ? 'font-semibold text-primary'
                      : 'text-foreground/80'
                  }`}
                >
                  {link.label}
                </Link>
              )
            })}

            <a
              href={EXTERNAL_LINKS.joinForm}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 mb-2 rounded-full bg-primary px-6 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Join
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}