import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Users, PieChart, ExternalLink, FileText, Database } from 'lucide-react'

function DashboardMockup({ icon, title, color, stats }) {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-xl">
      <div className="flex items-center gap-3 px-4 py-3 bg-slate-200 dark:bg-[#131c2e] border-b border-slate-300 dark:border-white/[0.07]">
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-400/70" />
          <div className="w-2 h-2 rounded-full bg-amber-400/70" />
          <div className="w-2 h-2 rounded-full bg-emerald-400/70" />
        </div>
        <div className={`text-xs font-semibold ${color} ml-1`}>{title}</div>
      </div>
      <div className="p-5 bg-white dark:bg-[#0d1321]">
        <div className="grid grid-cols-3 gap-2 mb-4">
          {stats.map((s, i) => (
            <div key={i} className="bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/[0.07] rounded-xl p-2.5 text-center">
              <div className={`text-base font-black ${color}`}>{s.value}</div>
              <div className="text-[9px] leading-tight mt-0.5" style={{ color: 'var(--text-muted)' }}>{s.label}</div>
            </div>
          ))}
        </div>
        <div className="bg-slate-50 dark:bg-white/[0.03] rounded-xl p-3 border border-slate-200 dark:border-white/[0.06]">
          <div className="flex items-end gap-1.5 h-16 mb-1.5">
            {[40, 65, 45, 80, 55, 90, 70, 60, 85, 50].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  backgroundImage: `linear-gradient(to top, ${i % 2 === 0 ? 'rgba(124,58,237,0.6), rgba(167,139,250,0.35)' : 'rgba(6,182,212,0.5), rgba(34,211,238,0.3)'})`
                }}
              />
            ))}
          </div>
          <div className="text-[9px] text-center" style={{ color: 'var(--text-muted)' }}>Analytics Overview</div>
        </div>
        <div className="flex items-center justify-center mt-3 text-2xl">{icon}</div>
      </div>
    </div>
  )
}

const projects = [
  {
    id: 'orders-analysis',
    title: 'Order Data Analysis',
    subtitle: 'Sales & Customer Insights',
    driveLink: 'https://drive.google.com/file/d/1nM3JZwH13IFphZjyTwktvQrYKOcRKpFE/view?usp=sharing',
    docsLink: 'https://docs.google.com/document/d/1L3I0cKipUL5nUjNqCLdLE33Rx27rTSlxjmtWllQk-2k/edit?usp=sharing',
    accentColor: 'amber',
    icon: '📊',
    mockupStats: [{ value: 'Top 10', label: 'Best Sellers' }, { value: '12 Mo', label: 'Analyzed' }, { value: '4 Segs', label: 'Customers' }],
    features: [
      { icon: TrendingUp, label: 'Top Products', desc: 'Top 10 best-selling items' },
      { icon: BarChart3, label: 'Seasonal Trends', desc: 'Demand pattern analysis' },
      { icon: Users, label: 'Segmentation', desc: 'High-frequency buyers' },
      { icon: Database, label: 'Data Cleaning', desc: 'Python & Pandas pipeline' },
    ],
    tech: ['Python', 'Pandas', 'Matplotlib', 'Excel'],
    description: 'Deep-dive analysis of sales order data to identify the top 10 best-selling products, uncover seasonal demand patterns, and segment customers by purchasing behavior.',
  },
  {
    id: 'sales-dashboard',
    title: 'Sales Performance Dashboard',
    subtitle: 'Power BI Business Analytics',
    pbiLink: 'https://drive.google.com/file/d/1pVe5L3C_STI3wDFv9oWSShvsDfz3gL9o/view?usp=sharing',
    docsLink: 'https://docs.google.com/document/d/1cLvFkVKWZZG3xfXllSn88JZ6AAvFlEI7NMys1ZWdj0Q/edit?usp=sharing',
    accentColor: 'violet',
    icon: '📈',
    mockupStats: [{ value: '2 Reg', label: 'Markets' }, { value: '↑ KPIs', label: 'Tracked' }, { value: '100%', label: 'Interactive' }],
    features: [
      { icon: PieChart, label: 'Category Breakdown', desc: 'Product market share' },
      { icon: TrendingUp, label: 'Regional Sales', desc: 'Cairo & Beirut markets' },
      { icon: Users, label: 'Gender Insights', desc: 'Profit margin by segment' },
      { icon: BarChart3, label: 'KPI Tracking', desc: 'Business growth metrics' },
    ],
    tech: ['Power BI', 'DAX', 'Data Modeling', 'Business Intelligence'],
    description: 'Interactive Power BI dashboard delivering actionable sales insights across product categories, regional markets, and demographic segments to drive strategic decisions.',
  },
  {
    id: 'employee-report',
    title: 'Employee Report Dashboard',
    subtitle: 'HR Analytics & Workforce Insights',
    pbiLink: 'https://drive.google.com/file/d/1mJafseEdakD6jfhCUtQdtp4Nw19CnyiU/view?usp=sharing',
    docsLink: 'https://docs.google.com/document/d/1VxUzC6eRQOC5miFE5kY0KX371qFMvArY/view?usp=sharing',
    accentColor: 'cyan',
    icon: '👥',
    mockupStats: [{ value: '156', label: 'Employees' }, { value: 'Multi', label: 'Regions' }, { value: 'HR KPIs', label: 'Tracked' }],
    features: [
      { icon: Users, label: 'Workforce Map', desc: 'Multi-country distribution' },
      { icon: BarChart3, label: 'Salary Metrics', desc: 'Compensation analysis' },
      { icon: TrendingUp, label: 'Hiring Trends', desc: 'Growth over time' },
      { icon: PieChart, label: 'Dept Insights', desc: 'Department breakdown' },
    ],
    tech: ['Power BI', 'HR Analytics', 'Data Visualization', 'DAX'],
    description: 'Comprehensive HR analytics dashboard analyzing 156 employees across multiple regions — covering salary distribution, workforce diversity, and hiring patterns.',
  },
  {
    id: 'trip-service',
    title: 'Trip Report & Quality of Service',
    subtitle: 'Transportation Analytics — Looker Studio',
    lookerLink: 'https://lookerstudio.google.com/s/jsnGNkbMr0o',
    docsLink: 'https://docs.google.com/document/d/1wc13XQVHsNI4X7lvznmys5STc9Xhd1zqUjLvPZ2m1b0/edit?usp=sharing',
    accentColor: 'emerald',
    icon: '🚗',
    mockupStats: [{ value: '32%', label: 'Cancel Rate' }, { value: '3 Types', label: 'Vehicles' }, { value: 'Live', label: 'Dashboard' }],
    features: [
      { icon: BarChart3, label: 'Ride Volume', desc: 'Total rides & completion' },
      { icon: TrendingUp, label: 'Cancellation', desc: '32.18% root-cause analysis' },
      { icon: Database, label: 'Fleet Analysis', desc: 'Vehicle type performance' },
      { icon: PieChart, label: 'Service Quality', desc: 'Customer satisfaction KPIs' },
    ],
    tech: ['Looker Studio', 'Google Analytics', 'Data Visualization', 'BigQuery'],
    description: 'Transportation operations dashboard analyzing ride volumes, 32.18% cancellation rate root causes, and vehicle performance to optimize fleet service quality.',
  },
]

const iconTextColor = {
  amber:   'text-amber-600 dark:text-amber-400',
  violet:  'text-violet-600 dark:text-violet-400',
  cyan:    'text-cyan-600 dark:text-cyan-400',
  emerald: 'text-emerald-600 dark:text-emerald-400',
}
const mockupColor = {
  amber:   'text-amber-600 dark:text-amber-400',
  violet:  'text-violet-600 dark:text-violet-400',
  cyan:    'text-cyan-600 dark:text-cyan-400',
  emerald: 'text-emerald-600 dark:text-emerald-400',
}

export function DataSection() {
  return (
    <section id="data" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white dark:from-[#060d1f] dark:via-[#0a1020] dark:to-[#060d1f] -z-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 dark:via-amber-500/30 to-transparent" />
      <div className="absolute left-0 top-40 w-80 h-80 bg-amber-400/6 dark:bg-amber-600/6 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-600 dark:text-amber-400 mb-4">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Data Analysis</span>
          </div>
          <h2 className="section-header text-gradient-amber mb-4">Data Projects</h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
            Turning complex datasets into clear, actionable insights using Python, Power BI,
            and Looker Studio — helping businesses make data-driven decisions with confidence.
          </p>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, idx) => {
            const isReversed = idx % 2 === 1
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.06 }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${isReversed ? 'lg:grid-flow-col-dense' : ''}`}
              >
                <div className={isReversed ? 'lg:col-start-2' : ''}>
                  <div className="card-glow p-8 rounded-2xl flex flex-col gap-6">
                    <div>
                      <h3 className={`text-2xl font-black text-gradient-${project.accentColor} mb-1`}>{project.title}</h3>
                      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{project.subtitle}</p>
                    </div>

                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{project.description}</p>

                    <div className="grid grid-cols-2 gap-3">
                      {project.features.map((f) => (
                        <div key={f.label} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.06]">
                          <f.icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${iconTextColor[project.accentColor]}`} />
                          <div>
                            <div className="text-xs font-semibold" style={{ color: 'var(--text-primary)' }}>{f.label}</div>
                            <div className="text-[11px]" style={{ color: 'var(--text-muted)' }}>{f.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map(t => (
                        <span key={t} className={`tag-${project.accentColor} text-[11px]`}>{t}</span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.driveLink && (
                        <a href={project.driveLink} target="_blank" rel="noopener noreferrer"
                          className="btn-primary py-2.5 text-sm flex-1 justify-center min-w-[140px]">
                          <ExternalLink className="w-4 h-4" /> View Analysis
                        </a>
                      )}
                      {project.pbiLink && (
                        <a href={project.pbiLink} target="_blank" rel="noopener noreferrer"
                          className="btn-primary py-2.5 text-sm flex-1 justify-center min-w-[140px]">
                          <ExternalLink className="w-4 h-4" /> Power BI File
                        </a>
                      )}
                      {project.lookerLink && (
                        <a href={project.lookerLink} target="_blank" rel="noopener noreferrer"
                          className="btn-primary py-2.5 text-sm flex-1 justify-center min-w-[140px]">
                          <ExternalLink className="w-4 h-4" /> Looker Studio
                        </a>
                      )}
                      {project.docsLink && (
                        <a href={project.docsLink} target="_blank" rel="noopener noreferrer"
                          className="btn-outline py-2.5 text-sm flex-1 justify-center min-w-[120px]">
                          <FileText className="w-4 h-4" /> Report
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className={`${isReversed ? 'lg:col-start-1' : ''} animate-float-delayed`}
                >
                  <DashboardMockup
                    icon={project.icon}
                    title={project.title}
                    color={mockupColor[project.accentColor]}
                    stats={project.mockupStats}
                  />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
