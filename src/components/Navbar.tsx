import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/Logo.png'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-maroon/95 backdrop-blur-md shadow-lg' : 'bg-maroon/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <img 
                src={logo}
                alt="Muthus Gold Logo" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </motion.div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-colors duration-300 font-medium ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : 'text-ivory hover:text-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+919876543210">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold text-maroon px-6 py-2.5 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:bg-gold/90"
              >
                <FaPhone className="text-sm" />
                Call Now
              </motion.button>
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-gold text-2xl"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-maroon/98 backdrop-blur-md"
        >
          <div className="px-4 pt-2 pb-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 font-medium ${
                  location.pathname === link.path
                    ? 'text-gold'
                    : 'text-ivory hover:text-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href="tel:+919876543210">
              <button className="w-full bg-gold text-maroon px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 mt-2">
                <FaPhone />
                Call Now
              </button>
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar
