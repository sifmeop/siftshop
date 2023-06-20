import { Product, ProductDetail } from '@/types/product.interface'
import { create } from 'zustand'

export interface Wishlist {
  product: Product<ProductDetail>
  addedDate: number
}

interface WishlistStore {
  wishlist: Wishlist[]
  total: number
  addToWishlist: (product: Product<ProductDetail>) => void
  removeFromWishlist: (id: string) => void
  removeFewItems: (ids: string[]) => void
}

export const useWishlistStore = create<WishlistStore>((set) => ({
  wishlist: [],
  total: 0,
  addToWishlist: (product) =>
    set((state) => {
      const { wishlist, total } = state

      const updatedCart = [...wishlist, { product, addedDate: Date.now() }]
      const updatedTotal = total + product.price

      return { wishlist: updatedCart, total: updatedTotal }
    }),
  removeFromWishlist: (id) =>
    set((state) => {
      const { wishlist, total } = state

      const wishlistItemToRemove = wishlist.find(
        (item) => item.product.id === id
      )

      if (!wishlistItemToRemove) return { wishlist, total }

      const updatedCart = wishlist.filter(
        (item) => item.product.id !== wishlistItemToRemove.product.id
      )
      const updatedTotal = total + wishlistItemToRemove.product.price

      return { wishlist: updatedCart, total: updatedTotal }
    }),
  removeFewItems: (ids) =>
    set((state) => {
      const { wishlist, total } = state

      const updatedCart = wishlist.filter(
        (item) => !ids.includes(item.product.id)
      )
      const updatedTotal = total

      return { wishlist: updatedCart, total: updatedTotal }
    })
}))
