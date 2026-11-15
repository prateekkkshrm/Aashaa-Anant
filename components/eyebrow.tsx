export function Eyebrow({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={`text-xs font-semibold uppercase tracking-[0.18em] text-primary ${className}`}
    >
      {children}
    </span>
  )
}
