'use client'

import { useCart } from '@/contexts/CartContext'
import { useState } from 'react'

interface AddToCartButtonProps {
  productId: string
  productName: string
  productPrice: number
  productImageUrl?: string
  variant?: 'default' | 'small'
}

export default function AddToCartButton({
  productId,
  productName,
  productPrice,
  productImageUrl,
  variant = 'default',
}: AddToCartButtonProps) {
  const { addToCart, items } = useCart()
  const [justAdded, setJustAdded] = useState(false)

  const isInCart = items.some((item) => item.id === productId)

  const handleAddToCart = () => {
    addToCart({
      id: productId,
      name: productName,
      price: productPrice,
      imageUrl: productImageUrl,
    })
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 2000)
  }

  if (variant === 'small') {
    return (
      <button
        onClick={handleAddToCart}
        className={`w-full py-2 rounded-full text-sm font-medium transition-all duration-300 ${
          justAdded
            ? 'bg-pastel-green text-white'
            : isInCart
            ? 'bg-pastel-lavender/50 text-pastel-purple border border-pastel-purple/30 hover:bg-pastel-purple/20'
            : 'bg-gradient-to-r from-pastel-pink to-pastel-purple text-white hover:shadow-lg'
        }`}
      >
        {justAdded ? '✓ Añadido' : isInCart ? '✓ En el carrito' : '🛒 Añadir'}
      </button>
    )
  }

  return (
    <button
      onClick={handleAddToCart}
      className={`w-full py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 ${
          justAdded
          ? 'bg-pastel-green text-white'
          : isInCart
          ? 'bg-pastel-lavender text-pastel-purple border-2 border-pastel-purple/30 hover:bg-pastel-purple/20'
          : 'bg-gradient-to-r from-pastel-pink to-pastel-purple text-white hover:shadow-xl'
      }`}
    >
      {justAdded ? '✓ ¡Añadido al carrito!' : isInCart ? '✓ Ya está en tu carrito' : '🛒 Añadir al carrito'}
    </button>
  )
}
