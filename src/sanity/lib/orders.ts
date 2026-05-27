import { tokenClient } from './client'

// Tipo de pedido (para TypeScript)
export interface Order {
  _id?: string
  orderNumber: string
  stripeSessionId: string
  customerEmail: string
  items: Array<{
    name: string
    quantity: number
    price: number
  }>
  subtotal: number
  shipping: number
  total: number
  status: string
  createdAt: string
}

// Guardar un pedido en Sanity
export async function createOrder(orderData: Order): Promise<string | null> {
  try {
    const result = await tokenClient.create({
      _type: 'order',
      ...orderData,
    })

    console.log('Pedido guardado en Sanity:', result._id)
    return result._id
  } catch (error) {
    console.error('Error guardando pedido en Sanity:', error)
    return null
  }
}

// Obtener todos los pedidos
export async function getOrders(): Promise<Order[]> {
  try {
    const query = `*[_type == "order"] | order(createdAt desc) {
      _id,
      orderNumber,
      stripeSessionId,
      customerEmail,
      items,
      subtotal,
      shipping,
      total,
      status,
      createdAt
    }`

    const orders = await tokenClient.fetch(query)
    return orders
  } catch (error) {
    console.error('Error fetching orders:', error)
    return []
  }
}

// Actualizar estado de un pedido
export async function updateOrderStatus(orderId: string, newStatus: string): Promise<boolean> {
  try {
    await tokenClient.patch(orderId).set({ status: newStatus }).commit()
    console.log(`Pedido ${orderId} actualizado a ${newStatus}`)
    return true
  } catch (error) {
    console.error('Error actualizando estado del pedido:', error)
    return false
  }
}
