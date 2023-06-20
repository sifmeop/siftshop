import { currencyFormat } from '@/utils/currencyFormat'
import { Flex, Spacer, Text, VStack } from '@chakra-ui/react'
import { type Order } from '@prisma/client'

interface Props {
  order: Order
}

const OrderPayment = ({ order }: Props) => {
  return (
    <VStack gap={2} align='stretch'>
      <Flex>
        <Text color='#797878'>Delivery:</Text>
        <Spacer />
        <Text fontWeight='medium'>
          {Number.isInteger(order.delivery_count)
            ? currencyFormat(order.delivery_count)
            : order.delivery_count}
        </Text>
      </Flex>
      <Flex>
        <Text color='#797878'>Total cost:</Text>
        <Spacer />
        <Text fontWeight='medium'>{currencyFormat(order.total)}</Text>
      </Flex>
    </VStack>
  )
}

export default OrderPayment
