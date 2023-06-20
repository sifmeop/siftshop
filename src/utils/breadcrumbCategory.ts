import { ProductCategory } from '@/types/product.interface'
import { BsLaptop } from 'react-icons/bs'
import { FiHeadphones, FiSmartphone } from 'react-icons/fi'
import { HiQuestionMarkCircle } from 'react-icons/hi'
import { IconType } from 'react-icons/lib'

export const breadcrumbCategory = (brand: ProductCategory): IconType => {
  if (brand === 'phones') {
    return FiSmartphone
  }

  if (brand === 'headphones') {
    return FiHeadphones
  }

  if (brand === 'laptops') {
    return BsLaptop
  }

  return HiQuestionMarkCircle
}
