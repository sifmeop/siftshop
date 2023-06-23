import { fetchProducts } from '@/service/fetchProducts'
import { type Product, type ProductDetail } from '@/types/product.interface'
import ProductFilter from '@/ui/ProductFilter/ProductFilter'
import ProductList from '@/ui/ProductList/ProductList'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { MdDashboard } from 'react-icons/md'

const DynamicCatalogPage = () => {
  const router = useRouter()

  const category = router.query?.catalog as string

  const { data } = useQuery({
    queryKey: ['category', category],
    queryFn: () => fetchProducts.productsByCatalog(category)
  })

  const [filterProducts, setFilterProducts] = useState<
    Product<ProductDetail>[] | undefined
  >([])

  useEffect(() => {
    setFilterProducts(data)
  }, [data])

  if (!data) return

  return (
    <ProductFilter products={data} setFilterProducts={setFilterProducts}>
      <ProductList
        products={filterProducts}
        breadcrumbs={[
          { title: 'Catalog', link: '/catalog', icon: MdDashboard },
          {
            title: `${
              (category[0] as string).toUpperCase() + category.slice(1)
            }`
          }
        ]}
      />
    </ProductFilter>
  )
}

export default DynamicCatalogPage
