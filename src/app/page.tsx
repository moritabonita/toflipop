import { getProducts } from '@/sanity/lib/products'
import ProductCard from '@/components/ProductCard'

export default async function Home() {
  // Obtener productos directamente desde Sanity (Server Component)
  const products = await getProducts()

  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      {/* Hero Section */}
      <div className="text-center mb-12 mt-8">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue bg-clip-text text-transparent">
          Toflipop
        </h1>
        <p className="text-2xl text-neutral-800 mb-2">
          Anotadores y Stickers Creativos
        </p>
        <p className="text-lg text-neutral-800 opacity-75">
          Creatividad y estilo para tu día a día ✨
        </p>
      </div>

      {/* Rainbow Divider */}
      <div className="flex gap-2 mb-12">
        <div className="w-8 h-3 rounded-full bg-pastel-red"></div>
        <div className="w-8 h-3 rounded-full bg-pastel-orange"></div>
        <div className="w-8 h-3 rounded-full bg-pastel-yellow"></div>
        <div className="w-8 h-3 rounded-full bg-pastel-green"></div>
        <div className="w-8 h-3 rounded-full bg-pastel-blue"></div>
        <div className="w-8 h-3 rounded-full bg-pastel-purple"></div>
        <div className="w-8 h-3 rounded-full bg-pastel-pink"></div>
      </div>

      {/* Catálogo de Productos */}
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-neutral-800">
          🛍️ Nuestros Productos
        </h2>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                name={product.name}
                slug={product.slug}
                price={product.price}
                category={product.category}
                imageUrl={product.imageUrl}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-md mx-auto border border-pastel-lavender text-center">
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800">
              🚧 Próximamente
            </h2>
            <p className="text-neutral-800 mb-6">
              Estamos preparando nuestra colección de anotadores y stickers.
              ¡Muy pronto podrás explorar todo nuestro catálogo!
            </p>
            <p className="text-sm text-neutral-800 opacity-75">
              ¡Gracias por tu paciencia!
            </p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center text-neutral-800 opacity-50 text-sm">
        <p>Hecho con 💕 por Penélope Garcia para Toflipop</p>
      </footer>
    </main>
  )
}
