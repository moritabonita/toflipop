'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import AddToCartButton from '@/components/AddToCartButton'

interface Product {
  _id: string
  name: string
  slug: { current: string }
  price: number
  category: string
  description?: string
  imageUrls: string[]
  compareAtPrice?: number
  stock?: number
}

interface ProductCarouselProps {
  product: Product
}

export default function ProductCarousel({ product }: ProductCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Autoplay del carrusel cada 4 segundos
  useEffect(() => {
    if (!isAutoPlaying || product.imageUrls.length <= 1) return
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % product.imageUrls.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, product.imageUrls.length])

  // Pausar autoplay al interactuar
  const handleInteraction = () => {
    setIsAutoPlaying(false)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
    handleInteraction()
  }

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.imageUrls.length) % product.imageUrls.length)
    handleInteraction()
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.imageUrls.length)
    handleInteraction()
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Botón de volver */}
        <Link href="/" className="inline-flex items-center text-pastel-purple hover:underline mb-8">
          ← Volver al catálogo
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Carrusel de imágenes */}
          <div>
            {/* Imagen principal */}
            <div className="relative aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-purple/20 rounded-2xl overflow-hidden mb-4 group">
              {product.imageUrls.length > 0 ? (
                <>
                  <Image
                    src={product.imageUrls[currentImageIndex]}
                    alt={`${product.name} - Foto ${currentImageIndex + 1}`}
                    fill
                    className="object-cover transition-opacity duration-300"
                    priority={currentImageIndex === 0}
                  />

                  {/* Flechas de navegación (solo si hay más de 1 imagen) */}
                  {product.imageUrls.length > 1 && (
                    <>
                      <button
                        onClick={goToPrev}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-neutral-800 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md"
                        aria-label="Imagen anterior"
                      >
                        ←
                      </button>
                      <button
                        onClick={goToNext}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white text-neutral-800 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-md"
                        aria-label="Siguiente imagen"
                      >
                        →
                      </button>

                      {/* Contador de imágenes */}
                      <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                        {currentImageIndex + 1} / {product.imageUrls.length}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <span className="text-9xl">📒</span>
                </div>
              )}
            </div>

            {/* Miniaturas */}
            {product.imageUrls.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.imageUrls.map((url, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentImageIndex
                        ? 'border-pastel-purple shadow-md scale-105'
                        : 'border-transparent hover:border-pastel-lavender/50'
                    }`}
                  >
                    <Image
                      src={url}
                      alt={`Miniatura ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
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

            {/* Precio con descuento */}
            <div className="mb-6">
              {product.compareAtPrice && product.compareAtPrice > product.price ? (
                <div className="flex items-center gap-3">
                  <span className="text-2xl text-neutral-400 line-through">
                    €{product.compareAtPrice.toFixed(2)}
                  </span>
                  <span className="text-5xl font-bold bg-gradient-to-r from-pastel-pink to-pastel-purple bg-clip-text text-transparent">
                    €{product.price.toFixed(2)}
                  </span>
                  <span className="bg-pastel-purple/20 text-pastel-purple text-sm font-medium px-3 py-1 rounded-full">
                    -{Math.round((1 - product.price / product.compareAtPrice) * 100)}%
                  </span>
                </div>
              ) : (
                <span className="text-5xl font-bold bg-gradient-to-r from-pastel-pink to-pastel-purple bg-clip-text text-transparent">
                  €{product.price.toFixed(2)}
                </span>
              )}
            </div>

            {product.description && (
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-md border border-pastel-lavender/50 mb-6">
                <h2 className="text-lg font-semibold text-neutral-800 mb-3">Descripción</h2>
                <p className="text-neutral-700 leading-relaxed">{product.description}</p>
              </div>
            )}

            {/* Stock */}
            {product.stock !== undefined && (
              <div className="mb-6">
                {product.stock > 7 ? (
                  <span className="text-neutral-700 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pastel-purple"></span>
                    En stock
                  </span>
                ) : product.stock > 0 ? (
                  <span className="text-neutral-800 text-sm flex items-center gap-2 bg-orange-100/60 px-3 py-1.5 rounded-lg inline-flex">
                    <span className="w-2 h-2 rounded-full bg-orange-400"></span>
                    ¡Solo quedan {product.stock}!
                  </span>
                ) : (
                  <span className="text-pastel-purple text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pastel-pink"></span>
                    Agotado
                  </span>
                )}
              </div>
            )}

            {/* Botón de añadir al carrito */}
            <AddToCartButton
              productId={product._id}
              productName={product.name}
              productPrice={product.price}
              productImageUrl={product.imageUrls[0]}
            />

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
