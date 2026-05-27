import { client } from './client'

// Tipo de entrada de blog (para TypeScript)
export interface Post {
  _id: string
  title: string
  slug: { current: string }
  author?: string
  publishedAt?: string
  mainImageUrl?: string
  body?: any
}

// Obtener todas las entradas publicadas (ordenadas por fecha, más recientes primero)
export async function getPosts(): Promise<Post[]> {
  try {
    const query = `*[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author,
      publishedAt,
      "mainImageUrl": mainImage.asset->url
    }`

    const posts = await client.fetch(query)
    return posts
  } catch (error) {
    console.error('Error fetching posts:', error)
    return []
  }
}

// Obtener una entrada por slug (con contenido completo)
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      author,
      publishedAt,
      "mainImageUrl": mainImage.asset->url,
      body
    }`

    const post = await client.fetch(query, { slug })
    return post || null
  } catch (error) {
    console.error('Error fetching post:', error)
    return null
  }
}
