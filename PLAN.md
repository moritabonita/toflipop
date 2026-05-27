# 🛍️ Plan de Desarrollo - Toflipop

**Última actualización:** 27 de mayo de 2026 - Google Analytics + RGPD completado, imágenes optimizadas, metadata mejorado, bugs corregidos
**Estado general:** 🟢 Build exitoso, todo en rama dev
**Última conversación:** Google Analytics G-SRLQ5GVZXW configurado, sistema de cookies RGPD completo (CookieContext + CookieBanner), optimización de imágenes, fix errores de hidratación

---

## ✅ Completado

### 1. Configuración Inicial del Proyecto
- [x] Repositorio GitHub creado (github.com/moritabonita/toflipop)
- [x] Setup de Next.js 15 con Sanity CMS
- [x] Integración con Stripe para pagos
- [x] Dominio toflipop.com configurado en Porkbun y conectado a Vercel
- [x] Sanity Project ID configurado (0sej8qnd, dataset: toflipop-production)

### 2. Resolución de Problemas Técnicos
- [x] Eliminación de Sanity Studio local (error de compatibilidad con Next.js 16)
- [x] Corrección de capitalización del nombre de la marca "Toflipop"
- [x] Actualización del footer: "Hecho con 💕 por Penélope Garcia para Toflipop"
- [x] Fix: .gitignore corregido para excluir node_modules y archivos generados

### 3. Sanity Studio
- [x] Studio desplegado en https://toflipop-studio.sanity.studio/
- [x] Token de administrador configurado
- [x] Dataset limpio: solo `toflipop-production`
- [x] Schemas configurados: product, post, blockContent

### 4. Frontend - Catálogo de Productos
- [x] `src/sanity/lib/products.ts` - Cliente Sanity + funciones para obtener productos
- [x] `src/components/ProductCard.tsx` - Componente tarjeta de producto (diseño pastel)
- [x] `src/app/page.tsx` - Página principal con catálogo conectado a Sanity
- [x] `src/app/product/[slug]/page.tsx` - Página de detalle de producto
- [x] Build exitoso y desplegado en rama `dev`

### 5. Contenido en Sanity
- [x] Primer producto "Prueba 1" publicado y visible
  - ✅ Corregido: Campo `mainImage` → `image` en las consultas GROQ
  - ✅ Corregido: Dataset privado → añadido token al cliente de lectura
  - ✅ Corregido: CDN cache → cambiado `useCdn: false`

### 6. Carrito de Compras (NUEVO ✅)
- [x] `src/contexts/CartContext.tsx` - Contexto React para el estado del carrito
- [x] `src/components/CartIcon.tsx` - Icono del carrito con badge de cantidad
- [x] `src/components/AddToCartButton.tsx` - Botón añadir al carrito con feedback visual
- [x] `src/app/cart/page.tsx` - Página del carrito con resumen de pedido
- [x] Carrito persistente con localStorage
- [x] Funcionalidades: añadir, eliminar, actualizar cantidad, vaciar carrito
- [x] Cálculo automático de subtotal, envío y total
- [x] Envío gratuito en pedidos +€50

### 7. Navegación y Layout (NUEVO ✅)
- [x] `src/components/Header.tsx` - Header sticky con navegación
- [x] `src/components/Footer.tsx` - Footer completo con enlaces legales y redes sociales
- [x] Layout actualizado con CartProvider, Header y Footer

### 8. Páginas Legales (NUEVO ✅)
- [x] `/legal/aviso-legal` - Aviso Legal (LSSI-CE)
- [x] `/legal/privacidad` - Política de Privacidad (RGPD completo)
- [x] `/legal/cookies` - Política de Cookies
- [x] `/legal/terminos` - Términos y Condiciones
- [x] `/legal/devoluciones` - Política de Devoluciones (14 días, envío gratis)

### 9. Páginas de Contenido (NUEVO ✅)
- [x] `/about` - Sobre nosotros
- [x] `/contact` - Contacto con FAQ

### 10. Blog (NUEVO ✅)
- [x] `/blog` - Página de listado de posts
- [x] `/blog/[slug]` - Posts individuales con PortableText
- [x] Sanitized PortableText para seguridad

---

## 🟡 En Progreso

### 11. Integración de Pagos con Stripe
- [x] Instalar stripe + @stripe/stripe-js
- [x] Configurar claves de test en .env.local
- [x] Crear API route /api/checkout
- [x] Crear página /success con Tofli feliz 🎉
- [x] Crear página /cancelled con Tofli llorando 🥺
- [x] Conectar botón "Continuar al pago" con API
- [x] **Corregido:** Error "url_invalid" → cambiado localhost por 127.0.0.1
- [x] Probar flujo completo de pago (con tarjeta test 4242...)
- [x] Schema `order` creado en Sanity
- [x] Webhook `/api/webhooks/stripe` creado
- [x] Checkout actualizado para enviar items en metadata
- [ ] Configurar STRIPE_WEBHOOK_SECRET + conectar con Stripe Dashboard (PENDIENTE)
- [ ] Probar webhook end-to-end (PENDIENTE)

### 15. Cumplimiento Legal RGPD
- [x] Checkbox obligatorio de términos y condiciones en carrito
- [x] Enlaces a política de privacidad y términos en el checkout
- [x] Autorización explícita de tratamiento de datos
- [x] Colores de error en paleta pastel (no rojos)
- [x] Confirmación antes de eliminar producto del carrito

---

## 🔵 Pendiente

### 12. Optimización SEO
- [x] Meta tags y Open Graph mejorados (layout.tsx)
- [x] Sitemap.xml dinámico (productos + blog + páginas estáticas)
- [x] Robots.txt configurado
- [x] Schema.org JSON-LD para productos (precio, disponibilidad, marca)
- [x] Meta tags dinámicos por producto (title, description, OG image, canonical)
- [x] Twitter Cards configuradas
- [x] Viewport y theme-color optimizados
- [x] Optimización de imágenes (next/image)
- [x] Velocidad de carga y Core Web Vitals

### 13. Marketing y Analítica
- [x] Google Analytics / Google Tag Manager (ID: G-SRLQ5GVZXW)
  - ✅ CookieContext.tsx - Gestión de preferencias RGPD
  - ✅ CookieBanner.tsx - Banner de consentimiento con toggles
  - ✅ GoogleAnalytics.tsx - Solo carga con consentimiento
  - ✅ Layout actualizado con CookieProvider
  - ✅ NEXT_PUBLIC_GA_ID configurado en .env.local
- [ ] Facebook Pixel (opcional)
- [ ] Integración con email marketing
- [ ] Redes sociales (Instagram, TikTok)
- [ ] Cupones y descuentos

### 14. Testing y Lanzamiento
- [ ] Testing en dispositivos móviles
- [ ] Testing del proceso de compra completo
- [ ] Corrección de bugs
- [ ] Deploy a producción (merge dev -> main)
- [ ] Verificación final del dominio

---

## 📋 Convenciones del Proyecto

### Ramas Git
- `main`: Producción (solo código estable)
- `dev`: Desarrollo (donde trabajamos)
- Flujo: Cambios en `dev` → Review → Merge a `main`

### Marca
- Nombre: **Toflipop** (solo T mayúscula)
- Footer: "Hecho con 💕 por Penélope Garcia para Toflipop"

### Tecnologías
- **Framework:** Next.js 16
- **CMS:** Sanity (cloud) - Studio: https://toflipop-studio.sanity.studio/
- **Pagos:** Stripe
- **Hosting:** Vercel
- **Dominio:** Porkbun

### Problemas Resueltos Hoy
- ✅ **Sanity "Unauthorized"**: Token actualizado en .env.local
- ✅ **Stripe "url_invalid"**: Cambiado `localhost:3000` → `127.0.0.1:3000` en success_url y cancel_url

---

## 📝 Resumen de Sesión (27 de mayo de 2026)

### SEO y Rendimiento
- ✅ **next.config.ts:** Formats AVIF/WebP, minimumCacheTTL, deviceSizes, compress
- ✅ **Footer.tsx:** 3 imágenes <img> → <Image> de Next.js (contacto, ubicación, made-with-love)
- ✅ **Metadata mejorado:** /success y /cancelled con title, description, robots no-index
- ✅ **Fix viewport:** Eliminado themeColor (no soportado en Next.js 16)

### Google Analytics + RGPD
- ✅ **CookieContext.tsx:** Gestión de preferencias (necessary, analytics, marketing)
- ✅ **CookieBanner.tsx:** Banner con "Aceptar todas", "Rechazar todas", "Configurar"
- ✅ **GoogleAnalytics.tsx:** Solo carga si hasConsent('analytics')
- ✅ **Layout actualizado:** CookieProvider envuelve toda la app
- ✅ **GA ID configurado:** G-SRLQ5GVZXW en .env.local
- ✅ **Bug corregido:** hasConsentGiven para mostrar/ocultar banner correctamente

### Errores Corregidos
- ✅ **<p> anidado en Footer:** Cambiado a <br /> (error de hidratación)
- ✅ **themeColor en viewport:** Eliminado (no soportado en Next.js 16)

### Archivos Nuevos
- `src/contexts/CookieContext.tsx`
- `src/components/CookieBanner.tsx`
- `src/components/GoogleAnalytics.tsx`

---

## 📝 Resumen de Sesión (26 de mayo de 2026)

### Diseño y UI
- ✅ **Footer rediseñado completo:** Secciones de Tienda, Info Legal, Contacto y Redes Sociales
- ✅ **Iconos de contacto:** Email (90x90px) y Ubicación (60x90px pin), texto text-lg, gap-1
- ✅ **Redes sociales en footer:** Instagram, TikTok, Facebook con iconos SVG
- ✅ **Colores pastel 100%:** Eliminados TODOS los colores rojos/verdes de toda la web
- ✅ **Paleta pastel consistente:** hover pastel en productos, carrito, botones, links

### Funcionalidad
- ✅ **Carrito arreglado:** allowedDevOrigins en next.config.js para Stripe en WSL
- ✅ **Stock corregido:** Solo muestra aviso cuando ≤7 unidades, fondo naranja pastel
- ✅ **Checkbox RGPD obligatorio** en página de carrito
- ✅ **Schema `order`** creado en Sanity para guardar pedidos
- ✅ **Webhook Stripe** `/api/webhooks/stripe` creado

### Páginas
- ✅ **Blog completo:** Listado + posts individuales con PortableText
- ✅ **Páginas legales:** Aviso Legal, Privacidad, Cookies, Términos, Devoluciones
- ✅ **Sobre nosotros** y **Contacto con FAQ**
- ✅ **Páginas Success/Cancelled** con imágenes de Tofli (gato feliz 🎉 / llorando 🥺)

### Contenido
- ✅ Correo actualizado a holatoflipop@gmail.com en toda la web
- ✅ Primer producto "Prueba 1" creado y visible
- ✅ Imágenes de Tofli subidas a public/images/

---

## 🎯 Próximos Pasos Inmediatos

1. **HECHO:** Primer producto creado y visible ✅
2. **HECHO:** Carrito de compras funcional ✅
3. **HECHO:** Páginas legales completas ✅
4. **HECHO:** Blog completo (listado + posts individuales con PortableText) ✅
5. **HECHO:** Correo actualizado a holatoflipop@gmail.com ✅
6. **HECHO:** Stripe integrado (API + páginas + botón conectado) ✅
7. **HECHO:** Imágenes de Tofli en /success y /cancelled ✅
8. **HECHO:** Schema `order` en Sanity ✅
9. **HECHO:** Webhook `/api/webhooks/stripe` creado ✅
10. **HECHO:** SEO completo (meta tags, sitemap, robots, Schema.org, imágenes) ✅
11. **HECHO:** Google Analytics + RGPD (CookieBanner, CookieContext, GA ID configurado) ✅
12. **PRÓXIMO:** Configurar STRIPE_WEBHOOK_SECRET + conectar con Stripe Dashboard
13. **PRÓXIMO:** Probar webhook end-to-end (con ngrok para local)
14. **PRÓXIMO:** Deploy a producción (merge dev -> main)
15. **PRÓXIMO:** Configurar NEXT_PUBLIC_GA_ID en Vercel Environment Variables

---

*Este plan se actualiza cada sesión. 💫*
