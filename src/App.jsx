import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { MobileSection } from './components/MobileSection'
import { WebSection } from './components/WebSection'
import { DataSection } from './components/DataSection'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero3D } from './components/Hero3D'
import { ArrowDown, Download, Eye, MapPin } from 'lucide-react'

const stats = [
  { value: '9+', label: 'Projects Delivered' },
  { value: '3', label: 'Specializations' },
  { value: '2+', label: 'Years Experience' },
]

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const saved = window.localStorage.getItem('theme')
    if (saved === 'light') setDarkMode(false)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    window.localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <main>
        {/* ─── HERO SECTION ─── */}
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-12"
        >
          {/* Light mode background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-violet-50/40 to-slate-100 dark:from-[#060d1f] dark:via-[#0d1535] dark:to-[#060d1f]" />
          <div className="absolute inset-0 bg-grid-pattern opacity-60" />
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[15%] left-[10%] w-72 h-72 bg-violet-400/10 dark:bg-violet-600/15 rounded-full blur-[100px]" />
            <div className="absolute top-[35%] right-[8%] w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[10%] left-[30%] w-60 h-60 bg-fuchsia-400/8 dark:bg-fuchsia-600/10 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* Left: text + CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="text-center lg:text-left"
              >
                {/* Name */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-5xl sm:text-6xl md:text-7xl font-black leading-[1.05] mb-3"
                >
                  <span className="bg-gradient-to-br from-slate-900 via-violet-800 to-fuchsia-700 dark:from-white dark:via-violet-100 dark:to-fuchsia-200 bg-clip-text text-transparent">
                    Sarah Salem
                  </span>
                </motion.h1>

                {/* Title */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7 }}
                  className="text-xl sm:text-2xl font-semibold text-gradient-violet mb-5"
                >
                  Full Stack Developer & Data Analyst
                </motion.div>

                {/* Description */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.7 }}
                  className="text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-4"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  I build high-performance mobile apps, modern web platforms, and data-driven dashboards
                  that help businesses grow and make smarter decisions.
                </motion.p>

                {/* Location */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex items-center gap-2 text-sm justify-center lg:justify-start mb-8"
                  style={{ color: 'var(--text-muted)' }}
                >
                  <MapPin className="w-4 h-4 text-violet-500 flex-shrink-0" />
                  <span>Open to <span className="text-violet-600 dark:text-violet-300 font-semibold">Remote & On-site</span> opportunities worldwide</span>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55, duration: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
                >
                  <a href="#mobile" className="btn-primary text-center justify-center">
                    <Eye className="w-4 h-4" />
                    View My Work
                  </a>
                  <a
                    href="https://drive.google.com/file/d/104L4RxsPFV1uhMGjx5lquWZbtVtUJOgh/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline text-center justify-center"
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                </motion.div>

                {/* Stats */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.65, duration: 0.7 }}
                  className="flex gap-6 sm:gap-8 justify-center lg:justify-start"
                >
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                      className="text-center lg:text-left"
                    >
                      <div className="text-2xl sm:text-3xl font-black text-gradient-violet leading-none mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right: laptop — sm and up */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.9, ease: 'easeOut' }}
                className="hidden sm:flex items-center justify-center"
              >
                <Hero3D />
              </motion.div>

              {/* Right: mobile profile card — xs only */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="sm:hidden w-full"
              >
                <div className="card-glow rounded-2xl p-5 text-center max-w-xs mx-auto">
                  {/* Photo */}
                  <div className="relative inline-block mb-3">
                    <div className="w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-violet-500/20 shadow-xl shadow-violet-500/10 mx-auto">
                      <img
                        src={`${import.meta.env.BASE_URL}images/my_picture.jpg`}
                        alt="Sarah Salem"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="absolute -bottom-1.5 -right-1.5 w-7 h-7 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-md">
                      <span className="text-white font-black text-[10px]">S</span>
                    </div>
                  </div>

                  {/* Open to work */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold mb-3"
                    style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.25)', color: '#34d399' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Open to Work
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-1.5 justify-center mb-4">
                    {[
                      { label: '⚡ Flutter', color: '#67e8f9' },
                      { label: '⚛ React',   color: '#93c5fd' },
                      { label: '🐍 Python',  color: '#fcd34d' },
                      { label: '📊 Power BI',color: '#f9a8d4' },
                      { label: '🟢 Node.js', color: '#86efac' },
                    ].map(sk => (
                      <span key={sk.label} className="text-[11px] px-2.5 py-1 rounded-lg font-semibold"
                        style={{ background: 'rgba(255,255,255,0.05)', color: sk.color, border: '1px solid rgba(255,255,255,0.1)' }}>
                        {sk.label}
                      </span>
                    ))}
                  </div>

                  {/* Quick nav */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { icon: '📱', label: 'Mobile', sub: '2 Apps',  href: '#mobile', bg: 'rgba(52,211,153,0.12)',  border: 'rgba(52,211,153,0.25)'  },
                      { icon: '🌐', label: 'Web',    sub: '3 Sites', href: '#web',    bg: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.25)'  },
                      { icon: '📊', label: 'Data',   sub: '4 Dash',  href: '#data',   bg: 'rgba(251,191,36,0.12)', border: 'rgba(251,191,36,0.25)'  },
                    ].map(s => (
                      <a key={s.label} href={s.href}
                        className="flex flex-col items-center gap-0.5 py-2.5 rounded-xl text-center transition-opacity hover:opacity-80"
                        style={{ background: s.bg, border: `1px solid ${s.border}` }}>
                        <span className="text-xl">{s.icon}</span>
                        <span className="text-[11px] font-bold" style={{ color: 'var(--text-primary)' }}>{s.label}</span>
                        <span className="text-[9px]" style={{ color: 'var(--text-muted)' }}>{s.sub}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--text-muted)' }}>Scroll Down</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-4 h-4 text-violet-500" />
            </motion.div>
          </motion.div>
        </section>

        <About />
        <MobileSection />
        <WebSection />
        <DataSection />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
