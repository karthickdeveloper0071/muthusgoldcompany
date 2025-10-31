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
        <title>Gold Services Tamil Nadu | Gold Loan Clearance | Gold Buying | Muthus Gold Company India</title>
        <meta name="description" content="Comprehensive gold services in Tamil Nadu: Gold loan clearance, gold & silver buying, loan-to-cash conversion, 24-hour service. Best rates guaranteed. Call +91-6377836377" />
        <meta name="keywords" content="gold services tamil nadu, gold loan clearance tamil nadu, gold buying services, silver buying tamil nadu, loan to cash conversion, 24 hour gold service, gold loan settlement services, instant cash for gold tamil nadu" />
        <link rel="canonical" href="https://muthusgold.com/services" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Gold Services Tamil Nadu | Gold Loan Clearance | Muthus Gold Company" />
        <meta property="og:description" content="Comprehensive gold services: loan clearance, gold buying, instant cash conversion. 24-hour service across Tamil Nadu." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muthusgold.com/services" />
        <meta property="og:image" content="https://muthusgold.com/assets/Logo.png" />
        
        {/* Service Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Gold Services by Muthus Gold Company",
          "description": "Comprehensive gold services including loan clearance, gold buying, and instant cash conversion in Tamil Nadu",
          "provider": {
            "@type": "Organization",
            "name": "Muthus Gold Company",
            "telephone": "+91-6377836377"
          },
          "areaServed": "Tamil Nadu, India",
          "serviceType": ["Gold Loan Clearance", "Gold Buying", "Silver Buying", "Loan to Cash Conversion", "24 Hour Gold Service"],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Gold Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Gold Loan Clearance",
                  "description": "Instant settlement of existing gold loans from banks and finance companies"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Gold & Silver Buying",
                  "description": "Best market rates for gold and silver jewelry with transparent evaluation"
                }
              }
            ]
          }
        })}
        </script>
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
