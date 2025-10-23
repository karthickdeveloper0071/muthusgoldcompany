import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'

const CollectionPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const collections = [
    { url: 'https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=800&q=80', title: 'Gold Necklace Set', category: 'Bridal' },
    { url: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80', title: 'Traditional Gold Jewelry', category: 'Heritage' },
    { url: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=800&q=80', title: 'Gold Bangles Collection', category: 'Traditional' },
    { url: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&q=80', title: 'Diamond Gold Ring', category: 'Luxury' },
    { url: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&q=80', title: 'Wedding Gold Set', category: 'Bridal' },
    { url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80', title: 'Gold Rings Collection', category: 'Modern' },
    { url: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80', title: 'Traditional Gold Ornaments', category: 'Heritage' },
    { url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80', title: 'Silver Jewelry Set', category: 'Silver' },
    { url: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80', title: 'Gold Chain Collection', category: 'Modern' },
    { url: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&q=80', title: 'Luxury Gold Earrings', category: 'Luxury' },
    { url: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&q=80', title: 'Premium Gold Pendant', category: 'Modern' },
    { url: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&q=80', title: 'Bridal Gold Jewelry', category: 'Bridal' },
  ]

  return (
    <>
      <Helmet>
        <title>Gold Collection - Muthus Gold Company</title>
        <meta name="description" content="Explore our premium gold and silver jewelry collection with exquisite designs." />
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
              Our Gold Collection
            </h1>
            <p className="text-xl text-ivory/90 max-w-3xl mx-auto">
              Discover our stunning range of premium gold and silver jewelry
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
