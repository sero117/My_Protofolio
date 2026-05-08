import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MessageCircle, Download, MapPin, Phone, Send } from 'lucide-react'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Initialize EmailJS (Replace with your actual Public Key)
    emailjs.init('YOUR_EMAILJS_PUBLIC_KEY')
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your Service ID
        'YOUR_TEMPLATE_ID', // Replace with your Template ID
        {
          to_email: 'sarah117salem01@gmail.com',
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          reply_to: formData.email
        }
      )

      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Error:', error)
      setError('حدث خطأ في الإرسال. تحقق من إعدادات EmailJS')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="min-h-screen py-32 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-blue-900/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/30 dark:bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/30 dark:bg-pink-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-white/80 dark:bg-white/5 backdrop-blur-xl px-6 py-3 rounded-full border border-purple-200/50 dark:border-purple-500/30 mb-8"
          >
            <Mail className="w-6 h-6 text-purple-500" />
            <span className="text-purple-600 dark:text-purple-400 font-semibold">Get In Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 bg-clip-text text-transparent mb-8 leading-tight"
          >
            Let's Connect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to bring your ideas to life? Let's collaborate and create something extraordinary together.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white/95 dark:bg-white/5 backdrop-blur-2xl p-8 md:p-12 rounded-3xl border border-white/50 dark:border-white/10 shadow-2xl shadow-purple-500/10">
              <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent mb-8">
                Send Me a Message
              </h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg mb-6"
                >
                  ✓ تم إرسال رسالتك بنجاح!
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg mb-6"
                >
                  ✗ {error}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full p-4 bg-white/80 dark:bg-white/5 dark:text-white border-2 border-purple-200/50 dark:border-purple-500/30 rounded-2xl focus:border-purple-400 focus:outline-none transition-all duration-300 text-lg placeholder-gray-500 hover:border-purple-300"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full p-4 bg-white/80 dark:bg-white/5 dark:text-white border-2 border-purple-200/50 dark:border-purple-500/30 rounded-2xl focus:border-purple-400 focus:outline-none transition-all duration-300 text-lg placeholder-gray-500 hover:border-purple-300"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Tell me about your project, ideas, or just say hello..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-4 bg-white/80 dark:bg-white/5 dark:text-white border-2 border-purple-200/50 dark:border-purple-500/30 rounded-2xl focus:border-purple-400 focus:outline-none transition-all duration-300 text-lg placeholder-gray-500 hover:border-purple-300 resize-none"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={!loading ? { scale: 1.02, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  className={`${loading ? 'opacity-75 cursor-not-allowed' : ''} bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 w-full py-5 text-xl font-bold rounded-2xl transition-all duration-300 shadow-xl shadow-purple-500/25 flex items-center justify-center gap-3 group text-white`}
                >
                  <Send className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  {loading ? 'جاري الإرسال...' : 'Send Message'}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Quick Contact Cards */}
            <div className="bg-white/95 dark:bg-white/5 backdrop-blur-2xl p-8 rounded-3xl border border-white/50 dark:border-white/10 shadow-2xl shadow-green-500/10">
              <h4 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Quick Contact
              </h4>

              <motion.a
                href="https://wa.me/+963998740489"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-800/30 dark:hover:to-emerald-800/30 transition-all duration-300 border border-green-200/50 dark:border-green-500/30 group"
              >
                <div className="p-3 bg-green-500 rounded-xl group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 dark:text-white">WhatsApp</div>
                  <div className="text-slate-600 dark:text-gray-400 text-sm">+963 998 740 489</div>
                </div>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="bg-white/95 dark:bg-white/5 backdrop-blur-2xl p-8 rounded-3xl border border-white/50 dark:border-white/10 shadow-2xl shadow-blue-500/10">
              <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6 flex items-center gap-3">
                <Github className="w-6 h-6" />
                Find Me Online
              </h4>

              <div className="grid grid-cols-1 gap-4">
                <motion.a
                  href="https://github.com/sero117"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-900/20 dark:to-slate-900/20 hover:from-gray-100 hover:to-slate-100 dark:hover:from-gray-800/30 dark:hover:to-slate-800/30 transition-all duration-300 border border-gray-200/50 dark:border-gray-500/30 group"
                >
                  <div className="p-3 bg-gray-800 rounded-xl group-hover:scale-110 transition-transform">
                    <Github className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">GitHub</div>
                    <div className="text-slate-600 dark:text-gray-400 text-sm">@sero117</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/sarah-salem-5a35783b2"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-800/30 dark:hover:to-indigo-800/30 transition-all duration-300 border border-blue-200/50 dark:border-blue-500/30 group"
                >
                  <div className="p-3 bg-blue-600 rounded-xl group-hover:scale-110 transition-transform">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">LinkedIn</div>
                    <div className="text-slate-600 dark:text-gray-400 text-sm">Sarah Salem</div>
                  </div>
                </motion.a>
              </div>
            </div>

            {/* CV Download */}
            <motion.a
              href="https://drive.google.com/file/d/104L4RxsPFV1uhMGjx5lquWZbtVtUJOgh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
              className="block bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 p-6 rounded-3xl transition-all duration-300 shadow-xl shadow-purple-500/25 group"
            >
              <div className="flex items-center justify-center gap-4">
                <div className="p-3 bg-white/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <div className="font-bold text-white text-xl">Download CV</div>
                  <div className="text-purple-100 text-sm">View my resume</div>
                </div>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
