// Componente para inyectar datos estructurados Schema.org (JSON-LD)
// Esto le dice a Google que es un producto con precio, disponibilidad, etc.

export default function ProductSchemaJSONLD({ product }: { product: any }) {
  const imageUrl = product.imageUrls?.[0] || 'https://toflipop.com/og-image.jpg'

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description || product.name,
    image: imageUrl,
    brand: {
      '@type': 'Brand',
      name: 'Toflipop',
    },
    offers: {
      '@type': 'Offer',
      price: product.price || 0,
      priceCurrency: 'EUR',
      availability: product.stock > 0 ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
      url: `https://toflipop.com/product/${product.slug?.current || product.id}`,
      seller: {
        '@type': 'Organization',
        name: 'Toflipop',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
