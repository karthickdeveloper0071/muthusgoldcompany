import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    address: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const message = `*New Inquiry from Muthus Gold Website*%0A%0A*Name:* ${formData.name}%0A*Mobile:* ${formData.mobile}%0A*Email:* ${formData.email}%0A*Address:* ${formData.address}`
    
    const whatsappUrl = `https://wa.me/916377836377?text=${message}`
    window.open(whatsappUrl, '_blank')
    
    setFormData({ name: '', mobile: '', email: '', address: '' })
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-ivory to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-maroon mb-4">
            Get a Free Quote
          </h2>
          <p className="text-lg text-charcoal/70">
            Fill the form and we'll contact you instantly via WhatsApp
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-maroon font-semibold mb-2">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gold/30 rounded-xl focus:border-gold focus:outline-none transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-maroon font-semibold mb-2">
                Mobile Number *
              </label>
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gold/30 rounded-xl focus:border-gold focus:outline-none transition-colors"
                placeholder="Enter 10 digit mobile number"
              />
            </div>

            <div>
              <label className="block text-maroon font-semibold mb-2">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gold/30 rounded-xl focus:border-gold focus:outline-none transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-maroon font-semibold mb-2">
                Address *
              </label>
              <textarea
                required
                rows={3}
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-3 border-2 border-gold/30 rounded-xl focus:border-gold focus:outline-none transition-colors resize-none"
                placeholder="Enter your address"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-maroon-gradient text-ivory px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center justify-center gap-3 hover:shadow-2xl transition-all"
            >
              <FaWhatsapp className="text-2xl" />
              Send via WhatsApp
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  )
}

export default ContactForm
