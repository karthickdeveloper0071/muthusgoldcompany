import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaHistory, FaUsers, FaTrophy, FaHandshake, FaShieldAlt, FaBolt, FaLock, FaClock } from 'react-icons/fa'

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Muthus Gold Company Tamil Nadu | Trusted Gold Buyers Since 2020 | Best Gold Exchange India</title>
        <meta name="description" content="Learn about Muthus Gold Company - Leading gold buyers in Tamil Nadu since 2020. 5000+ happy customers, best gold rates, transparent gold loan settlement services across Tamil Nadu, India." />
        <meta name="keywords" content="about muthus gold company, gold buyers tamil nadu history, trusted gold company tamil nadu, gold exchange company india, gold loan settlement company, best gold dealers tamil nadu, gold buying company history" />
        <link rel="canonical" href="https://muthusgold.com/about" />
        
        {/* Open Graph */}
        <meta property="og:title" content="About Muthus Gold Company Tamil Nadu | Trusted Gold Buyers Since 2020" />
        <meta property="og:description" content="Leading gold buyers in Tamil Nadu since 2020. 5000+ happy customers, transparent services, best gold rates across Tamil Nadu, India." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muthusgold.com/about" />
        <meta property="og:image" content="https://muthusgold.com/assets/Logo.png" />
        
        {/* Organization Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Muthus Gold Company",
          "description": "Leading gold buying, selling and exchange company in Tamil Nadu, India since 2020",
          "url": "https://muthusgold.com",
          "logo": "https://muthusgold.com/assets/Logo.png",
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "India"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-6377836377",
            "contactType": "customer service"
          },
          "knowsAbout": ["Gold Buying", "Gold Selling", "Gold Exchange", "Gold Loan Settlement"]
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
              About Muthus Gold Company
            </h1>
            <p className="text-xl text-ivory/90 max-w-3xl mx-auto">
              Your trusted partner in gold services for over a decade
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&q=60"
                alt="Gold services"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
                loading="lazy"
                decoding="async"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-maroon mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-charcoal/80 mb-4 leading-relaxed">
                At Muthus Gold Company, we understand that your gold is more than just metal — it's your hard-earned asset, a symbol of trust, and a source of security.
              </p>
              <p className="text-lg text-charcoal/80 mb-4 leading-relaxed">
                As a leading gold buyer in Tamil Nadu, we specialize in buying old gold, releasing pledged gold, and offering instant cash for gold at the most competitive market rates.
              </p>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                Whether you need quick funds, want to close a gold loan, or simply wish to unlock the true value of your jewelry, Muthus Gold Company is your trusted financial partner — ready to help you every step of the way.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-maroon mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                To be the most trusted and transparent gold buying partner in Tamil Nadu, empowering individuals to unlock the real value of their gold assets whenever they need financial support or wish to invest wisely.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white p-8 rounded-3xl shadow-lg"
            >
              <h3 className="text-2xl md:text-3xl font-playfair font-bold text-maroon mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                To provide fast, fair, and transparent gold services that help individuals during times of financial need. We deliver honest evaluation, instant payment, and a safe, professional environment.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { icon: FaHistory, title: '10+ Years', desc: 'Industry Experience' },
              { icon: FaUsers, title: '5000+', desc: 'Happy Customers' },
              { icon: FaTrophy, title: 'Best Rates', desc: 'Guaranteed' },
              { icon: FaHandshake, title: '100%', desc: 'Transparency' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-2xl shadow-lg"
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-3xl text-maroon" />
                </div>
                <h3 className="text-2xl font-bold text-maroon mb-2">{item.title}</h3>
                <p className="text-charcoal/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-maroon mb-12 text-center">
            How We Work
          </h2>
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {[
              { num: '1', title: 'Gold Evaluation', desc: 'Advanced XRF machines test purity and weight in front of you — 100% transparent' },
              { num: '2', title: 'Instant Quotation', desc: 'Fair and competitive offer based on current market rate with no hidden charges' },
              { num: '3', title: 'Instant Payment', desc: 'Immediate payment via cash, cheque, or bank transfer once you\'re satisfied' },
              { num: '4', title: 'Trust & Transparency', desc: 'Every transaction documented, ensuring your complete confidence' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center p-6 bg-ivory rounded-2xl"
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-maroon">
                  {step.num}
                </div>
                <h3 className="text-xl font-playfair font-bold text-maroon mb-3">
                  {step.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed text-sm">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-maroon mb-12 text-center">
            Our Premium Services
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                title: 'Release Pledged Gold',
                desc: 'We help you release your pledged gold from banks, pawnshops, and finance companies. Once released, we purchase it at current market rate and pay you the difference amount instantly.',
              },
              {
                title: 'Sell Gold',
                desc: 'Sell your old gold, broken jewelry, or gold coins at live market prices with no wastage or hidden deductions. We ensure you get the highest possible value.',
              },
              {
                title: 'Instant Cash for Gold',
                desc: 'Need money urgently? We provide instant payment in your preferred mode — cash, bank transfer, or cheque — within minutes.',
              },
              {
                title: '24/7 Availability',
                desc: 'Emergencies can happen anytime. That\'s why Muthus Gold Company is available 24/7, ensuring you can sell or release your gold whenever you need support.',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-lg"
              >
                <h3 className="text-2xl font-playfair font-bold text-maroon mb-4">
                  {service.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-playfair font-bold text-maroon mb-12 text-center">
            Why Choose Muthus Gold Company?
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: FaTrophy, title: 'Best Market Price', desc: 'Highest value based on real-time gold rates' },
              { icon: FaBolt, title: 'Instant Payment', desc: 'Receive money instantly after evaluation' },
              { icon: FaLock, title: '100% Transparency', desc: 'No hidden charges, no false promises' },
              { icon: FaShieldAlt, title: 'Expert Team', desc: 'Experienced professionals with world-class equipment' },
              { icon: FaClock, title: '24/7 Service', desc: 'Always here when you need us' },
              { icon: FaHandshake, title: 'Trusted Partner', desc: 'Thousands of satisfied customers' },
              { icon: FaUsers, title: 'Customer First', desc: 'Your satisfaction is our priority' },
              { icon: FaHistory, title: 'Wide Presence', desc: 'Serving across Tamil Nadu' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-ivory rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-2xl text-maroon" />
                </div>
                <h3 className="text-lg font-bold text-maroon mb-2">{item.title}</h3>
                <p className="text-charcoal/70 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-maroon text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-playfair font-bold text-gold mb-6">
              Your Trusted Gold Partner
            </h2>
            <p className="text-xl text-ivory/90 leading-relaxed mb-4">
              At Muthus Gold Company, we don't just buy gold — we build trust.
            </p>
            <p className="text-lg text-ivory/80 leading-relaxed">
              Our mission is to be your reliable financial partner whenever you need quick, honest, and professional gold-related assistance.
            </p>
            <p className="text-2xl font-playfair font-bold text-gold mt-8">
              Muthus Gold Company — Where Trust Shines Brighter Than Gold.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
