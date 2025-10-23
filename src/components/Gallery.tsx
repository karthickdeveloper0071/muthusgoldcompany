import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import img1 from '../assets/muthusgold.jpg'
import img2 from '../assets/muthusgold1.jpg'
import img3 from '../assets/muthusold2.jpg'
import img4 from '../assets/muthus gold 4.jpg'
import img5 from '../assets/muthus gold 5.jpg'
import img6 from '../assets/muthus gold 6.jpg'
import img7 from '../assets/muthus gold 7.jpg'
import img8 from '../assets/muthus gold 8.jpg'

const Gallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    { url: img1, title: 'Premium Gold Collection' },
    { url: img2, title: 'Exquisite Jewelry' },
    { url: img3, title: 'Traditional Designs' },
    { url: img4, title: 'Luxury Gold Sets' },
    { url: img5, title: 'Bridal Collection' },
    { url: img6, title: 'Diamond & Gold' },
    { url: img7, title: 'Classic Ornaments' },
    { url: img8, title: 'Heritage Jewelry' },
  ]

  return (
    <section id="gallery" ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-maroon mb-4">
            Gallery
          </h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Explore our exquisite collection of gold and diamond jewelry
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
              onClick={() => setSelectedImage(image.url)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <h3 className="text-ivory font-semibold text-lg">{image.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
            alt="Gallery"
            className="max-w-full max-h-full rounded-lg"
          />
        </motion.div>
      )}
    </section>
  )
}

export default Gallery
