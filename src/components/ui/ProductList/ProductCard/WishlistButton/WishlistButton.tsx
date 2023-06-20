import { useWishlistStore } from '@/stores/wishlistStore'
import { Product, ProductDetail } from '@/types/product.interface'
import { TbHeart, TbHeartOff } from 'react-icons/tb'

interface Props {
  product: Product<ProductDetail>
}

const WishlistButton = ({ product }: Props) => {
  const { wishlist, addToWishlist, removeFromWishlist } = useWishlistStore(
    (state) => state
  )

  const isInWishlist = wishlist.some((item) => item.product.id === product.id)

  return isInWishlist ? (
    <button onClick={() => removeFromWishlist(product.id)}>
      <TbHeartOff size='1.5rem' />
    </button>
  ) : (
    <button onClick={() => addToWishlist(product)}>
      <TbHeart size='1.5rem' />
    </button>
  )
}

export default WishlistButton
