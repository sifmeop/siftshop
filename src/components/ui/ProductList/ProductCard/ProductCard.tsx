import { ViewFilter } from '@/types/filter.interface'
import { Product, ProductDetail } from '@/types/product.interface'
import { API_URL } from '@/utils/constants'
import { currencyFormat } from '@/utils/currencyFormat'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
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
    <div
      className={clsx(styles.product, {
        ['flex-col']: view === 'compact'
      })}>
      <Link
        href={`/product/${product.id}`}
        className={clsx(styles.imageWrapper, {
          [styles.imageWrapperList]: view === 'list'
        })}>
        <Image
          style={{ height: view === 'compact' ? '18.75rem' : '10rem' }}
          width={500}
          height={500}
          src={`${API_URL}/${product.image[0]}`}
          alt={`Product image preview for ${product.name}`}
          placeholder='blur'
          blurDataURL={`${API_URL}/${product.image[0]}`}
        />
      </Link>
      <div className={styles.info}>
        <div className={styles.infoTop}>
          <span className={styles.rating}>
            {product.rating}
            <AiOutlineStar />
          </span>
          <span>{currencyFormat(product.price)}</span>
        </div>
        <h2 className={styles.name}>
          <Link href={`/product/${product.id}`}>{product.name}</Link>
        </h2>
      </div>
      <div
        className={clsx(styles.buttons, {
          [styles.buttonsList]: view === 'list',
          ['grid-rows-2']: view === 'list',
          ['grid-cols-2']: view === 'compact'
        })}>
        <CartButton product={product} view={view} />
        <WishlistButton product={product} />
      </div>
    </div>
  )
}

export default ProductCard
