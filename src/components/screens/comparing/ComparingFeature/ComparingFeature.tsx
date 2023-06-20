import { useComparisonProducts } from '@/hooks/useComparisonProducts'
import { type Product, type ProductDetail } from '@/types/product.interface'
import { Box, Text } from '@chakra-ui/react'
import styles from './ComparingFeature.module.scss'

interface Props {
  comparing: Product<ProductDetail>[]
}

const ComparingFeature = ({ comparing }: Props) => {
  const { details } = useComparisonProducts(comparing)

  return (
    <Box>
      {details.map((product) => (
        <Box key={product.title} className={styles.box}>
          <Text className={styles.title}>{product.title}</Text>
          <Box className={styles.comparing}>
            {product.details.map((item) => (
              <Box
                key={`${item.product} ${item.detail}`}
                className={styles.info}>
                <Text className={styles.product}>{item.product}</Text>
                <Text fontWeight='medium'>{item.detail}</Text>
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  )
}

export default ComparingFeature
