import { motion } from 'framer-motion'
import { Globe, Github, ExternalLink, Server, ShoppingCart, Gamepad2, Home, Layout, Database, Code, Palette, Shield } from 'lucide-react'

function BrowserMockup({ accentClass, children }) {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl bg-slate-100 dark:bg-[#0d1321]">
      <div className="flex items-center gap-2 px-4 py-3 bg-slate-200 dark:bg-[#131c2e] border-b border-slate-300 dark:border-white/[0.07]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
        </div>
        <div className="flex-1 mx-3">
          <div className={`h-5 rounded-md ${accentClass} flex items-center justify-center opacity-60`}>
            <div className="h-1.5 bg-white/40 rounded-full w-20" />
          </div>
        </div>
      </div>
      <div className="p-6 min-h-[220px] flex items-center justify-center bg-white dark:bg-[#0d1321]">
        {children}
      </div>
    </div>
  )
}

const projects = [
  {
    id: 'pharmacy',
    title: 'Mayson Pharmacy',
    subtitle: 'E-Commerce Pharmacy Platform',
    website: 'https://mayson-94.pages.dev/',
    github: 'https://github.com/sero117/React_web_pharmacy.git',
    accentColor: 'violet',
    browserClass: 'bg-violet-300 dark:bg-violet-500/20',
    icon: '💊',
    features: [
      { icon: Globe, label: 'React.js', desc: 'Modern SPA with hooks' },
      { icon: Server, label: 'Node.js', desc: 'RESTful backend API' },
      { icon: ShoppingCart, label: 'E-Commerce', desc: 'Cart & secure checkout' },
      { icon: Shield, label: 'Stripe', desc: 'Payment integration' },
    ],
    tech: ['React', 'Node.js', 'Tailwind CSS', 'Stripe', 'MongoDB'],
    description: 'A full-stack pharmacy e-commerce platform with product catalog management, shopping cart functionality, and secure online payment processing via Stripe.',
  },
  {
    id: 'gamestore',
    title: 'GameStore Web',
    subtitle: 'Gaming E-Commerce Platform',
    website: 'https://sero117.github.io/GameStore_Web/',
    github: 'https://github.com/sero117/GameStore_Web.git',
    accentColor: 'cyan',
    browserClass: 'bg-cyan-300 dark:bg-cyan-500/20',
    icon: '🎮',
    features: [
      { icon: Code, label: 'Vanilla JS', desc: 'Pure JavaScript, no framework' },
      { icon: Layout, label: 'CSS3', desc: 'Modern animations & layout' },
      { icon: Gamepad2, label: 'Game Catalog', desc: 'Browse & filter games' },
      { icon: Database, label: 'Local Storage', desc: 'Persistent cart state' },
    ],
    tech: ['JavaScript', 'CSS3', 'HTML5', 'Local Storage', 'API Integration'],
    description: 'An interactive gaming store with a dynamic product catalog, game filtering, reviews system, and a full shopping cart built purely with vanilla JavaScript.',
  },
  {
    id: 'real-estate',
    title: 'Real Estate Platform',
    subtitle: 'Property Rental & Sales',
    website: 'https://sero117.github.io/Real_Estate/',
    github: 'https://github.com/sero117/Real_Estate.git',
    accentColor: 'emerald',
    browserClass: 'bg-emerald-300 dark:bg-emerald-500/20',
    icon: '🏠',
    features: [
      { icon: Home, label: 'Property Listings', desc: 'Houses & apartments' },
      { icon: Layout, label: 'Responsive UI', desc: 'Mobile-first design' },
      { icon: Database, label: 'REST APIs', desc: 'Dynamic property data' },
      { icon: Palette, label: 'Clean UI', desc: 'Modern interface' },
    ],
    tech: ['React', 'CSS3', 'JavaScript', 'REST APIs', 'Responsive Design'],
    description: 'A comprehensive real estate platform for browsing property listings with advanced search, filtering by location and price range, and detailed property views.',
  },
]

const iconTextColor = {
  violet: 'text-violet-600 dark:text-violet-400',
  cyan: 'text-cyan-600 dark:text-cyan-400',
  emerald: 'text-emerald-600 dark:text-emerald-400',
}

export function WebSection() {
  return (
    <section id="web" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#060d1f] dark:via-[#0b1225] dark:to-[#060d1f] -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 dark:via-violet-500/30 to-transparent" />
      <div className="absolute right-0 top-40 w-96 h-96 bg-violet-400/6 dark:bg-violet-600/8 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 text-violet-600 dark:text-violet-400 mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>Web Development</span>
          </div>
          <h2 className="section-header text-gradient-violet mb-4">Web Projects</h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Crafting scalable, high-performance web applications with modern JavaScript stack —
            from frontend UIs to full-stack platforms with backend APIs.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, idx) => {
            const isReversed = idx % 2 === 1
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={isReversed ? 'lg:col-start-2' : ''}>
                  <div className="card-glow p-8 rounded-2xl flex flex-col gap-6">
                    <div>
                      <h3 className={`text-2xl font-black text-gradient-${project.accentColor} mb-1`}>{project.title}</h3>
                      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{project.subtitle}</p>
                    </div>

                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>

                    <div className="grid grid-cols-2 gap-3">
                      {project.features.map((f) => (
                        <div key={f.label} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                          <f.icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${iconTextColor[project.accentColor]}`} />
                          <div>
                            <div className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>{f.label}</div>
                            <div className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{f.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map(t => (
                        <span key={t} className={`tag-${project.accentColor} text-[11px]`}>{t}</span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="btn-outline py-2.5 text-sm flex-1 justify-center">
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                      <a href={project.website} target="_blank" rel="noopener noreferrer"
                        className="btn-primary py-2.5 text-sm flex-1 justify-center">
                        <ExternalLink className="w-4 h-4" />
                        Live Site
                      </a>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className={isReversed ? 'lg:col-start-1' : ''}
                >
                  <div className="animate-float">
                    <BrowserMockup accentClass={project.browserClass}>
                      <div className="text-center">
                        <div className="text-6xl mb-3">{project.icon}</div>
                        <div className={`text-sm font-bold text-gradient-${project.accentColor} mb-1`}>{project.title}</div>
                        <div className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>{project.subtitle}</div>
                        <div className="flex flex-wrap gap-1.5 justify-center">
                          {project.tech.slice(0, 3).map(t => (
                            <span key={t} className={`tag-${project.accentColor} text-[10px]`}>{t}</span>
                          ))}
                        </div>
                      </div>
                    </BrowserMockup>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
