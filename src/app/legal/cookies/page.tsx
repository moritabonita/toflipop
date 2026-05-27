import Link from 'next/link'

export default function CookiesPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-pastel-purple hover:underline mb-8">
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-neutral-800 mb-8">
          Política de Cookies
        </h1>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-pastel-lavender/50 space-y-6">
          <div className="bg-pastel-lavender/30 p-4 rounded-xl">
            <p className="text-neutral-700">
              <strong>🍪 ¿Qué son las cookies?</strong> Son pequeños archivos de texto que se almacenan en tu 
              dispositivo cuando visitas un sitio web. Nos ayudan a mejorar tu experiencia de navegación.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">1. Tipos de cookies que utilizamos</h2>

            <h3 className="text-xl font-semibold text-neutral-800 mt-4 mb-2">Cookies técnicas (necesarias)</h3>
            <p className="text-neutral-700 mb-3">
              Son esenciales para el funcionamiento del sitio web. No requieren consentimiento.
            </p>
            <ul className="space-y-2 text-neutral-700 list-disc list-inside mb-4">
              <li><strong>Sesión:</strong> Mantiene tu sesión activa durante la navegación</li>
              <li><strong>Carrito:</strong> Almacena los productos en tu carrito de compra</li>
              <li><strong>Seguridad:</strong> Prevención de fraudes y ataques</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-800 mt-4 mb-2">Cookies analíticas</h3>
            <p className="text-neutral-700 mb-3">
              Nos ayudan a entender cómo navegas por el sitio para mejorar nuestra web.
            </p>
            <ul className="space-y-2 text-neutral-700 list-disc list-inside mb-4">
              <li><strong>Google Analytics:</strong> Análisis de tráfico y comportamiento</li>
              <li><strong>Vercel Analytics:</strong> Métricas de rendimiento</li>
            </ul>

            <h3 className="text-xl font-semibold text-neutral-800 mt-4 mb-2">Cookies de marketing</h3>
            <p className="text-neutral-700 mb-3">
              Se utilizan para mostrar anuncios relevantes. Solo se activan con tu consentimiento.
            </p>
            <ul className="space-y-2 text-neutral-700 list-disc list-inside">
              <li><strong>Meta Pixel:</strong> Seguimiento de campañas publicitarias</li>
              <li><strong>Google Ads:</strong> Remarketing y medición de conversiones</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">2. Gestión de cookies</h2>
            <p className="text-neutral-700 mb-4">
              Puedes gestionar tus preferencias de cookies en cualquier momento:
            </p>
            <ul className="space-y-2 text-neutral-700 list-disc list-inside">
              <li>A través del banner de cookies que aparece al visitar la web</li>
              <li>Desde la configuración de tu navegador</li>
              <li>Contactándonos en info@toflipop.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">3. Configuración por navegador</h2>
            <div className="space-y-3 text-neutral-700">
              <p><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</p>
              <p><strong>Firefox:</strong> Preferencias → Privacidad y seguridad</p>
              <p><strong>Safari:</strong> Preferencias → Privacidad</p>
              <p><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">4. Más información</h2>
            <p className="text-neutral-700">
              Para más información sobre cookies, consulta el sitio de la 
              <a href="https://www.aepd.es/es/canales-de-atencion/faq/faq-cookies" target="_blank" rel="noopener noreferrer" className="text-pastel-purple hover:underline">
                Agencia Española de Protección de Datos
              </a> o la 
              <a href="https://www.incibe.es/incibe-protege/tu-vida-digital/cookies" target="_blank" rel="noopener noreferrer" className="text-pastel-purple hover:underline">
                Guía de Cookies del INCIBE
              </a>.
            </p>
          </section>

          <div className="pt-4 border-t border-pastel-lavender/30 text-sm text-neutral-500">
            <p>Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
