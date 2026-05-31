import { motion } from 'framer-motion'
import { useState } from 'react'

const codeLines = [
  { text: "const developer = {", indent: 0, color: "text-white" },
  { text: '  name: "Sarah Salem",', indent: 0, color: "text-amber-300" },
  { text: '  role: "Full Stack Dev",', indent: 0, color: "text-amber-300" },
  { text: "  skills: [", indent: 0, color: "text-white" },
  { text: '    "Flutter", "React",', indent: 0, color: "text-emerald-300" },
  { text: '    "Node.js", "Python",', indent: 0, color: "text-emerald-300" },
  { text: '    "Power BI",', indent: 0, color: "text-emerald-300" },
  { text: "  ],", indent: 0, color: "text-white" },
  { text: '  available: true,', indent: 0, color: "text-violet-300" },
  { text: '  openTo: "Worldwide",', indent: 0, color: "text-cyan-300" },
  { text: "}", indent: 0, color: "text-white" },
]

export function Hero3D() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="relative w-full max-w-[280px] sm:max-w-sm mx-auto select-none">
      {/* Outer glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/10 rounded-3xl blur-2xl scale-95 -z-10" />

      <motion.div
        className="relative"
        animate={{ y: hovered ? -4 : 0 }}
        transition={{ duration: 0.3 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        {/* Laptop lid (screen) */}
        <div className="relative bg-gradient-to-b from-[#1a1a2e] to-[#0f0f1a] rounded-t-2xl border border-white/15 shadow-2xl overflow-hidden"
          style={{ paddingBottom: '62%' }}
        >
          {/* Screen bezel */}
          <div className="absolute inset-2 bg-[#0a0a12] rounded-xl overflow-hidden">
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 px-3 py-2 bg-[#111120] border-b border-white/[0.07]">
              <div className="w-2 h-2 rounded-full bg-red-500/70" />
              <div className="w-2 h-2 rounded-full bg-amber-500/70" />
              <div className="w-2 h-2 rounded-full bg-emerald-500/70" />
              <div className="flex-1 mx-2 h-3.5 rounded bg-white/[0.06] flex items-center px-2 gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-violet-400/60" />
                <div className="h-1 bg-white/15 rounded-full w-16" />
              </div>
            </div>

            {/* Code content */}
            <div className="p-3 font-mono text-[9px] leading-5">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                  className={`${line.color} whitespace-pre`}
                >
                  <span className="text-slate-600 mr-2 text-[8px]">{String(i + 1).padStart(2, '0')}</span>
                  {line.text}
                </motion.div>
              ))}

              {/* Cursor */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1.1 }}
                className="inline-block w-1.5 h-3 bg-violet-400 rounded-sm ml-1 translate-y-0.5"
              />
            </div>
          </div>

          {/* Camera dot */}
          <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-slate-600 rounded-full" />
        </div>

        {/* Hinge line */}
        <div className="h-1 bg-gradient-to-r from-[#0f0f1a] via-[#1a1a2e] to-[#0f0f1a] shadow-sm" />

        {/* Laptop base */}
        <div className="relative bg-gradient-to-b from-[#1a1a2e] to-[#151525] rounded-b-2xl border border-t-0 border-white/10 shadow-2xl px-4 pt-3 pb-4">
          {/* Touchpad */}
          <div className="w-16 h-9 mx-auto bg-white/5 border border-white/10 rounded-lg" />

          {/* Keyboard rows */}
          <div className="mt-2 space-y-1">
            {[11, 10, 9].map((count, rowIdx) => (
              <div key={rowIdx} className="flex gap-1 justify-center">
                {Array.from({ length: count }, (_, i) => (
                  <div key={i} className="h-2.5 rounded bg-white/[0.06] border border-white/[0.05]"
                    style={{ width: `${rowIdx === 0 ? 6.5 : rowIdx === 1 ? 7 : 8}%` }}
                  />
                ))}
              </div>
            ))}
            {/* Space bar row */}
            <div className="flex gap-1 justify-center">
              {[3,3].map((w, i) => (
                <div key={i} className="h-2.5 rounded bg-white/[0.06] border border-white/[0.05]" style={{ width: '6%' }} />
              ))}
              <div className="h-2.5 rounded bg-white/[0.06] border border-white/[0.05]" style={{ width: '30%' }} />
              {[3,3,3,3].map((w, i) => (
                <div key={i} className="h-2.5 rounded bg-white/[0.06] border border-white/[0.05]" style={{ width: '6%' }} />
              ))}
            </div>
          </div>

          {/* Brand text */}
          <div className="text-center mt-2">
            <span className="text-[8px] text-slate-700 tracking-widest font-semibold uppercase">Sarah Salem</span>
          </div>
        </div>
      </motion.div>

      {/* Reflection/shadow */}
      <div className="absolute -bottom-4 left-4 right-4 h-6 bg-black/30 blur-xl rounded-full" />

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute -left-10 top-12 bg-[#0d1535]/90 backdrop-blur border border-violet-500/30 rounded-xl px-3 py-2 shadow-xl shadow-violet-500/10 hidden lg:flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-lg bg-violet-500/20 flex items-center justify-center text-sm">⚡</div>
        <div>
          <div className="text-[10px] font-bold text-white leading-none">Flutter</div>
          <div className="text-[9px] text-slate-500">Mobile Dev</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.7, duration: 0.6 }}
        className="absolute -right-10 top-28 bg-[#0d1535]/90 backdrop-blur border border-cyan-500/30 rounded-xl px-3 py-2 shadow-xl shadow-cyan-500/10 hidden lg:flex items-center gap-2"
      >
        <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-sm">📊</div>
        <div>
          <div className="text-[10px] font-bold text-white leading-none">Power BI</div>
          <div className="text-[9px] text-slate-500">Data Analyst</div>
        </div>
      </motion.div>

    </div>
  )
}
