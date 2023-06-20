import Checkout from '@/screens/checkout/Checkout'
import { useCartStore } from '@/stores/cartStore'

const CheckoutPage = () => {
  const cart = useCartStore((state) => state.cart)

  // if (!cart.length)
  //   return (
  //     <Text fontSize='3xl' fontWeight='semibold' textAlign='center' mb={30}>
  //       {'empty'}
  //     </Text>
  //   )
  return <Checkout />
}

export default CheckoutPage
