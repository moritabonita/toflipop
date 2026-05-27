import Link from 'next/link'

export default function TerminosPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-pastel-purple hover:underline mb-8">
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-neutral-800 mb-8">
          Términos y Condiciones
        </h1>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-pastel-lavender/50 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">1. Aceptación de los términos</h2>
            <p className="text-neutral-700 leading-relaxed">
              Al acceder y utilizar este sitio web, aceptas estos términos y condiciones en su totalidad. 
              Si no estás de acuerdo con alguna parte, te rogamos que no utilices el sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">2. Descripción del servicio</h2>
            <p className="text-neutral-700 leading-relaxed">
              Toflipop es una tienda online dedicada a la venta de anotadores y stickers creativos. 
              Todos los productos se envían desde España a cualquier dirección dentro de la Unión Europea.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">3. Realización de pedidos</h2>
            <ol className="space-y-3 text-neutral-700 list-decimal list-inside">
              <li>Selecciona los productos que deseas comprar y añádelos al carrito</li>
              <li>Introduce tus datos de envío y facturación</li>
              <li>Selecciona el método de envío</li>
              <li>Realiza el pago de forma segura a través de Stripe</li>
              <li>Recibirás un email de confirmación con los detalles de tu pedido</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">4. Precios y pagos</h2>
            <ul className="space-y-2 text-neutral-700 list-disc list-inside">
              <li>Todos los precios están en euros (€) e incluyen IVA</li>
              <li>Los precios pueden modificarse sin previo aviso, pero se aplicará el precio del momento de la compra</li>
              <li>Los pagos se procesan de forma segura a través de Stripe</li>
              <li>Stripe acepta tarjetas Visa, Mastercard, y otros métodos de pago</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">5. Envíos</h2>
            <ul className="space-y-2 text-neutral-700 list-disc list-inside">
              <li><strong>Península:</strong> 3-5 días laborables</li>
              <li><strong>Baleares:</strong> 5-7 días laborables</li>
              <li><strong>Canarias, Ceuta y Melilla:</strong> 7-10 días laborables</li>
              <li><strong>Envío gratuito:</strong> En pedidos superiores a €50</li>
              <li><strong>Coste de envío estándar:</strong> €4.99</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">6. Devoluciones y reembolsos</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Conforme a la Ley General para la Defensa de los Consumidores y Usuarios, tienes derecho 
              a desistir de la compra en un plazo de 14 días naturales desde la recepción del producto.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Para más detalles, consulta nuestra 
              <Link href="/legal/devoluciones" className="text-pastel-purple hover:underline">
                Política de Devoluciones
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">7. Propiedad intelectual</h2>
            <p className="text-neutral-700 leading-relaxed">
              Todos los contenidos del sitio web (textos, imágenes, logotipos, diseño) son propiedad de 
              Toflipop o se utilizan con licencia. Queda prohibida su reproducción sin autorización.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">8. Limitación de responsabilidad</h2>
            <p className="text-neutral-700 leading-relaxed">
              Toflipop no será responsable de daños indirectos, incidentales o consecuentes derivados del 
              uso del sitio web. Nos reservamos el derecho de modificar o suspender el servicio sin previo aviso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">9. Modificaciones</h2>
            <p className="text-neutral-700 leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios 
              entrarán en vigor desde su publicación en este sitio.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">10. Contacto</h2>
            <p className="text-neutral-700 leading-relaxed">
              Para cualquier consulta sobre estos términos, contacta con nosotros en 
              <strong> info@toflipop.com</strong>.
            </p>
          </section>

          <div className="pt-4 border-t border-pastel-lavender/30 text-sm text-neutral-500">
            <p>Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
        </div>
      </div>
    </main>
  )
}
