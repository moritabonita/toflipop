# 🛍️ Plan de Desarrollo - Toflipop

**Última actualización:** 24 de mayo de 2026 - Sesión actual
**Estado general:** 🟢 En progreso - Sanity configurado y funcionando
**Última conversación:** Deploy exitoso del Studio, primer producto creado, datasets limpios

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
- [x] Actualización del footer con nombre completo: "Hecho con 💕 por Penélope Garcia para Toflipop"

### 3. Estado Actual del Sitio
- [x] Página "Coming Soon" profesional implementada
- [x] Mensaje temporal mientras se desarrolla la tienda completa

### 4. Sanity Studio (NUEVO ✅)
- [x] Studio desplegado en https://toflipop-studio.sanity.studio/
- [x] Token de administrador configurado (Developer access)
- [x] Dataset `production` eliminado (limpieza completada)
- [x] Solo queda dataset `toflipop-production`
- [x] Primer producto creado: "Anotador Floral" (€25, categoría: notebook)

---

## 🟡 En Progreso

### 5. Desarrollo del Frontend
- [ ] Página de inicio (Home) con diseño atractivo
- [ ] Catálogo de productos (anotadores y stickers)
- [ ] Página de detalle de producto
- [ ] Carrito de compras
- [ ] Proceso de checkout con Stripe
- [ ] Diseño responsive para móviles

### 6. Contenido y CMS (Sanity)
- [x] Configurar schemas de productos en Sanity
- [ ] Crear más productos de ejemplo
- [ ] Subir imágenes de productos
- [ ] Configurar páginas de contenido (About, Contact, FAQ)
- [ ] Configurar blog (opcional para SEO)

### 7. Integración de Pagos
- [ ] Configurar Stripe en modo test
- [ ] Implementar flujo de pago completo
- [ ] Configurar webhooks para confirmación de pedidos
- [ ] Página de confirmación de pedido
- [ ] Email de confirmación (opcional)

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
- [ ] Deploy a producción
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

1. **Prioridad Alta:** Crear 3-5 productos de ejemplo en Sanity (Vanina practica)
2. **Prioridad Alta:** Desarrollar página de inicio con catálogo conectado a Sanity
3. **Prioridad Media:** Implementar carrito y checkout
4. **Prioridad Media:** Cumplimiento legal (RGPD, LSSI-CE)
5. **Prioridad Baja:** SEO y marketing

---

*Este plan se actualizará automáticamente a medida que avancemos. 💫*
