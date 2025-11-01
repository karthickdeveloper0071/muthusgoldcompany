import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaUniversity, FaCoins, FaExchangeAlt, FaClock } from 'react-icons/fa'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: FaUniversity,
      title: 'Gold Loan Clearance',
      description: 'We settle your existing gold loans instantly and help you get your jewelry back hassle-free. Contact us for immediate assistance.',
      link: '#contact'
    },
    {
      icon: FaCoins,
      title: 'Gold & Silver Buying',
      description: 'Get the best market rates for your gold and silver jewelry with transparent evaluation. See our gallery for examples.',
      link: '#gallery'
    },
    {
      icon: FaExchangeAlt,
      title: 'Loan-to-Cash Conversion',
      description: 'Convert your pledged gold directly to cash without any hidden charges or delays. Learn about our process.',
      link: '#about'
    },
    {
      icon: FaClock,
      title: '24 Hour Service',
      description: 'Quick processing and instant cash payment within 24 hours of evaluation. Contact us anytime.',
      link: '#contact'
    },
  ]

  return (
    <section id="services" ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-ivory to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-maroon mb-4">
            Our Premium Services
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Comprehensive gold solutions tailored to your needs. <a href="#contact" className="text-maroon hover:text-maroon/80 underline transition-colors">Contact us</a> for personalized service or <a href="#about" className="text-maroon hover:text-maroon/80 underline transition-colors">learn more about our company</a>.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
              <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gold/20">
                <div className="w-16 h-16 bg-gold-gradient rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-2xl text-charcoal" />
                </div>
                <h3 className="text-xl font-playfair font-bold text-maroon mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed mb-4">
                  {service.description}
                </p>
                {service.link && (
                  <a href={service.link} className="text-maroon hover:text-maroon/80 font-medium underline transition-colors">
                    Learn More →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
