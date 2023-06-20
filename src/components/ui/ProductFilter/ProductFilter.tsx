import { useFilter } from '@/hooks/useFilter'
import { Product, ProductDetail } from '@/types/product.interface'
import clsx from 'clsx'
import Brand from './Brand/Brand'
import Category from './Category/Category'
import styles from './ProductFilter.module.scss'
import Rating from './Rating/Rating'
import Slider from './Slider/Slider'

interface Props {
  products: Product<ProductDetail>[]
  children: React.ReactNode
  setFilterProducts: React.Dispatch<
    React.SetStateAction<Product<ProductDetail>[] | undefined>
  >
}

const ProductFilter = ({ products, children, setFilterProducts }: Props) => {
  const maxPrice = Math.max(...products.map((product) => product.price))

  const { filterRef, applyFilters } = useFilter({
    products,
    maxPrice,
    setFilterProducts
  })

  return (
    <>
      <div className={styles.wrapper}>
        <div className='w-[18.75rem]'>
          <div className={styles.inner}>
            <div className={styles.filter}>
              <div>
                <h3 className={styles.subTitle}>Slider</h3>
                <Slider maxPrice={maxPrice} setFilter={filterRef} />
              </div>
              <div>
                <h3 className={styles.subTitle}>Categories</h3>
                <Category products={products} setFilter={filterRef} />
              </div>
              <div>
                <h3 className={styles.subTitle}>Brands</h3>
                <Brand products={products} setFilter={filterRef} />
              </div>
              <div>
                <h3 className={styles.subTitle}>Rating</h3>
                <Rating products={products} setFilter={filterRef} />
              </div>
            </div>
            <button
              className={clsx(styles.button, 'mb-2')}
              onClick={applyFilters}>
              APPLY
            </button>
          </div>
        </div>
        {children}
      </div>
    </>
  )
}

export default ProductFilter
