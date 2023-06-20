import { useWishlistStore } from '@/stores/wishlistStore'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { LuHeart } from 'react-icons/lu'

interface Props {
  onCloseNav: () => void
}

const Wishlist = ({ onCloseNav }: Props) => {
  const { status } = useSession()

  const { wishlist } = useWishlistStore((state) => state)

  // return status === 'authenticated' ? (
  //   <Link
  //     href='/profile/wishlist'
  //     className='header__icon-button'
  //     onClick={onClose}>
  //     <LuHeart size='2.2rem' />
  //     {wishlist.length > 0 && (
  //       <span className='icon__count'>{wishlist.length}</span>
  //     )}
  //   </Link>
  // ) : null

  return (
    <Link
      href='/profile/wishlist'
      className='header__icon-button'
      onClick={onCloseNav}>
      <LuHeart size='2.2rem' />
      {wishlist.length > 0 && (
        <span className='icon__count'>{wishlist.length}</span>
      )}
    </Link>
  )
}

export default Wishlist
