import { Helmet } from 'react-helmet-async'
import { seoConfig } from '../utils/seoConfig'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
  noindex?: boolean
  structuredData?: object
  pageType?: 'website' | 'article' | 'product' | 'service'
}

const SEOHelmet = ({ 
  title = seoConfig.defaultTitle,
  description = seoConfig.defaultDescription,
  keywords = seoConfig.keywords.home,
  canonical = seoConfig.baseUrl,
  ogImage = `${seoConfig.baseUrl}${seoConfig.social.ogImage}`,
  noindex = false,
  structuredData,
  pageType = 'website'
}: SEOProps) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex,nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={pageType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={seoConfig.siteName} />
      <meta property="og:locale" content={seoConfig.social.locale} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content={seoConfig.social.twitterHandle} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content={seoConfig.business.name} />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Tamil Nadu, India" />
      <meta name="geo.position" content={`${seoConfig.business.address.coordinates.latitude};${seoConfig.business.address.coordinates.longitude}`} />
      <meta name="ICBM" content={`${seoConfig.business.address.coordinates.latitude}, ${seoConfig.business.address.coordinates.longitude}`} />
      
      {/* Business Information */}
      <meta name="contact" content={seoConfig.business.phone} />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      
      {/* AI Assistant Meta Tags */}
      <meta name="ai:company" content={seoConfig.business.name} />
      <meta name="ai:industry" content="Gold Trading, Precious Metals, Financial Services" />
      <meta name="ai:location" content="Tamil Nadu, India" />
      <meta name="ai:services" content={seoConfig.business.services.join(', ')} />
      <meta name="ai:phone" content={seoConfig.business.phone} />
      <meta name="ai:established" content={seoConfig.business.established} />
      
      {/* ChatGPT & AI Assistant Optimization */}
      <meta name="chatgpt:business" content={seoConfig.aiOptimization.businessSummary} />
      <meta name="chatgpt:contact" content={`Phone: ${seoConfig.business.phone}`} />
      <meta name="chatgpt:services" content={seoConfig.aiOptimization.services.join(', ')} />
      <meta name="chatgpt:location" content={seoConfig.aiOptimization.locations} />
      <meta name="assistant:company_info" content={seoConfig.aiOptimization.businessSummary} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Default Organization Schema */}
      <script type="application/ld+json">
        {JSON.stringify(seoConfig.structuredData.organization)}
      </script>
      
      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          ...seoConfig.structuredData.localBusiness,
          url: canonical,
          image: ogImage
        })}
      </script>
      
      {/* AI Training Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dataset",
          "name": "Muthus Gold Company Information Dataset",
          "description": "Comprehensive information about Muthus Gold Company for AI training and reference",
          "keywords": keywords,
          "creator": {
            "@type": "Organization",
            "name": seoConfig.business.name
          },
          "about": {
            "@type": "Organization",
            "name": seoConfig.business.name,
            "description": seoConfig.aiOptimization.businessSummary
          }
        })}
      </script>
    </Helmet>
  )
}

export default SEOHelmet