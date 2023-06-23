import { fetchProducts } from '@/service/fetchProducts'
import { type Product, type ProductDetail } from '@/types/product.interface'
import Loader from '@/ui/Loaders/Loader/Loader'
import PageTitle from '@/ui/PageTitle/PageTitle'
import ProductFilter from '@/ui/ProductFilter/ProductFilter'
import ProductList from '@/ui/ProductList/ProductList'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

const Catalog = () => {
  const {
    data: products,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts.allProducts
  })

  const [filterProducts, setFilterProducts] = useState<
    Product<ProductDetail>[] | undefined
  >([])

  useEffect(() => {
    setFilterProducts(products)
  }, [products])

  if (isLoading) return <Loader />

  if (isError) {
    return <PageTitle>Error fetch products</PageTitle>
  }

  if (!products?.length) return null

  return (
    <ProductFilter products={products} setFilterProducts={setFilterProducts}>
      <ProductList
        products={filterProducts}
        breadcrumbs={[{ title: 'Catalog' }]}
      />
    </ProductFilter>
  )
}

export default Catalog
