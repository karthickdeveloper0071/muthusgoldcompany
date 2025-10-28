import { motion } from 'framer-motion'
import { FaPhone, FaCalculator } from 'react-icons/fa'
import logo from '../assets/Logo.png'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(135deg, #1a0a0a 0%, #5A1F1F 30%, #8B3A3A 60%, #D4AF37 100%)',
        }}
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.4) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255, 215, 0, 0.3) 0%, transparent 50%)',
          }} />
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 100px, rgba(212, 175, 55, 0.1) 100px, rgba(212, 175, 55, 0.1) 200px)',
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <img 
            src={logo} 
            alt="Muthus Gold" 
            className="h-32 md:h-40 w-auto mx-auto drop-shadow-2xl"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-ivory mb-6 leading-tight"
        >
          Turn Your Gold into <br />
          <span className="text-gold" style={{
            textShadow: '0 0 30px rgba(212, 175, 55, 0.5)',
          }}>Instant Cash</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-ivory/90 mb-10 max-w-3xl mx-auto"
        >
          We help you settle old gold loans and get the best market value for your jewelry with trust & transparency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="tel:+916377836377">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gold text-maroon px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 shadow-2xl hover:bg-gold/90"
            >
              <FaCalculator />
              Get Instant Quote
            </motion.button>
          </a>
          <a href="tel:+916377836377">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 hover:bg-gold hover:text-maroon transition-all"
            >
              <FaPhone />
              Call Now
            </motion.button>
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
