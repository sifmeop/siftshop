import { type FilterState } from '@/types/filter.interface'
import { type Product, type ProductDetail } from '@/types/product.interface'
import Brand from '../Brand/Brand'
import Category from '../Category/Category'
import Rating from '../Rating/Rating'
import Slider from '../Slider/Slider'
import styles from './SidebarFilter.module.scss'

interface Props {
  products: Product<ProductDetail>[]
  maxPrice: number
  filterState: FilterState
  setFilterState: React.Dispatch<React.SetStateAction<FilterState>>
}

const SidebarFilter = ({
  products,
  maxPrice,
  filterState,
  setFilterState
}: Props) => {
  return (
    <>
      <div>
        <h3 className={styles.subTitle}>Slider</h3>
        <Slider
          maxPrice={maxPrice}
          filter={filterState}
          setFilter={setFilterState}
        />
      </div>
      <div>
        <h3 className={styles.subTitle}>Categories</h3>
        <Category
          products={products}
          value={filterState.categories}
          setFilter={setFilterState}
        />
      </div>
      <div>
        <h3 className={styles.subTitle}>Brands</h3>
        <Brand
          products={products}
          value={filterState.brands}
          setFilter={setFilterState}
        />
      </div>
      <div>
        <h3 className={styles.subTitle}>Rating</h3>
        <Rating
          products={products}
          value={filterState.rating}
          setFilter={setFilterState}
        />
      </div>
    </>
  )
}

export default SidebarFilter
