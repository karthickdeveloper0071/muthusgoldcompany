import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
    
    // Send to analytics/error tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'exception', {
        description: error.message,
        fatal: false
      })
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-ivory p-4" role="alert" aria-live="assertive">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-bold text-maroon mb-4">Something went wrong</h1>
            <p className="text-charcoal mb-6">We're sorry, but something unexpected happened. Please try refreshing the page.</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gold text-maroon px-6 py-3 rounded-full font-semibold hover:bg-gold/90 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
              aria-label="Refresh page to try again"
            >
              Refresh Page
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
