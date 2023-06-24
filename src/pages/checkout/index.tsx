import Checkout from '@/screens/checkout/Checkout'
import { useCartStore } from '@/stores/cartStore'
import Meta from '@/utils/Meta'
import { Text } from '@chakra-ui/react'

const CheckoutPage = () => {
  const cart = useCartStore((state) => state.cart)

  return (
    <>
      <Meta title='Checkout' description='Product order page' />
      {cart.length > 0 ? (
        <Checkout />
      ) : (
        <Text fontSize='3xl' fontWeight='semibold' textAlign='center' mb={30}>
          Empty
        </Text>
      )}
    </>
  )
}

export default CheckoutPage
