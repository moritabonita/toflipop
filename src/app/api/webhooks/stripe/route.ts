import { NextResponse } from 'next/server'
import Stripe from 'stripe'
import { createOrder } from '@/sanity/lib/orders'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY
if (!stripeSecretKey) {
  throw new Error('STRIPE_SECRET_KEY no está configurada en .env.local')
}

const stripe = new Stripe(stripeSecretKey)

// Webhook secret - en modo test lo obtenemos del dashboard de Stripe
// Si no está configurado, usamos un modo de desarrollo más flexible
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET

export async function POST(request: Request) {
  const body = await request.text()
  const sig = request.headers.get('stripe-signature') as string

  let event: Stripe.Event

  try {
    if (webhookSecret && sig) {
      // Verificar la firma del webhook (producción)
      event = stripe.webhooks.constructEvent(body, sig, webhookSecret)
    } else {
      // Modo desarrollo: parsear directamente (SOLO para testing local)
      console.warn('⚠️ STRIPE_WEBHOOK_SECRET no configurado - usando modo desarrollo')
      event = JSON.parse(body) as Stripe.Event
    }
  } catch (err: any) {
    console.error('❌ Error verificando webhook:', err.message)
    return NextResponse.json(
      { error: 'Webhook verification failed' },
      { status: 400 }
    )
  }

  // Manejar solo los eventos que nos interesan
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session

    try {
      // Generar número de pedido único
      const orderNumber = `TF-${Date.now().toString(36).toUpperCase()}`

      // Extraer información de la sesión
      const customerEmail = session.customer_email || 'email@desconocido.com'
      const metadata = session.metadata || {}

      // Obtener los items del pedido desde el metadata (los pasamos desde el carrito)
      // Stripe no guarda los items originales, así que los recuperamos del metadata
      const itemsJson = metadata.items || '[]'
      const items = JSON.parse(itemsJson)

      // Calcular totales desde Stripe
      const subtotal = session.amount_subtotal ? session.amount_subtotal / 100 : 0
      const total = session.amount_total ? session.amount_total / 100 : 0
      const shipping = total - subtotal

      // Guardar el pedido en Sanity
      const orderResult = await createOrder({
        orderNumber,
        stripeSessionId: session.id,
        customerEmail,
        items: items.map((item: any) => ({
          name: item.name,
          quantity: item.quantity,
          price: item.price,
        })),
        subtotal,
        shipping,
        total,
        status: 'pending', // Estado inicial
        createdAt: new Date().toISOString(),
      })

      if (orderResult) {
        console.log(`✅ Pedido ${orderNumber} guardado exitosamente`)
      } else {
        console.error(`❌ Error guardando pedido ${orderNumber}`)
      }

      return NextResponse.json({
        received: true,
        orderNumber,
        message: 'Pedido procesado correctamente',
      })
    } catch (error) {
      console.error('❌ Error procesando pedido:', error)
      return NextResponse.json(
        { error: 'Error procesando el pedido' },
        { status: 500 }
      )
    }
  }

  // Manejar otros eventos (opcional - para el futuro)
  if (event.type === 'payment_intent.payment_failed') {
    console.log('⚠️ Pago fallido:', event.data.object.id)
  }

  if (event.type === 'charge.refunded') {
    console.log('💰 Reembolso recibido:', event.data.object.id)
  }

  // Responder a Stripe confirmando recepción
  return NextResponse.json({ received: true })
}
