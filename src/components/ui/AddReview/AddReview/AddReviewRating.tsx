import { HStack, Text, VStack } from '@chakra-ui/react'
import clsx from 'clsx'
import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import styles from './AddReviewRating.module.scss'

interface Props {
  rating: number
  setRating: (rating: number) => void
}

const labels = ['Поганий', 'Так собі', 'Нормальний', 'Добрий', 'Чудовий']

const AddReviewRating = ({ rating, setRating }: Props) => {
  const [hover, setHover] = useState<number>(0)

  const start = [...(Array(5).fill('*') as string[])].map(
    (_, index) => index + 1
  )

  return (
    <HStack className={styles.box}>
      {start.map((rate) => (
        <VStack key={rate} flex={1}>
          <FaStar
            size='3rem'
            className={clsx(styles.rating, {
              [styles.rated as string]: rate <= (hover || rating)
            })}
            onClick={() => setRating(rate)}
            onMouseEnter={() => setHover(rate)}
            onMouseLeave={() => setHover(rating)}
          />
          <Text>{labels[rate - 1]}</Text>
        </VStack>
      ))}
    </HStack>
  )
}

export default AddReviewRating
