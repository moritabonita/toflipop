import { client } from './client'

// Tipo de producto (para TypeScript)
export interface Product {
  _id: string
  name: string
  slug: { current: string }
  price: number
  category: string
  description?: string
  featured?: boolean
  imageUrl?: string
}

// Obtener todos los productos publicados
export async function getProducts(): Promise<Product[]> {
  try {
    const query = `*[_type == "product" && defined(slug.current)] | order(name asc) {
      _id,
      name,
      slug,
      price,
      category,
      description,
      featured,
      "imageUrl": image.asset->url
    }`

    const products = await client.fetch(query)
    return products
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

// Obtener productos destacados (para homepage)
export async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const query = `*[_type == "product" && featured == true] | order(name asc) {
      _id,
      name,
      slug,
      price,
      category,
      description,
      "imageUrl": image.asset->url
    }`

    const products = await client.fetch(query)
    return products
  } catch (error) {
    console.error('Error fetching featured products:', error)
    return []
  }
}

// Obtener un producto por slug
export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const query = `*[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      slug,
      price,
      category,
      description,
      featured,
      "imageUrl": image.asset->url
    }`

    const product = await client.fetch(query, { slug })
    return product || null
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}
