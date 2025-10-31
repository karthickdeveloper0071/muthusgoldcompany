// Performance optimization utilities for better SEO and user experience

// Image optimization
export const optimizeImage = (src: string, width?: number, quality = 80) => {
  // For production, you might want to use a service like Cloudinary or ImageKit
  if (width) {
    return `${src}?w=${width}&q=${quality}`
  }
  return `${src}?q=${quality}`
}

// Lazy loading configuration
export const lazyLoadConfig = {
  threshold: 0.1,
  rootMargin: '50px 0px',
}

// Critical CSS for above-the-fold content
export const criticalCSS = `
  /* Critical styles for immediate rendering */
  .hero-section {
    min-height: 100vh;
    background: linear-gradient(135deg, #8B0000 0%, #A0522D 100%);
  }
  
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(139, 0, 0, 0.95);
  }
  
  .loading-spinner {
    display: inline-block;
    width: 40px;
    height: 40px;
    border: 3px solid #f3f3f3;
    border-top: 3px solid #8B0000;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

// Preload critical resources
export const preloadResources = [
  { rel: 'preload', href: '/assets/Logo.png', as: 'image' },
  { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap', as: 'style' },
  { rel: 'dns-prefetch', href: '//fonts.googleapis.com' },
  { rel: 'dns-prefetch', href: '//fonts.gstatic.com' },
]

// Web Vitals optimization
export const webVitalsConfig = {
  // Largest Contentful Paint (LCP) - should be < 2.5s
  lcpThreshold: 2500,
  
  // First Input Delay (FID) - should be < 100ms
  fidThreshold: 100,
  
  // Cumulative Layout Shift (CLS) - should be < 0.1
  clsThreshold: 0.1,
  
  // First Contentful Paint (FCP) - should be < 1.8s
  fcpThreshold: 1800,
}

// Service Worker registration for caching
export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration)
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError)
        })
    })
  }
}

// Intersection Observer for lazy loading
export const createIntersectionObserver = (callback: IntersectionObserverCallback) => {
  return new IntersectionObserver(callback, {
    threshold: lazyLoadConfig.threshold,
    rootMargin: lazyLoadConfig.rootMargin,
  })
}

// Debounce function for performance
export const debounce = (func: Function, wait: number) => {
  let timeout: ReturnType<typeof setTimeout>
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function for scroll events
export const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

export default {
  optimizeImage,
  lazyLoadConfig,
  criticalCSS,
  preloadResources,
  webVitalsConfig,
  registerServiceWorker,
  createIntersectionObserver,
  debounce,
  throttle,
}
