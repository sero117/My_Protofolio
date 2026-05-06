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
    <div className={`min-h-screen ${darkMode ? 'bg-gradient-to-br from-black via-purple-950 to-black text-white' : 'bg-gradient-to-br from-slate-100 via-purple-200 to-white text-slate-900'}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <section
          id="hero"
          className="relative h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-16"
        >
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-blue-950/30 z-0" />
          <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(192,132,252,0.25),transparent_45%),radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.18),transparent_40%)]" />

          <div className="relative z-10 w-full max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left: text + CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center lg:text-left lg:col-span-1"
              >
                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-black leading-tight"
                >
                  <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                    SARAH SALEM
                  </span>
                </motion.h1>

                {/* Small tag */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="mt-5 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                  <span className="text-sm font-semibold text-white/85">
                    Portfolio • Mobile • Web • Data
                  </span>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.7 }}
                  className="mt-5 text-lg sm:text-xl md:text-2xl text-slate-700 dark:text-gray-300 max-w-xl"
                >
                  I build clean, fast products across mobile apps, modern web, and data analytics.
                </motion.p>

                <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            
                </div>

                {/* Compact highlights */}
                <div className="mt-6 text-sm text-slate-700 dark:text-gray-300 max-w-xl">
                  <span className="font-semibold text-white/85">Stack:</span> Flutter • React • Node • Data Analysis
                </div>
              </motion.div>

              {/* Right: 3D Hero */}
              <div className="lg:col-span-1 flex items-center justify-center">
                <Hero3D />
              </div>
            </div>
          </div>
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
