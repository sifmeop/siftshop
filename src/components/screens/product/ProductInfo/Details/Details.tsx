import { useProductDetails } from '@/hooks/useProductDetails'
import { type Product, type ProductDetail } from '@/types/product.interface'
import styles from './Details.module.scss'

interface Props {
  product: Product<ProductDetail>
}

const Details = ({ product }: Props) => {
  const details = useProductDetails(product)

  return (
    <>
      {details && (
        <div>
          <h2 className={styles.title}>Characteristics</h2>
          <dl className={styles.list}>
            {details.map(({ label, value }) => (
              <div key={label} className={styles.item}>
                <dt>
                  <span>{label}:</span>
                </dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      )}
    </>
  )
}

export default Details
