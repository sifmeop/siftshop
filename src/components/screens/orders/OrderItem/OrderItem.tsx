import { type TypeOrder } from '@/types/order.interface'
import { Box, Divider, useDisclosure } from '@chakra-ui/react'
import OrderDetails from './OrderDetails/OrderDetails'
import OrderHeading from './OrderHeading/OrderHeading'
import styles from './OrderItem.module.scss'

interface Props {
  order: TypeOrder
}

const OrderItem = ({ order }: Props) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box className={styles.order}>
      <OrderHeading order={order} isOpen={isOpen} onToggle={onToggle} />
      {isOpen && (
        <>
          <Divider marginBlock='4' />
          <OrderDetails order={order} />
        </>
      )}
    </Box>
  )
}

export default OrderItem
