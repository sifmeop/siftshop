import { type Product, type ProductDetail } from '@/types/product.interface'
import { create } from 'zustand'

export interface Categories {
  category: string
  products: Product<ProductDetail>[]
}

interface ComparingStore {
  categories: Categories[]
  addToComparing: (product: Product<ProductDetail>) => void
  removeFromComparing: (category: string, id: string) => void
  removeCategory: (category: string) => void
}

export const useComparingStore = create<ComparingStore>((set) => ({
  categories: [],
  addToComparing: (product) =>
    set((state) => {
      const { categories } = state

      const checkCategory = categories.find(
        (item) => item.category === product.category
      )

      if (!!checkCategory) {
        const updatedCategory = categories.map((item) =>
          item.category === checkCategory.category
            ? { ...item, products: [...item.products, product] }
            : item
        )

        return { categories: updatedCategory }
      }

      const newCategory: Categories = {
        category: product.category,
        products: [product]
      }

      return {
        categories: [...categories, newCategory]
      }
    }),
  removeFromComparing: (category, id) =>
    set((state) => {
      const { categories } = state

      const findCategory = categories.find((item) => item.category === category)

      if (!findCategory) return state

      const filterProducts = findCategory.products.filter(
        (product) => product.id !== id
      )

      if (filterProducts.length === 0) {
        const updatedComparing = categories.filter(
          (item) => item.category !== category
        )

        console.log(updatedComparing)

        return { categories: updatedComparing }
      }

      const updatedCategory = { ...findCategory, products: filterProducts }

      const updatedComparing = categories.filter(
        (item) => item.category !== category
      )

      return { categories: [...updatedComparing, updatedCategory] }
    }),
  removeCategory: (category) =>
    set((state) => {
      const { categories } = state

      const updatedComparing = categories.filter(
        (item) => item.category !== category
      )

      console.log(updatedComparing)

      return { categories: updatedComparing }
    })
}))
