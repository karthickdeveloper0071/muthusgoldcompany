import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp, FaTimes } from 'react-icons/fa'
import { trackEvent } from '../utils/analytics'

const LeadCapture = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goldType: 'jewelry',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    trackEvent('lead_form_submit', 'lead_generation', 'popup_form')
    
    const whatsappMessage = `Hi! I'm ${formData.name}. I want to sell my ${formData.goldType}. Phone: ${formData.phone}. ${formData.message}`
    const whatsappUrl = `https://wa.me/916377836377?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        className="bg-white rounded-2xl p-6 max-w-md w-full relative"
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <FaTimes />
        </button>

        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-maroon mb-2">Get Best Gold Rates!</h3>
          <p className="text-gray-600">Instant cash for your gold. Fill details below:</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gold"
            required
          />
          
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gold"
            required
          />
          
          <select
            value={formData.goldType}
            onChange={(e) => setFormData({...formData, goldType: e.target.value})}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gold"
          >
            <option value="jewelry">Gold Jewelry</option>
            <option value="coins">Gold Coins</option>
            <option value="bars">Gold Bars</option>
            <option value="ornaments">Gold Ornaments</option>
            <option value="loan">Gold Loan Settlement</option>
          </select>
          
          <textarea
            placeholder="Additional details (optional)"
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gold h-20"
          />
          
          <button
            type="submit"
            className="w-full bg-gold text-maroon py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gold/90"
          >
            <FaWhatsapp />
            Get Quote on WhatsApp
          </button>
        </form>

        <div className="mt-4 text-center">
          <a
            href="tel:+916377836377"
            className="inline-flex items-center gap-2 text-maroon font-semibold"
          >
            <FaPhone />
            Or Call: +91-6377836377
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default LeadCapture