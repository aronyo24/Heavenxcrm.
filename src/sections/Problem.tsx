import { X, Check } from 'lucide-react'
import { Reveal, SectionHeading } from '../components/Section'

const before = [
  'Leads scattered across Facebook, email, WhatsApp and paper forms',
  'Nobody knows which counselor is following up with whom',
  'Application status lives in someone\'s spreadsheet',
  'Calls and meetings happen on personal Zoom and phone accounts',
  'Managers can\'t see conversion or counselor performance',
]
const after = [
  'Every lead lands automatically in one pipeline — tagged by source',
  'Clear owner for each student, with caseload limits per counselor',
  'Each course application tracked from submitted to enrolled',
  'Video & audio meetings run inside the CRM and are logged',
  'Live dashboards for leads, stages, applications and activity',
]

export default function Problem() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why agencies switch"
          title={<>Admissions are a team sport. <br className="hidden sm:block" />Spreadsheets aren't.</>}
          lead="When one student generates dozens of messages, documents and deadlines across several universities, small gaps become lost students. HeavenxCRM closes those gaps."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-8">
              <p className="text-sm font-bold uppercase tracking-wider text-slate-400">Without HeavenxCRM</p>
              <ul className="mt-6 space-y-4">
                {before.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-red-50 text-red-500">
                      <X size={14} strokeWidth={3} />
                    </span>
                    <span className="text-slate-600">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-3xl bg-ink p-8 text-white">
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-brand-500/30 blur-3xl" />
              <div className="absolute -bottom-24 -left-10 h-60 w-60 rounded-full bg-violet-600/30 blur-3xl" />
              <p className="relative text-sm font-bold uppercase tracking-wider text-brand-300">With HeavenxCRM</p>
              <ul className="relative mt-6 space-y-4">
                {after.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-400">
                      <Check size={14} strokeWidth={3} />
                    </span>
                    <span className="text-slate-200">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
