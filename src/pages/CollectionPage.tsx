import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const CollectionPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const collections = [
    { url: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=60', title: 'Gold Loan Settlement', category: 'Service' },
    { url: 'https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?w=400&q=60', title: 'Instant Cash Payment', category: 'Service' },
    { url: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=60', title: 'Transparent Evaluation', category: 'Service' },
    { url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=60', title: 'Quick Documentation', category: 'Service' },
    { url: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=60', title: 'Best Market Rates', category: 'Service' },
    { url: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&q=60', title: 'All Bank Loans Accepted', category: 'Service' },
  ]

  return (
    <>
      <Helmet>
        <title>Gold Services Collection Tamil Nadu | Muthus Gold Company | Loan Settlement & Gold Buying</title>
        <meta name="description" content="Comprehensive gold services collection: loan settlement, instant cash payment, transparent evaluation, best market rates. Muthus Gold Company serves all Tamil Nadu, India." />
        <meta name="keywords" content="gold services collection tamil nadu, gold loan settlement services, instant cash for gold, transparent gold evaluation, best gold rates tamil nadu, gold buying services collection" />
        <link rel="canonical" href="https://muthusgold.com/collection" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Gold Services Collection Tamil Nadu | Muthus Gold Company" />
        <meta property="og:description" content="Comprehensive gold services: loan settlement, instant cash, transparent evaluation. Best rates in Tamil Nadu." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muthusgold.com/collection" />
        <meta property="og:image" content="https://muthusgold.com/assets/Logo.png" />
        
        {/* Service Collection Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Muthus Gold Company Services Collection",
          "description": "Comprehensive collection of gold services offered by Muthus Gold Company in Tamil Nadu",
          "url": "https://muthusgold.com/collection",
          "numberOfItems": collections.length,
          "itemListElement": collections.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "Service",
              "name": item.title,
              "description": `${item.title} service provided by Muthus Gold Company in Tamil Nadu`,
              "category": item.category,
              "provider": {
                "@type": "Organization",
                "name": "Muthus Gold Company"
              }
            }
          }))
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
