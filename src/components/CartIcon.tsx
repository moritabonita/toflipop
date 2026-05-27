'use client'

import Link from 'next/link'
import { useCart } from '@/contexts/CartContext'

export default function CartIcon() {
  const { totalItems } = useCart()

  return (
    <Link href="/cart" className="relative inline-flex items-center group">
      {/* Icono del carrito */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-pastel-lavender/50 shadow-sm group-hover:shadow-md transition-all duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-neutral-700 group-hover:text-pastel-purple transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </div>

      {/* Badge de cantidad */}
      {totalItems > 0 && (
        <span className="absolute -top-1 -right-1 bg-gradient-to-r from-pastel-pink to-pastel-purple text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
          {totalItems}
        </span>
      )}
    </Link>
  )
}
