import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Github, Linkedin, MessageCircle, Download, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react'

const EMAIL = 'sarah117salem01@gmail.com'
const WHATSAPP = '963998740489'

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={handleCopy}
      className="p-1.5 rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
      title="Copy"
    >
      {copied
        ? <Check className="w-3.5 h-3.5 text-emerald-500" />
        : <Copy className="w-3.5 h-3.5" style={{ color: 'var(--text-muted)' }} />
      }
    </button>
  )
}

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = form
    const subj = encodeURIComponent(subject || `Contact from ${name}`)
    const body = encodeURIComponent(`Hi Sarah,\n\nMy name is ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:${EMAIL}?subject=${subj}&body=${body}`
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  const openWhatsApp = () => {
    const msg = encodeURIComponent("Hi Sarah, I saw your portfolio and I'd like to connect!")
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank')
  }

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm border focus:outline-none transition-all duration-200 focus:ring-2 focus:ring-violet-500/30 bg-white dark:bg-white/[0.04] border-slate-200 dark:border-white/10 focus:border-violet-400 dark:focus:border-violet-500/60"
  const labelClass = "block text-xs font-semibold mb-1.5 tracking-wide uppercase"

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-[#060d1f] dark:via-[#0b1225] dark:to-[#060d1f] -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 dark:via-violet-500/30 to-transparent" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-violet-400/8 dark:bg-violet-600/10 rounded-full blur-[140px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label bg-violet-50 dark:bg-violet-500/10 border border-violet-200 dark:border-violet-500/20 text-violet-600 dark:text-violet-400 mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-header text-gradient-violet mb-5">Let's Work Together</h2>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Have a project or a job opportunity in mind? Send me a message or reach out directly via WhatsApp or Email.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">

          {/* ── LEFT: Email Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="card-glow p-8 rounded-2xl">
              <h3 className="text-lg font-bold mb-1 flex items-center gap-2" style={{ color: 'var(--text-primary)' }}>
                <Mail className="w-5 h-5 text-violet-500" />
                Send via Email
              </h3>
              <p className="text-xs mb-6" style={{ color: 'var(--text-muted)' }}>
                Fill the form — it will open your email client with the message ready to send to{' '}
                <span className="text-violet-600 dark:text-violet-300 font-medium">{EMAIL}</span>
              </p>

              {/* Success notice */}
              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -8, height: 0 }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/25 mb-5 overflow-hidden"
                  >
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">Your email client is opening!</p>
                      <p className="text-xs text-emerald-600 dark:text-emerald-500 mt-0.5">If nothing opened, copy the email and write manually.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass} style={{ color: 'var(--text-muted)' }}>Name *</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} required
                      placeholder="Your full name"
                      className={inputClass}
                      style={{ color: 'var(--text-primary)' }}
                    />
                  </div>
                  <div>
                    <label className={labelClass} style={{ color: 'var(--text-muted)' }}>Your Email *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required
                      placeholder="you@company.com"
                      className={inputClass}
                      style={{ color: 'var(--text-primary)' }}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass} style={{ color: 'var(--text-muted)' }}>Subject</label>
                  <input type="text" name="subject" value={form.subject} onChange={handleChange}
                    placeholder="Job opportunity / Project / General inquiry"
                    className={inputClass}
                    style={{ color: 'var(--text-primary)' }}
                  />
                </div>

                <div>
                  <label className={labelClass} style={{ color: 'var(--text-muted)' }}>Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
                    placeholder="Tell me about the role, project, or how I can help..."
                    className={`${inputClass} resize-none`}
                    style={{ color: 'var(--text-primary)' }}
                  />
                </div>

                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full justify-center py-3.5 text-base">
                  <Send className="w-4 h-4" />
                  Send via Email Client
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* ── RIGHT: Direct Contact ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* WhatsApp */}
            <div className="card-glow p-5 rounded-2xl border border-emerald-200 dark:border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-500/5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>WhatsApp</div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>Fastest way to reach me</div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/8 rounded-xl px-4 py-2.5 mb-3">
                <span className="text-emerald-700 dark:text-emerald-300 text-sm font-mono">+963 998 740 489</span>
                <CopyButton text="+963998740489" />
              </div>
              <motion.button onClick={openWhatsApp} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-semibold text-sm transition-all">
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </motion.button>
            </div>

            {/* Email direct */}
            <div className="card-glow p-5 rounded-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>Email</div>
                  <div className="text-xs" style={{ color: 'var(--text-muted)' }}>I reply within 24 hours</div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white dark:bg-white/[0.04] border border-slate-200 dark:border-white/8 rounded-xl px-4 py-2.5 mb-3">
                <span className="text-violet-700 dark:text-violet-300 text-xs font-mono truncate pr-2">{EMAIL}</span>
                <CopyButton text={EMAIL} />
              </div>
              <a href={`mailto:${EMAIL}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-semibold text-sm transition-all">
                <Mail className="w-4 h-4" />
                Open Email App
              </a>
            </div>

            {/* LinkedIn + GitHub */}
            <div className="card-glow p-5 rounded-2xl">
              <div className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'var(--text-muted)' }}>
                Also Find Me On
              </div>
              <div className="space-y-2.5">
                <a href="https://www.linkedin.com/in/sarah-salem-5a35783b2" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 hover:border-blue-400 dark:hover:border-blue-400/40 transition-all group">
                  <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>LinkedIn</div>
                    <div className="text-[11px]" style={{ color: 'var(--text-muted)' }}>Sarah Salem</div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                </a>
                <a href="https://github.com/sero117" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/25 transition-all group">
                  <Github className="w-4 h-4 flex-shrink-0" style={{ color: 'var(--text-secondary)' }} />
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>GitHub</div>
                    <div className="text-[11px]" style={{ color: 'var(--text-muted)' }}>@sero117</div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-40 group-hover:opacity-80 transition-opacity" style={{ color: 'var(--text-secondary)' }} />
                </a>
              </div>
            </div>

            {/* CV */}
            <motion.a
              href="https://drive.google.com/file/d/104L4RxsPFV1uhMGjx5lquWZbtVtUJOgh/view?usp=sharing"
              target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="btn-primary py-4 justify-center text-base rounded-2xl">
              <Download className="w-5 h-5" />
              Download My CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
