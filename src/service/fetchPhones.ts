import {
  type HeadphoneDetail,
  type PhoneDetail,
  type Product
} from '@/types/product.interface'
import { API_URL } from '@/utils/constants'
import axios from 'axios'

export const fetchPhones = {
  allPhones: async () => {
    try {
      const response = await axios.get<Product<PhoneDetail>[]>(
        `${API_URL}/phones`
      )
      return response.data
    } catch (error) {
      console.log('Error fetch all phones', error)
    }
  },
  phoneById: async (id: string) => {
    try {
      const response = await axios.get<Product<PhoneDetail>>(
        `${API_URL}/phones/${id}`
      )
      return response.data
    } catch (error) {
      console.log('Error fetch phone by id', error)
    }
  },
  phonesByBrand: async (brand: string) => {
    try {
      const response = await axios.get<Product<HeadphoneDetail>[]>(
        `${API_URL}/phones/${brand}`
      )
      return response.data
    } catch (error) {
      console.log(`Error fetch phones brand: ${brand}`, error)
    }
  }
}
