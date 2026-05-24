# 🛍️ Plan de Desarrollo - Toflipop

**Última actualización:** 24 de mayo de 2026 - Problemas resueltos
**Estado general:** 🟢 En progreso - Primer producto visible en la web
**Última conversación:** Corregidos 3 errores que impedían ver el producto publicado

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
- [x] Fix: .gitignore corrregido para excluir node_modules y archivos generados

### 3. Sanity Studio
- [x] Studio desplegado en https://toflipop-studio.sanity.studio/
- [x] Token de administrador configurado
- [x] Dataset limpio: solo `toflipop-production`
- [x] Schemas configurados: product, post, blockContent

### 4. Frontend - Catálogo de Productos (NUEVO ✅)
- [x] `src/sanity/lib/products.ts` - Cliente Sanity + funciones para obtener productos
- [x] `src/components/ProductCard.tsx` - Componente tarjeta de producto (diseño pastel)
- [x] `src/app/page.tsx` - Página principal con catálogo conectado a Sanity
- [x] `src/app/product/[slug]/page.tsx` - Página de detalle de producto
- [x] Build exitoso y desplegado en rama `dev`
- [x] Servidor local funcionando en http://localhost:3000

---

## 🟡 En Progreso

### 5. Contenido en Sanity
- [x] **RESUELTO:** Primer producto "Prueba 1" publicado y visible
  - ✅ Corregido: Campo `mainImage` → `image` en las consultas GROQ (3 lugares)
  - ✅ Corregido: Dataset privado → añadido token al cliente de lectura
  - ✅ Corregido: CDN cache → cambiado `useCdn: false`
  - Producto visible con imagen, precio (€12), categoría (notebook)
  - Studio: https://toflipop-studio.sanity.studio/

### 6. Desarrollo del Frontend
- [ ] Carrito de compras
- [ ] Proceso de checkout con Stripe
- [ ] Diseño responsive para móviles
- [ ] Páginas de contenido (About, Contact, FAQ)

### 7. Integración de Pagos
- [ ] Configurar Stripe en modo test
- [ ] Implementar flujo de pago completo
- [ ] Webhooks para confirmación de pedidos
- [ ] Página de confirmación de pedido

---

## 🔵 Pendiente

### 8. Optimización SEO
- [ ] Meta tags y Open Graph para cada página
- [ ] Sitemap.xml
- [ ] Robots.txt
- [ ] Schema.org markup para productos
- [ ] Optimización de imágenes (next/image)
- [ ] Velocidad de carga y Core Web Vitals

### 9. Cumplimiento Legal (España)
- [ ] Política de privacidad (RGPD)
- [ ] Términos y condiciones
- [ ] Política de cookies
- [ ] Banner de cookies compliant
- [ ] Aviso legal (LSSI-CE)
- [ ] Política de devoluciones
- [ ] Datos de la empresa visibles

### 10. Marketing y Analítica
- [ ] Google Analytics / Google Tag Manager
- [ ] Facebook Pixel (opcional)
- [ ] Integración con email marketing
- [ ] Redes sociales (Instagram, TikTok)
- [ ] Cupones y descuentos

### 11. Testing y Lanzamiento
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
- **Framework:** Next.js 15
- **CMS:** Sanity (cloud) - Studio: https://toflipop-studio.sanity.studio/
- **Pagos:** Stripe
- **Hosting:** Vercel
- **Dominio:** Porkbun

---

## 🎯 Próximos Pasos Inmediatos

1. **HECHO:** Primer producto creado y visible ✅
2. **PRÓXIMO:** Vanina crea más productos (3-5 para tener catálogo completo)
3. **TERCERO:** Implementar carrito de compras
4. **CUARTO:** Checkout con Stripe
5. **QUINTO:** Deploy a producción (merge dev -> main)

---

*Este plan se actualiza cada sesión. 💫*
