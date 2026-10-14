import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  dark = false,
  center = true,
}: {
  eyebrow: string
  title: ReactNode
  lead?: ReactNode
  dark?: boolean
  center?: boolean
}) {
  return (
    <Reveal className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
          dark ? 'bg-white/10 text-brand-300' : 'bg-brand-50 text-brand-700'
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-current" />
        {eyebrow}
      </span>
      <h2 className={`mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${dark ? 'text-white' : 'text-ink'}`}>
        {title}
      </h2>
      {lead && <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{lead}</p>}
    </Reveal>
  )
}

export function Button({
  href,
  children,
  variant = 'primary',
  className = '',
}: {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost' | 'light'
  className?: string
}) {
  const styles = {
    primary:
      'bg-gradient-to-r from-brand-500 to-[#6d3fc0] text-white shadow-lg shadow-brand-500/25 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5',
    ghost: 'bg-white text-ink ring-1 ring-slate-200 hover:ring-slate-300 hover:bg-slate-50',
    light: 'bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/15',
  }[variant]
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 ${styles} ${className}`}
    >
      {children}
    </a>
  )
}
