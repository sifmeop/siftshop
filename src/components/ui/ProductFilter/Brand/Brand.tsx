import { type FilterState } from '@/types/filter.interface'
import { type Product } from '@/types/product.interface'
import { Checkbox, CheckboxGroup, Flex } from '@chakra-ui/react'

type Props = {
  products: Omit<Product<string>, 'details'>[]
  value: string[]
  setFilter: React.Dispatch<React.SetStateAction<FilterState>>
}

type Brand = {
  [key: string]: number
}

const Brand = ({ products, value, setFilter }: Props) => {
  const brands: Brand = {}

  for (const product of products) {
    const brand = product.brand
    brands[brand] = (brands[brand] ?? 0) + 1
  }

  if (Object.keys(brands).length > 1) {
    return (
      <CheckboxGroup
        colorScheme='green'
        value={value}
        onChange={(value) =>
          setFilter((prev) => ({
            ...prev,
            brands: value as string[]
          }))
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
      {brands[brand as string]}
    </Flex>
  )
}

export default Brand
