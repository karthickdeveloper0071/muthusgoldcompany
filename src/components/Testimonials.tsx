import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Chennai',
      rating: 5,
      text: 'Excellent service! They cleared my gold loan within hours and gave me the best rate. Highly professional and trustworthy.',
    },
    {
      name: 'Priya Sharma',
      location: 'Bangalore',
      rating: 5,
      text: 'Very transparent process. Got instant cash for my old jewelry at market rates. The team was courteous and efficient.',
    },
    {
      name: 'Arun Patel',
      location: 'Mumbai',
      rating: 5,
      text: 'Best gold buyers in the city! No hidden charges, quick evaluation, and immediate payment. Highly recommended!',
    },
    {
      name: 'Lakshmi Iyer',
      location: 'Coimbatore',
      rating: 5,
      text: 'Settled my gold loan hassle-free. The staff explained everything clearly and the process was very smooth.',
    },
  ]

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section ref={ref} className="py-16 md:py-24 bg-maroon relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gold-gradient" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-gold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-ivory/80">
            Trusted by thousands of satisfied customers
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 backdrop-blur-md p-8 md:p-12 rounded-3xl shadow-2xl border border-gold/30"
          >
            <div className="flex gap-1 mb-6 justify-center">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <FaStar key={i} className="text-gold text-xl" />
              ))}
            </div>
            <p className="text-ivory text-lg md:text-xl leading-relaxed mb-8 text-center italic">
              "{testimonials[currentIndex].text}"
            </p>
            <div className="text-center">
              <h4 className="text-gold font-semibold text-xl mb-1">
                {testimonials[currentIndex].name}
              </h4>
              <p className="text-ivory/70">{testimonials[currentIndex].location}</p>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-gold/20 hover:bg-gold text-ivory hover:text-charcoal transition-all flex items-center justify-center"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-gold/20 hover:bg-gold text-ivory hover:text-charcoal transition-all flex items-center justify-center"
            >
              <FaChevronRight />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? 'bg-gold w-8' : 'bg-ivory/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
