import { getProductBySlug } from '@/sanity/lib/products'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import ProductCarousel from '@/components/ProductCarousel'
import ProductSchemaJSONLD from '@/components/ProductSchemaJSONLD'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    return {}
  }

  const imageUrl = product.imageUrls?.[0] || '/og-image.jpg'

  return {
    title: product.name,
    description: product.description || `${product.name} - Anotador creativo disponible en Toflipop`,
    openGraph: {
      title: product.name,
      description: product.description || product.name,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: product.name,
      description: product.description || product.name,
      images: [imageUrl],
    },
    alternates: {
      canonical: `/product/${slug}`,
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  return (
    <>
      <ProductSchemaJSONLD product={product} />
      <ProductCarousel product={product} />
    </>
  )
}
