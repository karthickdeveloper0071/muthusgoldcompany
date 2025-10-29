import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    'Leading gold buyers in Tamil Nadu',
    'Best gold exchange rates in India',
    'Instant gold loan settlement services',
    'Transparent gold evaluation process',
    'Quick cash payment for gold',
    'Licensed gold company in Tamil Nadu',
    'Trusted gold dealers across India'
  ]

  return (
    <section id="about" ref={ref} className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gold-gradient opacity-20 blur-2xl rounded-3xl" />
              <img
                src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&q=70"
                alt="Gold jewelry"
                className="relative rounded-3xl shadow-2xl w-full h-[400px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-maroon mb-6">
              Tamil Nadu's Most Trusted Gold Company
            </h2>
            <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
              <strong>Muthus Gold Company</strong> is the leading gold buying and exchange company in Tamil Nadu, India. We specialize in providing instant cash for gold, gold loan settlement services, and gold exchange with the best market rates across Tamil Nadu.
            </p>
            <p className="text-lg text-charcoal/80 mb-6 leading-relaxed">
              As one of the most trusted gold companies in India, we serve customers throughout Tamil Nadu with transparent gold buying services, fair gold exchange rates, and professional gold loan clearance solutions.
            </p>
            <p className="text-lg text-charcoal/80 mb-8 leading-relaxed">
              Our expert team of gold evaluators ensures you get the best gold rates in Tamil Nadu with complete transparency. We handle all documentation and provide immediate cash payment for your gold jewelry and ornaments.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <FaCheckCircle className="text-gold text-xl flex-shrink-0" />
                  <span className="text-charcoal font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            <a href="#services">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-maroon-gradient text-ivory px-8 py-3 rounded-full font-semibold shadow-lg"
              >
                Know More
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
