import { Magnet, UserCheck, Presentation, FileCheck2, PartyPopper } from 'lucide-react'
import { Reveal, SectionHeading } from '../components/Section'

const steps = [
  { icon: Magnet, title: 'Capture', body: 'Leads arrive from Facebook & Instagram ads, website sign-ups, or are quick-added by your team.' },
  { icon: UserCheck, title: 'Assign', body: 'Managers review the leads inbox and assign each student to the right counselor.' },
  { icon: Presentation, title: 'Counsel', body: 'Counselors call, email or meet by video, shortlist courses with AI and log every touch-point.' },
  { icon: FileCheck2, title: 'Apply', body: 'Track each course application through review, document requests and offers.' },
  { icon: PartyPopper, title: 'Enroll', body: 'Move the student to Enrolled and watch your conversion rate on the dashboard.' },
]

export default function Process() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-ink py-24 lg:py-32">
      <div className="bg-grid-dark absolute inset-0" />
      <div className="absolute left-1/2 top-0 h-80 w-[800px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          dark
          eyebrow="How it works"
          title="From first click to enrolment — one connected process"
          lead="HeavenxCRM mirrors the real admission journey, so your team spends time with students instead of chasing information."
        />
        <ol className="relative mt-16 grid gap-6 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-white/20 to-transparent md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <li className="relative text-center">
                <div className="relative mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-[#6d3fc0] text-white shadow-lg shadow-brand-500/30">
                  <s.icon size={26} />
                  <span className="absolute -right-2 -top-2 grid h-6 w-6 place-items-center rounded-full bg-white text-xs font-bold text-ink">{i + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
