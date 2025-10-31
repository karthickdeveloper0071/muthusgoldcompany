import { motion } from 'framer-motion'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'
import { trackPhoneCall, trackEvent } from '../utils/analytics'

const FloatingCTA = () => {
  const handleWhatsApp = () => {
    trackEvent('whatsapp_click', 'contact', 'floating_button')
    const message = "Hi! I want to know about gold rates and services."
    window.open(`https://wa.me/916377836377?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleCall = () => {
    trackPhoneCall()
    window.location.href = 'tel:+916377836377'
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsApp}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleCall}
        className="bg-gold text-maroon p-4 rounded-full shadow-lg hover:bg-gold/90 transition-colors"
        title="Call Now"
      >
        <FaPhone className="text-2xl" />
      </motion.button>
      
      <motion.div
        animate={{ 
          boxShadow: [
            '0 0 0 0 rgba(255, 215, 0, 0.7)',
            '0 0 0 10px rgba(255, 215, 0, 0)',
            '0 0 0 0 rgba(255, 215, 0, 0)'
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full"
      />
    </div>
  )
}

export default FloatingCTA
