import { Helmet } from 'react-helmet-async'
import Contact from '../components/Contact'

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Muthus Gold Company Tamil Nadu | Call +91-6377836377 | Gold Buyers Near Me</title>
        <meta name="description" content="Contact Muthus Gold Company Tamil Nadu for instant cash for gold. Call +91-6377836377, WhatsApp, Email. Best gold buyers serving all over Tamil Nadu, India. Get instant quotes." />
        <meta name="keywords" content="contact muthus gold company, gold buyers tamil nadu contact, call gold company tamil nadu, whatsapp gold buyers, email gold company, gold buyers near me tamil nadu, instant gold quotes tamil nadu" />
        <link rel="canonical" href="https://muthusgold.com/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact Muthus Gold Company Tamil Nadu | Call +91-6377836377" />
        <meta property="og:description" content="Contact leading gold buyers in Tamil Nadu. Call, WhatsApp, Email for instant cash for gold. Best rates guaranteed." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://muthusgold.com/contact" />
        <meta property="og:image" content="https://muthusgold.com/assets/Logo.png" />
        
        {/* Contact Schema */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Muthus Gold Company",
            "telephone": "+91-6377836377",
            "email": "muthusgold@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "India"
            },
            "openingHours": "Mo-Sa 09:00-18:00",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+91-6377836377",
                "contactType": "customer service",
                "availableLanguage": ["English", "Tamil"]
              }
            ]
          }
        })}
        </script>
      </Helmet>
      <div className="pt-20">
        <Contact />
      </div>
    </>
  )
}

export default ContactPage
