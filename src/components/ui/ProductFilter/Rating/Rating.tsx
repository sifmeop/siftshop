import { FilterState } from '@/types/filter.interface'
import { ProductWithoutDetails } from '@/types/product.interface'
import { Flex, HStack, Radio, RadioGroup } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'

interface Props {
  products: ProductWithoutDetails[]
  setFilter: React.MutableRefObject<FilterState>
}

type Rating = {
  [key: string]: number
}

const Rating = ({ products, setFilter }: Props) => {
  const rating: Rating = {}

  for (const product of products) {
    rating[product.rating] = (rating[product.rating] ?? 0) + 1
  }

  return (
    <RadioGroup
      onChange={(nextValue) =>
        (setFilter.current = {
          ...setFilter.current,
          rating: nextValue
        })
      }>
      <Flex justifyContent='space-between'>
        <Radio value='all' colorScheme='green' defaultChecked>
          All
        </Radio>
        {products.length}
      </Flex>
      {[...Array(5)].map((_, index) => (
        <Flex key={index + 1} justifyContent='space-between'>
          <Radio
            value={(index + 1).toString()}
            colorScheme='green'
            isDisabled={!rating[index + 1]}>
            <HStack>
              {[...Array(index + 1)].map((_, i) => (
                <FaStar key={i + 1} size='1.5rem' color='#ffa900' />
              ))}
            </HStack>
          </Radio>
          {rating[index + 1] ?? 0}
        </Flex>
      ))}
    </RadioGroup>
  )
}

export default Rating
