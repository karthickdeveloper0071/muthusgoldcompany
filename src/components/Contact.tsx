import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Call Us',
      value: '+91 63778 36377',
      link: 'tel:+916377836377',
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: '+91 63778 36377',
      link: 'https://wa.me/916377836377',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'muthusgold@gmail.com',
      link: 'mailto:muthusgold@gmail.com',
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      value: 'Mon - Sat: 9 AM - 7 PM',
      link: null,
    },
  ]

  return (
    <section id="contact" ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white to-ivory" itemScope itemType="https://schema.org/LocalBusiness">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-maroon mb-4" itemProp="name">
            Contact Muthus Gold Company Tamil Nadu
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto" itemProp="description">
            Ready to turn your gold into cash? Contact Muthus Gold Company today for instant quotes and best gold rates in Tamil Nadu
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center flex-shrink-0">
                  <info.icon className="text-charcoal text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-maroon mb-1">{info.title}</h3>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-charcoal/70 hover:text-gold transition-colors"
                      itemProp={info.title === 'Call Us' || info.title === 'WhatsApp' ? 'telephone' : info.title === 'Email' ? 'email' : ''}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-charcoal/70" itemProp="openingHours">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-white rounded-2xl shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold-gradient rounded-full flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-charcoal text-xl" />
                </div>
                <div>
                  <h3 className="font-semibold text-maroon mb-2">Visit Us</h3>
                  <p className="text-charcoal/70 leading-relaxed" itemProp="areaServed">
                    All Over Tamil Nadu, India
                  </p>
                </div>
              </div>
            </motion.div>

            <a href="tel:+916377836377">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-maroon-gradient text-ivory px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center justify-center gap-3"
              >
                <FaPhone />
                Reach Us Now
              </motion.button>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-[500px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8662069534895!2d80.27093631482183!3d13.044262990806988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b5e3e3e3e3%3A0x3e3e3e3e3e3e3e3e!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Muthus Gold Company Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
