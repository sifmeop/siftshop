import { Product, ProductDetail } from '@/types/product.interface'
import { currencyFormat } from '@/utils/currencyFormat'
import CartButton from './CartButton/CartButton'
import ComparingButton from './ComparingButton/ComparingButton'
import Details from './Details/Details'
import styles from './ProductInfo.module.scss'
import WishlistButton from './WishlistButton/WishlistButton'

interface Props {
  info: Product<ProductDetail> | undefined
}

const ProductInfo = ({ info }: Props) => {
  return info ? (
    <div className={styles.info}>
      <h1 className={styles.name}>{info.name}</h1>
      <div className={styles.priceWrapper}>
        <p className={styles.price}>{currencyFormat(info.price)}</p>
        <CartButton product={info} />
        <ComparingButton product={info} className={styles.btnOther} />
        <WishlistButton product={info} className={styles.btnOther} />
      </div>
      <Details product={info} />
    </div>
  ) : null
}

export default ProductInfo
