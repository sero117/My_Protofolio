import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

// ─── Static data ──────────────────────────────────────────────────────────────
const SKILLS = ['Flutter', 'React', 'Node.js', 'Python', 'Power BI']

const SECTIONS = [
  { icon: '📱', label: 'Mobile Apps', href: '#mobile' },
  { icon: '🌐', label: 'Web Dev',     href: '#web'    },
  { icon: '📊', label: 'Data',        href: '#data'   },
]

const PARTICLES = [
  { x: -52, y: -38, s: 2,   d: 0,    t: 3.2 },
  { x: -68, y:  12, s: 3,   d: 0.5,  t: 2.7 },
  { x: -40, y:  58, s: 1.5, d: 1.0,  t: 3.8 },
  { x:  48, y: -44, s: 2.5, d: 0.3,  t: 2.9 },
  { x:  70, y:   6, s: 2,   d: 0.8,  t: 3.4 },
  { x:  54, y:  64, s: 1.5, d: 1.3,  t: 2.6 },
  { x: -28, y: -68, s: 1,   d: 0.6,  t: 4.0 },
  { x:  34, y: -60, s: 2,   d: 1.6,  t: 3.1 },
  { x: -80, y: -20, s: 1.5, d: 0.2,  t: 3.0 },
  { x:  78, y:  48, s: 1,   d: 1.9,  t: 3.6 },
  { x:   6, y: -75, s: 1.5, d: 0.9,  t: 2.8 },
  { x: -58, y:  78, s: 1,   d: 1.4,  t: 4.2 },
]

// Keyboard rows — each has a key count, visual width, and global start index
const KEY_ROWS = [
  { count: 13, w: '5.5%', start: 0  },
  { count: 11, w: '7%',   start: 13 },
  { count: 10, w: '7.5%', start: 24 },
  { count: 9,  w: '8.5%', start: 34 },
]
const SPACE_START = 43 // 5 small keys around spacebar: indices 43-47
const TOTAL_KEYS  = 48

// ─── Sub-component ────────────────────────────────────────────────────────────
function Key({ idx, width, litKeys }) {
  const lit = litKeys.has(idx)
  return (
    <div
      className="h-[9px] rounded-[3px] transition-colors duration-150"
      style={{
        width,
        background: lit ? 'rgba(167,139,250,0.55)' : 'rgba(255,255,255,0.055)',
        border: `1px solid ${lit ? 'rgba(167,139,250,0.65)' : 'rgba(255,255,255,0.04)'}`,
        boxShadow: lit ? '0 0 7px 1px rgba(167,139,250,0.45)' : 'none',
      }}
    />
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────
export function Hero3D() {
  const [isOpen,     setIsOpen]     = useState(false)
  const [typed,      setTyped]      = useState('')
  const [powerFlash, setPowerFlash] = useState(false)
  const [litKeys,    setLitKeys]    = useState(() => new Set())
  const prevOpen = useRef(false)
  const FULL_URL = 'sarah.portfolio.dev'

  // Address-bar typewriter
  useEffect(() => {
    if (!isOpen) { setTyped(''); return }
    let i = 0
    const id = setInterval(() => {
      i++
      setTyped(FULL_URL.slice(0, i))
      if (i >= FULL_URL.length) clearInterval(id)
    }, 55)
    return () => clearInterval(id)
  }, [isOpen])

  // White power-on flash
  useEffect(() => {
    if (isOpen && !prevOpen.current) {
      setPowerFlash(true)
      const t = setTimeout(() => setPowerFlash(false), 500)
      return () => clearTimeout(t)
    }
    prevOpen.current = isOpen
  }, [isOpen])

  // Keyboard backlight — 3-5 random keys every 180 ms
  useEffect(() => {
    const id = setInterval(() => {
      const s = new Set()
      const n = Math.floor(Math.random() * 3) + 3
      for (let i = 0; i < n; i++) s.add(Math.floor(Math.random() * TOTAL_KEYS))
      setLitKeys(s)
    }, 180)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative w-full max-w-[300px] sm:max-w-[360px] mx-auto select-none">

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none z-10"
          style={{
            width: p.s, height: p.s,
            left: `calc(50% + ${p.x}px)`,
            top:  `calc(50% + ${p.y}px)`,
            background: i % 3 === 0 ? '#a78bfa' : i % 3 === 1 ? '#22d3ee' : '#f0abfc',
          }}
          animate={{ opacity: [0, 0.9, 0], y: [0, -22, 0], scale: [0.5, 1.3, 0.5] }}
          transition={{ delay: p.d, duration: p.t, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* Screen glow aura */}
      <motion.div
        className="absolute inset-0 rounded-3xl -z-10 pointer-events-none"
        animate={{
          boxShadow: isOpen
            ? '0 0 70px 22px rgba(124,58,237,0.45), 0 0 140px 50px rgba(124,58,237,0.15)'
            : '0 0 20px 5px rgba(124,58,237,0.08)',
        }}
        transition={{ duration: 0.8 }}
      />

      {/* Ambient blur */}
      <motion.div
        className="absolute inset-0 rounded-3xl blur-3xl -z-20 pointer-events-none"
        animate={{
          background: isOpen
            ? 'radial-gradient(ellipse, rgba(124,58,237,0.45) 0%, transparent 70%)'
            : 'radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)',
        }}
        transition={{ duration: 0.7 }}
      />

      {/* ══ LAPTOP BODY ═══════════════════════════════════════════════════════ */}
      <div style={{ perspective: '1000px' }}>
        <motion.div
          className="relative cursor-pointer"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateX: isOpen ? 5 : 0, y: isOpen ? -10 : 0 }}
          transition={{ type: 'spring', stiffness: 110, damping: 18 }}
        >

          {/* ── LID ─────────────────────────────────────────────────────────── */}
          <div onClick={() => setIsOpen(v => !v)}>
            <div
              className="bg-gradient-to-b from-[#2a2a3e] to-[#1a1a2e] rounded-t-2xl border border-white/15 shadow-2xl overflow-hidden"
              style={{ paddingBottom: '63%', position: 'relative' }}
            >
              <div className="absolute inset-[6px] bg-[#080810] rounded-xl overflow-hidden flex flex-col">

                {/* Browser chrome */}
                <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-[#111122] border-b border-white/[0.06] flex-shrink-0">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500/80" />
                    <div className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <div className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex-1 mx-2 h-3.5 rounded-md bg-white/[0.06] border border-white/[0.04] flex items-center px-2 gap-1 overflow-hidden">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-400/70 flex-shrink-0" />
                    <span className="text-[8px] text-violet-300/70 font-mono truncate">
                      {isOpen ? typed : ''}
                      {isOpen && typed.length < FULL_URL.length && (
                        <span className="inline-block w-px h-2 bg-violet-300 ml-px animate-pulse" />
                      )}
                    </span>
                  </div>
                </div>

                {/* Screen */}
                <div className="flex-1 relative overflow-hidden">

                  {/* Power-on flash */}
                  <AnimatePresence>
                    {powerFlash && (
                      <motion.div
                        key="flash"
                        className="absolute inset-0 z-30 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0.5, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.45 }}
                        style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.95) 0%, rgba(167,139,250,0.4) 100%)' }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Sleeping */}
                  <AnimatePresence>
                    {!isOpen && (
                      <motion.div
                        key="sleep"
                        className="absolute inset-0 flex flex-col items-center justify-center bg-[#050508]"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-violet-500/50 mb-3"
                          animate={{ opacity: [0.3, 1, 0.3], scale: [0.92, 1.08, 0.92] }}
                          transition={{ repeat: Infinity, duration: 2.6, ease: 'easeInOut' }}
                        >
                          <span className="text-white font-black text-sm">S</span>
                        </motion.div>
                        <motion.p
                          className="text-white/30 text-[8px] tracking-widest uppercase"
                          animate={{ opacity: [0.15, 0.5, 0.15] }}
                          transition={{ repeat: Infinity, duration: 2.6 }}
                        >
                          Click to open
                        </motion.p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Portfolio content */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        key="open"
                        className="absolute inset-0 p-2.5 flex flex-col gap-1.5 overflow-hidden"
                        style={{ background: 'linear-gradient(135deg, #07070f 0%, #0d0d20 50%, #070710 100%)' }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ delay: 0.28, duration: 0.45 }}
                      >
                        {/* Scan-line sweep */}
                        <motion.div
                          className="absolute inset-x-0 h-[1.5px] pointer-events-none z-10"
                          style={{ background: 'linear-gradient(to right, transparent, rgba(167,139,250,0.4), transparent)' }}
                          animate={{ top: ['0%', '100%'] }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                        />

                        {/* ── Profile row ── */}
                        <motion.div
                          className="flex items-center justify-between"
                          initial={{ opacity: 0, y: -6 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.33 }}
                        >
                          <div className="flex items-center gap-1.5">
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-sm shadow-violet-500/50 flex-shrink-0">
                              <span className="text-white font-black text-[8px]">SS</span>
                            </div>
                            <div>
                              <div className="text-[8.5px] font-black text-white leading-none">Sarah Salem</div>
                              <div className="text-[6.5px] text-slate-400 leading-none mt-[2px]">Full Stack Dev & Data Analyst</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded-full" style={{ background: 'rgba(52,211,153,0.12)', border: '1px solid rgba(52,211,153,0.25)' }}>
                            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[6px] text-emerald-400 font-bold">Open to Work</span>
                          </div>
                        </motion.div>

                        {/* ── Stats ── */}
                        <motion.div
                          className="grid grid-cols-3 gap-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          {[['9+', 'Projects'], ['3', 'Specialties'], ['2+', 'Yrs Exp']].map(([v, l], i) => (
                            <div key={l} className="text-center py-1 rounded-lg" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                              <div className="text-[9px] font-black" style={{ color: ['#a78bfa', '#67e8f9', '#6ee7b7'][i] }}>{v}</div>
                              <div className="text-[5.5px] text-slate-500 leading-none mt-0.5">{l}</div>
                            </div>
                          ))}
                        </motion.div>

                        <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />

                        {/* ── Skills with colors ── */}
                        <motion.div
                          className="flex flex-wrap gap-[3px]"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.46 }}
                        >
                          {[
                            { label: '⚡ Flutter', color: '#67e8f9' },
                            { label: '⚛ React',   color: '#93c5fd' },
                            { label: '🐍 Python',  color: '#fcd34d' },
                            { label: '📊 Power BI',color: '#f9a8d4' },
                            { label: '🟢 Node.js', color: '#86efac' },
                          ].map((sk, i) => (
                            <motion.span
                              key={sk.label}
                              className="text-[6.5px] px-1.5 py-[2px] rounded-md font-semibold"
                              style={{ background: 'rgba(255,255,255,0.05)', color: sk.color, border: '1px solid rgba(255,255,255,0.08)' }}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.48 + i * 0.06 }}
                            >
                              {sk.label}
                            </motion.span>
                          ))}
                        </motion.div>

                        <div className="h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />

                        {/* ── Section cards ── */}
                        <div className="grid grid-cols-3 gap-1 flex-1">
                          {[
                            { icon: '📱', label: 'Mobile', sub: '2 Apps',  href: '#mobile', c: 'rgba(52,211,153,0.15)',  b: 'rgba(52,211,153,0.25)'  },
                            { icon: '🌐', label: 'Web',    sub: '3 Sites', href: '#web',    c: 'rgba(139,92,246,0.15)', b: 'rgba(139,92,246,0.25)'  },
                            { icon: '📊', label: 'Data',   sub: '4 Dash',  href: '#data',   c: 'rgba(251,191,36,0.15)', b: 'rgba(251,191,36,0.25)'  },
                          ].map((sec, i) => (
                            <motion.a
                              key={sec.label}
                              href={sec.href}
                              onClick={e => e.stopPropagation()}
                              className="flex flex-col items-center justify-center gap-0.5 rounded-lg py-1.5 cursor-pointer"
                              style={{ background: sec.c, border: `1px solid ${sec.b}` }}
                              initial={{ opacity: 0, y: 6 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.55 + i * 0.07 }}
                              whileHover={{ scale: 1.04 }}
                            >
                              <span className="text-sm leading-none">{sec.icon}</span>
                              <span className="text-[7px] text-white font-bold leading-none">{sec.label}</span>
                              <span className="text-[5.5px] text-white/45 leading-none">{sec.sub}</span>
                            </motion.a>
                          ))}
                        </div>

                        {/* ── CTA ── */}
                        <motion.a
                          href="#contact"
                          onClick={e => e.stopPropagation()}
                          className="flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-[7.5px] font-bold text-white cursor-pointer"
                          style={{ background: 'linear-gradient(135deg, #6d28d9, #9333ea)' }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.78 }}
                          whileHover={{ opacity: 0.88 }}
                        >
                          <span className="w-1 h-1 rounded-full bg-emerald-400" />
                          Let's Work Together →
                        </motion.a>

                        <p className="text-center text-[5.5px] text-white/10 tracking-widest uppercase">tap screen to close</p>

                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>
              </div>

              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-slate-600/60 rounded-full" />
            </div>
          </div>

          {/* ── Hinge ─────────────────────────────────────────────────────── */}
          <div className="h-[3px] bg-gradient-to-r from-[#111120] via-[#2a2a40] to-[#111120]" />

          {/* ── Base ──────────────────────────────────────────────────────── */}
          <div className="bg-gradient-to-b from-[#1e1e30] to-[#16162a] rounded-b-2xl border border-t-0 border-white/10 shadow-2xl px-3 pt-2.5 pb-3">

            <div className="space-y-1 mb-2">
              {/* Main key rows */}
              {KEY_ROWS.map(row => (
                <div key={row.start} className="flex gap-[3px] justify-center">
                  {Array.from({ length: row.count }, (_, i) => (
                    <Key key={i} idx={row.start + i} width={row.w} litKeys={litKeys} />
                  ))}
                </div>
              ))}

              {/* Spacebar row */}
              <div className="flex gap-[3px] justify-center">
                <Key idx={SPACE_START}     width="6%" litKeys={litKeys} />
                <Key idx={SPACE_START + 1} width="6%" litKeys={litKeys} />
                <div className="h-[9px] rounded-[3px]" style={{ width: '32%', background: 'rgba(255,255,255,0.055)', border: '1px solid rgba(255,255,255,0.04)' }} />
                <Key idx={SPACE_START + 2} width="6%" litKeys={litKeys} />
                <Key idx={SPACE_START + 3} width="6%" litKeys={litKeys} />
                <Key idx={SPACE_START + 4} width="6%" litKeys={litKeys} />
              </div>
            </div>

            <div className="w-14 h-8 mx-auto rounded-lg border border-white/[0.07]"
              style={{ background: 'rgba(255,255,255,0.04)' }} />

            <p className="text-center mt-1.5 text-[7px] text-slate-700 tracking-[0.2em] font-semibold uppercase">
              Sarah Salem
            </p>
          </div>
        </motion.div>
      </div>

      {/* Dynamic shadow */}
      <motion.div
        className="absolute -bottom-3 left-6 right-6 h-5 rounded-full blur-xl"
        animate={{
          background: isOpen ? 'rgba(124,58,237,0.4)' : 'rgba(0,0,0,0.25)',
          scaleX: isOpen ? 1.2 : 1,
        }}
        transition={{ duration: 0.7 }}
      />

      {/* Badge — Flutter */}
      <motion.div
        className="absolute -left-12 top-10 backdrop-blur-md rounded-xl px-3 py-2 shadow-xl hidden lg:flex items-center gap-2"
        style={{ background: 'rgba(13,21,53,0.9)', border: '1px solid rgba(124,58,237,0.3)' }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <div className="w-6 h-6 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(124,58,237,0.2)' }}>⚡</div>
        <div>
          <div className="text-[10px] font-bold text-white leading-none">Flutter</div>
          <div className="text-[9px] text-slate-500">Mobile Dev</div>
        </div>
      </motion.div>

      {/* Badge — Power BI */}
      <motion.div
        className="absolute -right-12 top-24 backdrop-blur-md rounded-xl px-3 py-2 shadow-xl hidden lg:flex items-center gap-2"
        style={{ background: 'rgba(13,21,53,0.9)', border: '1px solid rgba(6,182,212,0.3)' }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <div className="w-6 h-6 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(6,182,212,0.15)' }}>📊</div>
        <div>
          <div className="text-[10px] font-bold text-white leading-none">Power BI</div>
          <div className="text-[9px] text-slate-500">Data Analyst</div>
        </div>
      </motion.div>

    </div>
  )
}
