import React, { createContext, useContext, useEffect, ReactNode } from 'react'
import { initGA, initFacebookPixel, ANALYTICS_CONFIG } from '../utils/analytics'

interface AnalyticsContextType {
  isInitialized: boolean
  trackingEnabled: boolean
}

const AnalyticsContext = createContext<AnalyticsContextType>({
  isInitialized: false,
  trackingEnabled: ANALYTICS_CONFIG.trackingEnabled
})

interface AnalyticsProviderProps {
  children: ReactNode
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  const [isInitialized, setIsInitialized] = React.useState(false)

  useEffect(() => {
    // Initialize analytics only once
    if (!isInitialized && ANALYTICS_CONFIG.trackingEnabled) {
      // Initialize Google Analytics
      initGA()
      
      // Initialize Facebook Pixel
      initFacebookPixel()
      
      // Add structured data for SEO
      addStructuredData()
      
      // Set up global error tracking
      setupErrorTracking()
      
      setIsInitialized(true)
      
      if (ANALYTICS_CONFIG.enableDebug) {
        console.log('Analytics initialized successfully')
      }
    }
  }, [isInitialized])

  const value = {
    isInitialized,
    trackingEnabled: ANALYTICS_CONFIG.trackingEnabled
  }

  return (
    <AnalyticsContext.Provider value={value}>
      {children}
    </AnalyticsContext.Provider>
  )
}

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext)
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider')
  }
  return context
}

// Add structured data for better SEO
const addStructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Muthus Gold Company',
    description: 'Leading gold buyers and exchange company in Tamil Nadu, India',
    url: 'https://muthusgoldcompany.com',
    telephone: '+91-6377836377',
    email: 'muthusgoldcompany@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'India'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '11.1271',
      longitude: '78.6569'
    },
    openingHours: 'Mo-Sa 09:00-18:00',
    priceRange: 'Best Market Rates',
    serviceType: ['Gold Buying', 'Gold Exchange', 'Gold Loan Settlement'],
    areaServed: {
      '@type': 'State',
      name: 'Tamil Nadu'
    },
    foundingDate: '2020',
    knowsAbout: ['Gold Trading', 'Precious Metals', 'Gold Loan Settlement'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Gold Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gold Buying',
            description: 'Instant cash for gold with best market rates'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Gold Loan Settlement',
            description: 'Quick and transparent gold loan clearance services'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '500+'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-6377836377',
      contactType: 'customer service',
      availableLanguage: ['English', 'Tamil'],
      hoursAvailable: 'Mo-Sa 09:00-18:00'
    }
  }

  // Add to head
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.textContent = JSON.stringify(structuredData)
  document.head.appendChild(script)
}

// Set up global error tracking
const setupErrorTracking = () => {
  // Track JavaScript errors
  window.addEventListener('error', (event) => {
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: `${event.error?.message || event.message} at ${event.filename}:${event.lineno}`,
        fatal: false,
        error_type: 'javascript_error',
        page_path: window.location.pathname
      })
    }
  })

  // Track unhandled promise rejections
  window.addEventListener('unhandledrejection', (event) => {
    if (window.gtag) {
      window.gtag('event', 'exception', {
        description: `Unhandled promise rejection: ${event.reason}`,
        fatal: false,
        error_type: 'promise_rejection',
        page_path: window.location.pathname
      })
    }
  })

  // Track resource loading errors
  window.addEventListener('error', (event) => {
    if (event.target !== window) {
      const target = event.target as HTMLElement
      if (window.gtag) {
        window.gtag('event', 'exception', {
          description: `Resource failed to load: ${target.tagName} - ${(target as any).src || (target as any).href}`,
          fatal: false,
          error_type: 'resource_error',
          page_path: window.location.pathname
        })
      }
    }
  }, true)
}