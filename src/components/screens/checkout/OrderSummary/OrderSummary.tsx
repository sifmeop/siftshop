import { useCartStore } from '@/stores/cartStore'
import CartList from '@/ui/CartList/CartList'
import { delivery } from '@/utils/constants'
import { currencyFormat } from '@/utils/currencyFormat'
import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import SectionWithTitle from '../SectionWithTitle'
import styles from './OrderSummary.module.scss'

interface Props {
  billingWatch: string
}

const tax = 20

const formattedDate = new Date(
  new Date().getTime() + 604800000
).toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric'
})

const OrderSummary = ({ billingWatch }: Props) => {
  const total = useCartStore((state) => state.total)

  const shipping =
    billingWatch === 'novaposhta'
      ? delivery.novaposhta
      : billingWatch === 'ukrposhta'
      ? delivery.ukrposhta
      : 0

  return (
    <Box className={styles.orders}>
      <SectionWithTitle
        title='Order Summary'
        subTitle='Price can change depending on shipping method and taxes of your state.'>
        <CartList />
        <Box fontWeight='semibold' mb={6}>
          <Flex justifyContent='space-between'>
            <Text>Subtotal</Text>
            <Text>{currencyFormat(total)}</Text>
          </Flex>
          <Flex justifyContent='space-between'>
            <Text>Tax</Text>
            <Text>{`${tax}% ${currencyFormat((total / 100) * tax)}`}</Text>
          </Flex>
          <Flex justifyContent='space-between'>
            <Text>Shipping</Text>
            <Text>{currencyFormat(shipping)}</Text>
          </Flex>
        </Box>
        <HStack fontWeight='semibold' justifyContent='space-between'>
          <Flex direction='column'>
            <Text>Total Order</Text>
            <Text fontWeight='normal' color='#6A983C'>
              Guaranteed delivery day: {formattedDate}
            </Text>
          </Flex>
          <Text color='#6A983C' fontSize='xl'>
            {currencyFormat(total + shipping + (total / 100) * tax)}
          </Text>
        </HStack>
      </SectionWithTitle>
    </Box>
  )
}

export default OrderSummary
