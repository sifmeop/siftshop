import { useCartStore } from '@/stores/cartStore'
import { type Product, type ProductDetail } from '@/types/product.interface'
import { TbShoppingCart, TbShoppingCartOff } from 'react-icons/tb'
import styles from './SimpleCartButton.module.scss'

interface Props {
  product: Product<ProductDetail>
}

const SimpleCartButton = ({ product }: Props) => {
  const { cart, addToCart, removeFromCart } = useCartStore((state) => state)

  const cartItem = cart.find((item) => item.product.id === product.id)

  const isInCart = !!cartItem

  return (
    <>
      {isInCart ? (
        <button
          className={styles.button}
          onClick={() => removeFromCart(product.id)}>
          <TbShoppingCartOff size='2rem' color='#6A983C' />
        </button>
      ) : (
        <button className={styles.button} onClick={() => addToCart(product)}>
          <TbShoppingCart size='2rem' color='#6A983C' />
        </button>
      )}
    </>
  )
}

export default SimpleCartButton
