import Link from 'next/link'

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-pastel-purple hover:underline mb-8">
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-neutral-800 mb-8">
          Política de Privacidad
        </h1>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-pastel-lavender/50 space-y-6">
          <div className="bg-pastel-lavender/30 p-4 rounded-xl">
            <p className="text-neutral-700">
              <strong>📋 Resumen:</strong> Esta política explica cómo recogemos, usamos y protegemos tus datos 
              personales conforme al Reglamento General de Protección de Datos (RGPD) y la Ley Orgánica 3/2018 
              de Protección de Datos Personales (LOPDGDD).
            </p>
          </div>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">1. Responsable del tratamiento</h2>
            <ul className="space-y-2 text-neutral-700">
              <li><strong>Responsable:</strong> Toflipop</li>
              <li><strong>Dirección:</strong> Ourense, España</li>
              <li><strong>Email:</strong> info@toflipop.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">2. Datos que recogemos</h2>
            <p className="text-neutral-700 mb-4">Recogemos los siguientes datos personales:</p>
            <ul className="space-y-2 text-neutral-700 list-disc list-inside">
              <li><strong>Para realizar pedidos:</strong> nombre, apellidos, email, teléfono, dirección de envío y facturación</li>
              <li><strong>Para procesamiento de pagos:</strong> datos de pago procesados de forma segura por Stripe</li>
              <li><strong>Para envío de comunicaciones:</strong> email (solo con tu consentimiento)</li>
              <li><strong>Datos técnicos:</strong> dirección IP, tipo de navegador, cookies (ver Política de Cookies)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">3. Finalidad del tratamiento</h2>
            <p className="text-neutral-700 mb-4">Tus datos serán tratados para:</p>
            <ul className="space-y-2 text-neutral-700 list-disc list-inside">
              <li>Gestionar y procesar tus pedidos</li>
              <li>Enviarte confirmaciones de pedido y actualizaciones de envío</li>
              <li>Atender tus consultas y solicitudes de atención al cliente</li>
              <li>Enviar comunicaciones comerciales (solo si das tu consentimiento)</li>
              <li>Cumplir con obligaciones legales (facturación, contabilidad)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">4. Base legal del tratamiento</h2>
            <ul className="space-y-2 text-neutral-700">
              <li><strong>Ejecución contractual:</strong> Art. 6.1.b RGPD - Para procesar tus pedidos</li>
              <li><strong>Consentimiento:</strong> Art. 6.1.a RGPD - Para envíos comerciales</li>
              <li><strong>Obligación legal:</strong> Art. 6.1.c RGPD - Para cumplimiento fiscal</li>
              <li><strong>Interés legítimo:</strong> Art. 6.1.f RGPD - Para mejora del servicio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">5. Destinatarios</h2>
            <p className="text-neutral-700 mb-4">Tus datos pueden ser comunicados a:</p>
            <ul className="space-y-2 text-neutral-700 list-disc list-inside">
              <li><strong>Stripe:</strong> Para procesamiento de pagos (EE.UU., con cláusulas contractuales estándar)</li>
              <li><strong>Empresa de mensajería:</strong> Para entrega de pedidos</li>
              <li><strong>Vercel:</strong> Para hosting del sitio web</li>
              <li><strong>Administraciones públicas:</strong> Cuando exista obligación legal</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">6. Plazos de conservación</h2>
            <ul className="space-y-2 text-neutral-700">
              <li><strong>Datos de pedidos:</strong> 5 años (obligación fiscal)</li>
              <li><strong>Comunicaciones comerciales:</strong> Hasta que retires tu consentimiento</li>
              <li><strong>Datos técnicos:</strong> 1 año máximo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">7. Tus derechos</h2>
            <p className="text-neutral-700 mb-4">Puedes ejercer los siguientes derechos:</p>
            <ul className="space-y-2 text-neutral-700 list-disc list-inside">
              <li><strong>Acceso:</strong> Saber qué datos tenemos de ti</li>
              <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
              <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos</li>
              <li><strong>Limitación:</strong> Limitar el tratamiento de tus datos</li>
              <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
              <li><strong>Oposición:</strong> Oponerte al tratamiento</li>
            </ul>
            <p className="text-neutral-700 mt-4">
              Para ejercer tus derechos, envía un email a <strong>info@toflipop.com</strong> con tu 
              identificación. También puedes presentar una reclamación ante la 
              <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-pastel-purple hover:underline">
                Agencia Española de Protección de Datos
              </a>.
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
