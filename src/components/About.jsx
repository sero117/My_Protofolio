import { motion } from 'framer-motion'
import {
  GraduationCap, Award, Smartphone, Globe, BarChart3,
  Languages, MapPin, CheckCircle2, Cpu, Code2
} from 'lucide-react'

const skillCategories = [
  {
    label: 'Mobile Development',
    color: 'emerald',
    icon: Smartphone,
    skills: ['Flutter', 'Dart', 'GetX', 'Provider', 'REST APIs', 'Socket.io', 'Google Maps', 'Dio'],
  },
  {
    label: 'Web Development',
    color: 'violet',
    icon: Globe,
    skills: ['React.js', 'Node.js', 'JavaScript', 'HTML5 / CSS3', 'Tailwind CSS', 'REST APIs'],
  },
  {
    label: 'Data Analysis',
    color: 'amber',
    icon: BarChart3,
    skills: ['Python', 'Pandas', 'Power BI', 'Looker Studio', 'Matplotlib', 'Excel', 'SQL'],
  },
  {
    label: 'AI & Dev Tools',
    color: 'cyan',
    icon: Cpu,
    skills: ['Claude AI', 'Gemini', 'GitHub Copilot', 'Blackbox AI', 'Git', 'Vite', 'VS Code'],
  },
]

const iconColor = {
  emerald: 'text-emerald-600 dark:text-emerald-400',
  violet:  'text-violet-600 dark:text-violet-400',
  amber:   'text-amber-600 dark:text-amber-400',
  cyan:    'text-cyan-600 dark:text-cyan-400',
}
const iconBg = {
  emerald: 'bg-emerald-50 dark:bg-emerald-500/10',
  violet:  'bg-violet-50 dark:bg-violet-500/10',
  amber:   'bg-amber-50 dark:bg-amber-500/10',
  cyan:    'bg-cyan-50 dark:bg-cyan-500/10',
}

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
})

export function About() {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#060d1f] dark:via-[#0b1225] dark:to-[#060d1f] -z-10" />
      <div className="absolute inset-0 bg-grid-pattern opacity-50 -z-10" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-violet-400/8 dark:bg-violet-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div {...fade()} className="text-center mb-16">
          <div className="section-label bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 text-violet-600 dark:text-violet-400 mb-4">
            <Code2 className="w-3.5 h-3.5" />
            <span>Who I Am</span>
          </div>
          <h2 className="section-header text-gradient-violet mb-5">About Me</h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Passionate software engineer with expertise across mobile development, web engineering,
            and data analytics — delivering clean, scalable solutions that create real business impact.
          </p>
        </motion.div>

        {/* Top Row */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">

          {/* Professional Summary */}
          <motion.div {...fade(0.1)} className="md:col-span-2 card-glow p-7 rounded-2xl">
            <div className="flex flex-col sm:flex-row gap-6 mb-5">
              {/* Profile photo */}
              <div className="flex-shrink-0 flex flex-col items-center gap-2">
                <div className="relative">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden ring-4 ring-violet-500/20 shadow-xl shadow-violet-500/10">
                    <img
                      src={`${import.meta.env.BASE_URL}images/my_picture.jpg`}
                      alt="Sarah Salem"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-md">
                    <span className="text-white font-black text-[10px]">S</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                  style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', color: '#34d399' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open to Work
                </div>
              </div>

              {/* Summary text */}
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                  <span className="w-1.5 h-5 bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-full inline-block" />
                  Professional Summary
                </h3>
                <p className="leading-relaxed text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>
                  I'm a full-stack software engineer and certified data analyst, currently seeking
                  new opportunities. I specialize in building cross-platform mobile apps with Flutter,
                  scalable web applications with React & Node.js, and turning complex data into clear business insights
                  using Python, Power BI, and Looker Studio.
                </p>
                <p className="leading-relaxed text-sm" style={{ color: 'var(--text-muted)' }}>
                  I have a strong problem-solving mindset and I'm passionate about writing clean, maintainable code.
                  I leverage modern AI tools to accelerate development cycles and deliver higher-quality products faster.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Problem Solver', 'Clean Code Advocate', 'Fast Learner', 'Team Player', 'Detail-Oriented'].map(t => (
                <span key={t} className="flex items-center gap-1.5 tag-violet text-xs">
                  <CheckCircle2 className="w-3 h-3" /> {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Quick Info */}
          <motion.div {...fade(0.2)} className="card-glow p-7 rounded-2xl flex flex-col gap-5">
            {/* Languages */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Languages className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Languages</span>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Arabic</span>
                  <span className="tag-emerald">Native</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>English</span>
                  <span className="tag-cyan">Professional</span>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 dark:border-white/8" />

            {/* Availability */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Availability</span>
              </div>
              <div className="space-y-1.5 text-sm" style={{ color: 'var(--text-secondary)' }}>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Remote / Hybrid / On-site
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Open to Relocation
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                  Worldwide Opportunities
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education & Certification */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <motion.div {...fade(0.3)} className="card-glow p-7 rounded-2xl flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-600 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/25">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase mb-1 text-violet-600 dark:text-violet-400">Education</div>
              <h3 className="text-lg font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>University of Kalamoon</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>B.Sc. Information Technology Engineering</p>
              <p className="text-xs mt-1.5" style={{ color: 'var(--text-muted)' }}>Strong foundation in software architecture, algorithms, and systems design</p>
            </div>
          </motion.div>

          <motion.div {...fade(0.4)} className="card-glow p-7 rounded-2xl flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/25">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase mb-1 text-amber-600 dark:text-amber-400">Certification</div>
              <h3 className="text-lg font-bold mb-0.5" style={{ color: 'var(--text-primary)' }}>Professional Data Analyst</h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Python · Power BI · Looker Studio</p>
              <p className="text-xs mt-1.5" style={{ color: 'var(--text-muted)' }}>Certified in transforming raw data into actionable business insights</p>
            </div>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <motion.div {...fade(0.3)}>
          <h3 className="text-xs font-bold tracking-widest uppercase text-center mb-6" style={{ color: 'var(--text-muted)' }}>
            Technical Skills
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                {...fade(0.35 + ci * 0.08)}
                className="card-glow p-5 rounded-2xl"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-9 h-9 rounded-xl ${iconBg[cat.color]} flex items-center justify-center`}>
                    <cat.icon className={`w-5 h-5 ${iconColor[cat.color]}`} />
                  </div>
                  <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{cat.label}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map(skill => (
                    <span key={skill} className={`tag-${cat.color} text-[11px]`}>{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
