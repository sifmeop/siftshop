import { HStack, Text } from '@chakra-ui/react'
import { FaStar } from 'react-icons/fa'

interface Props {
  rating: number
}

const Rate = ({ rating }: Props) => {
  const stars = [...(Array(Math.floor(rating)).fill('*') as string[])].map(
    (_, index) => index + 1
  )

  return (
    <HStack>
      <HStack gap={0}>
        {stars.map((star) => (
          <FaStar key={star} color='#ffa900' />
        ))}
      </HStack>
      <Text>{rating}</Text>
    </HStack>
  )
}

export default Rate
