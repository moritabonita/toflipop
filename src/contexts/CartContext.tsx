'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'

// Tipo de item en el carrito
export interface CartItem {
  id: string
  name: string
  price: number
  imageUrl?: string
  quantity: number
}

// Tipo del contexto
interface CartContextType {
  items: CartItem[]
  addToCart: (item: Omit<CartItem, 'quantity'>) => void
  removeFromCart: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}

// Contexto del carrito
const CartContext = createContext<CartContextType | undefined>(undefined)

// Provider del carrito
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Cargar carrito desde localStorage al montar
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('toflipop_cart')
      if (savedCart) {
        setItems(JSON.parse(savedCart))
      }
    } catch (error) {
      console.error('Error loading cart:', error)
    }
    setIsLoaded(true)
  }, [])

  // Guardar carrito en localStorage cuando cambie
  useEffect(() => {
    if (isLoaded) {
      try {
        localStorage.setItem('toflipop_cart', JSON.stringify(items))
      } catch (error) {
        console.error('Error saving cart:', error)
      }
    }
  }, [items, isLoaded])

  // Añadir al carrito
  const addToCart = useCallback((item: Omit<CartItem, 'quantity'>) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id)
      if (existingItem) {
        // Si ya existe, aumentar cantidad
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      // Si no existe, añadir con cantidad 1
      return [...prevItems, { ...item, quantity: 1 }]
    })
  }, [])

  // Eliminar del carrito
  const removeFromCart = useCallback((id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }, [])

  // Actualizar cantidad
  const updateQuantity = useCallback((id: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prevItems) => prevItems.filter((item) => item.id !== id))
    } else {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        )
      )
    }
  }, [])

  // Vaciar carrito
  const clearCart = useCallback(() => {
    setItems([])
  }, [])

  // Calcular total de items
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  // Calcular precio total
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Hook para usar el carrito
export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
