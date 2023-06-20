import { type Categories } from '@/stores/comparingStore'
import ProductLink from '@/ui/ProductLink/ProductLink'
import SimpleCartButton from '@/ui/SimpleCartButton/SimpleCartButton'
import { API_URL } from '@/utils/constants'
import { currencyFormat } from '@/utils/currencyFormat'
import { Box, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import styles from './ComparingProducts.module.scss'
import PopupActions from './PopupActions/PopupActions'

interface Props {
  comparing: Categories
}

const ComparingProducts = ({ comparing }: Props) => {
  return (
    <>
      {comparing.products.length === 1 && (
        <Text className='comparing__message'>
          There are not enough products to compare
        </Text>
      )}
      {comparing.products.length > 1 && (
        <Text className='comparing__message'>Maximum of 6 products</Text>
      )}
      <Box className={styles.comparing}>
        {comparing.products.slice(0, 6).map((product) => (
          <Flex key={product.id} className={styles.product}>
            <ProductLink productId={product.id}>
              <Image
                width={100}
                height={100}
                src={`${API_URL}/${product.image[0] as string}`}
                alt={`Product image preview for ${product.name}`}
                placeholder='blur'
                blurDataURL={`${API_URL}/${product.image[0] as string}`}
              />
            </ProductLink>
            <Box className={styles.info}>
              <Flex justifyContent='space-between'>
                <ProductLink productId={product.id} className='hover:underline'>
                  {product.name}
                </ProductLink>
                <PopupActions product={product} />
              </Flex>
              <Flex justifyContent='space-between'>
                <Text fontWeight='semibold'>
                  {currencyFormat(product.price)}
                </Text>
                <SimpleCartButton product={product} />
              </Flex>
            </Box>
          </Flex>
        ))}
      </Box>
    </>
  )
}

export default ComparingProducts
