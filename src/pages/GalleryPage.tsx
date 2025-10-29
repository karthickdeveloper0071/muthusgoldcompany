import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import img1 from '../assets/muthusgold.jpg'
import img2 from '../assets/muthusgold1.jpg'
import img3 from '../assets/muthusold2.jpg'
import img4 from '../assets/muthus gold 4.jpg'
import img5 from '../assets/muthus gold 5.jpg'
import img6 from '../assets/muthus gold 6.jpg'
import img7 from '../assets/muthus gold 7.jpg'
import img8 from '../assets/muthus gold 8.jpg'

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    { url: img1, title: 'Gold Collection 1' },
    { url: img2, title: 'Gold Collection 2' },
    { url: img3, title: 'Gold Collection 3' },
    { url: img4, title: 'Gold Collection 4' },
    { url: img5, title: 'Gold Collection 5' },
    { url: img6, title: 'Gold Collection 6' },
    { url: img7, title: 'Gold Collection 7' },
    { url: img8, title: 'Gold Collection 8' },
  ]

  return (
    <>
      <Helmet>
        <title>Gold Gallery Tamil Nadu | Muthus Gold Company Collection | Premium Gold Jewelry Images</title>
        <meta name="description" content="Explore Muthus Gold Company's premium gold jewelry gallery. View our exquisite gold collection images from Tamil Nadu's leading gold buyers and dealers." />
        <meta name="keywords" content="gold gallery tamil nadu, muthus gold collection, gold jewelry images, premium gold gallery, gold company photos tamil nadu, gold jewelry collection india" />
        <link rel="canonical" href="https://muthusgoldcompany.com/gallery" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Gold Gallery Tamil Nadu | Muthus Gold Company Collection" />
        <meta property="og:description" content="Explore premium gold jewelry gallery from Tamil Nadu's leading gold buyers. View our exquisite collection." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muthusgoldcompany.com/gallery" />
        <meta property="og:image" content="https://muthusgoldcompany.com/assets/muthusgold.jpg" />
        
        {/* Image Gallery Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Muthus Gold Company Gallery",
          "description": "Premium gold jewelry collection gallery from Tamil Nadu's leading gold buyers",
          "url": "https://muthusgoldcompany.com/gallery",
          "publisher": {
            "@type": "Organization",
            "name": "Muthus Gold Company",
            "logo": "https://muthusgoldcompany.com/assets/Logo.png"
          },
          "image": images.map((img) => ({
            "@type": "ImageObject",
            "url": `https://muthusgoldcompany.com/assets/${img.title.toLowerCase().replace(/\s+/g, '-')}.jpg`,
            "name": img.title,
            "description": `Premium ${img.title} from Muthus Gold Company Tamil Nadu`
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
              Our Gold Gallery
            </h1>
            <p className="text-xl text-ivory/90 max-w-3xl mx-auto">
              Explore our exquisite collection of premium gold jewelry
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg"
                onClick={() => setSelectedImage(image.url)}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <h3 className="text-ivory font-semibold text-lg">{image.title}</h3>
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
            alt="Gallery"
            className="max-w-full max-h-full rounded-lg"
          />
        </motion.div>
      )}
    </>
  )
}

export default GalleryPage
