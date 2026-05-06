import { motion } from 'framer-motion'
import { Globe, Server, Layout, Pill, Gamepad2, Home, ShoppingCart, Code, Database, Palette } from 'lucide-react'

const projects = [
  {
    id: 'pharmacy',
    title: 'Mayson Pharmacy',
    subtitle: 'E-Commerce Pharmacy Platform',
    website: 'https://mayson-94.pages.dev/',
    github: 'https://github.com/sero117/React_web_pharmacy.git',
    features: [
      { icon: Globe, label: 'React.js', desc: 'Modern UI Framework' },
      { icon: Server, label: 'Node.js', desc: 'Backend APIs' },
      { icon: Layout, label: 'Tailwind CSS', desc: 'Responsive Design' },
      { icon: ShoppingCart, label: 'E-Commerce', desc: 'Online Pharmacy Store' }
    ],
    description: 'Complete pharmacy e-commerce platform with product catalog, shopping cart, and secure checkout system.',
    tech: ['React', 'Node.js', 'Tailwind CSS', 'Stripe', 'MongoDB'],
    icon: '💊'
  },
  {
    id: 'gamestore',
    title: 'GameStore Web',
    subtitle: 'Gaming E-Commerce Platform',
    website: 'https://sero117.github.io/GameStore_Web/',
    github: 'https://github.com/sero117/GameStore_Web.git',
    features: [
      { icon: Code, label: 'Vanilla JavaScript', desc: 'Pure JS Implementation' },
      { icon: Layout, label: 'CSS3', desc: 'Modern Styling' },
      { icon: Gamepad2, label: 'Gaming Focus', desc: 'Game Store Interface' },
      { icon: ShoppingCart, label: 'E-Commerce', desc: 'Game Purchase System' }
    ],
    description: 'Interactive gaming e-commerce platform with game catalog, reviews, and purchase functionality.',
    tech: ['JavaScript', 'CSS3', 'HTML5', 'Local Storage', 'API Integration'],
    icon: '🎮'
  },
  {
    id: 'real-estate',
    title: 'Real Estate Platform',
    subtitle: 'Property Rental & Sales',
    website: 'https://sero117.github.io/Real_Estate/',
    github: 'https://github.com/sero117/Real_Estate.git',
    features: [
      { icon: Home, label: 'Property Listings', desc: 'Houses & Apartments' },
      { icon: Layout, label: 'Responsive Design', desc: 'Mobile-First' },
      { icon: Database, label: 'Data Management', desc: 'Property Database' },
      { icon: Palette, label: 'Modern UI', desc: 'Clean Interface' }
    ],
    description: 'Comprehensive real estate platform for property listings, rentals, and sales with advanced search and filtering.',
    tech: ['React', 'CSS3', 'JavaScript', 'REST APIs', 'Responsive Design'],
    icon: '🏠'
  }
]

export function WebSection() {
  return (
    <section id="web" className="min-h-screen py-32 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-6"
        >
          Web Development
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto"
        >
          Crafting scalable, high-performance web applications with modern JavaScript stack
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
                <h3 className="text-3xl font-black bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
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
                      <feature.icon className="w-6 h-6 text-blue-400 flex-shrink-0" />
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
                    <span key={tech} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
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
                    View Code
                  </a>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/90 text-slate-900 dark:bg-white/5 dark:text-white backdrop-blur-xl px-6 py-3 border-2 border-slate-200/40 dark:border-white/30 hover:border-blue-400 font-semibold rounded-xl transition-all"
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={projectIndex % 2 === 1 ? 'lg:col-start-1' : ''}
            >
              <div className="bg-white/90 text-slate-900 dark:bg-white/5 dark:text-white backdrop-blur-xl p-8 rounded-3xl h-[500px] flex items-center justify-center bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/30">
                <div className="text-center">
                  <div className="text-8xl mb-4">
                    {project.icon}
                  </div>
                  <div className="text-lg font-semibold text-slate-700 dark:text-gray-300">
                    {project.title}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-gray-400 mt-2">
                    Web Application
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

