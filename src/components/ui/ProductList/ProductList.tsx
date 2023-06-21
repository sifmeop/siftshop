import { type Breadcrumb as TypeBreadcrumb } from '@/types/breadcrumb.interface'
import {
  type SortFilter as ISortFilter,
  type ViewFilter
} from '@/types/filter.interface'
import { type Product, type ProductDetail } from '@/types/product.interface'
import clsx from 'clsx'
import { useMemo, useState } from 'react'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import ProductCard from './ProductCard/ProductCard'
import styles from './ProductList.module.scss'
import SortFilter from './SortFilter/SortFilter'
import ToggleView from './ToggleView/ToggleView'

interface Props {
  products: Product<ProductDetail>[] | undefined
  breadcrumbs?: TypeBreadcrumb[]
  isFilter?: boolean
}

const ProductList = ({ products, breadcrumbs, isFilter = true }: Props) => {
  const [toggleView, setToggleView] = useState<ViewFilter>('compact')
  const [sortFilter, setSortFilter] = useState<ISortFilter>('rating')

  const sortedProducts = useMemo(() => {
    if (!products) return []

    return [...products].sort((a, b) => {
      switch (sortFilter) {
        case 'rating':
          return b.rating - a.rating
        case 'expensive':
          return a.price - b.price
        case 'cheap':
          return b.price - a.price
      }
    })
  }, [products, sortFilter])

  if (!sortedProducts?.length) return null

  return (
    <div>
      {isFilter && (
        <div className={styles.top}>
          {breadcrumbs && <Breadcrumb items={breadcrumbs} />}
          <div className={styles.filters}>
            <SortFilter setSortFilter={setSortFilter} />
            <ToggleView toggleView={toggleView} setToggleView={setToggleView} />
          </div>
        </div>
      )}
      <div
        className={clsx(styles.products, {
          [styles.productsList]: toggleView === 'list'
        })}>
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} view={toggleView} />
        ))}
      </div>
    </div>
  )
}

export default ProductList
