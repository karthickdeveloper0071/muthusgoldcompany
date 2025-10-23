import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

const GoldCollection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const collections = [
    { url: 'https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=800&q=80', title: 'Bridal Collection', desc: 'Exquisite designs for your special day' },
    { url: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80', title: 'Traditional Gold', desc: 'Classic heritage jewelry pieces' },
    { url: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80', title: 'Silver Collection', desc: 'Premium silver ornaments' },
    { url: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80', title: 'Diamond & Gold', desc: 'Luxury diamond jewelry sets' },
  ]

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gradient-to-b from-white via-ivory to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-maroon mb-4">
            Our Gold Collection
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Discover our stunning range of premium gold jewelry
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {collections.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-gold transition-all duration-500"
            >
              <div className="relative h-96 overflow-hidden">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon via-maroon/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="text-2xl md:text-3xl font-playfair font-bold text-gold mb-2">
                  {item.title}
                </h3>
                <p className="text-ivory/90 text-lg mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.desc}
                </p>
                <div className="w-16 h-1 bg-gold rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Link to="/collection">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-maroon-gradient text-ivory px-10 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-gold transition-all"
            >
              View Full Collection
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default GoldCollection
