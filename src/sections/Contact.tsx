import { useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowRight, CalendarCheck, Mail, CheckCircle2, Loader2, AlertCircle } from 'lucide-react'
import { Reveal } from '../components/Section'

const SALES_EMAIL = 'info@technoheaven.org'
// No backend yet: FormSubmit (formsubmit.co) relays the form to SALES_EMAIL.
// The very first submission sends an activation email to that inbox, which
// must be confirmed before requests are delivered.
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${SALES_EMAIL}`

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const d = new FormData(form)
    if (d.get('_honey')) return
    setStatus('sending')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `HeavenxCRM demo request — ${d.get('company')}`,
          _template: 'table',
          _captcha: 'false',
          name: d.get('name'),
          agency: d.get('company'),
          email: d.get('email'),
          phone: d.get('phone') || '-',
          team_size: d.get('size'),
          message: d.get('message') || '-',
        }),
      })
      const data = await res.json().catch(() => null)
      if (!res.ok || data?.success === false || data?.success === 'false') throw new Error(data?.message || 'Request failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  const input =
    'w-full rounded-xl border-0 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-500 ring-1 ring-white/10 transition focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-400'

  return (
    <section id="contact" className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div className="bg-grid-dark absolute inset-0" />
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-brand-500/25 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-violet-600/25 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-300">
            <span className="h-1.5 w-1.5 rounded-full bg-current" /> Get started
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-[1.1]">
            See HeavenxCRM working with <span className="text-gradient">your</span> admissions process
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-300">
            Book a free, no-obligation demo. We'll walk through your current workflow, show how HeavenxCRM fits, and answer every question.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              'A 30-minute live walkthrough tailored to your agency',
              'Help moving your existing student data across',
              'Training for your counselors and managers',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 text-slate-200">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-emerald-400" /> {t}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href={`mailto:${SALES_EMAIL}`} className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-500/20 text-brand-300"><Mail size={18} /></span>
              <span>
                <span className="block text-xs text-slate-400">Email us</span>
                <span className="text-sm font-semibold text-white">{SALES_EMAIL}</span>
              </span>
            </a>
            <div className="flex items-center gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-500/20 text-violet-300"><CalendarCheck size={18} /></span>
              <span>
                <span className="block text-xs text-slate-400">Response time</span>
                <span className="text-sm font-semibold text-white">Within one business day</span>
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} className="rounded-3xl bg-white/[0.04] p-7 ring-1 ring-white/10 backdrop-blur sm:p-9">
            <h3 className="text-xl font-bold text-white">Request your free demo</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-slate-400">Full name *</span>
                <input name="name" required className={input} placeholder="Your name" autoComplete="name" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-slate-400">Agency / company *</span>
                <input name="company" required className={input} placeholder="Agency name" autoComplete="organization" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-slate-400">Work email *</span>
                <input name="email" type="email" required className={input} placeholder="you@agency.com" autoComplete="email" />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-medium text-slate-400">Phone / WhatsApp</span>
                <input name="phone" className={input} placeholder="+880 ..." autoComplete="tel" />
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-xs font-medium text-slate-400">Team size</span>
                <select name="size" className={`${input} [&>option]:text-ink`} defaultValue="2–5 counselors">
                  <option>Just me</option>
                  <option>2–5 counselors</option>
                  <option>6–15 counselors</option>
                  <option>16+ counselors / multiple branches</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="mb-1.5 block text-xs font-medium text-slate-400">What would you like to improve?</span>
                <textarea name="message" rows={4} className={input} placeholder="e.g. We lose track of Facebook leads and follow-ups..." />
              </label>
            </div>
            {/* Honeypot: hidden from people, filled in by spam bots. */}
            <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-[#6d3fc0] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-wait disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {status === 'sending' ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Sending...
                </>
              ) : (
                <>
                  Book my demo <ArrowRight size={16} />
                </>
              )}
            </button>
            <div aria-live="polite">
              {status === 'sent' && (
                <p className="mt-4 flex items-start gap-2 rounded-xl bg-emerald-400/10 p-3 text-sm text-emerald-300 ring-1 ring-emerald-400/20">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                  Thank you! Your demo request has been sent. Our team will contact you within one business day.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-4 flex items-start gap-2 rounded-xl bg-red-400/10 p-3 text-sm text-red-300 ring-1 ring-red-400/20">
                  <AlertCircle size={18} className="mt-0.5 shrink-0" />
                  <span>
                    Sorry, something went wrong. Please try again or email us at{' '}
                    <a href={`mailto:${SALES_EMAIL}`} className="font-semibold underline">{SALES_EMAIL}</a>.
                  </span>
                </p>
              )}
              {(status === 'idle' || status === 'sending') && (
                <p className="mt-3 text-center text-xs text-slate-500">We never share your details.</p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
