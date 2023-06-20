import { fetchProducts } from '@/service/fetchProducts'
import {
  Product,
  ProductCategory,
  ProductDetail
} from '@/types/product.interface'
import ProductFilter from '@/ui/ProductFilter/ProductFilter'
import ProductList from '@/ui/ProductList/ProductList'
import { breadcrumbCategory } from '@/utils/breadcrumbCategory'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { MdDashboard } from 'react-icons/md'

const DynamicBrandPage = () => {
  const { query } = useRouter()

  const catalog = query.catalog as string
  const brand = query.brand as string

  const { data } = useQuery({
    queryKey: ['brand', `${catalog}/${brand}`],
    queryFn: () => fetchProducts.productsByBrand(catalog, brand)
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
            title: `${catalog[0].toUpperCase() + catalog.slice(1)}`,
            link: `/catalog/${catalog}`,
            icon: breadcrumbCategory(catalog as ProductCategory)
          },
          { title: `${brand[0].toUpperCase() + brand.slice(1)}` }
        ]}
      />
    </ProductFilter>
  )
}

export default DynamicBrandPage
