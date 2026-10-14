import {
  KanbanSquare,
  FileCheck2,
  MessagesSquare,
  Video,
  ListTodo,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  BarChart3,
  Command,
  Send,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { Facebook } from '../components/BrandIcons'
import { Reveal, SectionHeading } from '../components/Section'

type Feature = { icon: ComponentType<{ size?: number; className?: string }>; title: string; body: string; points: string[]; tint: string }

const features: Feature[] = [
  {
    icon: KanbanSquare,
    title: 'Visual admission pipeline',
    body: 'Drag students across stages from New to Enrolled. Rename, reorder or add stages any time — no developer needed.',
    points: ['Drag-and-drop Kanban board', 'Won / lost stages for clean reporting', 'Priority and next follow-up dates'],
    tint: 'from-sky-500 to-brand-600',
  },
  {
    icon: Facebook,
    title: 'Automatic lead capture',
    body: 'Facebook and Instagram Lead Ads arrive in the CRM in real time, with the original form answers attached.',
    points: ['Real-time webhook + safety sync', 'Lead source attribution', 'Manager leads inbox for assignment'],
    tint: 'from-[#1877f2] to-sky-500',
  },
  {
    icon: FileCheck2,
    title: 'Application tracking',
    body: 'One student, many courses. Track each application separately from Submitted to Offer Received to Enrolled.',
    points: ['Per-course application status', 'Documents-requested stage', 'Snapshot of details at submission'],
    tint: 'from-amber-500 to-orange-500',
  },
  {
    icon: MessagesSquare,
    title: 'Unified communication history',
    body: 'Every email, call, WhatsApp, SMS, in-person visit and internal note lives on the student timeline.',
    points: ['Send email from the CRM', 'Student replies synced from your inbox', 'Bulk email to selected students'],
    tint: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Video,
    title: 'Built-in video & audio meetings',
    body: 'Schedule or start a meeting instantly. The student gets a secure link by email — no Zoom licence required.',
    points: ['Pre-join lobby, camera & mic check', 'Peer-to-peer, encrypted media', 'Call requests from students'],
    tint: 'from-violet-500 to-fuchsia-500',
  },
  {
    icon: ListTodo,
    title: 'Tasks, reminders & follow-ups',
    body: 'Never miss a deadline. Create tasks, appointments and follow-ups linked to each student and counselor.',
    points: ['Due dates and priorities', 'Pending / in-progress / done board', 'Overdue items surfaced on the dashboard'],
    tint: 'from-rose-500 to-pink-500',
  },
  {
    icon: GraduationCap,
    title: 'University & course database',
    body: 'Browse universities and courses by country, level, category, fees and scholarships — right inside the CRM.',
    points: ['Country-specific entry requirements', 'Tuition fees with currency handling', 'Scholarship & career-support data'],
    tint: 'from-indigo-500 to-blue-600',
  },
  {
    icon: Sparkles,
    title: 'AI course matching & advisor',
    body: 'Semantic search finds the best-fit courses for a student\'s profile and budget. AI also analyses resumes and answers questions.',
    points: ['Meaning-based, not keyword, search', 'Budget & country filters', 'AI resume analysis and advisor chat'],
    tint: 'from-amber-400 to-yellow-500',
  },
  {
    icon: ShieldCheck,
    title: 'Roles & data isolation',
    body: 'Admins, managers and counselors each see exactly what they should. Counselors see only their own caseload by default.',
    points: ['11 granular CRM permissions', 'Per-counselor overrides', 'Full CRM audit log'],
    tint: 'from-slate-600 to-slate-800',
  },
  {
    icon: BarChart3,
    title: 'Dashboards & analytics',
    body: 'See leads, conversions, applications and team activity in real time — plus website visitor and form analytics.',
    points: ['Live KPI dashboard', 'Visitor & submission analytics', 'Activity feed across the team'],
    tint: 'from-cyan-500 to-sky-600',
  },
  {
    icon: Command,
    title: 'Fast by design',
    body: 'A command palette (Ctrl/⌘ + K) jumps to any student, page or action in a keystroke. Quick-add a student in seconds.',
    points: ['Global search & quick actions', 'Quick-add student dialog', 'Light and dark mode'],
    tint: 'from-teal-500 to-emerald-600',
  },
  {
    icon: Send,
    title: 'Notifications that reach students',
    body: 'Students are notified by email about meetings, messages and updates, so they stay engaged and respond faster.',
    points: ['Branded email templates', 'Meeting invitations with links', 'Password reset & secure login'],
    tint: 'from-purple-500 to-violet-700',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative bg-slate-50/70 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Everything in one platform"
          title={<>Everything your admissions team needs. <span className="text-gradient">Nothing it doesn't.</span></>}
          lead="HeavenxCRM was built for how admission consultancies actually work: students, counselors, universities and deadlines. Here's what's included."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 0.06}>
              <article className="group relative h-full rounded-3xl border border-slate-200/80 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-2xl hover:shadow-slate-900/10">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br ${f.tint} text-white shadow-lg`}>
                  <f.icon size={22} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{f.body}</p>
                <ul className="mt-5 space-y-2 border-t border-slate-100 pt-5">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-500">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-500" />
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
