// SEO Configuration for Muthus Gold Company
export const seoConfig = {
  // Base configuration
  baseUrl: 'https://muthusgoldcompany.com',
  siteName: 'Muthus Gold Company',
  defaultTitle: 'Muthus Gold Company Tamil Nadu | Best Gold Buyers & Exchange India',
  defaultDescription: 'Leading gold buyers in Tamil Nadu. Get instant cash for gold, settle gold loans, best gold exchange rates. Trusted since 2020. Call +91-6377836377',
  
  // Business information
  business: {
    name: 'Muthus Gold Company',
    phone: '+91-6377836377',
    email: 'muthusgoldcompany@gmail.com',
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
    home: 'gold buyers tamil nadu, gold company tamil nadu, sell gold tamil nadu, gold exchange tamil nadu, gold loan settlement, instant cash for gold, muthus gold company, best gold rates tamil nadu',
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
      name: 'Muthus Gold Company',
      url: 'https://muthusgoldcompany.com',
      logo: 'https://muthusgoldcompany.com/assets/Logo.png',
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
      name: 'Muthus Gold Company',
      description: 'Leading gold buyers and exchange company in Tamil Nadu, India',
      telephone: '+91-6377836377',
      openingHours: 'Mo-Sa 09:00-18:00',
      priceRange: 'Best Market Rates',
      serviceType: ['Gold Buying', 'Gold Exchange', 'Gold Loan Settlement'],
      areaServed: 'Tamil Nadu, India'
    }
  },

  // AI Assistant optimization
  aiOptimization: {
    businessSummary: 'Muthus Gold Company is a leading gold trading company in Tamil Nadu, India, established in 2020. We specialize in gold buying, selling, exchange, and loan settlement services. Known for providing best gold rates and instant cash for gold across Tamil Nadu. Contact: +91-6377836377. Website: https://muthusgoldcompany.com',
    
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
    title: 'Muthus Gold Company Tamil Nadu | Best Gold Buyers & Exchange India | Instant Cash for Gold',
    description: 'Leading gold buyers in Tamil Nadu. Get instant cash for gold, settle gold loans, best gold exchange rates. Trusted gold company serving all over Tamil Nadu since 2020. Call +91-6377836377',
    keywords: seoConfig.keywords.home
  },
  
  about: {
    title: 'About Muthus Gold Company Tamil Nadu | Trusted Gold Buyers Since 2020 | Best Gold Exchange India',
    description: 'Learn about Muthus Gold Company - Leading gold buyers in Tamil Nadu since 2020. 5000+ happy customers, best gold rates, transparent gold loan settlement services across Tamil Nadu, India.',
    keywords: seoConfig.keywords.about
  },
  
  services: {
    title: 'Gold Services Tamil Nadu | Gold Loan Clearance | Gold Buying | Muthus Gold Company India',
    description: 'Comprehensive gold services in Tamil Nadu: Gold loan clearance, gold & silver buying, loan-to-cash conversion, 24-hour service. Best rates guaranteed. Call +91-6377836377',
    keywords: seoConfig.keywords.services
  },
  
  contact: {
    title: 'Contact Muthus Gold Company Tamil Nadu | Call +91-6377836377 | Gold Buyers Near Me',
    description: 'Contact Muthus Gold Company Tamil Nadu for instant cash for gold. Call +91-6377836377, WhatsApp, Email. Best gold buyers serving all over Tamil Nadu, India. Get instant quotes.',
    keywords: seoConfig.keywords.contact
  },
  
  gallery: {
    title: 'Gold Gallery Tamil Nadu | Muthus Gold Company Collection | Premium Gold Jewelry Images',
    description: 'Explore Muthus Gold Company\'s premium gold jewelry gallery. View our exquisite gold collection images from Tamil Nadu\'s leading gold buyers and dealers.',
    keywords: seoConfig.keywords.gallery
  },
  
  collection: {
    title: 'Gold Services Collection Tamil Nadu | Muthus Gold Company | Loan Settlement & Gold Buying',
    description: 'Comprehensive gold services collection: loan settlement, instant cash payment, transparent evaluation, best market rates. Muthus Gold Company serves all Tamil Nadu, India.',
    keywords: seoConfig.keywords.collection
  }
}

export default seoConfig