import Link from 'next/link'

export default function DevolucionesPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-pastel-purple hover:underline mb-8">
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-neutral-800 mb-8">
          Política de Devoluciones
        </h1>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-pastel-lavender/50 space-y-6">
          <div className="bg-green-100/50 border border-green-300/50 p-4 rounded-xl">
            <p className="text-neutral-700">
              <strong>💕 Tu satisfacción es nuestra prioridad.</strong> Si no estás 100% contenta con tu compra, 
              te ayudamos sin complicaciones.
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">1. Derecho de desistimiento</h2>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Conforme al Real Decreto Legislativo 1/2007 de Código de Consumo, tienes derecho a desistir 
              de tu compra en un plazo de <strong>14 días naturales</strong> desde la recepción del producto, 
              sin necesidad de justificar tu decisión.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">2. Cómo ejercer tu derecho</h2>
            <ol className="space-y-3 text-neutral-700 list-decimal list-inside">
              <li>
                <strong>Notifícanos:</strong> Envía un email a <strong>info@toflipop.com</strong> indicando 
                tu número de pedido y los productos que deseas devolver
              </li>
              <li>
                <strong>Empaqueta el producto:</strong> Devuélvelo en su estado original, sin usar y en su 
                embalaje intacto
              </li>
              <li>
                <strong>Envía el paquete:</strong> Envía el producto a nuestra dirección indicándote 
                como remitente con tu número de pedido (te facilitaremos la dirección al contactarnos)
              </li>
              <li>
                <strong>Recibe tu reembolso:</strong> Procesaremos el reembolso en un máximo de 14 días desde 
                que recibamos el producto
              </li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">3. Condiciones para la devolución</h2>
            <ul className="space-y-2 text-neutral-700 list-disc list-inside">
              <li>El producto debe estar sin usar y en su estado original</li>
              <li>Debe incluir todos los accesorios y embalaje original</li>
              <li>Los productos personalizados no admiten devolución salvo defecto de fabricación</li>
              <li>Los stickers no admiten devolución una vez retirados de su soporte</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">4. Reembolso</h2>
            <ul className="space-y-2 text-neutral-700 list-disc list-inside">
              <li>El reembolso se realizará mediante el mismo método de pago utilizado en la compra</li>
              <li>Se reembolsará el importe total del producto</li>
              <li>El reembolso se procesará en un máximo de 14 días naturales desde que recibamos el producto</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">5. Productos defectuosos</h2>
            <p className="text-neutral-700 leading-relaxed">
              Si recibes un producto defectuoso o dañado, contacta con nosotros en un plazo de 2 días 
              laborables desde la recepción. Te ofreceremos una sustitución o reembolso completo sin coste 
              adicional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">6. Contacto</h2>
            <p className="text-neutral-700 leading-relaxed">
              Para cualquier consulta sobre devoluciones, escríbenos a <strong>info@toflipop.com</strong> 
              y te responderemos en un máximo de 24 horas.
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
