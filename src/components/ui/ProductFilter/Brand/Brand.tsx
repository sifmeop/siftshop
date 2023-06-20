import { FilterState } from '@/types/filter.interface'
import { Product } from '@/types/product.interface'
import { Checkbox, CheckboxGroup, Flex } from '@chakra-ui/react'

type Props = {
  products: Omit<Product<string>, 'details'>[]
  setFilter: React.MutableRefObject<FilterState>
}

type Brand = {
  [key: string]: number
}

const Brand = ({ products, setFilter }: Props) => {
  const brands: Brand = {}

  for (const product of products) {
    const brand = product.brand
    brands[brand] = (brands[brand] ?? 0) + 1
  }

  if (Object.keys(brands).length > 1) {
    return (
      <CheckboxGroup
        colorScheme='green'
        onChange={(value) =>
          (setFilter.current = {
            ...setFilter.current,
            brands: value as string[]
          })
        }>
        {Object.keys(brands).map((brand) => (
          <Flex key={brand} alignItems='center' justifyContent='space-between'>
            <Checkbox value={brand}>{brand}</Checkbox>
            {brands[brand]}
          </Flex>
        ))}
      </CheckboxGroup>
    )
  }

  const brand = Object.keys(brands)[0]

  return (
    <Flex alignItems='center' justifyContent='space-between'>
      <Checkbox defaultChecked isDisabled colorScheme='green'>
        {brand}
      </Checkbox>
      {brands[brand]}
    </Flex>
  )
}

export default Brand
