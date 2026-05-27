import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center text-pastel-purple hover:underline mb-8">
          ← Volver al inicio
        </Link>

        <h1 className="text-4xl font-bold text-neutral-800 mb-8">
          Sobre Toflipop
        </h1>

        <div className="space-y-8">
          {/* Hero section */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-pastel-lavender/50">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">📒✨</div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue bg-clip-text text-transparent mb-4">
                Creatividad que se nota
              </h2>
            </div>

            <p className="text-neutral-700 leading-relaxed text-lg text-center max-w-2xl mx-auto">
              Toflipop nació de la pasión por los pequeños detalles que hacen especial nuestro día a día. 
              Creemos que un buen anotador o un sticker bien puesto pueden transformar tu rutina en algo 
              más bonito y personal.
            </p>
          </div>

          {/* Nuestra historia */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-pastel-lavender/50">
            <h3 className="text-2xl font-semibold text-neutral-800 mb-4">📖 Nuestra Historia</h3>
            <p className="text-neutral-700 leading-relaxed mb-4">
              Todo empezó en Ourense, Galicia, donde el amor por la papelería creativa se encontró con 
              la necesidad de tener productos únicos que reflejaran nuestra personalidad.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Hoy, Toflipop ofrece una selección cuidadosa de anotadores y stickers diseñados para 
              quienes valoran la creatividad y el estilo en su día a día. Cada producto es elegido 
              pensando en ti.
            </p>
          </div>

          {/* Nuestros valores */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-md border border-pastel-lavender/50">
            <h3 className="text-2xl font-semibold text-neutral-800 mb-6">💫 Nuestros Valores</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">🎨</div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Creatividad</h4>
                  <p className="text-neutral-700 text-sm">
                    Cada diseño es una expresión de creatividad y originalidad
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">💚</div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Sostenibilidad</h4>
                  <p className="text-neutral-700 text-sm">
                    Trabajamos con materiales responsables y envíos eco-friendly
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">💕</div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Calidad</h4>
                  <p className="text-neutral-700 text-sm">
                    Solo ofrecemos productos que cumplirían nuestros propios estándares
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl flex-shrink-0">🤝</div>
                <div>
                  <h4 className="font-semibold text-neutral-800 mb-2">Comunidad</h4>
                  <p className="text-neutral-700 text-sm">
                    Construimos una comunidad de personas creativas
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rainbow Divider */}
          <div className="flex justify-center gap-2">
            <div className="w-6 h-3 rounded-full bg-pastel-red"></div>
            <div className="w-6 h-3 rounded-full bg-pastel-orange"></div>
            <div className="w-6 h-3 rounded-full bg-pastel-yellow"></div>
            <div className="w-6 h-3 rounded-full bg-pastel-green"></div>
            <div className="w-6 h-3 rounded-full bg-pastel-blue"></div>
            <div className="w-6 h-3 rounded-full bg-pastel-purple"></div>
            <div className="w-6 h-3 rounded-full bg-pastel-pink"></div>
          </div>
        </div>
      </div>
    </main>
  )
}
