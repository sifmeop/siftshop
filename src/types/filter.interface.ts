export type ViewFilter = 'compact' | 'list'

export type SortFilter = 'rating' | 'expensive' | 'cheap'

export interface FilterState {
  minPrice: number
  maxPrice: number
  brands: string[]
  categories: string[]
  rating: string
}
