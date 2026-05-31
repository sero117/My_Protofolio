import { motion } from 'framer-motion'
import { Github, Smartphone, MapPin, Zap, Users, BookOpen, Wifi, Database, Code2 } from 'lucide-react'

function PhoneMockup({ gradient, children }) {
  return (
    <div className="relative mx-auto w-52 h-[420px] select-none">
      <div className={`absolute inset-0 ${gradient} rounded-[44px] blur-2xl opacity-25 scale-95`} />
      <div className="relative w-full h-full bg-gradient-to-b from-slate-800 to-slate-900 rounded-[44px] border-[3px] border-white/15 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between px-5 pt-3 pb-1">
          <span className="text-[10px] text-white/50 font-medium">9:41</span>
          <div className="flex gap-1 items-center">
            <div className="w-3 h-1.5 bg-white/40 rounded-sm" />
            <Wifi className="w-2.5 h-2.5 text-white/40" />
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-900 rounded-b-2xl" />
        <div className="flex flex-col items-center justify-center h-[calc(100%-3rem)] px-4">
          {children}
        </div>
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-20 h-1 bg-white/25 rounded-full" />
      </div>
    </div>
  )
}

const projects = [
  {
    id: 'waselni',
    title: 'Waselni',
    subtitle: 'Transportation & Route Booking',
    github: 'https://github.com/wesamkhateeb98-creator/SoftPro.Waselni.Mobile.git',
    gradient: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    accentColor: 'emerald',
    phoneGradient: 'bg-gradient-to-br from-emerald-500/30 to-teal-500/30',
    phoneIcon: '🚗',
    features: [
      { icon: Zap, label: 'Real-time Tracking', desc: 'Socket.io powered live updates' },
      { icon: MapPin, label: 'Google Maps', desc: 'Interactive route planning' },
      { icon: Database, label: 'API Integration', desc: 'Dio REST API client' },
      { icon: Code2, label: 'State: GetX', desc: 'Clean reactive state management' },
    ],
    tech: ['Flutter', 'Dart', 'GetX', 'Socket.io', 'Dio', 'Google Maps API'],
    description: 'A complete transportation app enabling real-time ride tracking, route booking, and interactive map navigation. Built with clean architecture and reactive state management.',
  },
  {
    id: 'islamic-school',
    title: 'Islamic School',
    subtitle: 'Complete Educational Management System',
    github: null,
    gradient: 'bg-gradient-to-br from-violet-500 to-indigo-600',
    accentColor: 'violet',
    phoneGradient: 'bg-gradient-to-br from-violet-500/30 to-indigo-500/30',
    phoneIcon: '🎓',
    features: [
      { icon: Users, label: 'Student Management', desc: 'Complete student profiles' },
      { icon: BookOpen, label: 'Grade System', desc: 'Academic performance tracking' },
      { icon: Code2, label: 'Attendance', desc: 'Daily monitoring & reports' },
      { icon: Database, label: 'Offline Storage', desc: 'SQLite local database' },
    ],
    tech: ['Flutter', 'Dart', 'GetX', 'HTTP', 'SQLite', 'Charts'],
    description: 'Comprehensive school management system covering student enrollment, attendance tracking, grade management, and administrative reporting in one unified platform.',
  },
]

const iconTextColor = { emerald: 'text-emerald-600 dark:text-emerald-400', violet: 'text-violet-600 dark:text-violet-400' }

export function MobileSection() {
  return (
    <section id="mobile" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#060d1f] dark:via-[#0a1020] dark:to-[#060d1f] -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 dark:via-emerald-500/30 to-transparent" />
      <div className="absolute left-0 top-40 w-80 h-80 bg-emerald-400/6 dark:bg-emerald-600/8 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Mobile Development</span>
          </div>
          <h2 className="section-header text-gradient-emerald mb-4">Mobile Apps</h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Building high-performance cross-platform mobile applications with Flutter & Dart,
            delivering native-quality experiences on both iOS and Android.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-24">
          {projects.map((project, idx) => {
            const isReversed = idx % 2 === 1
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Info card */}
                <div className={isReversed ? 'lg:col-start-2' : ''}>
                  <div className="card-glow p-8 rounded-2xl flex flex-col gap-6">
                    <div>
                      <h3 className={`text-2xl font-black text-gradient-${project.accentColor} mb-1`}>
                        {project.title}
                      </h3>
                      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{project.subtitle}</p>
                    </div>

                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {project.description}
                    </p>

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
                      {project.github ? (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="btn-primary py-2.5 text-sm flex-1 justify-center">
                          <Github className="w-4 h-4" />
                          View on GitHub
                        </a>
                      ) : (
                        <div className="flex-1 flex items-center justify-center py-2.5 px-4 rounded-xl text-sm border border-slate-200 dark:border-white/10"
                          style={{ color: 'var(--text-muted)', background: 'var(--bg-card2)' }}>
                          Private Project
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Phone mockup */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className={`flex items-center justify-center ${isReversed ? 'lg:col-start-1' : ''}`}
                >
                  <div className="animate-float">
                    <PhoneMockup gradient={project.phoneGradient}>
                      <div className="text-center">
                        <div className="text-6xl mb-3">{project.phoneIcon}</div>
                        <div className={`text-xs font-bold ${iconTextColor[project.accentColor]} mb-1`}>
                          {project.title}
                        </div>
                        <div className="text-white/40 text-[10px]">{project.subtitle}</div>
                        <div className="mt-4 flex flex-wrap gap-1 justify-center">
                          {project.tech.slice(0, 3).map(t => (
                            <span key={t} className="text-[9px] px-2 py-0.5 bg-white/10 text-white/60 rounded-full">{t}</span>
                          ))}
                        </div>
                      </div>
                    </PhoneMockup>
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
