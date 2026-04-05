import clsx from 'clsx'

type SectionHeadingProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={clsx('mb-12', centered && 'text-center')}>
      {eyebrow && (
        <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          'font-serif text-3xl md:text-4xl font-bold leading-tight',
          light ? 'text-white' : 'text-navy-800'
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            'mt-4 text-lg leading-relaxed max-w-2xl',
            centered && 'mx-auto',
            light ? 'text-navy-200' : 'text-navy-500'
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
