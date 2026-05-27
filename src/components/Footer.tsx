import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-pastel-lavender/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Columnas de navegación arriba */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Información Legal */}
          <div className="text-center">
            <h4 className="font-semibold text-neutral-800 mb-4">Información Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/aviso-legal" className="text-neutral-600 hover:text-pastel-purple text-sm transition-colors">
                  Aviso Legal
                </Link>
              </li>
              <li>
                <Link href="/legal/privacidad" className="text-neutral-600 hover:text-pastel-purple text-sm transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/legal/cookies" className="text-neutral-600 hover:text-pastel-purple text-sm transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="/legal/terminos" className="text-neutral-600 hover:text-pastel-purple text-sm transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="/legal/devoluciones" className="text-neutral-600 hover:text-pastel-purple text-sm transition-colors">
                  Política de Devoluciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="text-center">
            <h4 className="font-semibold text-neutral-800 mb-4">Contacto</h4>
            <ul className="space-y-4 text-lg text-neutral-600">
              <li className="flex items-center justify-center gap-1">
                <Image src="/images/contacto.png" alt="Email" width={90} height={90} className="w-[90px] h-[90px]" />
                <span>info@toflipop.com</span>
              </li>
              <li className="flex items-center justify-center gap-1">
                <Image src="/images/pin-de-ubicacion.png" alt="Ubicación" width={60} height={90} className="w-[60px] h-[90px]" />
                <span>Ourense, España</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sección centrada: imagen, texto y arcoíris */}
        <div className="text-center">
          <Image
            src="/images/made-with-love.png"
            alt="Hecho con amor"
            width={80}
            height={80}
            className="w-[80px] h-[80px] mx-auto mb-4"
          />
          <p className="text-neutral-600 max-w-md mx-auto mb-4">
            Anotadores, papelería y stickers creativos.
            <p>Hecho 100% con amor</p>
          </p>
          {/* Rainbow Divider */}
          <div className="flex gap-1.5 justify-center">
            <div className="w-4 h-2 rounded-full bg-pastel-red"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-orange"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-yellow"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-green"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-blue"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-purple"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-pink"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-red"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-orange"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-yellow"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-green"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-blue"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-purple"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-pink"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-red"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-orange"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-yellow"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-green"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-blue"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-purple"></div>
            <div className="w-4 h-2 rounded-full bg-pastel-pink"></div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-pastel-lavender/30 text-center">
          <p className="text-neutral-600 text-sm">
            Hecho con 💕 por Penélope Garcia para Toflipop
          </p>
          <p className="text-neutral-500 text-xs mt-2">
            © {new Date().getFullYear()} Toflipop. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
