import { getProductBySlug } from '@/sanity/lib/products'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

interface ProductPageProps {
  params: {
    slug: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Botón de volver */}
        <Link href="/" className="inline-flex items-center text-pastel-purple hover:underline mb-8">
          ← Volver al catálogo
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Imagen del producto */}
          <div className="relative aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-purple/20 rounded-2xl overflow-hidden">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <span className="text-9xl">📒</span>
              </div>
            )}
          </div>

          {/* Info del producto */}
          <div className="flex flex-col justify-center">
            {/* Badge de categoría */}
            <span className="inline-block bg-pastel-lavender/50 text-pastel-purple text-sm font-medium px-4 py-2 rounded-full w-fit mb-4">
              {product.category === 'notebook' ? '📒 Anotador' : product.category === 'sticker' ? '✨ Sticker' : '🎁 Pack'}
            </span>

            <h1 className="text-4xl font-bold text-neutral-800 mb-4">
              {product.name}
            </h1>

            <p className="text-5xl font-bold bg-gradient-to-r from-pastel-pink to-pastel-purple bg-clip-text text-transparent mb-6">
              €{product.price.toFixed(2)}
            </p>

            {product.description && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-pastel-lavender/50 mb-6">
                <h2 className="text-lg font-semibold text-neutral-800 mb-3">Descripción</h2>
                <p className="text-neutral-700 leading-relaxed">{product.description}</p>
              </div>
            )}

            {/* Botón de añadir al carrito */}
            <button className="w-full bg-gradient-to-r from-pastel-pink to-pastel-purple text-white py-4 rounded-full text-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
              🛒 Añadir al carrito
            </button>

            {/* Info adicional */}
            <div className="mt-6 space-y-3 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <span>🚚</span>
                <span>Envío gratuito en pedidos +€50</span>
              </div>
              <div className="flex items-center gap-2">
                <span>↩️</span>
                <span>Devolución gratuita en 30 días</span>
              </div>
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span>Pago seguro con Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
