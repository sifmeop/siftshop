import { fetchProducts } from '@/service/fetchProducts'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import Gallery from './Gallery/Gallery'
import styles from './Product.module.scss'
import ProductInfo from './ProductInfo/ProductInfo'
import RelatedProducts from './RelatedProducts/RelatedProducts'

const Product = () => {
  const { query } = useRouter()

  const { data, isLoading } = useQuery(['product', query.id], () =>
    fetchProducts.productById(query.id as string)
  )

  if (isLoading) return <div>Loading...</div>

  return data ? (
    <>
      <div className={styles.product}>
        <Gallery name={data.name} images={data.image} />
        <ProductInfo info={data} />
      </div>
      {/* <ProductReviews /> */}
      <RelatedProducts category={data.category} exceptId={data.id} />
    </>
  ) : null
}

export default Product
