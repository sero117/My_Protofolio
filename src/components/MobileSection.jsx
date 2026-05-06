import { motion } from 'framer-motion'
import { Smartphone, Code2, Database, MapPin, Route, GraduationCap, Users, BookOpen } from 'lucide-react'

const projects = [
  {
    id: 'waselni',
    title: 'Waselni Mobile App',
    subtitle: 'Transportation & Route Booking',
    github: 'https://github.com/wesamkhateeb98-creator/SoftPro.Waselni.Mobile.git',
    features: [
      { icon: Code2, label: 'State Management', desc: 'GetX' },
      { icon: Database, label: 'Real-time', desc: 'Socket.io' },
      { icon: MapPin, label: 'Interactive Maps', desc: 'Google Maps Integration' },
      { icon: Route, label: 'Route Booking', desc: 'Dio API Integration' }
    ],
    description: 'Complete transportation app with real-time tracking, route booking, and interactive maps for seamless travel experience.',
    tech: ['Flutter', 'GetX', 'Socket.io', 'Dio', 'Google Maps']
  },
  {
    id: 'islamic-school',
    title: 'Islamic School Management',
    subtitle: 'Complete Educational System',
    features: [
      { icon: Code2, label: 'State Management', desc: 'GetX' },
      { icon: Database, label: 'HTTP Communication', desc: 'REST APIs' },
      { icon: Users, label: 'Student Management', desc: 'Complete Profiles' },
      { icon: BookOpen, label: 'Academic System', desc: 'Grades & Attendance' }
    ],
    description: 'Comprehensive school management system with student tracking, attendance monitoring, grade management, and administrative features.',
    tech: ['Flutter', 'GetX', 'HTTP', 'SQLite', 'Charts']
  }
]

export function MobileSection() {
  return (
    <section id="mobile" className="min-h-screen py-32 px-4">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-6"
        >
          Mobile App Development
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Building high-performance cross-platform apps with Flutter & Dart expertise
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto space-y-20">
        {projects.map((project, projectIndex) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: projectIndex * 0.2 }}
            className={`grid lg:grid-cols-2 gap-12 items-center ${projectIndex % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
          >
            <motion.div
              initial={{ opacity: 0, x: projectIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={projectIndex % 2 === 1 ? 'lg:col-start-2' : ''}
            >
              <div className="bg-white/90 text-slate-900 dark:bg-white/5 dark:text-white backdrop-blur-xl p-8 rounded-3xl border border-slate-200/50 dark:border-white/20">
                <h3 className="text-3xl font-black bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {project.title}
                </h3>
                <p className="text-lg text-slate-600 dark:text-gray-300 mb-6">
                  {project.subtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {project.features.map((feature, i) => (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/10 dark:hover:bg-white/5 transition-all"
                    >
                      <feature.icon className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-slate-900 dark:text-white text-sm">{feature.label}</div>
                        <div className="text-slate-600 dark:text-gray-400 text-xs">{feature.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mb-6">
                  <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs rounded-full border border-emerald-500/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex-1 text-center py-3 font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25"
                  >
                    View on GitHub
                  </a>
                  <button className="bg-white/90 text-slate-900 dark:bg-white/5 dark:text-white backdrop-blur-xl px-6 py-3 border-2 border-slate-200/40 dark:border-white/30 hover:border-emerald-400 font-semibold rounded-xl transition-all">
                    Live Demo
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={projectIndex % 2 === 1 ? 'lg:col-start-1' : ''}
            >
              <div className="bg-white/90 text-slate-900 dark:bg-white/5 dark:text-white backdrop-blur-xl p-8 rounded-3xl h-[500px] flex items-center justify-center bg-gradient-to-br from-emerald-500/5 to-blue-500/5 border border-emerald-500/30">
                <div className="text-center">
                  <div className="text-8xl mb-4">
                    {project.id === 'waselni' ? '🚗' : '🎓'}
                  </div>
                  <div className="text-lg font-semibold text-slate-700 dark:text-gray-300">
                    {project.title}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-gray-400 mt-2">
                    Mobile Application
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

