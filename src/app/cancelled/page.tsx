import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pago cancelado',
  description: 'Tu carrito sigue guardado para cuando quieras volver. ¡Los productos te están esperando!',
  robots: {
    index: false,
    follow: false,
  },
}

export default function CancelledPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto text-center">
        {/* Emoji de ánimo */}
        <div className="text-8xl mb-4">🤗</div>

        {/* Título */}
        <h1 className="text-5xl font-bold text-neutral-800 mb-4">
          ¡No te preocupes!
        </h1>
        <p className="text-xl text-neutral-600 mb-8">
          Tu carrito sigue guardado para cuando quieras volver. ¡Los productos te están esperando!
        </p>

        {/* Tofli llorando porque取消了 🥺 */}
        <div className="relative w-full h-80 mb-8 rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100/30 to-purple-100/30 flex items-center justify-center p-4">
          <Image
            src="/images/cancelled-tofli.png"
            alt="Tofli triste porque cancelaste, pero no pasa nada"
            width={500}
            height={400}
            className="object-contain rounded-xl"
            priority
          />
        </div>

        {/* Mensaje de ánimo */}
        <div className="bg-white rounded-2xl shadow-md border border-pastel-lavender/50 p-6 mb-8">
          <h2 className="text-xl font-semibold text-neutral-800 mb-3">
            ¿Necesitas ayuda?
          </h2>
          <p className="text-neutral-600 mb-4">
            Si tuviste algún problema con el pago, puedes:
          </p>
          <ul className="text-left text-neutral-600 space-y-2">
            <li>🔄 Intentar de nuevo más tarde</li>
            <li>💳 Probar con otro método de pago</li>
            <li>📧 Contactarnos si necesitas asistencia</li>
          </ul>
        </div>

        {/* Botones de acción */}
        <div className="space-y-4">
          <Link
            href="/cart"
            className="inline-block bg-gradient-to-r from-pastel-pink to-pastel-purple text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Volver al carrito
          </Link>
          <div>
            <Link
              href="/"
              className="block text-pastel-purple hover:underline text-sm font-medium mt-4"
            >
              ← Seguir explorando productos
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
