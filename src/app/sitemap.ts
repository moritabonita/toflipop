// Sitemap dinámico para Toflipop
// Incluye páginas estáticas + productos + posts del blog

import { getProducts } from '@/sanity/lib/products'
import { getPosts } from '@/sanity/lib/posts'

export default async function sitemap() {
  // Páginas estáticas
  const staticPages = [
    {
      url: 'https://toflipop.com',
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: 'https://toflipop.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: 'https://toflipop.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: 'https://toflipop.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: 'https://toflipop.com/cart',
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ]

  // Productos dinámicos desde Sanity
  const products = await getProducts()
  const productPages = products.map((product: any) => ({
    url: `https://toflipop.com/product/${product.slug?.current || product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Posts del blog desde Sanity
  const posts = await getPosts()
  const blogPages = posts.map((post: any) => ({
    url: `https://toflipop.com/blog/${post.slug?.current || post.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...productPages, ...blogPages]
}
