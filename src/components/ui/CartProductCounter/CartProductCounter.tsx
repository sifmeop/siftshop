import { Cart, useCartStore } from '@/stores/cartStore'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'

interface Props {
  item: Cart
}

const CartProductCounter = ({ item }: Props) => {
  const { incrementProduct, decrementProduct } = useCartStore((state) => state)

  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      value: item.count,
      min: 0,
      precision: 0
    })

  const inc = getIncrementButtonProps()
  const dec = getDecrementButtonProps()
  const input = getInputProps()

  return (
    <HStack maxW='10rem'>
      <Button {...inc} onClick={() => incrementProduct(item.product.id)}>
        +
      </Button>
      <Input {...input} textAlign='center' />
      <Button {...dec} onClick={() => decrementProduct(item.product.id)}>
        -
      </Button>
    </HStack>
  )
}

export default CartProductCounter
