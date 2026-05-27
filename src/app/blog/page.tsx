import { getPosts } from '@/sanity/lib/posts'
import Link from 'next/link'

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header del Blog */}
        <div className="text-center mb-12 mt-8">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue bg-clip-text text-transparent">
            Blog Toflipop
          </h1>
          <p className="text-xl text-neutral-700 mb-2">
            Novedades de papelería, freebies y mucho más ✨
          </p>
          <div className="flex gap-2 justify-center mt-6">
            <div className="w-6 h-2 rounded-full bg-pastel-red"></div>
            <div className="w-6 h-2 rounded-full bg-pastel-orange"></div>
            <div className="w-6 h-2 rounded-full bg-pastel-yellow"></div>
            <div className="w-6 h-2 rounded-full bg-pastel-green"></div>
            <div className="w-6 h-2 rounded-full bg-pastel-blue"></div>
            <div className="w-6 h-2 rounded-full bg-pastel-purple"></div>
            <div className="w-6 h-2 rounded-full bg-pastel-pink"></div>
          </div>
        </div>

        {/* Lista de Entradas */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug.current}`}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-md border border-pastel-lavender/50 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Imagen */}
                {post.mainImageUrl && (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.mainImageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Contenido */}
                <div className="p-6">
                  {/* Fecha */}
                  {post.publishedAt && (
                    <p className="text-sm text-pastel-purple font-medium mb-2">
                      {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                  )}

                  {/* Título */}
                  <h2 className="text-xl font-bold text-neutral-800 mb-3 group-hover:text-pastel-purple transition-colors">
                    {post.title}
                  </h2>

                  {/* Autor */}
                  {post.author && (
                    <p className="text-sm text-neutral-500 mb-3">
                      por {post.author}
                    </p>
                  )}

                  {/* Leer más */}
                  <div className="flex items-center gap-2 text-pastel-purple font-medium text-sm group-hover:gap-3 transition-all">
                    <span>Leer más</span>
                    <span>→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          /* Estado vacío */
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-lg max-w-md mx-auto border border-pastel-lavender text-center">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-semibold mb-4 text-neutral-800">
              ¡El blog está en construcción!
            </h2>
            <p className="text-neutral-600 mb-6">
              Pronto encontrarás aquí novedades de papelería, freebies exclusivos
              y mucho más. ¡Quédate atenta!
            </p>
            <Link
              href="/"
              className="inline-block bg-gradient-to-r from-pastel-pink to-pastel-purple text-white font-medium py-3 px-6 rounded-full hover:opacity-90 transition-opacity"
            >
              Volver al inicio
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
