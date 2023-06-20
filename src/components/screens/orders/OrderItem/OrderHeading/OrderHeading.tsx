import { type TypeOrder } from '@/types/order.interface'
import { API_URL } from '@/utils/constants'
import { currencyFormat } from '@/utils/currencyFormat'
import { Avatar, AvatarGroup, Box, HStack, Text } from '@chakra-ui/react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import styles from './OrderHeading.module.scss'

interface Props {
  order: TypeOrder
  isOpen: boolean
  onToggle: () => void
}

const OrderHeading = ({ order, isOpen, onToggle }: Props) => {
  const data = new Intl.DateTimeFormat().format(order.data)

  return (
    <Box className={styles.heading} onClick={onToggle}>
      <HStack gap={3}>
        <Box bg='#00a046' rounded='2xl' w={2} h='full' />
        <Box>
          <Text color='#797878'>{order.order_number}</Text>
          <Text fontWeight='medium'>from {data}</Text>
        </Box>
      </HStack>
      <Box>
        <Text color='#797878'>Order amount</Text>
        <Text fontWeight='medium'>{currencyFormat(order.total)}</Text>
      </Box>
      <Box>
        <AvatarGroup size='md' max={2}>
          {order.products.map((product) => (
            <Avatar
              key={product.name}
              name={product.name}
              src={`${API_URL}/${product.image}`}
            />
          ))}
        </AvatarGroup>
      </Box>
      <button>
        {isOpen ? (
          <MdKeyboardArrowUp size='2rem' />
        ) : (
          <MdKeyboardArrowDown size='2rem' />
        )}
      </button>
    </Box>
  )
}

export default OrderHeading
