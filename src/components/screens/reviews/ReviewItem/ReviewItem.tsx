import { Review } from '@/types/review.interface'
import { Box, Divider, useDisclosure } from '@chakra-ui/react'
import ReviewDetails from './ReviewDetails/ReviewDetails'
import ReviewHeading from './ReviewHeading/ReviewHeading'
import styles from './ReviewItem.module.scss'

interface Props {
  review: Review
}

const ReviewItem = ({ review }: Props) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box className={styles.review}>
      <ReviewHeading review={review} isOpen={isOpen} onToggle={onToggle} />
      {review.isRated && isOpen && (
        <>
          <Divider marginBlock={4} />
          <ReviewDetails review={review} />
        </>
      )}
    </Box>
  )
}

export default ReviewItem
