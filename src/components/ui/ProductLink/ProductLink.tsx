import Link from 'next/link'

interface Props {
  productId: string
  className?: string
  children: React.ReactNode
}

const ProductLink = ({ productId, className, children }: Props) => {
  return (
    <Link href={`/product/${productId}`} className={className}>
      {children}
    </Link>
  )
}

export default ProductLink
