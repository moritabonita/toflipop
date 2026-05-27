'use client'

import { useState } from 'react'
import { useCookies } from '@/contexts/CookieContext'

export default function CookieBanner() {
  const { preferences, setPreferences, isLoading } = useCookies()
  const [showSettings, setShowSettings] = useState(false)
  const [tempPrefs, setTempPrefs] = useState({
    analytics: preferences.analytics,
    marketing: preferences.marketing,
  })

  // No mostrar si ya aceptó o si está cargando
  if (isLoading) return null
  if (preferences.analytics !== undefined && preferences.analytics !== null) {
    // Ya tiene preferencias guardadas
    return null
  }

  const handleAcceptAll = () => {
    setPreferences({ analytics: true, marketing: true })
  }

  const handleRejectAll = () => {
    setPreferences({ analytics: false, marketing: false })
  }

  const handleSaveSettings = () => {
    setPreferences(tempPrefs)
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-pastel-lavender/30 shadow-lg z-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Icono */}
          <div className="text-4xl flex-shrink-0">🍪</div>

          {/* Texto */}
          <div className="flex-1">
            <h3 className="font-semibold text-neutral-800 mb-2">
              Usamos cookies para mejorar tu experiencia
            </h3>
            <p className="text-sm text-neutral-600 mb-3">
              Usamos cookies necesarias para el funcionamiento del sitio y, con tu permiso,
              cookies analíticas para entender cómo usas la web y mejorarla.
            </p>

            {/* Botones principales */}
            {!showSettings && (
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleAcceptAll}
                  className="bg-gradient-to-r from-pastel-pink to-pastel-purple text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all"
                >
                  Aceptar todas
                </button>
                <button
                  onClick={handleRejectAll}
                  className="bg-neutral-200 text-neutral-700 px-6 py-2 rounded-full text-sm font-semibold hover:bg-neutral-300 transition-all"
                >
                  Rechazar todas
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="text-pastel-purple underline text-sm font-medium hover:text-pastel-purple/80"
                >
                  Configurar
                </button>
                <a
                  href="/legal/cookies"
                  className="text-neutral-500 underline text-sm hover:text-neutral-700"
                >
                  Más información
                </a>
              </div>
            )}

            {/* Configuración detallada */}
            {showSettings && (
              <div className="bg-neutral-50 rounded-xl p-4 mt-3">
                <div className="space-y-3">
                  {/* Cookies necesarias */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-neutral-800">Cookies necesarias</p>
                      <p className="text-xs text-neutral-500">
                        Permiten el funcionamiento básico del sitio
                      </p>
                    </div>
                    <span className="text-xs bg-neutral-200 text-neutral-600 px-2 py-1 rounded">
                      Siempre activas
                    </span>
                  </div>

                  {/* Cookies analíticas */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-neutral-800">Cookies analíticas</p>
                      <p className="text-xs text-neutral-500">
                        Nos ayudan a entender cómo usas la web (Google Analytics)
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={tempPrefs.analytics}
                        onChange={(e) =>
                          setTempPrefs({ ...tempPrefs, analytics: e.target.checked })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-neutral-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-pastel-purple/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pastel-purple"></div>
                    </label>
                  </div>

                  {/* Cookies de marketing */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-neutral-800">Cookies de marketing</p>
                      <p className="text-xs text-neutral-500">
                        Para mostrar contenido personalizado (no se usan actualmente)
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={tempPrefs.marketing}
                        onChange={(e) =>
                          setTempPrefs({ ...tempPrefs, marketing: e.target.checked })
                        }
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-neutral-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-pastel-purple/50 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-pastel-purple"></div>
                    </label>
                  </div>
                </div>

                {/* Botones de configuración */}
                <div className="flex gap-3 mt-4 pt-3 border-t border-neutral-200">
                  <button
                    onClick={handleSaveSettings}
                    className="bg-gradient-to-r from-pastel-pink to-pastel-purple text-white px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg transition-all"
                  >
                    Guardar configuración
                  </button>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="text-neutral-600 px-4 py-2 text-sm hover:text-neutral-800"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
