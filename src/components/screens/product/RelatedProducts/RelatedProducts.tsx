import { fetchProducts } from '@/service/fetchProducts'
import PageTitle from '@/ui/PageTitle/PageTitle'
import ProductList from '@/ui/ProductList/ProductList'
import { useQuery } from '@tanstack/react-query'

interface Props {
  exceptId: string
  category: string
}

const RelatedProducts = ({ category, exceptId }: Props) => {
  const { data: products, isLoading } = useQuery(['rated', category], () =>
    fetchProducts.productsByCatalogWithExcept(category, exceptId)
  )

  if (isLoading) return <div>Loading...</div>

  // if (isLoading) return <div>Loading...</div>

  if (!products?.length) return <div>Loading...</div>

  return (
    <>
      <PageTitle>You may also be interested</PageTitle>
      <ProductList products={products} isFilter={false} />
    </>
  )
}

export default RelatedProducts
