import Wishlist from '@/screens/wishlist/Wishlist'
import Meta from '@/utils/Meta'

const WishlistPage = () => {
  return (
    <>
      <Meta
        title='Wishlist'
        description='Page with products you want to buy in the future'
      />
      <Wishlist />
    </>
  )
}

export default WishlistPage
