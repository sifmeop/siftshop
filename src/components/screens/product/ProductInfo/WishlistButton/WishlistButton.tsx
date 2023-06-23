import { useWishlistStore } from '@/stores/wishlistStore'
import { type Product, type ProductDetail } from '@/types/product.interface'
import { TbHeart, TbHeartOff } from 'react-icons/tb'

interface Props {
  product: Product<ProductDetail>
  className: string
}

const WishlistButton = ({ className, product }: Props) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlistStore(
    (state) => state
  )

  const isInWishlist = wishlist.some((item) => item.product.id === product.id)

  return isInWishlist ? (
    <button
      className={className}
      onClick={() => removeFromWishlist(product.id)}>
      <TbHeartOff size='2rem' />
    </button>
  ) : (
    <button className={className} onClick={() => addToWishlist(product)}>
      <TbHeart size='2rem' />
    </button>
  )
}

export default WishlistButton
