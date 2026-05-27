import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
if (!stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY no está configurada en .env.local')
}

const stripe = new Stripe(stripeSecretKey)

export async function POST(request: Request) {
  try {
    const { items, email } = await request.json()

    // Validar que haya items
    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'El carrito está vacío' },
        { status: 400 }
      )
    }

    // Calcular el total del servidor (NUNCA confiar en el cliente)
    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: item.name,
          images: item.imageUrl ? [item.imageUrl] : undefined,
        },
        unit_amount: Math.round(item.price * 100), // Centavos
      },
      quantity: item.quantity,
    }))

    // Calcular envío (gratis si >= 50€, sino 4.99€)
    const subtotal = items.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0)
    const shipping = subtotal >= 50 ? 0 : 4.99

    // Añadir envío como línea separada
    if (shipping > 0) {
      lineItems.push({
        price_data: {
          currency: 'eur',
          product_data: {
            name: 'Envío estándar (3-5 días)',
          },
          unit_amount: Math.round(shipping * 100),
        },
        quantity: 1,
      })
    }

    // Crear la sesión de checkout
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: lineItems,
      // Usamos 127.0.0.1 en lugar de localhost (Stripe lo acepta en modo test)
      // Cuando subas a producción, cámbialo a: https://toflipop.com/success...
      success_url: 'http://127.0.0.1:3000/success?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: 'http://127.0.0.1:3000/cancelled',
      customer_email: email,
      metadata: {
        source: 'toflipop-store',
        // Guardamos los items como JSON para que el webhook los use
        items: JSON.stringify(items.map((item: any) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        }))),
      },
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Error al crear sesión de Stripe:', error)
    return NextResponse.json(
      { error: 'Error al procesar el pago. Intenta de nuevo.' },
      { status: 500 }
    )
  }
}
