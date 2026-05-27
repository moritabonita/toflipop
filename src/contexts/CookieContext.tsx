'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

type CookieContextType = {
  preferences: CookiePreferences
  setPreferences: (prefs: Partial<CookiePreferences>) => void
  hasConsent: (category: keyof CookiePreferences) => boolean
  isLoading: boolean
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true, // Siempre activadas - son obligatorias
  analytics: false,
  marketing: false,
}

const CookieContext = createContext<CookieContextType | undefined>(undefined)

export function CookieProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferencesState] = useState<CookiePreferences>(DEFAULT_PREFERENCES)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Cargar preferencias de localStorage
    const saved = localStorage.getItem('toflipop-cookies')
    if (saved) {
      try {
        setPreferencesState({ ...DEFAULT_PREFERENCES, ...JSON.parse(saved) })
      } catch {
        // Ignorar errores de parseo
      }
    }
    setIsLoading(false)
  }, [])

  const setPreferences = (prefs: Partial<CookiePreferences>) => {
    const newPrefs = { ...preferences, ...prefs }
    setPreferencesState(newPrefs)
    localStorage.setItem('toflipop-cookies', JSON.stringify(newPrefs))
  }

  const hasConsent = (category: keyof CookiePreferences) => {
    return preferences[category] === true
  }

  return (
    <CookieContext.Provider value={{ preferences, setPreferences, hasConsent, isLoading }}>
      {children}
    </CookieContext.Provider>
  )
}

export function useCookies() {
  const context = useContext(CookieContext)
  if (context === undefined) {
    throw new Error('useCookies must be used within a CookieProvider')
  }
  return context
}
