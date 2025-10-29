import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView, trackEvent, trackEngagement, initPageTracking } from '../utils/analytics'

interface SEOMetrics {
  pageLoadTime: number
  timeOnPage: number
  scrollDepth: number
  bounceRate: boolean
  userEngagement: 'low' | 'medium' | 'high'
  searchKeywords: string[]
  referralSource: string
}

export const useSEOAnalytics = (pageTitle: string, pageDescription?: string) => {
  const location = useLocation()
  const [metrics, setMetrics] = useState<SEOMetrics>({
    pageLoadTime: 0,
    timeOnPage: 0,
    scrollDepth: 0,
    bounceRate: false,
    userEngagement: 'low',
    searchKeywords: [],
    referralSource: 'direct'
  })
  
  const startTime = useRef<number>(Date.now())
  const maxScrollDepth = useRef<number>(0)
  const hasEngaged = useRef<boolean>(false)

  useEffect(() => {
    // Track page view with enhanced data
    const urlParams = new URLSearchParams(location.search)
    const referrer = document.referrer
    const searchKeywords = extractSearchKeywords(referrer, urlParams)
    
    const pageData = {
      search_keywords: searchKeywords.join(','),
      referral_source: getReferralSource(referrer),
      page_description: pageDescription,
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}x${screen.height}`,
      viewport_size: `${window.innerWidth}x${window.innerHeight}`,
      connection_speed: (navigator as any).connection?.effectiveType || 'unknown',
      device_type: getDeviceType(),
      browser_language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    }

    trackPageView(window.location.href, pageTitle, pageData)
    initPageTracking()

    // Update metrics
    setMetrics(prev => ({
      ...prev,
      searchKeywords,
      referralSource: getReferralSource(referrer),
      pageLoadTime: performance.now()
    }))

    // Track Core Web Vitals
    trackCoreWebVitals()

    // Set up engagement tracking
    const engagementTimer = setTimeout(() => {
      hasEngaged.current = true
      trackEngagement('engaged_user', 30000)
      setMetrics(prev => ({ ...prev, userEngagement: 'medium' }))
    }, 30000)

    // Track scroll depth
    const handleScroll = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      )
      
      if (scrollPercent > maxScrollDepth.current) {
        maxScrollDepth.current = scrollPercent
        setMetrics(prev => ({ ...prev, scrollDepth: scrollPercent }))
        
        // Track high engagement
        if (scrollPercent > 75 && !hasEngaged.current) {
          hasEngaged.current = true
          setMetrics(prev => ({ ...prev, userEngagement: 'high' }))
          trackEvent('high_engagement', 'user_behavior', 'deep_scroll', scrollPercent)
        }
      }
    }

    // Track clicks for engagement
    const handleClick = () => {
      if (!hasEngaged.current) {
        hasEngaged.current = true
        setMetrics(prev => ({ ...prev, userEngagement: 'medium' }))
        trackEvent('user_interaction', 'engagement', 'click')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('click', handleClick)

    // Cleanup and final tracking on unmount
    return () => {
      clearTimeout(engagementTimer)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClick)
      
      const timeOnPage = Date.now() - startTime.current
      const finalMetrics = {
        ...metrics,
        timeOnPage,
        bounceRate: timeOnPage < 10000 && maxScrollDepth.current < 25
      }
      
      // Track session end
      trackEvent('session_end', 'user_behavior', 'page_exit', timeOnPage, {
        time_on_page: timeOnPage,
        max_scroll_depth: maxScrollDepth.current,
        user_engaged: hasEngaged.current,
        bounce: finalMetrics.bounceRate
      })
      
      setMetrics(finalMetrics)
    }
  }, [location.pathname, pageTitle, pageDescription])

  // Track business-specific SEO events
  const trackBusinessEvent = (eventType: 'gold_inquiry' | 'contact_attempt' | 'service_interest', details?: any) => {
    const businessData = {
      business_type: 'gold_trading',
      location: 'tamil_nadu',
      service_category: 'precious_metals',
      user_intent: 'commercial',
      conversion_potential: 'high',
      ...details
    }
    
    trackEvent(eventType, 'business_action', eventType, 1, businessData)
    
    // Update engagement level for business actions
    setMetrics(prev => ({ ...prev, userEngagement: 'high' }))
  }

  // Track search intent
  const trackSearchIntent = (intent: 'buy_gold' | 'sell_gold' | 'gold_loan' | 'gold_rates' | 'contact') => {
    trackEvent('search_intent', 'seo', intent, 1, {
      search_intent: intent,
      page_context: location.pathname,
      user_journey_stage: getUserJourneyStage(intent)
    })
  }

  return {
    metrics,
    trackBusinessEvent,
    trackSearchIntent
  }
}

// Helper functions
const extractSearchKeywords = (referrer: string, urlParams: URLSearchParams): string[] => {
  const keywords: string[] = []
  
  // Extract from URL parameters
  const searchParams = ['q', 'query', 'search', 'keywords', 'term']
  searchParams.forEach(param => {
    const value = urlParams.get(param)
    if (value) keywords.push(value.toLowerCase())
  })
  
  // Extract from referrer (Google, Bing, etc.)
  if (referrer.includes('google.com')) {
    const match = referrer.match(/[?&]q=([^&]+)/)
    if (match) keywords.push(decodeURIComponent(match[1]).toLowerCase())
  }
  
  return [...new Set(keywords)] // Remove duplicates
}

const getReferralSource = (referrer: string): string => {
  if (!referrer) return 'direct'
  
  const domain = new URL(referrer).hostname.toLowerCase()
  
  if (domain.includes('google')) return 'google'
  if (domain.includes('bing')) return 'bing'
  if (domain.includes('yahoo')) return 'yahoo'
  if (domain.includes('facebook')) return 'facebook'
  if (domain.includes('instagram')) return 'instagram'
  if (domain.includes('whatsapp')) return 'whatsapp'
  if (domain.includes('youtube')) return 'youtube'
  
  return domain
}

const getDeviceType = (): string => {
  const width = window.innerWidth
  if (width < 768) return 'mobile'
  if (width < 1024) return 'tablet'
  return 'desktop'
}

const getUserJourneyStage = (intent: string): string => {
  switch (intent) {
    case 'gold_rates':
      return 'awareness'
    case 'buy_gold':
    case 'sell_gold':
      return 'consideration'
    case 'gold_loan':
      return 'decision'
    case 'contact':
      return 'action'
    default:
      return 'unknown'
  }
}

const trackCoreWebVitals = () => {
  // Track Largest Contentful Paint (LCP)
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries()
    const lastEntry = entries[entries.length - 1]
    trackEvent('core_web_vitals', 'performance', 'lcp', Math.round(lastEntry.startTime))
  }).observe({ entryTypes: ['largest-contentful-paint'] })

  // Track First Input Delay (FID)
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries()
    entries.forEach((entry: any) => {
      trackEvent('core_web_vitals', 'performance', 'fid', Math.round(entry.processingStart - entry.startTime))
    })
  }).observe({ entryTypes: ['first-input'] })

  // Track Cumulative Layout Shift (CLS)
  let clsValue = 0
  new PerformanceObserver((entryList) => {
    const entries = entryList.getEntries()
    entries.forEach((entry: any) => {
      if (!entry.hadRecentInput) {
        clsValue += entry.value
      }
    })
    trackEvent('core_web_vitals', 'performance', 'cls', Math.round(clsValue * 1000))
  }).observe({ entryTypes: ['layout-shift'] })
}