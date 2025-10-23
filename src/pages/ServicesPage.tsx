import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaUniversity, FaCoins, FaExchangeAlt, FaClock, FaCheckCircle } from 'react-icons/fa'

const ServicesPage = () => {
  const services = [
    {
      icon: FaUniversity,
      title: 'Gold Loan Clearance',
      description: 'We settle your existing gold loans instantly and help you get your jewelry back hassle-free.',
      features: [
        'Instant loan settlement',
        'All bank loans accepted',
        'Quick documentation',
        'Same day processing',
      ],
    },
    {
      icon: FaCoins,
      title: 'Gold & Silver Buying',
      description: 'Get the best market rates for your gold and silver jewelry with transparent evaluation.',
      features: [
        'Best market rates',
        'Free evaluation',
        'Instant cash payment',
        'All purity accepted',
      ],
    },
    {
      icon: FaExchangeAlt,
      title: 'Loan-to-Cash Conversion',
      description: 'Convert your pledged gold directly to cash without any hidden charges or delays.',
      features: [
        'Direct conversion',
        'No hidden charges',
        'Transparent process',
        'Immediate payment',
      ],
    },
    {
      icon: FaClock,
      title: '24 Hour Service',
      description: 'Quick processing and instant cash payment within 24 hours of evaluation.',
      features: [
        'Fast processing',
        'Same day service',
        'Emergency support',
        'Flexible timing',
      ],
    },
  ]

  return (
    <>
      <Helmet>
        <title>Services - Muthus Gold Company</title>
        <meta name="description" content="Comprehensive gold services including loan clearance, gold buying, and instant cash conversion." />
      </Helmet>

      <section className="pt-32 pb-16 bg-gradient-to-b from-maroon to-maroon/90 text-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-playfair font-bold text-gold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-ivory/90 max-w-3xl mx-auto">
              Comprehensive gold solutions tailored to your needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all"
              >
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mb-6">
                  <service.icon className="text-3xl text-maroon" />
                </div>
                <h2 className="text-2xl md:text-3xl font-playfair font-bold text-maroon mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <FaCheckCircle className="text-gold text-xl flex-shrink-0" />
                      <span className="text-charcoal/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default ServicesPage
