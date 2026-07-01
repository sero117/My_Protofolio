import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { BarChart3, TrendingUp, Users, PieChart, ExternalLink, FileText, Database, ChevronLeft, ChevronRight } from 'lucide-react'

const BASE = import.meta.env.BASE_URL

const ORDER_IMAGES = [
  `${BASE}images/data-orders-excel-1.png`,
  `${BASE}images/data-orders-excel-2.png`,
  `${BASE}images/data-orders-excel-3.png`,
  `${BASE}images/data-orders-python-1.png`,
  `${BASE}images/data-orders-python-2.png`,
  `${BASE}images/data-orders-python-3.png`,
]

const SALES_IMAGES = [
  `${BASE}images/data-sales-powerbi-1.png`,
  `${BASE}images/data-sales-powerbi-2.png`,
  `${BASE}images/data-sales-powerbi-3.png`,
  `${BASE}images/data-sales-powerbi-4.png`,
]

const EMPLOYEE_IMAGES = [
  `${BASE}images/data-employee-powerbi.png`,
]

const LOOKER_IMAGES = [
  `${BASE}images/data-projects-looker-1.png`,
  `${BASE}images/data-projects-looker-2.png`,
]

// Tool brand colors for the chrome bar
const TOOL_BRANDS = {
  excel:   { label: 'Excel & Python', dot: '#22c55e',  bg: '#166534' },
  powerbi: { label: 'Power BI',       dot: '#f59e0b',  bg: '#78350f' },
  looker:  { label: 'Looker Studio',  dot: '#3b82f6',  bg: '#1e3a8a' },
}

// ── Dashboard image slider ────────────────────────────────────────────────────
function DashboardSlider({ images, tool, url }) {
  const [current,   setCurrent]   = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused,    setPaused]    = useState(false)
  const total = images.length
  const brand = TOOL_BRANDS[tool] || TOOL_BRANDS.powerbi

  useEffect(() => {
    if (paused || total <= 1) return
    const id = setInterval(() => {
      setDirection(1)
      setCurrent(c => (c + 1) % total)
    }, 3200)
    return () => clearInterval(id)
  }, [paused, total])

  const go = (dir) => {
    setPaused(true)
    setDirection(dir)
    setCurrent(c => (c + dir + total) % total)
    setTimeout(() => setPaused(false), 4000)
  }

  const slideVariants = {
    enter:  (d) => ({ x: d > 0 ? '100%' : '-100%', opacity: 0  }),
    center:       ({ x: 0,                           opacity: 1  }),
    exit:   (d) => ({ x: d > 0 ? '-100%' : '100%', opacity: 0  }),
  }

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl shadow-slate-200/40 dark:shadow-black/50">
      {/* Chrome bar */}
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-100 dark:bg-[#131c2e] border-b border-slate-200 dark:border-white/[0.07]">
        <div className="flex gap-1.5 flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
        </div>
        {/* URL bar */}
        <div className="flex-1 flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-white/[0.06] border border-slate-200 dark:border-white/10 min-w-0">
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: brand.dot }} />
          <span className="text-[10px] truncate font-medium" style={{ color: 'var(--text-muted)' }}>{url}</span>
        </div>
        {/* Tool badge + counter */}
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-md text-white" style={{ background: brand.bg }}>
            {brand.label}
          </span>
          {total > 1 && (
            <span className="text-[10px] font-medium tabular-nums" style={{ color: 'var(--text-muted)' }}>
              {current + 1}/{total}
            </span>
          )}
        </div>
      </div>

      {/* Image area */}
      <div className="relative bg-slate-900 overflow-hidden" style={{ height: 260 }}>
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.img
            key={current}
            src={images[current]}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full object-cover object-top"
            draggable={false}
          />
        </AnimatePresence>

        {total > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-100 opacity-70"
              style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={() => go(1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-opacity hover:opacity-100 opacity-70"
              style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </>
        )}
      </div>

      {/* Progress bar + dots */}
      {total > 1 && (
        <div className="px-4 py-2.5 bg-slate-100 dark:bg-[#0d1321] border-t border-slate-200 dark:border-white/[0.06]">
          <div className="w-full h-[2px] bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden mb-2">
            <motion.div
              className="h-full rounded-full"
              style={{ background: brand.dot }}
              animate={{ width: `${((current + 1) / total) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="flex justify-center gap-1.5">
            {Array.from({ length: total }, (_, i) => (
              <button
                key={i}
                onClick={() => { setPaused(true); setDirection(i > current ? 1 : -1); setCurrent(i); setTimeout(() => setPaused(false), 4000) }}
                className="rounded-full transition-all duration-300"
                style={{
                  width:      i === current ? 20 : 6,
                  height:     6,
                  background: i === current ? brand.dot : 'var(--text-muted)',
                  opacity:    i === current ? 1 : 0.4,
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// ── Project data ──────────────────────────────────────────────────────────────
const projects = [
  {
    id: 'orders-analysis',
    title: 'Order Data Analysis',
    subtitle: 'Sales & Customer Insights — Excel & Python',
    driveLink: 'https://drive.google.com/file/d/1nM3JZwH13IFphZjyTwktvQrYKOcRKpFE/view?usp=sharing',
    docsLink:  'https://docs.google.com/document/d/1L3I0cKipUL5nUjNqCLdLE33Rx27rTSlxjmtWllQk-2k/edit?usp=sharing',
    accentColor: 'amber',
    images: ORDER_IMAGES,
    tool: 'excel',
    url: 'excel · jupyter-notebook / order-analysis',
    features: [
      { icon: TrendingUp, label: 'Top Products',    desc: 'Top 10 best-selling items'      },
      { icon: BarChart3,  label: 'Seasonal Trends', desc: 'Demand pattern analysis'        },
      { icon: Users,      label: 'Segmentation',    desc: 'High-frequency buyer profiles'  },
      { icon: Database,   label: 'Data Cleaning',   desc: 'Python & Pandas pipeline'       },
    ],
    tech: ['Python', 'Pandas', 'Matplotlib', 'Excel', 'VLOOKUP', 'SUMIFS'],
    description: 'Full data analysis workflow — from cleaning raw customer records in Excel (VLOOKUP, SUMIFS, pivot charts) to visual insights with Python & Matplotlib. Identifies top-selling products, seasonal demand peaks, and high-value customer segments.',
  },
  {
    id: 'sales-dashboard',
    title: 'Sales Performance Dashboard',
    subtitle: 'Power BI Business Analytics',
    pbiLink:   'https://drive.google.com/file/d/1pVe5L3C_STI3wDFv9oWSShvsDfz3gL9o/view?usp=sharing',
    docsLink:  'https://docs.google.com/document/d/1cLvFkVKWZZG3xfXllSn88JZ6AAvFlEI7NMys1ZWdj0Q/edit?usp=sharing',
    accentColor: 'violet',
    images: SALES_IMAGES,
    tool: 'powerbi',
    url: 'app.powerbi.com / sales-performance-dashboard',
    features: [
      { icon: PieChart,   label: 'Revenue Trends',  desc: 'Monthly & branch comparison'   },
      { icon: TrendingUp, label: 'Branch KPIs',      desc: 'Multi-branch performance view' },
      { icon: BarChart3,  label: 'Supermarket Sales', desc: 'Product & category breakdown' },
      { icon: Database,   label: 'DAX Measures',     desc: 'Custom calculated metrics'     },
    ],
    tech: ['Power BI', 'DAX', 'Data Modeling', 'Business Intelligence'],
    description: 'Interactive Power BI dashboards delivering revenue breakdowns across branches and months, product category performance, and supermarket sales trends — with dynamic slicers for filtered deep-dives.',
  },
  {
    id: 'employee-report',
    title: 'Employee Report Dashboard',
    subtitle: 'HR Analytics & Workforce Insights — Power BI',
    pbiLink:   'https://drive.google.com/file/d/1mJafseEdakD6jfhCUtQdtp4Nw19CnyiU/view?usp=sharing',
    docsLink:  'https://docs.google.com/document/d/1VxUzC6eRQOC5miFE5kY0KX371qFMvArY/view?usp=sharing',
    accentColor: 'cyan',
    images: EMPLOYEE_IMAGES,
    tool: 'powerbi',
    url: 'app.powerbi.com / employee-report-dashboard',
    features: [
      { icon: Users,      label: 'Workforce Map',   desc: 'Multi-country distribution'   },
      { icon: BarChart3,  label: 'Dept Breakdown',  desc: 'Count by department & gender' },
      { icon: TrendingUp, label: 'Hiring Trends',   desc: 'Employee growth over years'   },
      { icon: PieChart,   label: 'Salary Metrics',  desc: 'Avg monthly salary by region' },
    ],
    tech: ['Power BI', 'HR Analytics', 'Data Visualization', 'DAX'],
    description: 'Comprehensive HR analytics dashboard analyzing 156 employees across 5 countries (Egypt, Lebanon, Saudi Arabia, Syria, UAE) — with department counts, salary KPIs, gender ratios, and hiring trend lines filterable by country and center.',
  },
  {
    id: 'projects-reports',
    title: 'Projects & Service Reports',
    subtitle: 'Looker Studio — Business Intelligence',
    lookerLink: 'https://lookerstudio.google.com/s/jsnGNkbMr0o',
    docsLink:   'https://docs.google.com/document/d/1wc13XQVHsNI4X7lvznmys5STc9Xhd1zqUjLvPZ2m1b0/edit?usp=sharing',
    accentColor: 'emerald',
    images: LOOKER_IMAGES,
    tool: 'looker',
    url: 'lookerstudio.google.com / projects-dashboard',
    features: [
      { icon: BarChart3,  label: 'Project KPIs',    desc: '85M value, 580 shipments'      },
      { icon: TrendingUp, label: 'World Map',        desc: 'Global project distribution'   },
      { icon: Database,   label: 'Sales Analytics',  desc: 'Revenue & trip performance'    },
      { icon: PieChart,   label: 'Quality Metrics',  desc: 'Cancellation & service rates'  },
    ],
    tech: ['Looker Studio', 'Google Analytics', 'Data Visualization', 'BigQuery'],
    description: 'Two Looker Studio dashboards — a Projects Data Dashboard tracking 5 major projects with budget, delivery rates, and a world map distribution view; plus a service quality report analyzing ride volumes and cancellation root causes.',
  },
]

const iconTextColor = {
  amber:   'text-amber-600 dark:text-amber-400',
  violet:  'text-violet-600 dark:text-violet-400',
  cyan:    'text-cyan-600 dark:text-cyan-400',
  emerald: 'text-emerald-600 dark:text-emerald-400',
}

// ── Section ───────────────────────────────────────────────────────────────────
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
                {/* Info card */}
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

                {/* Dashboard slider */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className={isReversed ? 'lg:col-start-1' : ''}
                >
                  <DashboardSlider
                    images={project.images}
                    tool={project.tool}
                    url={project.url}
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
