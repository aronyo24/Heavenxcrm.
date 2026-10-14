import { motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  LayoutDashboard,
  KanbanSquare,
  Users,
  FileText,
  MessageSquare,
  GraduationCap,
  CalendarCheck,
  Video,
  Sparkles,
} from 'lucide-react'
import { Button } from '../components/Section'
import { Facebook } from '../components/BrandIcons'

const sideItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: KanbanSquare, label: 'Pipeline' },
  { icon: Users, label: 'Students' },
  { icon: FileText, label: 'Applications' },
  { icon: MessageSquare, label: 'Communications' },
  { icon: GraduationCap, label: 'Universities' },
  { icon: CalendarCheck, label: 'Tasks' },
]

const columns = [
  { title: 'New', color: 'bg-sky-500', cards: [['Ayesha R.', 'UK · MSc Data'], ['Tanvir H.', 'Canada · BBA']] },
  { title: 'Counseling', color: 'bg-violet-500', cards: [['Nusrat J.', 'Australia · MBA'], ['Rafi K.', 'UK · LLM']] },
  { title: 'Applied', color: 'bg-amber-500', cards: [['Sadia M.', 'Germany · MEng']] },
  { title: 'Enrolled', color: 'bg-emerald-500', cards: [['Imran S.', 'UK · BSc CS']] },
]

function DashboardMock() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl shadow-ink/20 ring-1 ring-slate-900/10">
      {/* browser chrome */}
      <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <div className="ml-4 hidden rounded-md bg-white px-3 py-1 text-[11px] text-slate-400 ring-1 ring-slate-200 sm:block">app.heavenxcrm.com/crm</div>
      </div>
      <div className="flex">
        <aside className="hidden w-44 shrink-0 border-r border-slate-100 bg-slate-50/60 p-3 md:block">
          <img src="/heavenxcrm-mark.png" alt="" className="mb-4 h-7 w-auto" />
          <ul className="space-y-1">
            {sideItems.map(({ icon: Icon, label, active }) => (
              <li
                key={label}
                className={`flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-[12px] font-medium ${
                  active ? 'bg-brand-500 text-white' : 'text-slate-500'
                }`}
              >
                <Icon size={14} /> {label}
              </li>
            ))}
          </ul>
        </aside>
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[11px] font-medium text-slate-400">Good morning, Sarah</p>
              <p className="text-sm font-bold text-ink">Today's admissions overview</p>
            </div>
            <span className="hidden rounded-md bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-500 sm:inline">⌘K Search anything</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
            {[
              ['New leads', '128', '+18%', 'text-sky-600'],
              ['In pipeline', '342', '+6%', 'text-violet-600'],
              ['Applications', '96', '+12%', 'text-amber-600'],
              ['Enrolled', '41', '+9%', 'text-emerald-600'],
            ].map(([k, v, d, c]) => (
              <div key={k} className="rounded-xl border border-slate-100 p-3">
                <p className="text-[10px] font-medium text-slate-400">{k}</p>
                <p className="mt-1 text-lg font-extrabold text-ink">{v}</p>
                <p className={`text-[10px] font-semibold ${c}`}>{d} this month</p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
            {columns.map((col, ci) => (
              <div key={col.title} className={`rounded-xl bg-slate-50 p-2.5 ${ci > 1 ? 'hidden lg:block' : ''}`}>
                <div className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold text-slate-600">
                  <span className={`h-2 w-2 rounded-full ${col.color}`} /> {col.title}
                  <span className="ml-auto text-slate-400">{col.cards.length}</span>
                </div>
                <div className="space-y-2">
                  {col.cards.map(([name, meta]) => (
                    <div key={name} className="rounded-lg bg-white p-2 shadow-sm ring-1 ring-slate-100">
                      <p className="text-[11px] font-semibold text-ink">{name}</p>
                      <p className="text-[10px] text-slate-400">{meta}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function FloatingCard({ className, children, delay }: { className: string; children: React.ReactNode; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
      className={`absolute z-10 hidden rounded-2xl bg-white p-3.5 shadow-xl shadow-ink/10 ring-1 ring-slate-900/5 sm:block ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]" />
      <div className="absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-200/60 via-violet-200/50 to-brand-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <motion.a
            href="#features"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/80 py-1 pr-3 pl-1 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-slate-200 backdrop-blur"
          >
            <span className="rounded-full bg-gradient-to-r from-brand-500 to-[#6d3fc0] px-2 py-0.5 text-[11px] font-semibold text-white">New</span>
            AI course matching + built-in video meetings
            <ArrowRight size={14} />
          </motion.a>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-6 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-6xl lg:leading-[1.05]"
          >
            Turn every enquiry into an <span className="text-gradient">enrolled student</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-600"
          >
            HeavenxCRM is the all-in-one CRM for admission consultancies and study-abroad agencies. Capture leads from Facebook and your website,
            move each student through a visual pipeline, track every university application, and talk to students by email, call or video —
            without spreadsheets or five different tools.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button href="#contact" className="w-full px-7 py-3.5 text-base sm:w-auto">
              Book a free demo <ArrowRight size={18} />
            </Button>
            <Button href="#features" variant="ghost" className="w-full px-7 py-3.5 text-base sm:w-auto">
              Explore features
            </Button>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-500"
          >
            {['Personalised onboarding', 'Your data, your server', 'Unlimited pipeline stages'].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <CheckCircle2 size={16} className="text-emerald-500" /> {t}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-r from-brand-400/30 to-violet-500/30 blur-2xl" />
          <FloatingCard className="-left-10 bottom-24" delay={0.9}>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#1877f2]/10 text-[#1877f2]">
                <Facebook size={18} />
              </span>
              <div>
                <p className="text-xs font-bold text-ink">New Facebook lead</p>
                <p className="text-[11px] text-slate-500">Auto-added to pipeline · just now</p>
              </div>
            </div>
          </FloatingCard>
          <FloatingCard className="-right-8 top-6" delay={1.05}>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-100 text-violet-600">
                <Video size={18} />
              </span>
              <div>
                <p className="text-xs font-bold text-ink">Counselling call at 3:00 PM</p>
                <p className="text-[11px] text-slate-500">Video link emailed to student</p>
              </div>
            </div>
          </FloatingCard>
          <FloatingCard className="-right-6 bottom-10" delay={1.2}>
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-amber-100 text-amber-600">
                <Sparkles size={18} />
              </span>
              <div>
                <p className="text-xs font-bold text-ink">12 matching courses found</p>
                <p className="text-[11px] text-slate-500">Within budget · UK & Canada</p>
              </div>
            </div>
          </FloatingCard>
          <div className="relative">
            <DashboardMock />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
