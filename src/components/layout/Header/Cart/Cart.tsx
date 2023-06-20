import { useCartStore } from '@/stores/cartStore'
import CartList from '@/ui/CartList/CartList'
import { currencyFormat } from '@/utils/currencyFormat'
import {
  Box,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import Link from 'next/link'
import { MdOutlineShoppingCart } from 'react-icons/md'

interface Props {
  onCloseNav: () => void
}

const Cart = ({ onCloseNav }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { cart, total } = useCartStore((state) => state)

  return (
    <>
      <button className='header__icon-button' onClick={onOpen}>
        <MdOutlineShoppingCart size='2.2rem' />
        {cart.length > 0 && (
          <span className='icon__count'>
            {cart.length > 10 ? '10+' : cart.length}
          </span>
        )}
      </button>
      <Modal size='4xl' isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent color='black'>
          <ModalHeader paddingBlock='2'>Cart</ModalHeader>
          <Divider />
          <ModalCloseButton />
          <ModalBody paddingBlock='4'>
            {cart.length > 0 ? (
              <CartList />
            ) : (
              <Box textAlign='center'>
                <Text fontSize='2xl' fontWeight='semibold'>
                  The basket is empty
                </Text>
                <Text>But it&apos;s never too late to fix it :)</Text>
              </Box>
            )}
          </ModalBody>
          {cart.length > 0 && (
            <ModalFooter>
              <Stack
                direction='row'
                width='full'
                justifyContent='space-between'>
                <Button variant='outline' onClick={onClose}>
                  Continue shopping
                </Button>
                <Stack direction='row' alignItems='center' spacing={30}>
                  <Text fontSize='2xl' fontWeight='semibold'>
                    {currencyFormat(total)}
                  </Text>
                  <Button
                    colorScheme='green'
                    variant='link'
                    onClick={() => {
                      onClose()
                      onCloseNav()
                    }}>
                    <Link href='/checkout'>To order</Link>
                  </Button>
                </Stack>
              </Stack>
            </ModalFooter>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}

export default Cart
