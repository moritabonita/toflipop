import Link from 'next/link'

export default function ContactPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-pastel-purple hover:underline mb-8">
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-neutral-800 mb-8">
          Contacto
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Info de contacto */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-pastel-lavender/50">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">
              ¿Cómo podemos ayudarte?
            </h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pastel-lavender/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📧</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-1">Email</h3>
                  <a
                    href="mailto:info@toflipop.com"
                    className="text-pastel-purple hover:underline"
                  >
                    info@toflipop.com
                  </a>
                  <p className="text-sm text-neutral-500 mt-1">
                    Respondemos en menos de 24 horas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pastel-lavender/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-1">Ubicación</h3>
                  <p className="text-neutral-700">Ourense, Galicia, España</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-pastel-lavender/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🕐</span>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-800 mb-1">Horario de atención</h3>
                  <p className="text-neutral-700">Lunes a Viernes: 9:00 - 18:00</p>
                  <p className="text-neutral-700">Sábados: 10:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-pastel-lavender/50">
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">
              Preguntas frecuentes
            </h2>

            <div className="space-y-4">
              <div className="bg-pastel-lavender/20 rounded-xl p-4">
                <h3 className="font-semibold text-neutral-800 mb-2">
                  ¿Cuánto tarda el envío?
                </h3>
                <p className="text-neutral-700 text-sm">
                  Península: 3-5 días. Baleares: 5-7 días. Resto: 7-10 días.
                </p>
              </div>

              <div className="bg-pastel-lavender/20 rounded-xl p-4">
                <h3 className="font-semibold text-neutral-800 mb-2">
                  ¿Puedo devolver un producto?
                </h3>
                <p className="text-neutral-700 text-sm">
                  ¡Sí! Tienes 14 días para devolverlo sin coste. 
                  <Link href="/legal/devoluciones" className="text-pastel-purple hover:underline ml-1">
                    Más info →
                  </Link>
                </p>
              </div>

              <div className="bg-pastel-lavender/20 rounded-xl p-4">
                <h3 className="font-semibold text-neutral-800 mb-2">
                  ¿Cuándo es el envío gratis?
                </h3>
                <p className="text-neutral-700 text-sm">
                  En pedidos superiores a €50 el envío es gratuito.
                </p>
              </div>

              <div className="bg-pastel-lavender/20 rounded-xl p-4">
                <h3 className="font-semibold text-neutral-800 mb-2">
                  ¿Qué métodos de pago aceptáis?
                </h3>
                <p className="text-neutral-700 text-sm">
                  Visa, Mastercard, y otros métodos a través de Stripe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
