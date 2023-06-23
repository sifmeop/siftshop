import { type Product, type ProductDetail } from '@/types/product.interface'
import { currencyFormat } from '@/utils/currencyFormat'

export const useComparisonProducts = (products: Product<ProductDetail>[]) => {
  const detailTitles = Object.keys(products[0]?.details as object).map(
    (detail) => detail
  )

  detailTitles.push('price')

  const details = detailTitles.map((title, index) => ({
    title: replaceTitle(title),
    details: products.map(({ name, details, price }) => {
      const editedDetails = { ...details, price: currencyFormat(price) }
      return {
        product: name,
        detail: editedDetails[detailTitles[index] as keyof ProductDetail]
      }
    })
  }))

  return { details }
}

const replaceTitle = (title: string): string => {
  if (title.length === 3) {
    return title.toUpperCase()
  }

  const substrings = title.split('_')

  if (substrings.length === 2) {
    return `${(substrings[0] as string)[0]?.toUpperCase() as string}${
      substrings[0]?.slice(1) as string
    } ${substrings[1] as string}`
  }

  return `${title[0]?.toUpperCase() as string}${title.slice(1)}`
}
