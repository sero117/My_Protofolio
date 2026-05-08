import { motion } from 'framer-motion'
import { BarChart3, Database, Award, Code, TrendingUp, Users, FileText, PieChart } from 'lucide-react'

const projects = [
  {
    id: 'orders-analysis',
    title: 'Order Data Analysis',
    subtitle: 'Sales & Customer Insights',
    driveLink: 'https://drive.google.com/file/d/1nM3JZwH13IFphZjyTwktvQrYKOcRKpFE/view?usp=sharing',
    docsLink: 'https://docs.google.com/document/d/1L3I0cKipUL5nUjNqCLdLE33Rx27rTSlxjmtWllQk-2k/edit?usp=sharing',
    features: [
      { icon: TrendingUp, label: 'Sales Analysis', desc: 'Top-selling products' },
      { icon: BarChart3, label: 'Seasonal Patterns', desc: 'Demand trends' },
      { icon: Users, label: 'Customer Segments', desc: 'High-frequency buyers' }
    ],
    description: 'Comprehensive analysis of order data revealing top 10 best-selling products, seasonal demand patterns, and customer segments with highest order frequency.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Excel'],
    icon: 'ðŸ“Š'
  },
  {
    id: 'sales-dashboard',
    title: 'Sales Performance Dashboard',
    subtitle: 'Power BI Analytics',
    pbiLink: 'https://drive.google.com/file/d/1pVe5L3C_STI3wDFv9oWSShvsDfz3gL9o/view?usp=sharing',
    docsLink: 'https://docs.google.com/document/d/1cLvFkVKWZZG3xfXllSn88JZ6AAvFlEI7NMys1ZWdj0Q/edit?usp=sharing',
    features: [
      { icon: PieChart, label: 'Market Analysis', desc: 'Product categories' },
      { icon: TrendingUp, label: 'Regional Performance', desc: 'Cairo & Beirut focus' },
      { icon: Users, label: 'Gender Insights', desc: 'Profit margin analysis' }
    ],
    description: 'Interactive Power BI dashboard showing market dynamism, sales trends, and regional performance with actionable insights for business growth.',
    tech: ['Power BI', 'Data Analysis', 'Business Intelligence'],
    icon: 'ðŸ“ˆ'
  },
  {
    id: 'employee-report',
    title: 'Employee Report Dashboard',
    subtitle: 'HR Analytics & Workforce Insights',
    pbiLink: 'https://drive.google.com/file/d/1mJafseEdakD6jfhCUtQdtp4Nw19CnyiU/view?usp=sharing',
    docsLink: 'https://docs.google.com/document/d/1VxUzC6eRQOC5miFE5kY0KX371qFMvArY/view?usp=sharing',
    features: [
      { icon: Users, label: 'Workforce Distribution', desc: 'Multi-country overview' },
      { icon: BarChart3, label: 'Performance Metrics', desc: 'Salary & job rates' },
      { icon: TrendingUp, label: 'Growth Trends', desc: 'Hiring patterns' }
    ],
    description: 'Comprehensive HR dashboard analyzing workforce distribution across regions with 156 employees, salary metrics, and departmental insights.',
    tech: ['Power BI', 'HR Analytics', 'Data Visualization'],
    icon: 'ðŸ‘¥'
  },
  {
    id: 'trip-service',
    title: 'Trip Report & Quality of Service',
    subtitle: 'Transportation Analytics',
    lookerLink: 'https://lookerstudio.google.com/s/jsnGNkbMr0o',
    docsLink: 'https://docs.google.com/document/d/1wc13XQVHsNI4X7lvznmys5STc9Xhd1zqUjLvPZ2m1b0/edit?usp=sharing',
    features: [
      { icon: BarChart3, label: 'Ride Metrics', desc: 'Total rides & completion' },
      { icon: TrendingUp, label: 'Cancellation Analysis', desc: '32.18% cancellation rate' },
      { icon: Database, label: 'Service Quality', desc: 'Vehicle type insights' }
    ],
    description: 'Detailed transportation analytics dashboard showing ride performance, cancellation trends, and service quality metrics for operational optimization.',
    tech: ['Looker Studio', 'Google Analytics', 'Data Visualization'],
    icon: 'ðŸš—'
  }
]

export function DataSection() {
  return (
    <section id="data" className="min-h-screen py-32 px-4">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent mb-6"
        >
          Data Analysis
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 max-w-4xl mx-auto mb-8"
        >
          Data analysis is the art of turning chaos into insights.
        </motion.p>
      </div>

      {/* About Me Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-20"
      >
        <div className="bg-white/90 text-slate-900 dark:bg-white/5 dark:text-white backdrop-blur-xl p-8 rounded-3xl border border-slate-200/50 dark:border-white/20">
        
          <div className="space-y-4 text-slate-700 dark:text-gray-300 leading-relaxed">
         
            <p>
              I have experience working on projects related to sales analysis, forecasting, dashboard creation, and data visualization.
              My focus is always on accuracy, clarity, and delivering insights that help improve performance, reduce costs,
              and solve real business problems.
            </p>
            <p className="text-center font-semibold text-orange-400 mt-6">
              If you're looking for a data analyst who can turn complex datasets into actionable insights, I'm ready to collaborate!
            </p>
          </div>
        </div>
      </motion.div>

      {/* Projects Section */}
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
                <h3 className="text-3xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
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
                      <feature.icon className="w-6 h-6 text-orange-400 flex-shrink-0" />
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
                    <span key={tech} className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs rounded-full border border-orange-500/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.driveLink && (
                    <a
                      href={project.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 flex-1 text-center py-3 font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25"
                    >
                      View on Drive
                    </a>
                  )}
                  {project.pbiLink && (
                    <a
                      href={project.pbiLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 flex-1 text-center py-3 font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
                    >
                      Power BI File
                    </a>
                  )}
                  {project.lookerLink && (
                    <a
                      href={project.lookerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 flex-1 text-center py-3 font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/25"
                    >
                      Looker Studio
                    </a>
                  )}
                  {project.docsLink && (
                    <a
                      href={project.docsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/90 text-slate-900 dark:bg-white/5 dark:text-white backdrop-blur-xl px-6 py-3 border-2 border-slate-200/40 dark:border-white/30 hover:border-orange-400 font-semibold rounded-xl transition-all"
                    >
                      Analysis Report
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className={projectIndex % 2 === 1 ? 'lg:col-start-1' : ''}
            >
              <div className="bg-white/90 text-slate-900 dark:bg-white/5 dark:text-white backdrop-blur-xl p-8 rounded-3xl h-[500px] flex items-center justify-center bg-gradient-to-br from-orange-500/5 to-red-500/5 border border-orange-500/30">
                <div className="text-center">
                  <div className="text-8xl mb-4">
                    {project.icon}
                  </div>
                  <div className="text-lg font-semibold text-slate-700 dark:text-gray-300">
                    {project.title}
                  </div>
                  <div className="text-sm text-slate-500 dark:text-gray-400 mt-2">
                    Data Analytics Project
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

