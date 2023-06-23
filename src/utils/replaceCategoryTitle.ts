import { categories } from './constants'

export const replaceCategoryTitle = (title: string) => {
  const findIndex = categories.findIndex((item) => item.category === title)

  return categories[findIndex]?.title
}
