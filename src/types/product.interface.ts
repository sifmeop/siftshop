export interface Product<T> {
  id: string
  name: string
  brand: string
  category: 'phones' | 'headphones'
  price: number
  image: string[]
  rating: number
  details: T
}

export interface PhoneDetail {
  screen_diagonal: number
  display_resolution: string
  matrix_type: string
  ram: number
  rom: number
  front_camera: string
  main_camera: string
  cpu: string
  battery: number
  color: string
}

export interface HeadphoneDetail {
  headphone_type: string
  connection_type: string
  interface_connection: string[]
  microphone: 'Yes' | 'No'
  construction_microphone: string
  color: string
}

export interface LaptopDetail {
  screen_diagonal: string
  screen_type: string
  screen_refresh_rate: string
  resolution: string
  cpu: string
  os: string
  ram: string
  rom: string
  battery: string
  color: string
}

export interface MainPageProduct {
  bestProducts: Product<ProductDetail>[]
  tickerSlider: Product<ProductDetail>[]
}

export type ProductDetail = PhoneDetail | HeadphoneDetail | LaptopDetail

export type ProductWithoutDetails = Omit<Product<unknown>, 'details'>

export type ProductCategory = 'phones' | 'headphones' | 'laptops'

export interface ComparisonDetail {
  title: string
  details: Detail[]
}

interface Detail {
  product: string
  detail: string | string[] | number
}
