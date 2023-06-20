import { type Order, type OrderProduct } from '@prisma/client'

export type TypeOrder = Order & { products: OrderProduct[] }

export type OrderMutation = Order & {
  products: Omit<OrderProduct, 'id' | 'orderId'>[]
}
