import { useCartStore } from '@/stores/cartStore'
import { Product, ProductDetail } from '@/types/product.interface'
import { Box } from '@chakra-ui/react'
import clsx from 'clsx'
import { TbShoppingCart } from 'react-icons/tb'
import styles from './CartButton.module.scss'

interface Props {
  product: Product<ProductDetail>
  view?: string
}

const CartButton = ({ product, view }: Props) => {
  const { cart, addToCart, incrementProduct, decrementProduct } = useCartStore(
    (state) => state
  )

  const cartItem = cart.find((item) => item.product.id === product.id)

  const isInCart = !!cartItem

  return (
    <>
      {isInCart ? (
        <div
          className={clsx(styles.optionalChoice, {
            [styles.optionalChoiceList]: view === 'list'
          })}>
          <button onClick={() => incrementProduct(product.id)}>+</button>
          <Box className='product__count'>{cartItem?.count}</Box>
          <button onClick={() => decrementProduct(product.id)}>-</button>
        </div>
      ) : (
        <button onClick={() => addToCart(product)}>
          <TbShoppingCart size='1.5rem' />
        </button>
      )}
    </>
  )
}

export default CartButton
