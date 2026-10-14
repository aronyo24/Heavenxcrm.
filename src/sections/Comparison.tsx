import { Check, Minus, X } from 'lucide-react'
import { Reveal, SectionHeading } from '../components/Section'

type Cell = 'yes' | 'partial' | 'no'
const rows: [string, Cell, Cell, Cell][] = [
  ['Built for student admissions (students, courses, intakes)', 'yes', 'no', 'no'],
  ['Facebook & Instagram Lead Ads straight into the pipeline', 'yes', 'no', 'partial'],
  ['Per-course application tracking', 'yes', 'partial', 'no'],
  ['University & course database with entry requirements', 'yes', 'no', 'no'],
  ['AI course matching on your own data', 'yes', 'no', 'no'],
  ['Built-in video & audio meetings', 'yes', 'no', 'partial'],
  ['Email sending + inbox reply sync per student', 'yes', 'no', 'yes'],
  ['Counselor caseloads & data isolation', 'yes', 'no', 'partial'],
  ['No per-seat add-ons for core admission features', 'yes', 'yes', 'no'],
]

function Mark({ v }: { v: Cell }) {
  if (v === 'yes')
    return (
      <span className="mx-auto grid h-7 w-7 place-items-center rounded-full bg-emerald-100 text-emerald-600" aria-label="Yes">
        <Check size={16} strokeWidth={3} />
      </span>
    )
  if (v === 'partial')
    return (
      <span className="mx-auto grid h-7 w-7 place-items-center rounded-full bg-amber-100 text-amber-600" aria-label="Partly or with add-ons">
        <Minus size={16} strokeWidth={3} />
      </span>
    )
  return (
    <span className="mx-auto grid h-7 w-7 place-items-center rounded-full bg-slate-100 text-slate-400" aria-label="No">
      <X size={16} strokeWidth={3} />
    </span>
  )
}

export default function Comparison() {
  return (
    <section id="why" className="bg-slate-50/70 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Why HeavenxCRM"
          title={<>A specialist CRM beats a <span className="text-gradient whitespace-nowrap">general-purpose</span> one</>}
          lead="Generic CRMs were built to sell software subscriptions, not to place students at universities. HeavenxCRM speaks your language from day one."
        />
        <Reveal className="mt-14">
          <div className="overflow-x-auto rounded-3xl bg-white shadow-xl shadow-slate-900/5 ring-1 ring-slate-200">
            <table className="w-full min-w-[640px] text-left">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="p-5 text-sm font-semibold text-slate-500">Capability</th>
                  <th className="w-36 bg-gradient-to-b from-brand-50 to-white p-5 text-center">
                    <img src="/heavenxcrm-mark.png" alt="" className="mx-auto h-7 w-auto" />
                    <span className="mt-1 block text-sm font-bold text-ink">HeavenxCRM</span>
                  </th>
                  <th className="w-36 p-5 text-center text-sm font-semibold text-slate-500">Spreadsheets</th>
                  <th className="w-36 p-5 text-center text-sm font-semibold text-slate-500">Generic CRM</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, a, b, c]) => (
                  <tr key={label} className="border-b border-slate-100 last:border-0">
                    <td className="p-5 text-[15px] font-medium text-slate-700">{label}</td>
                    <td className="bg-brand-50/40 p-5"><Mark v={a} /></td>
                    <td className="p-5"><Mark v={b} /></td>
                    <td className="p-5"><Mark v={c} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-slate-400">"Generic CRM" reflects typical general-purpose sales CRMs; partial = possible with add-ons, integrations or custom setup.</p>
        </Reveal>
      </div>
    </section>
  )
}
