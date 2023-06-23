import { fetchProducts } from '@/service/fetchProducts'
import Loader from '@/ui/Loaders/Loader/Loader'
import PageTitle from '@/ui/PageTitle/PageTitle'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import Gallery from './Gallery/Gallery'
import styles from './Product.module.scss'
import ProductInfo from './ProductInfo/ProductInfo'
import RelatedProducts from './RelatedProducts/RelatedProducts'

const Product = () => {
  const { query } = useRouter()

  const { data, isLoading, isError } = useQuery(
    ['product', query.id],
    () => fetchProducts.productById(query.id as string),
    { enabled: !!query.id }
  )

  if (isLoading) return <Loader />

  if (isError) {
    return <PageTitle>Error fetch product by id</PageTitle>
  }

  return (
    data && (
      <>
        <div className={styles.product}>
          <Gallery name={data.name} images={data.image} />
          <ProductInfo info={data} />
        </div>
        <RelatedProducts category={data.category} exceptId={data.id} />
      </>
    )
  )
}

export default Product
