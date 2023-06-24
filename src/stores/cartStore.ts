import { type Product, type ProductDetail } from '@/types/product.interface'
import { create } from 'zustand'

export interface Cart {
  product: Product<ProductDetail>
  count: number
}

interface CartStore {
  cart: Cart[]
  total: number
  addToCart: (product: Product<ProductDetail>) => void
  removeFromCart: (id: string) => void
  incrementProduct: (id: string) => void
  decrementProduct: (id: string) => void
  clearCart: () => void
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  total: 0,
  addToCart: (product) =>
    set((state) => {
      const { cart } = state

      const updatedCart = [...cart, { product, count: 1 }]

      return { cart: updatedCart, total: state.total + product.price }
    }),
  removeFromCart: (id) =>
    set((state) => {
      const { cart, total } = state
      const cartItemToRemove = cart.find((item) => item.product.id === id)
      if (!cartItemToRemove) return { cart, total }

      const count = cartItemToRemove.count
      const price = cartItemToRemove.product.price

      const filter = cart.filter((item) => item.product.id !== id)

      return { cart: filter, total: total - count * price }
    }),
  incrementProduct: (id) =>
    set((state) => {
      const { cart, total } = state

      const cartItem = state.cart.find((item) => item.product.id === id)

      const updatedCart = cart.map((item) =>
        item.product.id === cartItem!.product.id
          ? { ...item, count: (item.count += 1) }
          : item
      )

      return {
        cart: updatedCart,
        total: total + cartItem!.product.price
      }
    }),
  decrementProduct: (id) =>
    set((state) => {
      const { cart, total } = state
      const cartItem = cart.find((item) => item.product.id === id)

      if (!cartItem) {
        return state
      }

      let updatedCart

      if (cartItem.count === 1) {
        updatedCart = cart.filter((item) => item.product.id !== id)
      } else {
        updatedCart = cart.map((item) =>
          item.product.id === id ? { ...item, count: item.count - 1 } : item
        )
      }

      return { cart: updatedCart, total: total - cartItem.product.price }
    }),
  clearCart: () => set({ cart: [], total: 0 })
}))
