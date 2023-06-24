import { type IconType } from 'react-icons/lib'

export interface Catalog {
  id: number
  name: string
  icon: string | IconType
  href: string
  brands: Omit<Catalog, 'brands'>[]
}
