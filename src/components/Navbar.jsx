import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#mobile', label: 'Mobile' },
  { href: '#web', label: 'Web' },
  { href: '#data', label: 'Data' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-3'} px-4 sm:px-6`}
      >
        <div
          className={`mx-auto max-w-6xl rounded-2xl border transition-all duration-300 ${
            scrolled
              ? 'border-slate-200 dark:border-white/10 bg-white/90 dark:bg-[#060d1f]/90 backdrop-blur-xl shadow-xl shadow-slate-200/40 dark:shadow-black/30'
              : 'border-slate-200/50 dark:border-white/5 bg-white/60 dark:bg-white/[0.03] backdrop-blur-md'
          }`}
        >
          <div className="flex items-center justify-between py-3 px-4 sm:px-5">
            {/* Logo */}
            <a href="#hero" className="flex items-center gap-2.5" onClick={handleNavClick}>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-fuchsia-600 flex items-center justify-center text-white font-black text-sm">
                S
              </div>
              <span className="text-base font-black tracking-tight text-slate-900 dark:text-white">
                Sarah<span className="text-violet-500">.</span>
              </span>
            </a>

            {/* Desktop nav */}
            <div className="hidden sm:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-violet-600 dark:hover:text-white hover:bg-violet-50 dark:hover:bg-white/8 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-2">
              {/* Theme toggle */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-all duration-200"
                title={darkMode ? 'Light Mode' : 'Dark Mode'}
              >
                {darkMode
                  ? <Sun className="w-4 h-4 text-amber-500" />
                  : <Moon className="w-4 h-4 text-violet-600" />
                }
              </motion.button>

              <a href="#contact" className="hidden sm:flex btn-primary py-2 px-4 text-sm">
                Hire Me
              </a>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="sm:hidden p-2 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 transition-all"
              >
                {menuOpen
                  ? <X className="w-4 h-4 text-slate-700 dark:text-white" />
                  : <Menu className="w-4 h-4 text-slate-700 dark:text-white" />
                }
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-4 right-4 z-40 bg-white/95 dark:bg-[#0d1535]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <nav className="flex flex-col p-3 gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-3 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-violet-600 dark:hover:text-white hover:bg-violet-50 dark:hover:bg-white/8 rounded-xl transition-all"
                >
                  {link.label}
                </motion.a>
              ))}
              <div className="border-t border-slate-200 dark:border-white/10 my-1" />
              <a
                href="#contact"
                onClick={handleNavClick}
                className="btn-primary text-center justify-center py-2.5 text-sm rounded-xl"
              >
                Hire Me
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
