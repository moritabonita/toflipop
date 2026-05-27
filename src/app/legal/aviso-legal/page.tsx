import Link from 'next/link'

export default function AvisoLegalPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-pastel-purple hover:underline mb-8">
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-neutral-800 mb-8">
          Aviso Legal
        </h1>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-pastel-lavender/50 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">1. Datos identificativos</h2>
            <p className="text-neutral-700 leading-relaxed">
              En cumplimiento con el deber de información recogido en el artículo 10 de la Ley 34/2002, 
              de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), 
              a continuación se reflejan los siguientes datos:
            </p>
            <ul className="mt-4 space-y-2 text-neutral-700">
              <li><strong>Marca:</strong> Toflipop</li>
              <li><strong>Titular:</strong> [Nombre completo del titular]</li>
              <li><strong>NIF/CIF:</strong> [Número de identificación fiscal]</li>
              <li><strong>Domicilio:</strong> Ourense, España</li>
              <li><strong>Email:</strong> info@toflipop.com</li>
              <li><strong>Actividad:</strong> Venta online de anotadores y stickers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">2. Objeto</h2>
            <p className="text-neutral-700 leading-relaxed">
              El presente sitio web tiene por objeto facilitar a los usuarios información sobre los productos 
              comercializados por Toflipop, así como permitir la realización de pedidos de forma electrónica.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">3. Propiedad intelectual e industrial</h2>
            <p className="text-neutral-700 leading-relaxed">
              Todos los contenidos del sitio web, incluyendo textos, imágenes, gráficos, logotipos y el diseño 
              general, son propiedad de Toflipop o se cuentan con la licencia adecuada para su uso, conforme 
              a la Ley de Propiedad Intelectual española (Real Decreto Legislativo 1/1996).
            </p>
            <p className="text-neutral-700 leading-relaxed mt-4">
              Queda prohibida la reproducción, distribución, comunicación pública o transformación de los 
              contenidos sin autorización expresa del titular.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">4. Responsabilidad</h2>
            <p className="text-neutral-700 leading-relaxed">
              Toflipop no se hace responsable de los daños y perjuicios que pudieran derivarse del acceso 
              o la imposibilidad de acceso a los contenidos, ni de la falta de veracidad, utilidad, exactitud 
              o actualización de los mismos.
            </p>
            <p className="text-neutral-700 leading-relaxed mt-4">
              En caso de que en el sitio web se facilitaran enlaces a otros sitios web, Toflipop no ejerce 
              ningún tipo de control sobre dichos sitios ni sobre sus contenidos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-4">5. Legislación aplicable</h2>
            <p className="text-neutral-700 leading-relaxed">
              Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier 
              controversia que pudiera surgir, las partes se someten a los Juzgados y Tribunales del domicilio 
              del consumidor, conforme a lo establecido en la normativa vigente en materia de consumo.
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
