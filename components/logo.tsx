import Link from 'next/link'
import Image from 'next/image'

export function Logo({
  variant = 'dark',
}: {
  variant?: 'dark' | 'light'
}) {
  const title =
    variant === 'light'
      ? 'text-brand-green-foreground'
      : 'text-foreground'

  const sub =
    variant === 'light'
      ? 'text-brand-green-foreground/60'
      : 'text-muted-foreground'

  return (
    <Link href="/" className="flex items-center gap-3 shrink-0">
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

      <span className="flex flex-col leading-none">
        <span className={`font-serif text-xl font-semibold tracking-tight ${title}`}>
          Aashaa Anant
        </span>

        <span className={`mt-2 text-[11px] font-medium uppercase tracking-[0.18em] ${sub}`}>
          Community Welfare Initiative
        </span>
      </span>
    </Link>
  )
}