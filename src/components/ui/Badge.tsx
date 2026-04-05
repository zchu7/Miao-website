import clsx from 'clsx'

type BadgeProps = {
  label: string
  variant?: 'gold' | 'navy' | 'white'
  className?: string
}

export default function Badge({ label, variant = 'gold', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide',
        variant === 'gold' && 'bg-gold-400/20 text-gold-600',
        variant === 'navy' && 'bg-navy-700 text-white',
        variant === 'white' && 'bg-white/20 text-white',
        className
      )}
    >
      {label}
    </span>
  )
}
