import Checkout from '@/screens/checkout/Checkout'
import { useCartStore } from '@/stores/cartStore'
import { Text } from '@chakra-ui/react'

const CheckoutPage = () => {
  const cart = useCartStore((state) => state.cart)

  if (!cart.length)
    return (
      <Text fontSize='3xl' fontWeight='semibold' textAlign='center' mb={30}>
        Empty
      </Text>
    )

  return <Checkout />
}

export default CheckoutPage
