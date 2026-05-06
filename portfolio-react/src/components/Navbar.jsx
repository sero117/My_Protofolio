import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

export function Navbar({ darkMode, setDarkMode }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 w-full z-50 ${
        scrolled ? 'py-3' : 'py-4'
      } px-4 sm:px-8`}
    >
      <div
        className={`mx-auto max-w-6xl rounded-2xl border ${
          darkMode ? 'border-white/10 bg-black/25' : 'border-black/10 bg-white/50'
        } backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300`}
      >
        <div className="flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6">
          <a
            href="#hero"
            className="text-base sm:text-xl font-black tracking-tight bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent"
          >
            Sarah Salem
          </a>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:flex items-center gap-6 text-sm font-semibold text-slate-900 dark:text-white/80">
              <a href="#about" className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">About</a>
              <a href="#mobile" className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">Mobile</a>
              <a href="#web" className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">Web</a>
              <a href="#data" className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">Data</a>
              <a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-300 transition-colors">Contact</a>
            </div>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setDarkMode(!darkMode)}
              className={`p-3 rounded-xl border transition-all duration-300 ${
                darkMode
                  ? 'bg-white/10 border-white/15 hover:bg-white/15'
                  : 'bg-black/5 border-black/10 hover:bg-black/8'
              }`}
              title={darkMode ? 'Light Mode' : 'Dark Mode'}
            >
              {darkMode ? (
                <Sun className="w-6 h-6 text-yellow-300" />
              ) : (
                <Moon className="w-6 h-6 text-blue-500" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

