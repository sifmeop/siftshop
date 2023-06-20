import {
  MainPageProduct,
  Product,
  ProductDetail
} from '@/types/product.interface'
import { API_URL } from '@/utils/constants'
import axios from 'axios'

export const fetchProducts = {
  allProducts: async () => {
    try {
      const response = await axios.get<Product<ProductDetail>[]>(
        `${API_URL}/product`
      )
      return response.data
    } catch (error) {
      console.log('Error fetch all products', error)
    }
  },
  productById: async (id: string) => {
    try {
      const response = await axios.get<Product<ProductDetail>>(
        `${API_URL}/product/${id}`
      )
      return response.data
    } catch (error) {
      console.log('Error fetch product by id', error)
    }
  },
  mainPageProducts: async () => {
    try {
      const response = await axios.get<MainPageProduct>(`${API_URL}/main-page`)
      return response.data
    } catch (error) {
      console.log('Error fetch main page products', error)
    }
  },
  productsByCatalog: async (category: string | string[] | undefined) => {
    try {
      const response = await axios.get<Product<ProductDetail>[]>(
        `${API_URL}/${category}`
      )
      return response.data
    } catch (error) {
      console.log(`Error fetch category products: ${category}`, error)
    }
  },
  productsByBrand: async (category: string, brand: string) => {
    try {
      const response = await axios.get<Product<ProductDetail>[]>(
        `${API_URL}/${category}/${brand}`
      )
      return response.data
    } catch (error) {
      console.log(`Error fetch category products: ${category}`, error)
    }
  },
  productsByCatalogWithExcept: async (category: string, except: string) => {
    try {
      const response = await axios.get<Product<ProductDetail>[]>(
        `${API_URL}/${category}/related/${except}`
      )
      return response.data
    } catch (error) {
      console.log(`Error fetch category products: ${category}`, error)
    }
  }
}
