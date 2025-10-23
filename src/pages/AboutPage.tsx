import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { FaHistory, FaUsers, FaTrophy, FaHandshake } from 'react-icons/fa'

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Muthus Gold Company</title>
        <meta name="description" content="Learn about Muthus Gold Company - Your trusted partner in gold services since years." />
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
                src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80"
                alt="Gold jewelry"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-playfair font-bold text-maroon mb-6">
                Our Story
              </h2>
              <p className="text-lg text-charcoal/80 mb-4 leading-relaxed">
                Muthus Gold Company was founded with a vision to provide transparent, fair, and instant gold services to our community. We understand the emotional and financial value of your gold jewelry.
              </p>
              <p className="text-lg text-charcoal/80 mb-4 leading-relaxed">
                Over the years, we have helped thousands of customers settle their gold loans and get the best market value for their precious jewelry. Our commitment to transparency and customer satisfaction has made us a trusted name in the industry.
              </p>
              <p className="text-lg text-charcoal/80 leading-relaxed">
                We are licensed, certified, and follow all regulatory guidelines to ensure your transactions are safe and secure.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Trust & Transparency',
                desc: 'We believe in complete transparency in all our dealings. No hidden charges, no surprises.',
              },
              {
                title: 'Customer First',
                desc: 'Your satisfaction is our priority. We go the extra mile to ensure you get the best service.',
              },
              {
                title: 'Fair Pricing',
                desc: 'We guarantee the best market rates for your gold. Your trust is more valuable than profit.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-8 bg-ivory rounded-2xl"
              >
                <h3 className="text-2xl font-playfair font-bold text-maroon mb-4">
                  {value.title}
                </h3>
                <p className="text-charcoal/70 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
