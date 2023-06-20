import { Review } from '@/types/review.interface'
import Rate from '@/ui/Rate/Rate'
import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import Image from 'next/image'
import styles from './ReviewDetails.module.scss'

interface Props {
  review: Review
}

const ReviewDetails = ({ review }: Props) => {
  return (
    <Box>
      <Flex className={styles.review}>
        <Rate rating={review.rating} />
        <HStack>
          <Image width={30} height={30} src={review.photo} alt='' />
          <Text fontWeight='semibold'>{review.name}</Text>
        </HStack>
        <Text>{review.review}</Text>
        <Text fontWeight='semibold'>{'advantages'}:</Text>
        <Text>{review.advantages}</Text>
        <Text fontWeight='semibold'>{'disadvantages'}:</Text>
        <Text>{review.disadvantages}</Text>
      </Flex>
      <Box className={styles.answers}>
        {review.answers.map((item) => (
          <Box key={item.answer} className={styles.answer}>
            <HStack mb={2}>
              <Image width={30} height={30} src={item.photo} alt='' />
              <Text fontWeight='semibold'>{item.name}</Text>
            </HStack>
            <Text>{item.answer}</Text>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default ReviewDetails
