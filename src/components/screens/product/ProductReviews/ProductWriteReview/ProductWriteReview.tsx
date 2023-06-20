import { Button, HStack, Text, useDisclosure } from '@chakra-ui/react'

import AddReview from '@/ui/AddReview/AddReview'
import styles from './ProductWriteReview.module.scss'

const ProductWriteReview = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <HStack className={styles.box}>
        <Text>Залиште свій відгук про цей товар</Text>
        <Button size='lg' onClick={onOpen}>
          Написати відгук
        </Button>
      </HStack>
      <AddReview isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default ProductWriteReview
