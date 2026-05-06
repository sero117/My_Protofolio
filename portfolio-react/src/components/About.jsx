import { motion } from 'framer-motion'
import { GraduationCap, Code2, Smartphone, BarChart3 } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-950/20 via-black to-blue-950/20" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(192,132,252,0.15),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.12),transparent_50%)]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h2
            className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-300 via-white to-pink-300 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Passionate Software Engineer crafting innovative mobile apps, scalable web systems,
            and data-driven insights that make a real impact.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Education & Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="glass rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Education</h3>
                  <div className="text-lg font-semibold text-purple-300 mb-1">University of Kalamoon</div>
                  <div className="text-gray-300">Information Technology Engineer</div>
                  <div className="text-sm text-gray-400 mt-2">Building strong foundations in technology and innovation</div>
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Data Analytics Certification</h3>
                  <div className="text-lg font-semibold text-amber-300 mb-1">Professional Data Analyst</div>
                  <div className="text-gray-300 mb-3">Python + Looker Studio + Power BI</div>
                  <div className="text-sm text-gray-400">Transforming raw data into actionable business insights</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Mobile Development */}
            <div className="glass rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Mobile Development</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-emerald-500/10 rounded-xl p-3 border border-emerald-500/20">
                  <div className="font-semibold text-emerald-300 mb-1">Flutter & Dart</div>
                  <div className="text-gray-300 text-xs">Cross-platform apps</div>
                </div>
                <div className="bg-emerald-500/10 rounded-xl p-3 border border-emerald-500/20">
                  <div className="font-semibold text-emerald-300 mb-1">State Management</div>
                  <div className="text-gray-300 text-xs">GetX, Provider</div>
                </div>
                <div className="bg-emerald-500/10 rounded-xl p-3 border border-emerald-500/20">
                  <div className="font-semibold text-emerald-300 mb-1">API Integration</div>
                  <div className="text-gray-300 text-xs">RESTful APIs</div>
                </div>
                <div className="bg-emerald-500/10 rounded-xl p-3 border border-emerald-500/20">
                  <div className="font-semibold text-emerald-300 mb-1">Performance</div>
                  <div className="text-gray-300 text-xs">Optimization</div>
                </div>
              </div>
            </div>

            {/* Web Development */}
            <div className="glass rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Web Development</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-purple-500/10 rounded-xl p-3 border border-purple-500/20">
                  <div className="font-semibold text-purple-300 mb-1">React.js</div>
                  <div className="text-gray-300 text-xs">Modern UI</div>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-3 border border-purple-500/20">
                  <div className="font-semibold text-purple-300 mb-1">Node.js</div>
                  <div className="text-gray-300 text-xs">Backend APIs</div>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-3 border border-purple-500/20">
                  <div className="font-semibold text-purple-300 mb-1">Three.js</div>
                  <div className="text-gray-300 text-xs">3D Experiences</div>
                </div>
                <div className="bg-purple-500/10 rounded-xl p-3 border border-purple-500/20">
                  <div className="font-semibold text-purple-300 mb-1">Tailwind CSS</div>
                  <div className="text-gray-300 text-xs">Styling</div>
                </div>
              </div>
            </div>

            {/* Data Analysis */}
            <div className="glass rounded-3xl p-8 hover:scale-[1.02] transition-transform duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Data Analysis</h3>
              </div>
              <div className="text-gray-300 text-sm leading-relaxed mb-4">
                Extracting meaningful insights from complex datasets using advanced analytics tools and techniques.
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-orange-500/10 text-orange-300 text-xs rounded-full border border-orange-500/20">Python</span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-300 text-xs rounded-full border border-orange-500/20">Pandas</span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-300 text-xs rounded-full border border-orange-500/20">Looker Studio</span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-300 text-xs rounded-full border border-orange-500/20">Power BI</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* AI Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 glass rounded-3xl p-8 text-center hover:scale-[1.02] transition-transform duration-300"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">AI-Powered Development</h3>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
            Leveraging cutting-edge AI tools like Gemini, Claude, and Blackbox AI to accelerate development cycles,
            enhance code quality, and implement intelligent solutions that push the boundaries of what's possible.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

