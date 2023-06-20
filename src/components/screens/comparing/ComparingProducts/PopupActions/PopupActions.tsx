import { useComparingStore } from '@/stores/comparingStore'
import { useWishlistStore } from '@/stores/wishlistStore'
import { type Product, type ProductDetail } from '@/types/product.interface'
import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger
} from '@chakra-ui/react'
import { AiOutlineDelete } from 'react-icons/ai'
import { HiDotsVertical } from 'react-icons/hi'
import { TbHeart, TbHeartOff } from 'react-icons/tb'

interface Props {
  product: Product<ProductDetail>
}

const PopupActions = ({ product }: Props) => {
  const removeFromComparing = useComparingStore(
    (state) => state.removeFromComparing
  )

  const { wishlist, addToWishlist, removeFromWishlist } = useWishlistStore(
    (state) => state
  )

  const isInWishlist = wishlist.some((item) => item.product.id === product.id)

  return (
    <Popover>
      <PopoverTrigger>
        <button className='product__submenu-icon'>
          <HiDotsVertical size='1.25rem' />
        </button>
      </PopoverTrigger>
      <PopoverContent w='fit-content'>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          <Flex direction='column' gap={2}>
            <Button
              justifyContent='flex-start'
              leftIcon={<AiOutlineDelete size='1.25rem' />}
              onClick={() => removeFromComparing(product.category, product.id)}>
              Видалити
            </Button>
            {isInWishlist ? (
              <Button
                justifyContent='flex-start'
                leftIcon={<TbHeartOff size='1.25rem' />}
                onClick={() => removeFromWishlist(product.id)}>
                Видалити
              </Button>
            ) : (
              <Button
                justifyContent='flex-start'
                leftIcon={<TbHeart size='1.25rem' />}
                onClick={() => addToWishlist(product)}>
                У список бажань
              </Button>
            )}
          </Flex>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default PopupActions
