import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MessageCircle, Download, Copy, Check, ExternalLink, Sparkles } from 'lucide-react'

const EMAIL    = 'sarah117salem01@gmail.com'
const WHATSAPP = '963998740489'

function CopyButton({ text, light }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button onClick={copy} title="Copy"
      className={`p-1.5 rounded-lg transition-all ${light
        ? 'bg-white/20 hover:bg-white/30 border border-white/20'
        : 'bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10'
      }`}>
      {copied
        ? <Check  className="w-3.5 h-3.5 text-emerald-400" />
        : <Copy   className={`w-3.5 h-3.5 ${light ? 'text-white/70' : ''}`} style={light ? {} : { color: 'var(--text-muted)' }} />
      }
    </button>
  )
}

const fade = (delay = 0) => ({
  initial:     { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0  },
  viewport:    { once: true },
  transition:  { duration: 0.6, delay },
})

export function Contact() {
  const whatsapp = () => {
    const msg = encodeURIComponent("Hi Sarah, I saw your portfolio and I'd like to connect!")
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank')
  }

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#060d1f] dark:via-[#0b1225] dark:to-[#060d1f] -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 dark:via-violet-500/30 to-transparent" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-400/6 dark:bg-violet-600/8 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div {...fade()} className="text-center mb-14">
          <div className="section-label bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 text-violet-600 dark:text-violet-400 mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-header text-gradient-violet mb-4">Let's Work Together</h2>
          <p className="text-base max-w-xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Have a project, a job opportunity, or just want to say hello?
            Pick the easiest way to reach me below.
          </p>
          {/* Open to work badge */}
          <div className="inline-flex items-center gap-2 mt-5 px-4 py-2 rounded-full border text-sm font-medium"
            style={{ background: 'rgba(52,211,153,0.08)', borderColor: 'rgba(52,211,153,0.25)', color: '#34d399' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to Work — Worldwide Opportunities
            <Sparkles className="w-3.5 h-3.5" />
          </div>
        </motion.div>

        {/* ── Primary contact cards ── */}
        <div className="grid sm:grid-cols-2 gap-4 mb-4">

          {/* WhatsApp */}
          <motion.div {...fade(0.1)}
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
            onClick={whatsapp}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-600" />
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-6">
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex items-center gap-1.5 text-emerald-100 text-[11px] font-medium bg-white/15 px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-200 animate-pulse" />
                  Fastest reply
                </div>
              </div>
              <div className="mb-4">
                <div className="text-white font-bold text-lg mb-0.5">WhatsApp</div>
                <div className="text-emerald-100/80 text-sm">+963 998 740 489</div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/90 text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200">
                  Chat Now →
                </span>
                <CopyButton text="+963998740489" light />
              </div>
            </div>
          </motion.div>

          {/* Email */}
          <motion.div {...fade(0.15)}
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
            onClick={() => window.location.href = `mailto:${EMAIL}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-fuchsia-600" />
            <div className="absolute inset-0 bg-gradient-to-br from-violet-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-6">
              <div className="flex items-start justify-between mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="text-violet-100/70 text-[11px] font-medium bg-white/15 px-2.5 py-1 rounded-full">
                  Replies in 24h
                </div>
              </div>
              <div className="mb-4">
                <div className="text-white font-bold text-lg mb-0.5">Email</div>
                <div className="text-violet-100/80 text-xs font-mono truncate">{EMAIL}</div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/90 text-sm font-semibold group-hover:translate-x-1 transition-transform duration-200">
                  Send Email →
                </span>
                <CopyButton text={EMAIL} light />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Secondary: Social + CV ── */}
        <div className="grid sm:grid-cols-3 gap-4 mb-4">

          {/* LinkedIn */}
          <motion.a {...fade(0.2)}
            href="https://www.linkedin.com/in/sarah-salem-5a35783b2"
            target="_blank" rel="noopener noreferrer"
            className="card-glow p-5 rounded-2xl flex items-center gap-4 group hover:border-blue-300 dark:hover:border-blue-500/40 transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-500/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Linkedin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>LinkedIn</div>
              <div className="text-[11px]" style={{ color: 'var(--text-muted)' }}>Sarah Salem</div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-80 transition-opacity text-blue-500" />
          </motion.a>

          {/* GitHub */}
          <motion.a {...fade(0.25)}
            href="https://github.com/sero117"
            target="_blank" rel="noopener noreferrer"
            className="card-glow p-5 rounded-2xl flex items-center gap-4 group hover:border-slate-400 dark:hover:border-white/25 transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-white/8 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Github className="w-5 h-5" style={{ color: 'var(--text-secondary)' }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>GitHub</div>
              <div className="text-[11px]" style={{ color: 'var(--text-muted)' }}>@sero117</div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-80 transition-opacity" style={{ color: 'var(--text-secondary)' }} />
          </motion.a>

          {/* CV Download */}
          <motion.a {...fade(0.3)}
            href="https://drive.google.com/file/d/104L4RxsPFV1uhMGjx5lquWZbtVtUJOgh/view?usp=sharing"
            target="_blank" rel="noopener noreferrer"
            className="relative rounded-2xl p-5 flex items-center gap-4 group overflow-hidden border border-amber-200 dark:border-amber-500/25 bg-amber-50/60 dark:bg-amber-500/5 hover:border-amber-400 dark:hover:border-amber-500/50 transition-all"
          >
            <div className="w-11 h-11 rounded-xl bg-amber-100 dark:bg-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
              <Download className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-amber-700 dark:text-amber-300">Download CV</div>
              <div className="text-[11px] text-amber-600/70 dark:text-amber-400/60">PDF · Up to date</div>
            </div>
            <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity text-amber-500" />
          </motion.a>
        </div>

        {/* ── Response time note ── */}
        <motion.div {...fade(0.35)} className="text-center pt-6">
          <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
            Usually reply within a few hours on WhatsApp · 24h on Email
          </p>
        </motion.div>

      </div>
    </section>
  )
}
