import { type Product, type ProductDetail } from '@/types/product.interface'
import { currencyFormat } from '@/utils/currencyFormat'
import { Flex, Heading } from '@chakra-ui/react'
import CartButton from './CartButton/CartButton'
import ComparingButton from './ComparingButton/ComparingButton'
import Details from './Details/Details'
import styles from './ProductInfo.module.scss'
import WishlistButton from './WishlistButton/WishlistButton'

interface Props {
  info: Product<ProductDetail> | undefined
}

const ProductInfo = ({ info }: Props) => {
  return (
    info && (
      <div className={styles.info}>
        <Heading as='h1' size='xl'>
          {info.name}
        </Heading>
        <Flex flexWrap='wrap' gap={4}>
          <Heading as='h2' size='lg'>
            {currencyFormat(info.price)}
          </Heading>
          <Flex flexWrap='wrap' gap={4}>
            <CartButton product={info} />
            <ComparingButton
              product={info}
              className={styles.btnOther as string}
            />
            <WishlistButton
              product={info}
              className={styles.btnOther as string}
            />
          </Flex>
        </Flex>
        <Details product={info} />
      </div>
    )
  )
}

export default ProductInfo
