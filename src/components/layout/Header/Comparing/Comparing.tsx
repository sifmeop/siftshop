import { useCatalogStore } from '@/stores/catalogStore'
import { useComparingStore } from '@/stores/comparingStore'
import {
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure
} from '@chakra-ui/react'
import Link from 'next/link'
import { AiOutlineDelete } from 'react-icons/ai'
import { RiScalesLine } from 'react-icons/ri'

const Comparing = () => {
  const onCloseCatalog = useCatalogStore((state) => state.onClose)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { categories, removeCategory } = useComparingStore((state) => state)

  return (
    <>
      <button className='header__icon-button' onClick={onOpen}>
        <RiScalesLine size='2.2rem' color='white' />
        {categories.length > 0 && (
          <span className='icon__count'>{categories.length}</span>
        )}
      </button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color='black'>
          <ModalHeader paddingBlock='2'>List of comparisons</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody paddingBlock='4'>
            {categories.length > 0 ? (
              categories.map((item) => (
                <Flex
                  key={item.category}
                  className='items-center justify-between'>
                  <Link
                    href={`/comparing?category=${item.category}`}
                    className='hover:text-primary hover:underline'
                    onClick={() => {
                      onClose()
                      onCloseCatalog()
                    }}>
                    {(item.category[0] as string).toUpperCase() +
                      item.category.slice(1)}{' '}
                    {item.products.length}
                  </Link>
                  <button
                    className='rounded-lg p-1.5 transition-colors hover:bg-black/10'
                    onClick={() => removeCategory(item.category)}>
                    <AiOutlineDelete size='1.5rem' />
                  </button>
                </Flex>
              ))
            ) : (
              <VStack textAlign='center'>
                <Text fontSize='2xl' fontWeight='semibold'>
                  There are no products to compare
                </Text>
                <Text>
                  Add products to compare characteristics and choose the product
                  that suits you best
                </Text>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Comparing
