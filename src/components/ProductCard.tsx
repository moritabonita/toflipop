'use client'

import Image from 'next/image'
import Link from 'next/link'
import AddToCartButton from '@/components/AddToCartButton'

interface ProductCardProps {
  name: string
  slug: { current: string }
  price: number
  category: string
  imageUrls: string[]
  _id: string
}

export default function ProductCard({ name, slug, price, category, imageUrls, _id }: ProductCardProps) {
  const mainImage = imageUrls[0]
  return (
    <div className="group">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-pastel-lavender/50">
        {/* Imagen del producto */}
        <Link href={`/product/${slug.current}`} className="block relative aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-purple/20">
          {mainImage ? (
            <Image
              src={mainImage}
              alt={name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <span className="text-6xl">📒</span>
            </div>
          )}
          
          {/* Badge de categoría */}
          <div className="absolute top-3 right-3">
            <span className="bg-white/90 backdrop-blur-sm text-xs font-medium px-3 py-1 rounded-full text-neutral-700">
              {category === 'notebook' ? '📒 Anotador' : category === 'sticker' ? '✨ Sticker' : '🎁 Pack'}
            </span>
          </div>

          {/* Badge de número de fotos */}
          {imageUrls.length > 1 && (
            <div className="absolute top-3 left-3">
              <span className="bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                📷 {imageUrls.length}
              </span>
            </div>
          )}
        </Link>

        {/* Info del producto */}
        <div className="p-5">
          <Link href={`/product/${slug.current}`}>
            <h3 className="text-lg font-semibold text-neutral-800 mb-2 group-hover:text-pastel-purple transition-colors">
              {name}
            </h3>
          </Link>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-pastel-pink to-pastel-purple bg-clip-text text-transparent">
              €{price.toFixed(2)}
            </span>
          </div>
          
          {/* Botón añadir al carrito */}
          <div className="mt-4">
            <AddToCartButton
              productId={_id}
              productName={name}
              productPrice={price}
              productImageUrl={mainImage}
              variant="small"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
