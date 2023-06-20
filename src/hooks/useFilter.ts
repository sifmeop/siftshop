import { FilterState } from '@/types/filter.interface'
import { Product, ProductDetail } from '@/types/product.interface'
import { useRef } from 'react'

interface Props {
  products: Product<ProductDetail>[]
  maxPrice: number
  setFilterProducts: React.Dispatch<
    React.SetStateAction<Product<ProductDetail>[] | undefined>
  >
}

export const useFilter = ({ products, maxPrice, setFilterProducts }: Props) => {
  const filterRef = useRef<FilterState>({
    minPrice: 0,
    maxPrice: maxPrice,
    brands: [],
    categories: [],
    rating: 'all'
  })

  const applyFilters = () => {
    const { minPrice, maxPrice, brands, categories, rating } = filterRef.current

    window.scrollTo(0, 0)

    const filterCallback = (product: Product<ProductDetail>) =>
      product.price >= minPrice &&
      product.price <= maxPrice &&
      (rating === 'all'
        ? product.rating > 0 && product.rating <= 5
        : product.rating === Number(rating))

    let filteredList: Product<ProductDetail>[] = products.filter(filterCallback)

    if (!categories.length && !brands.length) {
      setFilterProducts(filteredList)
      return
    }

    if (brands.length) {
      filteredList = filteredList.filter((product) =>
        brands.every((brand) => brand === product.brand)
      )
    }

    if (categories.length) {
      filteredList = filteredList.filter((product) =>
        categories.includes(
          product.category[0].toUpperCase() + product.category.slice(1)
        )
      )
    }

    setFilterProducts(filteredList)
  }

  return { filterRef, applyFilters }
}
