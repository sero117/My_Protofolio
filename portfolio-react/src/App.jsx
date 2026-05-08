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

const FloatingOrb = ({ delay, size, color, duration, x, y }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl pointer-events-none ${color}`}
    style={{ width: size, height: size, left: x, top: y }}
    animate={{
      y: [0, -20, 0],
      x: [0, 10, 0],
      opacity: [0.3, 0.6, 0.3],
    }}
    transition={{ duration, delay, repeat: Infinity, ease: 'easeInOut' }}
  />
)

const FloatingElement = ({ delay, children, x, y }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: x, top: y }}
    animate={{
      y: [0, -30, 0],
      rotate: [0, 10, -10, 0],
    }}
    transition={{ duration: 6 + delay, delay, repeat: Infinity }}
  >
    {children}
  </motion.div>
)

export default function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const saved = window.localStorage.getItem('theme')
    if (saved === 'light') setDarkMode(false)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    window.localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className={`min-h-screen relative overflow-x-hidden ${darkMode ? 'bg-gradient-to-br from-black via-purple-950 to-black text-white' : 'bg-gradient-to-br from-slate-100 via-purple-200 to-white text-slate-900'}`}>
      {/* Animated Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <FloatingOrb delay={0} size="400px" color="bg-purple-500/20" duration={8} x="5%" y="10%" />
        <FloatingOrb delay={2} size="300px" color="bg-pink-500/20" duration={10} x="80%" y="20%" />
        <FloatingOrb delay={4} size="350px" color="bg-blue-500/20" duration={12} x="50%" y="60%" />
        <FloatingOrb delay={1} size="250px" color="bg-indigo-500/15" duration={9} x="10%" y="70%" />
      </div>

      {/* Mouse Glow Effect */}
      <motion.div
        className="fixed w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 160,
          y: mousePosition.y - 160,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
        style={{ display: darkMode ? 'block' : 'none' }}
      />

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <FloatingElement delay={0} x="10%" y="15%">
          <div className="text-6xl opacity-30">✨</div>
        </FloatingElement>
        <FloatingElement delay={1} x="85%" y="25%">
          <div className="text-5xl opacity-25">🚀</div>
        </FloatingElement>
        <FloatingElement delay={2} x="15%" y="70%">
          <div className="text-5xl opacity-25">💻</div>
        </FloatingElement>
        <FloatingElement delay={0.5} x="80%" y="75%">
          <div className="text-6xl opacity-20">⚡</div>
        </FloatingElement>
        <FloatingElement delay={1.5} x="50%" y="10%">
          <div className="text-5xl opacity-25">🎨</div>
        </FloatingElement>
      </div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <section
          id="hero"
          className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 pt-24 pb-16"
        >
          {/* Background layers */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-blue-950/30 z-0"
            animate={{
              background: [
                'linear-gradient(135deg, rgb(88, 28, 135, 0.4) 0%, rgb(0, 0, 0) 50%, rgb(30, 58, 138, 0.3) 100%)',
                'linear-gradient(225deg, rgb(88, 28, 135, 0.5) 0%, rgb(0, 0, 0) 50%, rgb(30, 58, 138, 0.4) 100%)',
                'linear-gradient(135deg, rgb(88, 28, 135, 0.4) 0%, rgb(0, 0, 0) 50%, rgb(30, 58, 138, 0.3) 100%)',
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(192,132,252,0.25),transparent_45%),radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.18),transparent_40%)]"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          <div className="relative z-10 w-full max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left: text + CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center lg:text-left lg:col-span-1"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="mb-5"
                >
                  <motion.span
                    animate={{ rotate: [0, 5, -5, 0], y: [0, -5, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-block text-6xl"
                  >
                    👋
                  </motion.span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl font-black leading-tight"
                >
                  <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                    SARAH SALEM
                  </span>
                  <motion.div
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="h-2 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-200% mt-3 rounded-full"
                  />
                </motion.h1>

                {/* Small tag */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.6 }}
                  className="mt-5 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400"
                  />
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

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.7 }}
                  className="mt-7 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                >
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full font-bold text-center transition-all duration-300 shadow-lg shadow-purple-500/25"
                  >
                    Get In Touch
                  </motion.a>
                  <motion.a
                    href="#about"
                    whileHover={{ scale: 1.05, borderColor: "rgb(168, 85, 247)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border-2 border-white/30 rounded-full font-bold text-center hover:border-purple-500 transition-all duration-300"
                  >
                    Learn More
                  </motion.a>
                </motion.div>

                {/* Compact highlights */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.45 }}
                  className="mt-6 text-sm text-slate-700 dark:text-gray-300 max-w-xl"
                >
                  <span className="font-semibold text-white/85">Stack:</span> Flutter • React • Node • Data Analysis
                </motion.div>
              </motion.div>

              {/* Right: 3D Hero */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotateY: 45 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="lg:col-span-1 flex items-center justify-center perspective"
                style={{
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
              >
                <motion.div
                  animate={{
                    rotateX: [0, 10, -10, 0],
                    rotateY: [0, -15, 15, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <Hero3D />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm text-gray-400">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                <motion.div
                  animate={{ y: [5, 15, 5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-2 bg-gray-400 rounded-full"
                />
              </div>
            </div>
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
