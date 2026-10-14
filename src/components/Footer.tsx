import { Mail, Globe } from 'lucide-react'

const YEAR = new Date().getFullYear()

const cols = [
  { title: 'Product', links: [['Features', '#features'], ['How it works', '#how-it-works'], ['Plans', '#plans'], ['FAQ', '#faq']] },
  { title: 'Platform', links: [['Lead pipeline', '#features'], ['Applications', '#features'], ['Video meetings', '#features'], ['AI course matching', '#features']] },
  { title: 'Company', links: [['Technoheaven', '#contact'], ['Book a demo', '#contact'], ['Contact sales', '#contact']] },
]

export default function Footer() {
  return (
    <footer className="bg-ink text-slate-400">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <img src="/heavenxcrm-logo-light.png" alt="HeavenxCRM" className="h-10 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              The all-in-one CRM for student admission consultancies and study-abroad agencies. Built and supported by Technoheaven.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href="mailto:info@technoheaven.org" className="flex items-center gap-2 hover:text-white">
                <Mail size={16} /> info@technoheaven.org
              </a>
              <a href="https://heavenxcrm.com" className="flex items-center gap-2 hover:text-white">
                <Globe size={16} /> heavenxcrm.com
              </a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h3 className="text-sm font-semibold text-white">{c.title}</h3>
              <ul className="mt-4 space-y-3 text-sm">
                {c.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href} className="hover:text-white">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center">
          <p>© {YEAR} Technoheaven. All rights reserved.</p>
          <p>HeavenxCRM is a product of Technoheaven.</p>
        </div>
      </div>
    </footer>
  )
}
