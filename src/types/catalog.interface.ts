export interface Catalog {
  id: number
  name: string
  icon: string
  href: string
  brands: Omit<Catalog, 'brands'>[]
}
