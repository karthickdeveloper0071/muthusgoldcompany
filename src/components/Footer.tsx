import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold text-gold mb-4">Muthus Gold</h3>
            <p className="text-ivory/70 leading-relaxed">
              Your trusted partner for gold loan settlement and jewelry buying services. We provide transparent, fair, and instant solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-ivory/70 hover:text-gold transition-colors">Home</a>
              <a href="#about" className="block text-ivory/70 hover:text-gold transition-colors">About</a>
              <a href="#services" className="block text-ivory/70 hover:text-gold transition-colors">Services</a>
              <a href="#contact" className="block text-ivory/70 hover:text-gold transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gold/20 hover:bg-gold rounded-full flex items-center justify-center transition-all">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gold/20 hover:bg-gold rounded-full flex items-center justify-center transition-all">
                <FaWhatsapp className="text-xl" />
              </a>
              <a href="mailto:info@muthusgold.com" className="w-10 h-10 bg-gold/20 hover:bg-gold rounded-full flex items-center justify-center transition-all">
                <FaEnvelope className="text-xl" />
              </a>
              <a href="tel:+919876543210" className="w-10 h-10 bg-gold/20 hover:bg-gold rounded-full flex items-center justify-center transition-all">
                <FaPhone className="text-xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-ivory/20 pt-8 text-center text-ivory/60">
          <p>&copy; 2024 Muthus Gold Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
