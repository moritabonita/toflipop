import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  name: string
  slug: { current: string }
  price: number
  category: string
  imageUrl?: string
}

export default function ProductCard({ name, slug, price, category, imageUrl }: ProductCardProps) {
  return (
    <Link href={`/product/${slug.current}`} className="group">
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-pastel-lavender/50">
        {/* Imagen del producto */}
        <div className="relative aspect-square bg-gradient-to-br from-pastel-pink/20 to-pastel-purple/20">
          {imageUrl ? (
            <Image
              src={imageUrl}
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
        </div>

        {/* Info del producto */}
        <div className="p-5">
          <h3 className="text-lg font-semibold text-neutral-800 mb-2 group-hover:text-pastel-purple transition-colors">
            {name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold bg-gradient-to-r from-pastel-pink to-pastel-purple bg-clip-text text-transparent">
              €{price.toFixed(2)}
            </span>
            <button className="bg-gradient-to-r from-pastel-pink to-pastel-purple text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300">
              Ver detalles →
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
