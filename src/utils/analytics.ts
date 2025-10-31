// Google Analytics 4 integration
export const GA_TRACKING_ID = 'G-XXXXXXXXXX' // Replace with actual GA4 ID

// Facebook Pixel ID
export const FB_PIXEL_ID = 'YOUR_FACEBOOK_PIXEL_ID'

// Google Ads Conversion ID
export const GOOGLE_ADS_ID = 'AW-XXXXXXXXXX'

// Google Search Console verification
export const GSC_VERIFICATION = 'YOUR_GSC_VERIFICATION_CODE'

// Analytics configuration
export const ANALYTICS_CONFIG = {
  enableDebug: typeof process !== 'undefined' && process.env?.NODE_ENV === 'development',
  trackingEnabled: true,
  sessionTimeout: 30 * 60 * 1000, // 30 minutes
  scrollThreshold: 90, // Track when user scrolls 90%
  timeThreshold: 30000, // Track engagement after 30 seconds
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
    fbq: (...args: any[]) => void
    _fbq: any
  }
}



// Initialize Google Analytics with enhanced configuration
export const initGA = () => {
  if (typeof window === 'undefined' || !ANALYTICS_CONFIG.trackingEnabled) return

  // Load gtag script
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`
  document.head.appendChild(script)

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag() {
    window.dataLayer.push(arguments)
  }

  window.gtag('js', new Date())
  window.gtag('config', GA_TRACKING_ID, {
    page_title: document.title,
    page_location: window.location.href,
    custom_map: {
      custom_parameter_1: 'business_type',
      custom_parameter_2: 'user_intent'
    },
    // Enhanced ecommerce for gold business
    send_page_view: true,
    anonymize_ip: true,
    allow_google_signals: true,
    allow_ad_personalization_signals: true
  })

  // Set business context
  window.gtag('config', GA_TRACKING_ID, {
    business_type: 'gold_trading',
    industry: 'precious_metals',
    location: 'tamil_nadu_india'
  })

  if (ANALYTICS_CONFIG.enableDebug) {
    console.log('Google Analytics initialized with enhanced tracking')
  }
}

// Enhanced page view tracking with SEO metrics
export const trackPageView = (url: string, title: string, additionalData?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const pageData = {
      page_title: title,
      page_location: url,
      page_referrer: document.referrer,
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      connection_type: (navigator as any).connection?.effectiveType || 'unknown',
      timestamp: new Date().toISOString(),
      ...additionalData
    }

    window.gtag('config', GA_TRACKING_ID, pageData)
    
    // Track page performance
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (perfData) {
        trackEvent('page_performance', 'timing', 'load_time', Math.round(perfData.loadEventEnd - perfData.loadEventStart))
      }
    }, 1000)
  }
}

// Enhanced event tracking with context
export const trackEvent = (action: string, category: string, label?: string, value?: number, customData?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const eventData = {
      event_category: category,
      event_label: label,
      value: value,
      page_path: window.location.pathname,
      page_title: document.title,
      timestamp: new Date().toISOString(),
      user_engagement: getEngagementScore(),
      ...customData
    }

    window.gtag('event', action, eventData)
    
    if (ANALYTICS_CONFIG.enableDebug) {
      console.log('Event tracked:', { action, category, label, value, customData })
    }
  }
}

// Calculate user engagement score
const getEngagementScore = (): number => {
  const timeOnPage = Date.now() - (window as any).pageStartTime || 0
  const scrollDepth = Math.max(0, Math.min(100, (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100))
  return Math.round((timeOnPage / 1000) + scrollDepth)
}

// Enhanced phone call tracking
export const trackPhoneCall = (source?: string) => {
  const callData = {
    contact_method: 'phone',
    call_source: source || 'unknown',
    business_intent: 'high',
    conversion_likelihood: 'high'
  }
  
  trackEvent('phone_call', 'contact', 'call_initiated', 1, callData)
  trackConversion('phone_call', 1)
  trackFBEvent('Contact', { content_name: 'Phone Call', value: 1 })
}

// Enhanced form tracking
export const trackFormSubmission = (formName: string, formData?: any) => {
  const submissionData = {
    form_name: formName,
    form_location: window.location.pathname,
    user_engagement: getEngagementScore(),
    form_completion_time: formData?.completionTime || 0,
    business_intent: 'high'
  }
  
  trackEvent('form_submit', 'lead_generation', formName, 1, submissionData)
  trackLead(formName, 1)
  trackFBEvent('Lead', { content_name: formName, value: 1 })
}

// Track form interactions
export const trackFormInteraction = (formName: string, fieldName: string, action: string) => {
  trackEvent('form_interaction', 'engagement', `${formName}_${fieldName}_${action}`)
}

// Track errors
export const trackError = (error: string, fatal: boolean = false) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'exception', {
      description: error,
      fatal: fatal,
    })
  }
}

// Enhanced lead tracking with qualification
export const trackLead = (leadType: string, value?: number, leadQuality?: 'hot' | 'warm' | 'cold') => {
  if (typeof window !== 'undefined' && window.gtag) {
    const leadData = {
      event_category: 'lead_generation',
      event_label: leadType,
      value: value || 1,
      lead_quality: leadQuality || 'warm',
      lead_source: document.referrer || 'direct',
      page_path: window.location.pathname,
      business_type: 'gold_trading',
      conversion_potential: leadQuality === 'hot' ? 'high' : leadQuality === 'warm' ? 'medium' : 'low'
    }
    
    window.gtag('event', 'generate_lead', leadData)
    
    // Track in Facebook Pixel
    trackFBEvent('Lead', {
      content_name: leadType,
      content_category: 'gold_services',
      value: value || 1
    })
  }
}

// Track conversion
export const trackConversion = (conversionType: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: GOOGLE_ADS_ID,
      event_category: 'conversion',
      event_label: conversionType,
      value: value,
    })
  }
}

// Initialize Facebook Pixel
export const initFacebookPixel = () => {
  if (typeof window === 'undefined') return
  
  ;(function(f: any, b: any, e: any, v: any, n?: any, t?: any, s?: any) {
    if (f.fbq) return
    n = f.fbq = function() {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    }
    if (!f._fbq) f._fbq = n
    n.push = n
    n.loaded = !0
    n.version = '2.0'
    n.queue = []
    t = b.createElement(e)
    t.async = !0
    t.src = v
    s = b.getElementsByTagName(e)[0]
    s.parentNode.insertBefore(t, s)
  })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js')
  
  ;(window as any).fbq('init', FB_PIXEL_ID)
  ;(window as any).fbq('track', 'PageView')
}

// Enhanced Facebook Pixel tracking
export const trackFBEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    const fbData = {
      content_type: 'gold_services',
      currency: 'INR',
      ...parameters
    }
    
    ;(window as any).fbq('track', eventName, fbData)
    
    if (ANALYTICS_CONFIG.enableDebug) {
      console.log('Facebook event tracked:', eventName, fbData)
    }
  }
}

// Track user engagement metrics
export const trackEngagement = (action: string, duration?: number) => {
  const engagementData = {
    engagement_time: duration || 0,
    scroll_depth: Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100),
    page_path: window.location.pathname,
    session_id: getSessionId()
  }
  
  trackEvent('user_engagement', 'behavior', action, duration, engagementData)
}

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  if (percentage >= ANALYTICS_CONFIG.scrollThreshold) {
    trackEvent('scroll_depth', 'engagement', `${percentage}%`, percentage)
  }
}

// Track search queries (for internal search)
export const trackSearch = (query: string, results: number) => {
  trackEvent('search', 'site_search', query, results, {
    search_term: query,
    search_results: results,
    search_location: window.location.pathname
  })
}

// Track business-specific events
export const trackGoldInquiry = (inquiryType: 'buying' | 'selling' | 'loan_settlement' | 'exchange', estimatedValue?: number) => {
  const inquiryData = {
    inquiry_type: inquiryType,
    estimated_value: estimatedValue,
    business_intent: 'very_high',
    service_category: 'gold_services',
    location: 'tamil_nadu'
  }
  
  trackEvent('gold_inquiry', 'business', inquiryType, estimatedValue, inquiryData)
  trackLead(`gold_${inquiryType}`, estimatedValue, 'hot')
}

// Get or create session ID
const getSessionId = (): string => {
  let sessionId = sessionStorage.getItem('analytics_session_id')
  if (!sessionId) {
    sessionId = Date.now().toString() + Math.random().toString(36).substr(2, 9)
    sessionStorage.setItem('analytics_session_id', sessionId)
  }
  return sessionId
}

// Initialize page tracking
export const initPageTracking = () => {
  if (typeof window === 'undefined') return
  
  ;(window as any).pageStartTime = Date.now()
  
  // Track scroll depth
  let maxScroll = 0
  const handleScroll = () => {
    const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100)
    if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
      maxScroll = scrollPercent
      trackScrollDepth(scrollPercent)
    }
  }
  
  window.addEventListener('scroll', handleScroll, { passive: true })
  
  // Track time on page
  setTimeout(() => {
    trackEngagement('time_on_page', ANALYTICS_CONFIG.timeThreshold)
  }, ANALYTICS_CONFIG.timeThreshold)
  
  // Track page exit
  window.addEventListener('beforeunload', () => {
    const timeOnPage = Date.now() - (window as any).pageStartTime
    trackEngagement('page_exit', timeOnPage)
  })
}
