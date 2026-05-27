'use client'

import Script from 'next/script'
import { useCookies } from '@/contexts/CookieContext'

// Google Analytics - solo se carga si el usuario acepta cookies de analytics
export default function GoogleAnalytics() {
  const { hasConsent } = useCookies()

  // No cargar nada si no hay consentimiento
  if (!hasConsent('analytics')) {
    return null
  }

  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || ''

  // No cargar si no hay ID configurado
  if (!GA_ID) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  )
}
