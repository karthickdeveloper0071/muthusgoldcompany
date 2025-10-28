import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const CollectionPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const collections = [
    { url: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&q=80', title: 'Gold Loan Settlement', category: 'Service' },
    { url: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=800&q=80', title: 'Instant Cash Payment', category: 'Service' },
    { url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80', title: 'Transparent Evaluation', category: 'Service' },
    { url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80', title: 'Quick Documentation', category: 'Service' },
    { url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80', title: 'Best Market Rates', category: 'Service' },
    { url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80', title: 'All Bank Loans Accepted', category: 'Service' },
    { url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', title: 'Secure Transactions', category: 'Service' },
    { url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80', title: 'Professional Service', category: 'Service' },
    { url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80', title: 'Expert Consultation', category: 'Service' },
    { url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80', title: 'Customer Support', category: 'Service' },
    { url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80', title: 'Fast Processing', category: 'Service' },
    { url: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80', title: 'Trusted & Licensed', category: 'Service' },
  ]

  return (
    <>
      <Helmet>
        <title>Our Services - Muthus Gold Company</title>
        <meta name="description" content="Comprehensive gold loan settlement services with instant cash payment and best rates." />
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
              Comprehensive gold loan settlement and buying services
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {collections.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                onClick={() => setSelectedImage(item.url)}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/90 via-maroon/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-gold text-sm font-semibold mb-1">{item.category}</span>
                  <h3 className="text-ivory font-semibold text-lg">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-gold text-3xl hover:text-ivory transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <FaTimes />
          </button>
          <motion.img
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            src={selectedImage}
            alt="Collection"
            className="max-w-full max-h-full rounded-lg"
          />
        </motion.div>
      )}
    </>
  )
}

export default CollectionPage
