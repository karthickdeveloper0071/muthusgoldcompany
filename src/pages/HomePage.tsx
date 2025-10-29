import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import About from '../components/About'
import GoldCollection from '../components/GoldCollection'
import Gallery from '../components/Gallery'
import WhyChooseUs from '../components/WhyChooseUs'
import Services from '../components/Services'
import Process from '../components/Process'
import ContactForm from '../components/ContactForm'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Muthus Gold Company Tamil Nadu | Best Gold Buyers & Exchange India | Instant Cash for Gold</title>
        <meta name="description" content="Leading gold buyers in Tamil Nadu. Get instant cash for gold, settle gold loans, best gold exchange rates. Trusted gold company serving all over Tamil Nadu since 2020. Call +91-6377836377" />
        <meta name="keywords" content="gold buyers tamil nadu, gold company tamil nadu, sell gold tamil nadu, gold exchange tamil nadu, gold loan settlement, instant cash for gold, muthus gold company, best gold rates tamil nadu, gold dealers tamil nadu, gold merchants tamil nadu" />
        <link rel="canonical" href="https://muthusgoldcompany.com/" />
        
        {/* Enhanced Open Graph */}
        <meta property="og:title" content="Muthus Gold Company Tamil Nadu | Best Gold Buyers India" />
        <meta property="og:description" content="Leading gold buyers in Tamil Nadu. Instant cash for gold, gold loan settlement, best exchange rates. Trusted since 2020. Call +91-6377836377" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muthusgoldcompany.com/" />
        <meta property="og:image" content="https://muthusgoldcompany.com/assets/Logo.png" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Muthus Gold Company Tamil Nadu | Best Gold Buyers India" />
        <meta name="twitter:description" content="Leading gold buyers in Tamil Nadu. Instant cash for gold, gold loan settlement, best exchange rates." />
        <meta name="twitter:image" content="https://muthusgoldcompany.com/assets/Logo.png" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Muthus Gold Company",
          "description": "Leading gold buyers and exchange company in Tamil Nadu, India. Instant cash for gold, gold loan settlement services.",
          "url": "https://muthusgoldcompany.com",
          "telephone": "+91-6377836377",
          "address": {
            "@type": "PostalAddress",
            "addressRegion": "Tamil Nadu",
            "addressCountry": "India"
          },
          "serviceType": ["Gold Buying", "Gold Exchange", "Gold Loan Settlement"],
          "areaServed": "Tamil Nadu, India",
          "openingHours": "Mo-Sa 09:00-18:00",
          "priceRange": "Best Market Rates"
        })}
        </script>
      </Helmet>
      <Hero />
      <About />
      <GoldCollection />
      <Gallery />
      <WhyChooseUs />
      <Services />
      <Process />
      <ContactForm />
      <Testimonials />
      <Contact />
    </>
  )
}

export default HomePage
