import { getPostBySlug } from '@/sanity/lib/posts'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'

// Generar metadatos dinámicos para SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Blog Toflipop`,
    description: post.title,
  }
}

// PortableText components personalizados
const ptComponents = {
  types: {
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) return null
      const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
      const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
      const ref = value.asset._ref
      const ext = ref.split('.').pop() || 'jpg'
      const w = value.hotspot?.width || value.width || 1200
      const h = value.hotspot?.height || value.height || 800
      const cropLeft = value.crop?.left ?? value.hotspot?.x ?? 0
      const cropTop = value.crop?.top ?? value.hotspot?.y ?? 0
      const cropWidth = value.crop?.width ?? value.hotspot?.width ?? 1
      const cropHeight = value.crop?.height ?? value.hotspot?.height ?? 1
      const url = `https://cdn.sanity.io/images/${projectId}/${dataset}/${ref}?w=${w}&h=${h}&auto=format` || ''
      return (
        <img
          src={url}
          alt={value.alt || ''}
          className="w-full rounded-xl my-6 shadow-md"
          style={{ maxWidth: '100%' }}
        />
      )
    },
  },
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen p-8">
      <article className="max-w-4xl mx-auto">
        {/* Botón volver */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-pastel-purple hover:underline mb-8 font-medium"
        >
          <span>←</span> Volver al blog
        </Link>

        {/* Imagen principal */}
        {post.mainImageUrl && (
          <div className="rounded-2xl overflow-hidden shadow-lg mb-8">
            <img
              src={post.mainImageUrl}
              alt={post.title}
              className="w-full object-cover"
              style={{ maxHeight: '480px' }}
            />
          </div>
        )}

        {/* Header del post */}
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-neutral-500 text-sm">
            {post.publishedAt && (
              <time dateTime={post.publishedAt}>
                📅 {new Date(post.publishedAt).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}
            {post.author && (
              <span>✍️ por {post.author}</span>
            )}
          </div>
        </header>

        {/* Rainbow Divider */}
        <div className="flex gap-2 mb-8">
          <div className="w-6 h-2 rounded-full bg-pastel-red"></div>
          <div className="w-6 h-2 rounded-full bg-pastel-orange"></div>
          <div className="w-6 h-2 rounded-full bg-pastel-yellow"></div>
          <div className="w-6 h-2 rounded-full bg-pastel-green"></div>
          <div className="w-6 h-2 rounded-full bg-pastel-blue"></div>
          <div className="w-6 h-2 rounded-full bg-pastel-purple"></div>
          <div className="w-6 h-2 rounded-full bg-pastel-pink"></div>
        </div>

        {/* Contenido del post */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-pastel-lavender/50">
          <PortableText
            value={post.body}
            components={ptComponents as any}
          />
        </div>

        {/* Footer del post */}
        <div className="mt-12 pt-6 border-t border-pastel-lavender/30 text-center">
          <p className="text-neutral-500 mb-4">¿Te ha gustado esta entrada?</p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-pastel-pink to-pastel-purple text-white font-medium py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
          >
            Explorar productos ✨
          </Link>
        </div>
      </article>
    </main>
  )
}
