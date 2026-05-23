export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue bg-clip-text text-transparent">
          ToFlipop
        </h1>
        <p className="text-2xl text-neutral-800 mb-2">
          Anotadores y Stickers Creativos
        </p>
        <p className="text-lg text-neutral-800 opacity-75">
          Creatividad y estilo para tu día a día ✨
        </p>
      </div>

      {/* Rainbow Divider */}
      <div className="flex gap-2 mb-12">
        <div className="w-8 h-3 rounded-full bg-pastel-red"></div>
        <div className="w-8 h-3 rounded-full bg-pastel-orange"></div>
        <div className="w-8 h-3 rounded-full bg-pastel-yellow"></div>
        <div className="w-8 h-3 rounded-full bg-pastel-green"></div>
        <div className="w-8 h-3 rounded-full bg-pastel-blue"></div>
        <div className="w-8 h-3 rounded-full bg-pastel-purple"></div>
        <div className="w-8 h-3 rounded-full bg-pastel-pink"></div>
      </div>

      {/* Status Message */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-md border border-pastel-lavender">
        <h2 className="text-2xl font-semibold mb-4 text-neutral-800">
          🚀 Proyecto en construcción
        </h2>
        <p className="text-neutral-800 mb-6">
          Estamos preparando tu tienda online con los colores pastel del arcoíris.
          Pronto podrás añadir tus productos desde el panel de administración.
        </p>

        {/* Progress Steps */}
        <div className="space-y-3 text-left">
          <div className="flex items-center gap-3">
            <span className="text-green-500 text-xl">✅</span>
            <span className="text-neutral-800">Dominio configurado: toflipop.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-green-500 text-xl">✅</span>
            <span className="text-neutral-800">Next.js instalado</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-green-500 text-xl">✅</span>
            <span className="text-neutral-800">Sanity CMS conectado</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-yellow-500 text-xl">⏳</span>
            <span className="text-neutral-800">Panel de administración</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-neutral-300 text-xl">⬜</span>
            <span className="text-neutral-800">Tienda online</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-neutral-300 text-xl">⬜</span>
            <span className="text-neutral-800">Blog</span>
          </div>
        </div>

        {/* Admin Link */}
        <div className="mt-6 pt-6 border-t border-pastel-lavender">
          <a
            href="/studio"
            className="inline-block bg-action hover:bg-action-hover text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            Ir al Panel de Administración
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 text-center text-neutral-800 opacity-50 text-sm">
        <p>Hecho con 💕 por Penélope para ToFlipop</p>
      </footer>
    </main>
  );
}
