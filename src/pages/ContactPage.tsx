import { Helmet } from 'react-helmet-async'
import Contact from '../components/Contact'

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Muthus Gold Company</title>
        <meta name="description" content="Get in touch with Muthus Gold Company for instant gold services." />
      </Helmet>
      <div className="pt-20">
        <Contact />
      </div>
    </>
  )
}

export default ContactPage
