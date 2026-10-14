import { Check, ArrowRight } from 'lucide-react'
import { Button, Reveal, SectionHeading } from '../components/Section'

const plans = [
  {
    name: 'Starter',
    tagline: 'For a growing consultancy getting off spreadsheets.',
    features: ['Visual pipeline & student profiles', 'Tasks, reminders & follow-ups', 'Email from the CRM', 'University & course database', 'Onboarding & data import help'],
  },
  {
    name: 'Professional',
    tagline: 'For teams of counselors running paid campaigns.',
    featured: true,
    features: ['Everything in Starter', 'Facebook & Instagram Lead Ads sync', 'Built-in video & audio meetings', 'Manager leads inbox & caseloads', 'AI course matching & resume analysis', 'Analytics dashboards'],
  },
  {
    name: 'Enterprise',
    tagline: 'For multi-branch agencies with custom needs.',
    features: ['Everything in Professional', 'Your own domain & branding', 'Private server / on-premise option', 'Custom fields, stages & workflows', 'Priority support from Technoheaven'],
  },
]

export default function Plans() {
  return (
    <section id="plans" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Plans"
          title="A plan that fits the size of your team"
          lead="Every plan includes setup, training and support from the Technoheaven team. Tell us about your agency and we'll send a tailored quote."
        />
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-3xl p-8 ${
                  p.featured ? 'bg-ink text-white shadow-2xl shadow-brand-900/30 ring-2 ring-brand-500 lg:-mt-4 lg:pb-12' : 'border border-slate-200 bg-white'
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-8 rounded-full bg-gradient-to-r from-brand-500 to-[#6d3fc0] px-3 py-1 text-xs font-bold text-white">Most popular</span>
                )}
                <h3 className={`text-xl font-bold ${p.featured ? 'text-white' : 'text-ink'}`}>{p.name}</h3>
                <p className={`mt-2 text-sm ${p.featured ? 'text-slate-300' : 'text-slate-500'}`}>{p.tagline}</p>
                <p className={`mt-6 text-3xl font-extrabold ${p.featured ? 'text-white' : 'text-ink'}`}>Custom quote</p>
                <p className={`text-sm ${p.featured ? 'text-slate-400' : 'text-slate-500'}`}>Priced on team size & needs</p>
                <ul className="mt-8 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className={`flex items-start gap-2.5 text-[15px] ${p.featured ? 'text-slate-200' : 'text-slate-600'}`}>
                      <Check size={18} className={`mt-0.5 shrink-0 ${p.featured ? 'text-brand-300' : 'text-brand-500'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button href="#contact" variant={p.featured ? 'primary' : 'ghost'} className="mt-8 w-full">
                  Get a quote <ArrowRight size={16} />
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
