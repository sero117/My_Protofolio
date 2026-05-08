import { motion } from 'framer-motion'
import { useState } from 'react'

export function Hero3D() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative w-full max-w-md mx-auto lg:max-w-none lg:w-full">
      {/* Laptop Image */}
      <div className="relative flex items-center justify-center">
        <motion.div
          className="relative w-[300px] sm:w-[400px] lg:w-[500px] cursor-pointer select-none"
          initial={false}
          animate={{ scale: open ? 1.05 : 1 }}
          transition={{ type: 'spring', stiffness: 170, damping: 16 }}
          onClick={() => setOpen((v) => !v)}
          role="button"
          aria-label="Show info"
        >
          {/* Laptop Body */}
          <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 shadow-2xl border border-gray-700">
            {/* Screen */}
            <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl p-2 mb-2">
              <div className="bg-black rounded-lg aspect-video flex items-center justify-center relative overflow-hidden">
                {/* Screen Content */}
                <div className="text-white text-xs font-mono opacity-80">
                  <div className="flex items-center space-x-1 mb-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-center text-sm font-bold text-green-400">
                    SARAH'S LAPTOP
                  </div>
                  <div className="text-center text-xs text-gray-400 mt-1">
                    Portfolio Terminal
                  </div>
                </div>
              </div>
            </div>

            {/* Keyboard */}
            <div className="bg-gray-900 rounded-lg p-3">
              <div className="grid grid-cols-12 gap-1">
                {Array.from({ length: 48 }, (_, i) => (
                  <div key={i} className="bg-gray-700 rounded w-4 h-4"></div>
                ))}
              </div>
            </div>
          </div>

          {/* Info Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl flex items-center justify-center p-6"
            initial={false}
            animate={{ opacity: open ? 1 : 0, scale: open ? 1 : 0.9 }}
            transition={{ duration: 0.4 }}
            style={{ pointerEvents: open ? 'auto' : 'none' }}
          >
            <motion.div
              className="text-center text-white"
              animate={{ y: open ? 0 : 10 }}
              transition={{ duration: 0.4, delay: open ? 0.2 : 0 }}
            >
              <motion.div
                className="text-lg font-bold mb-2"
                animate={{ scale: open ? 1 : 0.8 }}
                transition={{ duration: 0.3 }}
              >
                Sarah Salem
              </motion.div>

              <motion.div
                className="text-sm text-gray-300 mb-3"
                animate={{ scale: open ? 1 : 0.8 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Software Engineer & Developer
              </motion.div>

              <motion.div
                className="text-xs text-purple-300"
                animate={{ scale: open ? 1 : 0.8 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                Flutter • React • Data Analytics
              </motion.div>

              <motion.div
                className="text-xs text-gray-400 mt-2"
                animate={{ scale: open ? 1 : 0.8 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                Click to close
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
