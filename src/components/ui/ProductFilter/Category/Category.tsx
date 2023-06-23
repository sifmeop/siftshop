import { type FilterState } from '@/types/filter.interface'
import { type ProductWithoutDetails } from '@/types/product.interface'
import { replaceCategoryTitle } from '@/utils/replaceCategoryTitle'
import { Checkbox, CheckboxGroup, Flex } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'

interface Props {
  products: ProductWithoutDetails[]
  value: string[]
  setFilter: React.Dispatch<React.SetStateAction<FilterState>>
}

type Category = {
  [key: string]: number
}

const Category = ({ products, value, setFilter }: Props) => {
  const pathname = usePathname()

  if (pathname === '/catalog') {
    const categories: Category = {}

    for (const product of products) {
      const category = product.category
      const replacedCategory = replaceCategoryTitle(category)
      categories[replacedCategory as string] =
        (categories[replacedCategory as string] ?? 0) + 1
    }

    return (
      <CheckboxGroup
        colorScheme='green'
        value={value}
        onChange={(value) =>
          setFilter((prev) => ({
            ...prev,
            categories: value as string[]
          }))
        }>
        {Object.keys(categories).map((category) => (
          <Flex
            key={category}
            alignItems='center'
            justifyContent='space-between'>
            <Checkbox value={category}>{category}</Checkbox>
            {categories[category]}
          </Flex>
        ))}
      </CheckboxGroup>
    )
  }

  return (
    <Flex alignItems='center' justifyContent='space-between'>
      <Checkbox defaultChecked isDisabled colorScheme='green'>
        {replaceCategoryTitle(pathname.split('/')[2] as string)}
      </Checkbox>
      {products.length}
    </Flex>
  )
}

export default Category
