import { Facebook, Instagram } from '../components/BrandIcons'
import { Mail, MessageCircle, Globe, Video, Phone, Inbox } from 'lucide-react'

const items = [
  { icon: Facebook, label: 'Facebook Lead Ads' },
  { icon: Instagram, label: 'Instagram Lead Ads' },
  { icon: Globe, label: 'Website sign-ups & applications' },
  { icon: Mail, label: 'Email (send & receive)' },
  { icon: Inbox, label: 'Shared inbox sync' },
  { icon: MessageCircle, label: 'WhatsApp & SMS logging' },
  { icon: Phone, label: 'Audio calls' },
  { icon: Video, label: 'HD video meetings' },
]

export default function TrustStrip() {
  return (
    <section className="border-y border-slate-100 bg-slate-50/60 py-10">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        Every channel your students use — connected to one record
      </p>
      <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="animate-marquee flex w-max gap-12">
          {[...items, ...items].map(({ icon: Icon, label }, i) => (
            <div key={i} className="flex items-center gap-2.5 text-slate-500" aria-hidden={i >= items.length}>
              <Icon size={20} className="text-slate-400" />
              <span className="whitespace-nowrap text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
