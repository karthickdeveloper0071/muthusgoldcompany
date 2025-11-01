import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone, FaFacebook } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-charcoal text-ivory py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-playfair font-bold text-gold mb-4">Muthus Gold</h3>
            <p className="text-ivory/70 leading-relaxed mb-4">
              Tamil Nadu's leading <a href="#services" className="text-gold hover:text-gold/80 underline transition-colors">gold buyers</a> and exchange company. We provide transparent, fair, and instant solutions.
            </p>
            <a href="#contact" className="text-gold hover:text-gold/80 underline transition-colors">Get instant quote →</a>
          </div>
          <div>
            <h4 className="font-semibold text-gold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-ivory/70 hover:text-gold transition-colors">Home</a>
              <a href="#about" className="block text-ivory/70 hover:text-gold transition-colors">About Us</a>
              <a href="#services" className="block text-ivory/70 hover:text-gold transition-colors">Our Services</a>
              <a href="#gallery" className="block text-ivory/70 hover:text-gold transition-colors">Gallery</a>
              <a href="#contact" className="block text-ivory/70 hover:text-gold transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gold mb-4">Our Services</h4>
            <div className="space-y-2">
              <a href="#services" className="block text-ivory/70 hover:text-gold transition-colors">Gold Loan Settlement</a>
              <a href="#services" className="block text-ivory/70 hover:text-gold transition-colors">Gold Buying</a>
              <a href="#services" className="block text-ivory/70 hover:text-gold transition-colors">Gold Exchange</a>
              <a href="#services" className="block text-ivory/70 hover:text-gold transition-colors">Silver Buying</a>
              <a href="#services" className="block text-ivory/70 hover:text-gold transition-colors">24 Hour Service</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gold mb-4">Connect With Us</h4>
            <div className="flex gap-4 mb-4">
              <a href="https://www.facebook.com/share/17t2nJTAGa/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gold/20 hover:bg-gold rounded-full flex items-center justify-center transition-all">
                <FaFacebook className="text-xl" />
              </a>
              <a href="https://www.instagram.com/muthusgold " target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gold/20 hover:bg-gold rounded-full flex items-center justify-center transition-all">
                <FaInstagram className="text-xl" />
              </a>
              <a href="https://wa.me/916377836377" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gold/20 hover:bg-gold rounded-full flex items-center justify-center transition-all">
                <FaWhatsapp className="text-xl" />
              </a>
              <a href="mailto:muthusgold@gmail.com" className="w-10 h-10 bg-gold/20 hover:bg-gold rounded-full flex items-center justify-center transition-all">
                <FaEnvelope className="text-xl" />
              </a>
              <a href="tel:+916377836377" className="w-10 h-10 bg-gold/20 hover:bg-gold rounded-full flex items-center justify-center transition-all">
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
