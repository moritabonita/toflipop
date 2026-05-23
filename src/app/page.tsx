export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue bg-clip-text text-transparent">
          Toflipop
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

      {/* Welcome Message */}
      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-md border border-pastel-lavender text-center">
        <h2 className="text-2xl font-semibold mb-4 text-neutral-800">
          ✨ Próximamente
        </h2>
        <p className="text-neutral-800 mb-6">
          Estamos preparando una experiencia única llena de creatividad y color.
          Muy pronto podrás explorar nuestra colección de anotadores y stickers.
        </p>
        <p className="text-sm text-neutral-800 opacity-75">
          ¡Gracias por tu paciencia!
        </p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 text-center text-neutral-800 opacity-50 text-sm">
        <p>Hecho con 💕 por Penélope para ToFlipop</p>
      </footer>
    </main>
  );
}
