import { useCartStore } from '@/stores/cartStore'
import CartProductCounter from '@/ui/CartProductCounter/CartProductCounter'
import { API_URL } from '@/utils/constants'
import { currencyFormat } from '@/utils/currencyFormat'
import { Divider, IconButton, Text } from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { MdDeleteOutline } from 'react-icons/md'
import styles from './CartList.module.scss'

const CartList = () => {
  const { cart, removeFromCart } = useCartStore((state) => state)

  return (
    <ul className={styles.list}>
      {cart.map((item, index) => (
        <li key={item.product.id}>
          <div>
            <div className={styles.top}>
              <div className={styles.content}>
                <Link href={`/product/${item.product.id}`}>
                  <Image
                    width={100}
                    height={150}
                    className={styles.image}
                    src={`${API_URL}/${item.product.image[0] as string}`}
                    alt='item.product.name'
                    quality={100}
                  />
                </Link>
                <Link
                  href={`/product/${item.product.id}`}
                  className={styles.title}>
                  <Text>{item.product.name}</Text>
                </Link>
              </div>
              <IconButton
                aria-label='Delete from cart'
                icon={<MdDeleteOutline size='1.5rem' />}
                onClick={() => removeFromCart(item.product.id)}
              />
            </div>
            <div className={styles.counter}>
              <CartProductCounter item={item} />
              {currencyFormat(item.count * item.product.price)}
            </div>
          </div>
          {index !== cart.length - 1 && <Divider marginBlock='5' />}
        </li>
      ))}
    </ul>
  )
}

export default CartList
