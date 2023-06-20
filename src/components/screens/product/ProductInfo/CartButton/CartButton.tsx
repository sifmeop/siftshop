import { useCartStore } from '@/stores/cartStore'
import { type Product, type ProductDetail } from '@/types/product.interface'
import { Box } from '@chakra-ui/react'
import { TbShoppingCart } from 'react-icons/tb'
import styles from './CartButton.module.scss'

interface Props {
  product: Product<ProductDetail>
}

const CartButton = ({ product }: Props) => {
  const { cart, addToCart, incrementProduct, decrementProduct } = useCartStore(
    (state) => state
  )

  const isOnCart = cart.find((item) => item.product.id === product.id)

  return (
    <>
      {isOnCart ? (
        <div className={styles.buttons}>
          <button onClick={() => incrementProduct(product.id)}>+</button>
          <Box className='product__count'>{isOnCart.count}</Box>
          <button onClick={() => decrementProduct(product.id)}>-</button>
        </div>
      ) : (
        <button className={styles.btnBuy} onClick={() => addToCart(product)}>
          <TbShoppingCart size='2rem' />
          Add to cart
        </button>
      )}
    </>
  )
}

export default CartButton
