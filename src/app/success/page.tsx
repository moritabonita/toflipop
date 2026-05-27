import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '¡Pago completado!',
  description: 'Tu pedido está siendo procesado. Recibirás un email de confirmación en breve.',
  robots: {
    index: false,
    follow: false,
  },
}

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const resolvedSearchParams = await searchParams
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* Emoji grande de celebración */}
        <div className="text-8xl mb-4">🎉</div>

        {/* Título de éxito */}
        <h1 className="text-5xl font-bold text-neutral-800 mb-4">
          ¡Pago completado!
        </h1>
        <p className="text-xl text-neutral-600 mb-8">
          Tu pedido está siendo procesado. Recibirás un email de confirmación en breve.
        </p>

        {/* Tofli celebrando 🎉 */}
        <div className="relative w-full h-80 mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100/50 to-purple-100/50 flex items-center justify-center p-4">
          <Image
            src="/images/success-tofli.png"
            alt="Tofli celebrando tu compra exitosa"
            width={500}
            height={400}
            className="object-contain rounded-xl"
            priority
          />
        </div>

        {/* Mensaje adicional */}
        <div className="bg-white rounded-2xl shadow-md border border-pastel-lavender/50 p-6 mb-8">
          <h2 className="text-xl font-semibold text-neutral-800 mb-3">
            ¿Qué sigue?
          </h2>
          <ul className="text-left text-neutral-600 space-y-2">
            <li>📧 Te enviaremos un email con los detalles de tu pedido</li>
            <li>📦 Procesaremos tu pedido en 24-48 horas</li>
            <li>🚚 Recibirás tu paquete en 3-5 días laborables</li>
            <li>💌 Te mandaremos el número de seguimiento por email</li>
          </ul>
        </div>

        {/* Botones de acción */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-pastel-pink to-pastel-purple text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Seguir comprando
          </Link>
          <div>
            <Link
              href="/contact"
              className="block text-pastel-purple hover:underline text-sm font-medium mt-4"
            >
              ¿Tienes alguna pregunta? Contáctanos
            </Link>
          </div>
        </div>

        {/* ID de sesión para debugging */}
        {resolvedSearchParams.session_id && (
            <p className="text-xs text-neutral-400 mt-8">
              Session ID: {resolvedSearchParams.session_id}
            </p>
        )}
      </div>
    </main>
  )
}
