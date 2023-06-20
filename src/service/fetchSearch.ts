import { Product, ProductDetail } from '@/types/product.interface'
import { API_URL } from '@/utils/constants'
import axios from 'axios'

type SearchValue = string | string[] | undefined

export const fetchSearch = async (value: SearchValue) => {
  try {
    const response = await axios.get<Product<ProductDetail>[]>(
      `${API_URL}/search/${value}`
    )
    return response.data
  } catch (error) {
    console.log(`Error fetch search value: ${value}`, error)
  }
}
