import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#about',   label: 'About'   },
  { href: '#mobile',  label: 'Mobile'  },
  { href: '#web',     label: 'Web'     },
  { href: '#data',    label: 'Data'    },
  { href: '#contact', label: 'Contact' },
]

export function Navbar({ darkMode, setDarkMode }) {
  const [scrolled,       setScrolled]       = useState(false)
  const [menuOpen,       setMenuOpen]        = useState(false)
  const [activeSection,  setActiveSection]   = useState('hero')
  const [scrollProgress, setScrollProgress]  = useState(0)

  // Scroll detection + progress bar
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active section via IntersectionObserver
  useEffect(() => {
    const ids = ['hero', ...navLinks.map(l => l.href.slice(1))]
    const observers = ids.map(id => {
      const el = document.getElementById(id)
      if (!el) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.35 }
      )
      obs.observe(el)
      return obs
    })
    return () => observers.forEach(obs => obs?.disconnect())
  }, [])

  const close = () => setMenuOpen(false)

  return (
    <>
      {/* ── Scroll progress bar ──────────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 h-[2px] z-[60] origin-left"
        style={{
          width: `${scrollProgress}%`,
          background: 'linear-gradient(to right, #7c3aed, #a855f7, #ec4899)',
        }}
      />

      {/* ── Nav bar ──────────────────────────────────────────── */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'pt-[6px] pb-1' : 'pt-3 pb-1'} px-4 sm:px-6`}
      >
        <div className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? 'border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#060d1f]/95 backdrop-blur-xl shadow-xl shadow-slate-200/50 dark:shadow-black/40'
            : 'border-slate-200/60 dark:border-white/5 bg-white/70 dark:bg-white/[0.03] backdrop-blur-md'
        }`}>
          <div className="flex items-center justify-between py-2.5 px-4 sm:px-5">

            {/* Logo */}
            <a href="#hero" onClick={close} className="flex items-center gap-2.5 group">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 4 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center shadow-md shadow-violet-500/30"
              >
                <span className="text-white font-black text-sm">S</span>
              </motion.div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-black tracking-tight text-slate-900 dark:text-white">
                  Sarah<span className="text-violet-500">.</span>
                </span>
                <span className="text-[9px] text-slate-400 dark:text-slate-500 font-medium tracking-wider">Portfolio</span>
              </div>
            </a>

            {/* Desktop nav links */}
            <div className="hidden sm:flex items-center gap-0.5">
              {navLinks.map(link => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`relative px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'text-violet-600 dark:text-violet-300 bg-violet-50 dark:bg-violet-500/10'
                        : 'text-slate-600 dark:text-slate-400 hover:text-violet-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/[0.06]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-dot"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-violet-500"
                        transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                      />
                    )}
                  </a>
                )
              })}
            </div>

            {/* Right controls */}
            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.93 }}
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-all"
                title={darkMode ? 'Light Mode' : 'Dark Mode'}
              >
                <AnimatePresence mode="wait">
                  {darkMode
                    ? <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <Sun className="w-4 h-4 text-amber-500" />
                      </motion.div>
                    : <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                        <Moon className="w-4 h-4 text-violet-600" />
                      </motion.div>
                  }
                </AnimatePresence>
              </motion.button>

              {/* Hire Me — desktop */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white shadow-md shadow-violet-500/25 transition-all"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #9333ea)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Hire Me
              </motion.a>

              {/* Hamburger — mobile */}
              <motion.button
                whileTap={{ scale: 0.93 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className="sm:hidden p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 transition-all"
              >
                <AnimatePresence mode="wait">
                  {menuOpen
                    ? <motion.div key="x"   initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X    className="w-4 h-4 text-slate-700 dark:text-white" /></motion.div>
                    : <motion.div key="men" initial={{ rotate:  90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate:-90, opacity: 0 }} transition={{ duration: 0.15 }}><Menu className="w-4 h-4 text-slate-700 dark:text-white" /></motion.div>
                  }
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile menu ──────────────────────────────────────── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{    opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="fixed top-[72px] left-4 right-4 z-40 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-white/10"
            style={{ background: darkMode ? 'rgba(6,13,31,0.97)' : 'rgba(255,255,255,0.97)', backdropFilter: 'blur(24px)' }}
          >
            <nav className="flex flex-col p-3 gap-1">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.slice(1)
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={close}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1,  x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-all ${
                      isActive
                        ? 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-300'
                        : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/[0.06] hover:text-violet-600 dark:hover:text-white'
                    }`}
                  >
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-violet-500 flex-shrink-0" />}
                    {link.label}
                  </motion.a>
                )
              })}

              <div className="h-px bg-slate-200 dark:bg-white/10 my-1" />

              <a
                href="#contact"
                onClick={close}
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #9333ea)' }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
