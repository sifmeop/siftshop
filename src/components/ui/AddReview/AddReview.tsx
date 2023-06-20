import {
  Button,
  ButtonGroup,
  Divider,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Textarea
} from '@chakra-ui/react'
import { useState } from 'react'
import AddReviewRating from './AddReview/AddReviewRating'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const AddReview = ({ isOpen, onClose }: Props) => {
  const [rating, setRating] = useState<number>(0)

  return (
    <Modal size='2xl' isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent color='black'>
        <ModalHeader paddingBlock={2}>{'Написати відгук'}</ModalHeader>
        <Divider />
        <ModalCloseButton />
        <ModalBody paddingBlock={4}>
          <AddReviewRating rating={rating} setRating={setRating} />
          <FormControl mb={2}>
            <FormLabel>Переваги</FormLabel>
            <Input focusBorderColor='green' />
          </FormControl>
          <FormControl>
            <FormLabel mb={2}>Недоліки</FormLabel>
            <Input focusBorderColor='green' />
          </FormControl>
          <FormControl>
            <FormLabel>Коментар</FormLabel>
            <Textarea focusBorderColor='green' placeholder='Коментар' />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup spacing={6} w='full'>
            <Button onClick={onClose} flex={1}>
              Скасувати
            </Button>
            <Button colorScheme='green' flex={1}>
              Залишити відгук
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AddReview
