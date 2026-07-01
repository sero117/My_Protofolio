import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MessageCircle, ArrowUp } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#mobile', label: 'Mobile Apps' },
  { href: '#web', label: 'Web Projects' },
  { href: '#data', label: 'Data Analysis' },
  { href: '#contact', label: 'Contact' },
]

const socials = [
  { href: 'https://github.com/sero117', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/sarah-salem-5a35783b2', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:sarah117salem01@gmail.com', icon: Mail, label: 'Email' },
  { href: 'https://wa.me/963998740489', icon: MessageCircle, label: 'WhatsApp' },
]

const skills = ['Flutter', 'Dart', 'React', 'Node.js', 'Python', 'Power BI', 'Looker Studio', 'Tailwind CSS']

export function Footer() {
  return (
    <footer className="relative pt-20 pb-8 px-4 overflow-hidden">
      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 dark:via-violet-500/40 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-40 bg-violet-400/5 dark:bg-violet-600/8 rounded-full blur-[80px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-10 mb-12"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-black text-base">
                S
              </div>
              <span className="text-xl font-black" style={{ color: 'var(--text-primary)' }}>
                Sarah<span className="text-violet-500">.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-muted)' }}>
              Full Stack Developer & Data Analyst, building impactful digital solutions
              and open to opportunities worldwide.
            </p>
            <div className="flex gap-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <a key={label} href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-violet-50 dark:hover:bg-violet-500/15 hover:border-violet-300 dark:hover:border-violet-500/30 flex items-center justify-center transition-all group">
                  <Icon className="w-4 h-4 text-slate-500 dark:text-slate-400 group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--text-muted)' }}>Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href}
                    className="text-sm flex items-center gap-2 group transition-colors duration-200"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <span className="w-3 h-px bg-slate-300 dark:bg-slate-700 group-hover:bg-violet-500 group-hover:w-5 transition-all duration-200" />
                    <span className="group-hover:text-violet-600 dark:group-hover:text-violet-300 transition-colors">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'var(--text-muted)' }}>Tech Stack</h4>
            <div className="flex flex-wrap gap-1.5">
              {skills.map(skill => (
                <span key={skill} className="tag-violet text-[11px]">{skill}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="border-t border-slate-200 dark:border-white/[0.07] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            © 2026 Sarah Salem — All rights reserved
          </p>
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Full Stack Developer & Data Analyst
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-xs transition-colors hover:text-violet-600 dark:hover:text-violet-300"
            style={{ color: 'var(--text-muted)' }}
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to top
          </button>
        </div>
      </div>
    </footer>
  )
}
