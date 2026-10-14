import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { SectionHeading } from '../components/Section'

const faqs = [
  ['Who is HeavenxCRM for?', 'Student admission consultancies, study-abroad agencies and education counselling firms — from a single office with a few counselors to multi-branch teams.'],
  ['How do leads get into the CRM?', 'Facebook and Instagram Lead Ads sync automatically (real-time, with a backup sync so nothing is lost). Students who register on your website are created as leads too, and your team can quick-add walk-ins and phone enquiries in seconds.'],
  ['Do we need Zoom or Google Meet for counselling sessions?', 'No. HeavenxCRM has built-in video and audio meetings. You schedule or start a meeting and the student receives a secure link by email — they join from their browser, no app install needed.'],
  ['Can counselors see each other\'s students?', 'Not by default. Each counselor sees only the students assigned to them. Managers and admins can see everything, and you can grant wider access to specific people such as team leads.'],
  ['Will student email replies show up in the CRM?', 'Yes. Emails you send from the CRM go out from your company mailbox, and student replies are read back from that inbox and attached to the right student\'s timeline automatically.'],
  ['Can we customise pipeline stages?', 'Yes. Stages are fully configurable — rename, reorder or add new ones, and mark which count as won or lost for reporting.'],
  ['Where is our data stored?', 'HeavenxCRM can run on a dedicated server for your agency, so your student data stays under your control. Talk to us about cloud or private-server options.'],
  ['How long does it take to get started?', 'Most agencies are up and running quickly. The Technoheaven team handles setup, imports your existing student list and trains your counselors.'],
]

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <section id="faq" className="bg-slate-50/70 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 lg:px-8">
        <SectionHeading eyebrow="FAQ" title="Questions agencies ask us" />
        <div className="mt-12 divide-y divide-slate-200 rounded-3xl bg-white px-6 shadow-sm ring-1 ring-slate-200 sm:px-8">
          {faqs.map(([q, a], i) => {
            const isOpen = open === i
            return (
              <div key={q}>
                <button
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-ink">{q}</span>
                  <Plus size={20} className={`shrink-0 text-brand-600 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="pb-5 leading-relaxed text-slate-600">{a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
