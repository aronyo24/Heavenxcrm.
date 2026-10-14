import { CheckCircle2, Mail, Phone, MessageCircle, StickyNote, Mic, Video, Search, MapPin, Wallet } from 'lucide-react'
import type { ReactNode } from 'react'
import { Reveal } from '../components/Section'

function TimelineMock() {
  const items = [
    { icon: Mail, color: 'bg-sky-100 text-sky-600', title: 'Email sent: Offer letter checklist', meta: 'Outbound · Sarah K. · 10:24' },
    { icon: Mail, color: 'bg-emerald-100 text-emerald-600', title: 'Reply received from student', meta: 'Inbound · synced from inbox · 11:02' },
    { icon: Phone, color: 'bg-violet-100 text-violet-600', title: 'Call logged — 12 min, connected', meta: 'Outbound · Sarah K. · 14:15' },
    { icon: MessageCircle, color: 'bg-green-100 text-green-600', title: 'WhatsApp: passport copy received', meta: 'Inbound · 16:40' },
    { icon: StickyNote, color: 'bg-amber-100 text-amber-600', title: 'Note: prefers January intake', meta: 'Internal · visible to team' },
  ]
  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/5 ring-1 ring-slate-200">
      <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-violet-500 font-bold text-white">NJ</div>
        <div>
          <p className="font-bold text-ink">Nusrat Jahan</p>
          <p className="text-xs text-slate-500">MBA · Australia · Stage: Counseling</p>
        </div>
        <span className="ml-auto rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold text-red-600">High priority</span>
      </div>
      <ol className="mt-5 space-y-4">
        {items.map(({ icon: Icon, color, title, meta }) => (
          <li key={title} className="flex gap-3">
            <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg ${color}`}>
              <Icon size={15} />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{title}</p>
              <p className="text-xs text-slate-400">{meta}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}

function MeetingMock() {
  return (
    <div className="overflow-hidden rounded-3xl bg-ink shadow-xl shadow-slate-900/20 ring-1 ring-white/10">
      <div className="grid grid-cols-2 gap-2 p-3">
        {[
          ['Sarah K.', 'Counselor', 'from-brand-500/40 to-violet-600/40'],
          ['Imran S.', 'Student', 'from-emerald-500/30 to-sky-600/30'],
        ].map(([n, r, g]) => (
          <div key={n} className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${g}`}>
            <div className="absolute inset-0 grid place-items-center">
              <div className="grid h-16 w-16 place-items-center rounded-full bg-white/15 text-xl font-bold text-white">
                {n.split(' ').map((s) => s[0]).join('')}
              </div>
            </div>
            <span className="absolute bottom-2 left-2 rounded-md bg-black/40 px-2 py-0.5 text-[11px] font-medium text-white">
              {n} · {r}
            </span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-3 pb-5 pt-2">
        {[Mic, Video].map((Icon, i) => (
          <span key={i} className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white">
            <Icon size={17} />
          </span>
        ))}
        <span className="rounded-full bg-red-500 px-4 py-2 text-xs font-semibold text-white">Leave</span>
      </div>
    </div>
  )
}

function SearchMock() {
  const rows = [
    ['MSc Data Science', 'University of Leeds · UK', '£27,750', '96%'],
    ['MSc Business Analytics', 'University of Glasgow · UK', '£29,460', '93%'],
    ['MDataSci', 'University of Waterloo · Canada', 'CA$34,000', '89%'],
  ]
  return (
    <div className="rounded-3xl bg-white p-6 shadow-xl shadow-slate-900/5 ring-1 ring-slate-200">
      <div className="flex items-center gap-2 rounded-xl bg-slate-50 px-4 py-3 ring-1 ring-slate-200">
        <Search size={16} className="text-slate-400" />
        <span className="text-sm text-slate-600">"data career, good scholarships, under £30k"</span>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {[
          [MapPin, 'UK, Canada'],
          [Wallet, 'Budget ≤ £30k'],
        ].map(([Icon, t]) => {
          const I = Icon as typeof MapPin
          return (
            <span key={t as string} className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700">
              <I size={12} /> {t as string}
            </span>
          )
        })}
      </div>
      <ul className="mt-5 divide-y divide-slate-100">
        {rows.map(([c, u, fee, m]) => (
          <li key={c} className="flex items-center gap-3 py-3">
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-ink">{c}</p>
              <p className="truncate text-xs text-slate-400">{u} · {fee}/yr</p>
            </div>
            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-600">{m} match</span>
          </li>
        ))}
      </ul>
      <p className="mt-2 text-[11px] text-slate-400">Illustrative example</p>
    </div>
  )
}

function Row({ eyebrow, title, body, points, mock, flip }: { eyebrow: string; title: string; body: string; points: string[]; mock: ReactNode; flip?: boolean }) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <Reveal className={flip ? 'lg:order-2' : ''}>
        <p className="text-sm font-bold uppercase tracking-wider text-brand-600">{eyebrow}</p>
        <h3 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-[2.1rem] sm:leading-tight">{title}</h3>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">{body}</p>
        <ul className="mt-6 space-y-3">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-slate-700">
              <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-brand-500" />
              {p}
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal delay={0.1} className={flip ? 'lg:order-1' : ''}>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-100 to-violet-100 opacity-70" />
          <div className="relative">{mock}</div>
        </div>
      </Reveal>
    </div>
  )
}

export default function Showcase() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl space-y-28 px-5 lg:px-8">
        <Row
          eyebrow="360° student profile"
          title="The whole story of every student, on one screen"
          body="Open a student and see everything: personal and academic details, lead-form answers, applications, tasks, meetings and every conversation — in date order."
          points={[
            'Emails you send and replies they send, automatically matched',
            'Calls, WhatsApp, SMS and in-person visits logged in one click',
            'Hand over a student to a colleague with zero context lost',
          ]}
          mock={<TimelineMock />}
        />
        <Row
          flip
          eyebrow="Meetings without extra software"
          title="Counsel students face-to-face, from inside the CRM"
          body="Create an instant or scheduled meeting and HeavenxCRM emails the student a private link. Both sides check camera and microphone in a lobby, then join the same room."
          points={[
            'Video or audio-only — works in any modern browser',
            'Students can request a call; counselors accept and schedule',
            'Every meeting is recorded on the student timeline',
          ]}
          mock={<MeetingMock />}
        />
        <Row
          eyebrow="AI-powered course matching"
          title="Recommend the right course in seconds, not hours"
          body="Describe what the student wants in plain language. Semantic search understands meaning, then ranks courses by fit, budget and country — from your own university database."
          points={[
            'Filter by country, level, category, fees and scholarships',
            'Country-specific entry requirements at a glance',
            'AI resume analysis to understand a student\'s profile faster',
          ]}
          mock={<SearchMock />}
        />
      </div>
    </section>
  )
}
