import { type FilterState } from '@/types/filter.interface'
import { type ProductWithoutDetails } from '@/types/product.interface'
import { Flex, HStack, Radio, RadioGroup } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'

interface Props {
  products: ProductWithoutDetails[]
  value: string
  setFilter: React.Dispatch<React.SetStateAction<FilterState>>
}

type Rating = {
  [key: string]: number
}

const Rating = ({ products, value, setFilter }: Props) => {
  const rating: Rating = {}

  for (const product of products) {
    rating[product.rating] = (rating[product.rating] ?? 0) + 1
  }

  return (
    <RadioGroup
      value={value}
      onChange={(nextValue) =>
        setFilter((prev) => ({
          ...prev,
          rating: nextValue
        }))
      }>
      <Flex justifyContent='space-between'>
        <Radio value='all' colorScheme='green' defaultChecked>
          All
        </Radio>
        {products.length}
      </Flex>
      {[...(Array(5) as undefined[])].map((_, index) => (
        <Flex key={index + 1} justifyContent='space-between'>
          <Radio
            value={(index + 1).toString()}
            colorScheme='green'
            isDisabled={!rating[index + 1]}>
            <HStack>
              {[...(Array(index + 1) as number[])].map((_, i) => (
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
