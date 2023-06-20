import {
  type HeadphoneDetail,
  type LaptopDetail,
  type PhoneDetail,
  type Product,
  type ProductDetail
} from '@/types/product.interface'

interface Detail {
  label: string
  value: string | string[] | number
}
type Products = Product<ProductDetail> | undefined
type ReturnType = Detail[] | undefined

export const useProductDetails = (products: Products): ReturnType => {
  if (!products) return undefined

  if (products.category === 'phones') {
    const {
      screen_diagonal,
      display_resolution,
      matrix_type,
      ram,
      rom,
      front_camera,
      main_camera,
      cpu,
      battery,
      color
    } = products.details as PhoneDetail

    const details: Detail[] = [
      { label: 'Screen diagonal', value: screen_diagonal },
      {
        label: 'Display resolution',
        value: display_resolution
      },
      { label: 'Matrix type', value: matrix_type },
      { label: 'RAM', value: ram },
      { label: 'ROM', value: rom },
      { label: 'Front camera', value: front_camera },
      { label: 'Main camera', value: main_camera },
      { label: 'CPU', value: cpu },
      { label: 'Battery', value: `${battery} mA/h` },
      { label: 'Color', value: color }
    ]

    return details
  }

  if (products.category === 'headphones') {
    const {
      headphone_type,
      connection_type,
      interface_connection,
      microphone,
      construction_microphone,
      color
    } = products.details as HeadphoneDetail

    const details: Detail[] = [
      { label: 'Headphone type', value: headphone_type },
      { label: 'Connection type', value: connection_type },
      {
        label: 'Interface connection',
        value: interface_connection.join(', ')
      },
      { label: 'Microphone', value: microphone },
      {
        label: 'Construction microphone',
        value: construction_microphone
      },
      { label: 'Color', value: color }
    ]

    return details
  }

  if (products.category === 'laptops') {
    const {
      screen_diagonal,
      screen_type,
      screen_refresh_rate,
      resolution,
      cpu,
      os,
      ram,
      rom,
      battery,
      color
    } = products.details as LaptopDetail

    const details: Detail[] = [
      { label: 'Screen diagonal', value: screen_diagonal },
      { label: 'Screen type', value: screen_type },
      {
        label: 'Screen refresh_rate',
        value: screen_refresh_rate
      },
      { label: 'Resolution', value: resolution },
      {
        label: 'CPU',
        value: cpu
      },
      { label: 'OS', value: os },
      { label: 'RAM', value: ram },
      { label: 'ROM', value: rom },
      { label: 'Battery', value: battery },
      { label: 'Color', value: color }
    ]

    return details
  }
}
