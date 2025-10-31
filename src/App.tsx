import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const CollectionPage = lazy(() => import('./pages/CollectionPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

function App() {
  return (
    <Router>
      <div className="overflow-x-hidden">
        <Navbar />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gold"></div></div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  )
}

export default App
