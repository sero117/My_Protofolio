import { motion } from 'framer-motion'
import { Github, Linkedin, MessageCircle, Download, Mail, ArrowRight } from 'lucide-react'

export function Contact() {
  const contactLinks = [
    {
      id: 'whatsapp',
      icon: MessageCircle,
      label: 'WhatsApp',
      value: '+963 998 740 489',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      iconBg: 'bg-green-500',
      hoverBg: 'hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-800/30 dark:hover:to-emerald-800/30',
      link: 'https://wa.me/+963998740489'
    },
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: 'sarah117salem01@gmail.com',
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20',
      iconBg: 'bg-red-500',
      hoverBg: 'hover:from-red-100 hover:to-pink-100 dark:hover:from-red-800/30 dark:hover:to-pink-800/30',
      link: 'mailto:sarah117salem01@gmail.com'
    },
    {
      id: 'github',
      icon: Github,
      label: 'GitHub',
      value: '@sero117',
      color: 'from-gray-600 to-slate-600',
      bgColor: 'from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20',
      iconBg: 'bg-gray-800',
      hoverBg: 'hover:from-gray-100 hover:to-slate-100 dark:hover:from-gray-800/30 dark:hover:to-slate-800/30',
      link: 'https://github.com/sero117'
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Sarah Salem',
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      iconBg: 'bg-blue-600',
      hoverBg: 'hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-800/30 dark:hover:to-indigo-800/30',
      link: 'https://www.linkedin.com/in/sarah-salem-5a35783b2'
    }
  ]

  return (
    <section id="contact" className="min-h-screen py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/30 dark:bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <div className="text-6xl">📮</div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-6 leading-tight"
          >
            Get in Touch
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Connect with me through any of these channels. I'm always excited to collaborate and discuss new opportunities.
          </motion.p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactLinks.map((contact, index) => (
            <motion.a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className={`bg-gradient-to-br ${contact.bgColor} backdrop-blur-xl p-8 rounded-3xl border border-white/50 dark:border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 ${contact.iconBg} rounded-2xl group-hover:scale-110 transition-transform`}>
                  <contact.icon className="w-6 h-6 text-white" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors opacity-0 group-hover:opacity-100 transform translate-x-2" />
              </div>

              <div className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {contact.label}
              </div>
              <div className={`text-sm bg-gradient-to-r ${contact.color} bg-clip-text text-transparent font-semibold`}>
                {contact.value}
              </div>
            </motion.a>
          ))}
        </div>

        {/* CV Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="relative"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-3xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <motion.a
              href="https://drive.google.com/file/d/104L4RxsPFV1uhMGjx5lquWZbtVtUJOgh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 p-8 rounded-3xl"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-black text-white mb-2">Download My CV</div>
                  <div className="text-purple-200">Get a copy of my resume and expertise</div>
                </div>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex-shrink-0"
                >
                  <Download className="w-8 h-8 text-white" />
                </motion.div>
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 grid md:grid-cols-3 gap-8 text-center"
        >
          {[
            { number: '3+', label: 'Years Experience', icon: '⚡' },
            { number: '10+', label: 'Projects Completed', icon: '🚀' },
            { number: '24/7', label: 'Ready to Collaborate', icon: '💬' }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 + idx * 0.1 }}
              className="bg-white/50 dark:bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/50 dark:border-white/10"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-slate-600 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
