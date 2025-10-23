import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaPhoneAlt, FaSearchDollar, FaFileContract, FaMoneyBillWave } from 'react-icons/fa'

const Process = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      icon: FaPhoneAlt,
      title: 'Contact Us',
      description: 'Call or visit us with your gold jewelry or loan documents',
    },
    {
      icon: FaSearchDollar,
      title: 'Free Evaluation',
      description: 'Our experts evaluate your gold and provide instant quote',
    },
    {
      icon: FaFileContract,
      title: 'Documentation',
      description: 'Simple paperwork process, we handle all formalities',
    },
    {
      icon: FaMoneyBillWave,
      title: 'Get Paid',
      description: 'Receive instant cash payment on the spot',
    },
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 bg-maroon relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.5) 0%, transparent 50%)',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-gold mb-4">
            How It Works
          </h2>
          <p className="text-lg text-ivory/80 max-w-2xl mx-auto">
            Simple 4-step process to turn your gold into cash
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative text-center"
            >
              <div className="relative">
                <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <step.icon className="text-3xl text-maroon" />
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-ivory rounded-full flex items-center justify-center font-bold text-maroon text-xl shadow-lg">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-playfair font-bold text-gold mb-3">
                {step.title}
              </h3>
              <p className="text-ivory/80 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
