'use client'

import { useCart } from '@/contexts/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)
  const [email, setEmail] = useState('')
  const [acceptedTerms, setAcceptedTerms] = useState(false)
  const [error, setError] = useState('')
  const [confirmDelete, setConfirmDelete] = useState<string | null>(null)

  // Eliminar del carrito con confirmación
  const confirmRemove = (id: string) => {
    setConfirmDelete(id)
  }

  const confirmDeleteItem = () => {
    if (confirmDelete) {
      removeFromCart(confirmDelete)
      setConfirmDelete(null)
    }
  }

  const cancelDelete = () => {
    setConfirmDelete(null)
  }

  // Manejar el checkout con Stripe
  const handleCheckout = async () => {
    if (!email) {
      setError('Por favor, introduce tu email para recibir la confirmación')
      return
    }

    if (!acceptedTerms) {
      setError('Debes aceptar los términos y condiciones para continuar')
      return
    }

    setIsProcessing(true)
    setError('')

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          email,
        }),
      })

      const data = await response.json()

      if (response.ok && data.url) {
        // Redirigir a Stripe Checkout
        window.location.href = data.url
      } else {
        setError(data.error || 'Error al procesar el pago. Intenta de nuevo.')
      }
    } catch (err) {
      console.error('Error:', err)
      setError('Error de conexión. Verifica tu internet y vuelve a intentarlo.')
    } finally {
      setIsProcessing(false)
    }
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen p-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <Image
              src="/images/tofli-vacio.png"
              alt="Tu carrito está vacío"
              width={280}
              height={280}
              className="mx-auto"
            />
          </div>
          <h1 className="text-4xl font-bold text-neutral-800 mb-4">
            Tu carrito está vacío
          </h1>
          <p className="text-neutral-600 mb-8 text-lg">
            ¡Añade algunos productos para empezar!
          </p>
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-pastel-pink to-pastel-purple text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            Ver productos
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-neutral-800 mb-2">
              Tu Carrito
            </h1>
            <p className="text-neutral-600">
              {totalItems} {totalItems === 1 ? 'producto' : 'productos'} en tu carrito
            </p>
          </div>
          <button
            onClick={clearCart}
            className="text-pastel-purple hover:text-pink-500 font-medium text-sm flex items-center gap-2 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Vaciar carrito
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Lista de productos */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-md border border-pastel-lavender/50 p-6 flex gap-6"
              >
                {/* Imagen */}
                <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-gradient-to-br from-pastel-pink/20 to-pastel-purple/20 flex-shrink-0">
                  {item.imageUrl ? (
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <span className="text-4xl">📒</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <Link
                      href={`/product/${item.id}`}
                      className="text-lg font-semibold text-neutral-800 hover:text-pastel-purple transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-2xl font-bold bg-gradient-to-r from-pastel-pink to-pastel-purple bg-clip-text text-transparent mt-1">
                      €{item.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Controles de cantidad */}
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full bg-pastel-lavender/50 hover:bg-pastel-purple/30 flex items-center justify-center transition-colors font-bold"
                      >
                        -
                      </button>
                      <span className="font-semibold text-neutral-800 w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full bg-pastel-lavender/50 hover:bg-pastel-purple/30 flex items-center justify-center transition-colors font-bold"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => confirmRemove(item.id)}
                      className="text-pastel-purple hover:text-pink-500 text-sm font-medium transition-colors"
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Resumen del pedido */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-md border border-pastel-lavender/50 p-6 sticky top-24">
              <h2 className="text-xl font-bold text-neutral-800 mb-6">
                Resumen del pedido
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-neutral-600">
                  <span>Subtotal</span>
                  <span>€{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-neutral-600">
                  <span>Envío</span>
                  <span className="text-pastel-purple font-medium">
                    {totalPrice >= 50 ? 'Gratis' : '€4.99'}
                  </span>
                </div>
                {totalPrice < 50 && (
                  <p className="text-xs text-neutral-500 bg-pastel-lavender/30 p-2 rounded-lg">
                    💡 ¡Añade €{(50 - totalPrice).toFixed(2)} más para envío gratis!
                  </p>
                )}
                <div className="border-t border-pastel-lavender/30 pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="bg-gradient-to-r from-pastel-pink to-pastel-purple bg-clip-text text-transparent">
                    €{(totalPrice + (totalPrice >= 50 ? 0 : 4.99)).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Campo de email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email para confirmación
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-pastel-lavender/50 focus:outline-none focus:ring-2 focus:ring-pastel-purple/50 bg-white"
                />
              </div>

              {/* Mensaje de error */}
              {error && (
                <div className="mb-4 p-3 bg-pink-50 border border-pink-200 rounded-xl text-pink-600 text-sm">
                  {error}
                </div>
              )}

              {/* Checkbox de términos y condiciones */}
              <div className="mb-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-pastel-lavender/50 text-pastel-purple focus:ring-pastel-purple/50"
                  />
                  <span className="text-xs text-neutral-600">
                    He leído y acepto los{' '}
                    <Link href="/legal/terminos" className="text-pastel-purple hover:underline font-medium">
                      términos y condiciones
                    </Link>
                    , la{' '}
                    <Link href="/legal/privacidad" className="text-pastel-purple hover:underline font-medium">
                      política de privacidad
                    </Link>{' '}
                    y autorizo el tratamiento de mis datos personales para la gestión del pedido.
                  </span>
                </label>
              </div>

              {/* Botón de continuar */}
              <button
                onClick={handleCheckout}
                disabled={isProcessing || !acceptedTerms || !email}
                className="w-full bg-gradient-to-r from-pastel-pink to-pastel-purple text-white py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 mb-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isProcessing ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Procesando...
                  </span>
                ) : (
                  'Continuar al pago'
                )}
              </button>

              <Link
                href="/"
                className="block w-full text-center text-pastel-purple hover:underline text-sm font-medium"
              >
                ← Seguir comprando
              </Link>

              {/* Info de seguridad */}
              <div className="mt-6 space-y-2 text-xs text-neutral-500">
                <div className="flex items-center gap-2">
                  <span>🔒</span>
                  <span>Pago seguro con Stripe</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🚚</span>
                  <span>Envío en 3-5 días laborables</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>↩️</span>
                  <span>Devolución gratuita 30 días</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Diálogo de confirmación para eliminar */}
        {confirmDelete && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center animate-in fade-in zoom-in duration-200">
              <div className="mb-4">
                <Image
                  src="/images/eliminar-tofli.png"
                  alt="Tofli triste - ¿Eliminar producto?"
                  width={180}
                  height={180}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-bold text-neutral-800 mb-2">
                ¿Eliminar producto?
              </h3>
              <p className="text-neutral-600 mb-6 text-sm">
                ¿Estás segura de que quieres eliminar este producto del carrito?
              </p>
              <div className="flex gap-3 justify-center">
                <button
                  onClick={cancelDelete}
                  className="px-6 py-2.5 rounded-full border border-pastel-lavender/50 text-pastel-purple font-medium hover:bg-pastel-lavender/30 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={confirmDeleteItem}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pastel-pink to-pastel-purple text-white font-medium hover:shadow-lg transition-all"
                >
                  Sí, eliminar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
