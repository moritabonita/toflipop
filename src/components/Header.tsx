'use client'

import Link from 'next/link'
import CartIcon from '@/components/CartIcon'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pastel-lavender/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/images/tofli-y-van-loguito.png"
              alt="Toflipop logo"
              className="w-[60px] h-[60px] group-hover:opacity-80 transition-opacity"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
              Toflipop
            </span>
          </Link>

          {/* Navegación */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-neutral-700 hover:text-pastel-purple font-medium transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="/#productos"
              className="text-neutral-700 hover:text-pastel-purple font-medium transition-colors"
            >
              Productos
            </Link>
            <Link
              href="/about"
              className="text-neutral-700 hover:text-pastel-purple font-medium transition-colors"
            >
              Sobre nosotros
            </Link>
            <Link
              href="/contact"
              className="text-neutral-700 hover:text-pastel-purple font-medium transition-colors"
            >
              Contacto
            </Link>
            <Link
              href="/blog"
              className="text-neutral-700 hover:text-pastel-purple font-medium transition-colors"
            >
              Blog
            </Link>
          </nav>

          {/* Carrito */}
          <div className="flex items-center gap-4">
            <CartIcon />

            {/* Menú móvil */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-pastel-lavender/30 transition-colors"
              aria-label="Menú"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-neutral-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
