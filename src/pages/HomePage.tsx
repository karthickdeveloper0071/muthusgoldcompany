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
        <title>Muthus Gold Company - Turn Your Gold into Instant Cash</title>
        <meta name="description" content="Settle old gold loans and get the best market value for your jewelry." />
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
