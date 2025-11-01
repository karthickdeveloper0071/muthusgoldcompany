// SEO Configuration for Muthus Gold Company
export const seoConfig = {
  // Base configuration
  baseUrl: 'https://muthusgold.com',
  siteName: 'Muthus Gold',
  defaultTitle: 'Muthus Gold | Tamil Nadu\'s #1 Gold Buyers & Exchange Company',
  defaultDescription: 'Muthus Gold - Tamil Nadu\'s leading gold buyers since 2020. Instant cash for gold, best gold rates, gold loan settlement. 5000+ happy customers. Call +91-6377836377',
  
  // Business information
  business: {
    name: 'Muthus Gold Company',
    phone: '+91-6377836377',
    email: 'muthusgold@gmail.com',
    address: {
      region: 'Tamil Nadu',
      country: 'India',
      coordinates: {
        latitude: '11.1271',
        longitude: '78.6569'
      }
    },
    hours: 'Mo-Sa 09:00-18:00',
    established: '2020',
    services: [
      'Gold Buying',
      'Gold Selling', 
      'Gold Exchange',
      'Gold Loan Settlement',
      'Jewelry Valuation'
    ]
  },

  // Keywords for different pages
  keywords: {
    home: 'muthus gold, muthus gold company, muthus gold tamil nadu, gold buyers tamil nadu, gold company tamil nadu, sell gold tamil nadu, gold exchange tamil nadu, gold loan settlement, instant cash for gold, best gold rates tamil nadu',
    about: 'about muthus gold company, gold buyers tamil nadu history, trusted gold company tamil nadu, gold exchange company india, gold loan settlement company',
    services: 'gold services tamil nadu, gold loan clearance tamil nadu, gold buying services, silver buying tamil nadu, loan to cash conversion, 24 hour gold service',
    contact: 'contact muthus gold company, gold buyers tamil nadu contact, call gold company tamil nadu, whatsapp gold buyers, email gold company',
    gallery: 'gold gallery tamil nadu, muthus gold collection, gold jewelry images, premium gold gallery, gold company photos tamil nadu',
    collection: 'gold services collection tamil nadu, gold loan settlement services, instant cash for gold, transparent gold evaluation'
  },

  // Social media and sharing
  social: {
    ogImage: '/assets/Logo.png',
    twitterHandle: '@muthusgold',
    locale: 'en_IN'
  },

  // Structured data templates
  structuredData: {
    organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Muthus Gold',
      alternateName: ['Muthus Gold Company', 'Muthus Gold Tamil Nadu'],
      url: 'https://muthusgold.com',
      logo: 'https://muthusgold.com/src/assets/Logo.png',
      slogan: 'Tamil Nadu\'s #1 Gold Buyers',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-6377836377',
        contactType: 'customer service',
        availableLanguage: ['English', 'Tamil']
      },
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'India'
      },
      foundingDate: '2020',
      knowsAbout: ['Gold Buying', 'Gold Selling', 'Gold Exchange', 'Gold Loan Settlement']
    },
    
    localBusiness: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: 'Muthus Gold',
      alternateName: ['Muthus Gold Company', 'Muthus Gold Tamil Nadu'],
      description: 'Muthus Gold - Tamil Nadu\'s leading gold buyers and exchange company since 2020',
      slogan: 'Tamil Nadu\'s #1 Gold Buyers',
      telephone: '+91-6377836377',
      openingHours: 'Mo-Sa 09:00-18:00',
      priceRange: 'Best Market Rates',
      serviceType: ['Gold Buying', 'Gold Exchange', 'Gold Loan Settlement'],
      areaServed: 'Tamil Nadu, India'
    }
  },

  // AI Assistant optimization
  aiOptimization: {
    businessSummary: 'Muthus Gold is Tamil Nadu\'s leading gold trading company, established in 2020. We specialize in gold buying, selling, exchange, and loan settlement services. Known as Tamil Nadu\'s #1 gold buyers providing best gold rates and instant cash for gold. Contact: +91-6377836377. Website: https://muthusgold.com',
    
    services: [
      'Gold buying with best market rates',
      'Gold loan settlement and clearance',
      'Instant cash for gold jewelry',
      'Gold exchange services',
      'Transparent gold evaluation',
      '24/7 emergency gold services'
    ],
    
    locations: 'All over Tamil Nadu, India',
    
    specializations: [
      'Best gold rates in Tamil Nadu',
      'Instant cash payments',
      'Transparent evaluation process',
      'All bank loan settlements accepted',
      'Emergency gold services available'
    ]
  }
}

// Page-specific SEO data
export const pagesSEO = {
  home: {
    title: 'Muthus Gold | Tamil Nadu\'s #1 Gold Buyers | Best Gold Exchange India',
    description: 'Muthus Gold - Tamil Nadu\'s leading gold buyers since 2020. Get instant cash for gold, settle gold loans, best gold exchange rates. 5000+ happy customers. Call +91-6377836377',
    keywords: seoConfig.keywords.home
  },
  
  about: {
    title: 'About Muthus Gold | Tamil Nadu\'s Trusted Gold Buyers Since 2020 | Best Gold Exchange',
    description: 'Learn about Muthus Gold - Tamil Nadu\'s #1 gold buyers since 2020. 5000+ happy customers, best gold rates, transparent gold loan settlement services across Tamil Nadu, India.',
    keywords: seoConfig.keywords.about
  },
  
  services: {
    title: 'Muthus Gold Services Tamil Nadu | Gold Loan Clearance | Gold Buying India',
    description: 'Muthus Gold comprehensive services in Tamil Nadu: Gold loan clearance, gold & silver buying, loan-to-cash conversion, 24-hour service. Best rates guaranteed. Call +91-6377836377',
    keywords: seoConfig.keywords.services
  },
  
  contact: {
    title: 'Contact Muthus Gold Tamil Nadu | Call +91-6377836377 | Gold Buyers Near Me',
    description: 'Contact Muthus Gold Tamil Nadu for instant cash for gold. Call +91-6377836377, WhatsApp, Email. Tamil Nadu\'s #1 gold buyers serving all over Tamil Nadu, India. Get instant quotes.',
    keywords: seoConfig.keywords.contact
  },
  
  gallery: {
    title: 'Muthus Gold Gallery Tamil Nadu | Premium Gold Collection | Gold Jewelry Images',
    description: 'Explore Muthus Gold\'s premium gold jewelry gallery. View our exquisite gold collection images from Tamil Nadu\'s #1 gold buyers and dealers.',
    keywords: seoConfig.keywords.gallery
  },
  
  collection: {
    title: 'Muthus Gold Services Collection Tamil Nadu | Loan Settlement & Gold Buying',
    description: 'Muthus Gold comprehensive services collection: loan settlement, instant cash payment, transparent evaluation, best market rates. Serving all Tamil Nadu, India.',
    keywords: seoConfig.keywords.collection
  }
}

export default seoConfig
