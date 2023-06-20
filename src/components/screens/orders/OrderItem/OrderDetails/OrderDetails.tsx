import { type TypeOrder } from '@/types/order.interface'
import ProductLink from '@/ui/ProductLink/ProductLink'
import { API_URL } from '@/utils/constants'
import { currencyFormat } from '@/utils/currencyFormat'
import { Box, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import OrderPayment from '../OrderPayment/OrderPayment'
import styles from './OrderDetails.module.scss'

interface Props {
  order: TypeOrder
}

const OrderDetails = ({ order }: Props) => {
  return (
    <Flex gap={8} onClick={(e) => e.stopPropagation()}>
      <Box className={styles.summary}>
        <Text color='#797878' fontWeight='semibold'>
          Order information
        </Text>
        <Text>{order.order_number}</Text>
        <Text>Pickup from {order.delivery}</Text>
        <Text>{order.address}</Text>
      </Box>
      <Box className={styles.goods}>
        <Text color='#797878' fontWeight='semibold' mb={2}>
          Products
        </Text>
        <VStack spacing={4} align='stretch' mb={4}>
          {order.products.map((product) => (
            <Box key={product.name} className={styles.details}>
              <ProductLink
                productId={product.productId}
                className='hover:underline'>
                <HStack gap='2'>
                  <Image
                    width={56}
                    height={56}
                    src={`${API_URL}/${product.image}`}
                    alt={product.name}
                  />
                  <Text className='hover:underline'>{product.name}</Text>
                </HStack>
              </ProductLink>
              <VStack>
                <Text color='#797878'>Price</Text>
                <Text fontWeight='medium'>{currencyFormat(product.price)}</Text>
              </VStack>
              <VStack>
                <Text color='#797878'>Amount</Text>
                <Text fontWeight='medium'>{product.count}</Text>
              </VStack>
              <VStack>
                <Text color='#797878'>Total</Text>
                <Text fontWeight='medium'>{currencyFormat(product.total)}</Text>
              </VStack>
            </Box>
          ))}
        </VStack>
        <OrderPayment order={order} />
      </Box>
    </Flex>
  )
}

export default OrderDetails
