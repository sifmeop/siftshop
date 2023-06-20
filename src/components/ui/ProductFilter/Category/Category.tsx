import { FilterState } from '@/types/filter.interface'
import { ProductWithoutDetails } from '@/types/product.interface'
import { replaceCategoryTitle } from '@/utils/replaceCategoryTitle'
import { Checkbox, CheckboxGroup, Flex } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'

interface Props {
  products: ProductWithoutDetails[]
  setFilter: React.MutableRefObject<FilterState>
}

type Category = {
  [key: string]: number
}

const Category = ({ products, setFilter }: Props) => {
  const pathname = usePathname()

  if (pathname === '/catalog') {
    const categories: Category = {}

    for (const product of products) {
      const category = product.category
      const replacedCategory = replaceCategoryTitle(category)
      categories[replacedCategory] = (categories[replacedCategory] ?? 0) + 1
    }

    return (
      <CheckboxGroup
        colorScheme='green'
        onChange={(value) =>
          (setFilter.current = {
            ...setFilter.current,
            categories: value as string[]
          })
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
        {replaceCategoryTitle(pathname.split('/')[2])}
      </Checkbox>
      {products.length}
    </Flex>
  )
}

export default Category
