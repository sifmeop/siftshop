import { type ViewFilter } from '@/types/filter.interface'
import { type Product, type ProductDetail } from '@/types/product.interface'
import ProductLink from '@/ui/ProductLink/ProductLink'
import { API_URL } from '@/utils/constants'
import { currencyFormat } from '@/utils/currencyFormat'
import { Box, Flex, HStack } from '@chakra-ui/react'
import clsx from 'clsx'
import Image from 'next/image'
import { AiOutlineStar } from 'react-icons/ai'
import CartButton from './CartButton/CartButton'
import styles from './ProductCard.module.scss'
import WishlistButton from './WishlistButton/WishlistButton'

interface Props {
  product: Product<ProductDetail>
  view?: ViewFilter
}

const ProductCard = ({ product, view = 'compact' }: Props) => {
  return (
    <Flex
      className={clsx(styles.product, {
        ['flex-col']: view === 'compact'
      })}>
      <ProductLink
        productId={product.id}
        className={clsx(styles.imageWrapper, {
          [styles.imageWrapperList as string]: view === 'list'
        })}>
        <Image
          style={{ height: view === 'compact' ? '18.75rem' : '10rem' }}
          width={500}
          height={500}
          src={`${API_URL}/${product.image[0] as string}`}
          alt={`Product image preview for ${product.name}`}
          placeholder='blur'
          blurDataURL={`${API_URL}/${product.image[0] as string}`}
        />
      </ProductLink>
      <Box flex={1} padding='1rem 1.5rem'>
        <HStack className={styles.infoTop}>
          <span className={styles.rating}>
            {product.rating}
            <AiOutlineStar />
          </span>
          <span>{currencyFormat(product.price)}</span>
        </HStack>
        <ProductLink productId={product.id} className='hover:underline'>
          {product.name}
        </ProductLink>
      </Box>
      <Box
        className={clsx(styles.buttons, {
          [styles.buttonsList as string]: view === 'list',
          ['grid-rows-2']: view === 'list',
          ['grid-cols-2']: view === 'compact'
        })}>
        <CartButton product={product} view={view} />
        <WishlistButton product={product} />
      </Box>
    </Flex>
  )
}

export default ProductCard
