import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaShieldAlt, FaAward, FaClock, FaHandshake } from 'react-icons/fa'

const WhyChooseUs = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const reasons = [
    {
      icon: FaShieldAlt,
      title: 'Trusted & Secure',
      description: 'Licensed and certified gold buyers with 100% secure transactions',
    },
    {
      icon: FaAward,
      title: 'Best Rates',
      description: 'Guaranteed highest market rates for your gold and jewelry',
    },
    {
      icon: FaClock,
      title: 'Instant Payment',
      description: 'Get cash immediately after evaluation, no waiting period',
    },
    {
      icon: FaHandshake,
      title: 'Transparent Process',
      description: 'Clear evaluation process with no hidden charges or fees',
    },
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-ivory to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-maroon mb-4">
            Why Choose Muthus Gold?
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Experience the difference with our premium gold services
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <reason.icon className="text-3xl text-maroon" />
              </div>
              <h3 className="text-xl font-playfair font-bold text-maroon mb-3">
                {reason.title}
              </h3>
              <p className="text-charcoal/70 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
