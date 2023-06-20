import { useComparingStore } from '@/stores/comparingStore'
import { type Product, type ProductDetail } from '@/types/product.interface'
import { BsCheckCircleFill } from 'react-icons/bs'
import { RiScalesLine } from 'react-icons/ri'

interface Props {
  product: Product<ProductDetail>
}

const ComparingButton = ({ product }: Props) => {
  const { categories, addToComparing, removeFromComparing } = useComparingStore(
    (state) => state
  )

  const isInComparing = categories.some((item) =>
    item.products.some((subItem) => subItem.id === product.id)
  )

  return isInComparing ? (
    <button
      className='relative'
      onClick={() => removeFromComparing(product.category, product.id)}>
      <BsCheckCircleFill
        color='#6A983C'
        className='absolute -right-1 -top-1 rounded-full bg-white'
      />
      <RiScalesLine size='1.7rem' />
    </button>
  ) : (
    <button onClick={() => addToComparing(product)}>
      <RiScalesLine size='1.7rem' />
    </button>
  )
}

export default ComparingButton
