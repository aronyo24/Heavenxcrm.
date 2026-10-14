import { Crown, Briefcase, Headset } from 'lucide-react'
import { Reveal, SectionHeading } from '../components/Section'

const roles = [
  {
    icon: Crown,
    role: 'Owners & Admins',
    headline: 'See the whole business',
    points: ['Company-wide dashboards and analytics', 'Website visitor & form-submission insights', 'Manage managers, users and integrations', 'Full audit trail of CRM activity'],
  },
  {
    icon: Briefcase,
    role: 'Managers',
    headline: 'Run a high-performing team',
    points: ['Leads inbox to triage and assign new enquiries', 'Add counselors and set caseload limits', 'Grant or restrict permissions per person', 'Monitor pipeline health across counselors'],
  },
  {
    icon: Headset,
    role: 'Counselors',
    headline: 'Focus on students, not admin',
    points: ['A personal caseload — only their students', 'Tasks and follow-ups due today', 'Email, call and video in one place', 'Course search and AI help on hand'],
  },
]

export default function Roles() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Built for every seat"
          title="The right view for every person on your team"
          lead="Role-based access keeps data safe and screens uncluttered. Everyone gets exactly the tools — and only the student data — they need."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {roles.map((r, i) => (
            <Reveal key={r.role} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <r.icon size={22} />
                  </span>
                  <p className="text-sm font-bold uppercase tracking-wider text-slate-500">{r.role}</p>
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink">{r.headline}</h3>
                <ul className="mt-5 space-y-3">
                  {r.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[15px] text-slate-600">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-brand-500 to-violet-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
