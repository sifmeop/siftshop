import { HeadphoneDetail, Product } from '@/types/product.interface'
import { API_URL } from '@/utils/constants'
import axios from 'axios'

export const fetchHeadphones = {
  allHeadphones: async () => {
    try {
      const response = await axios.get<Product<HeadphoneDetail>[]>(
        `${API_URL}/headphones`
      )
      return response.data
    } catch (error) {
      console.log('Error fetch all headphones', error)
    }
  },
  headphoneById: async (id: string) => {
    try {
      const response = await axios.get<Product<HeadphoneDetail>>(
        `${API_URL}/headphones/${id}`
      )
      return response.data
    } catch (error) {
      console.log('Error fetch headphone by id', error)
    }
  },
  headphonesByBrand: async (brand: string) => {
    try {
      const response = await axios.get<Product<HeadphoneDetail>[]>(
        `${API_URL}/headphones/${brand}`
      )
      return response.data
    } catch (error) {
      console.log(`Error fetch headphones brand: ${brand}`, error)
    }
  }
}
