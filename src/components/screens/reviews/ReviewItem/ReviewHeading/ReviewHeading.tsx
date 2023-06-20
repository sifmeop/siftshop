import AddReview from '@/ui/AddReview/AddReview'
import ProductLink from '@/ui/ProductLink/ProductLink'
import { Button, HStack, Spacer, useDisclosure } from '@chakra-ui/react'
import clsx from 'clsx'
import Image from 'next/image'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'

interface Props {
  review: any
  isOpen: boolean
  onToggle: () => void
}

const ReviewHeading = ({ review, isOpen, onToggle }: Props) => {
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal
  } = useDisclosure()

  return (
    <HStack
      className={clsx('gap-3', { ['cursor-pointer']: review.isRated })}
      onClick={onToggle}>
      <HStack gap={3}>
        <Image width={40} height={40} src={review.product.picture} alt='' />
        <ProductLink productId='' className='hover:underline'>
          {review.product.name}
        </ProductLink>
      </HStack>
      <Spacer />
      {review.isRated ? (
        <button>
          {isOpen ? (
            <MdKeyboardArrowUp size='2rem' />
          ) : (
            <MdKeyboardArrowDown size='2rem' />
          )}
        </button>
      ) : (
        <>
          <Button onClick={onOpenModal}>Залишити відгук</Button>
          <AddReview isOpen={isOpenModal} onClose={onCloseModal} />
        </>
      )}
    </HStack>
  )
}

export default ReviewHeading
