import { motion } from 'framer-motion'
import { Code, Database, BarChart3, FileText, Globe, Smartphone, Heart } from 'lucide-react'

const skills = [
  { icon: Smartphone, label: 'تطوير تطبيقات', desc: 'Mobile & Web Apps' },
  { icon: Code, label: 'Python', desc: 'Data Analysis' },
  { icon: Database, label: 'SQL', desc: 'Database Design' },
  { icon: BarChart3, label: 'Power BI', desc: 'Data Visualization' },
  { icon: FileText, label: 'Excel', desc: 'Advanced Analytics' },
  { icon: Globe, label: 'Web Development', desc: 'Full Stack' }
]

export function Footer() {
  return (
    <footer className="relative py-16 mt-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-50/50 via-transparent to-transparent dark:from-purple-900/20 dark:via-transparent dark:to-transparent"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-8">
            My Expertise
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 dark:bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/50 dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <skill.icon className="w-8 h-8 mx-auto mb-3 text-purple-500 group-hover:text-pink-500 transition-colors duration-300" />
                <div className="font-bold text-slate-900 dark:text-white text-sm mb-1">
                  {skill.label}
                </div>
                <div className="text-slate-600 dark:text-gray-400 text-xs">
                  {skill.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center border-t border-slate-200/40 dark:border-white/10 pt-8"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sarah Salem
            </span>
            <Heart className="w-5 h-5 text-red-400 animate-pulse" />
          </div>

          <div className="text-slate-600 dark:text-gray-400 text-sm mb-2">
            Data Analyst & Full Stack Developer
          </div>

          <div className="text-slate-500 dark:text-gray-500 text-xs">
            © 2026 Sarah Salem. Built with passion and creativity
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

