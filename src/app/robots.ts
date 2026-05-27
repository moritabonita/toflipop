// robots.txt para Toflipop
// Le dice a los bots de Google qué pueden indexar

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Bloquear páginas internas no públicas
      disallow: ['/api/'],
    },
    sitemap: 'https://toflipop.com/sitemap.xml',
  }
}
