import { fetchProducts } from '@/service/fetchProducts'
import Loader from '@/ui/Loaders/Loader/Loader'
import PageTitle from '@/ui/PageTitle/PageTitle'
import ProductLink from '@/ui/ProductLink/ProductLink'
import { API_URL } from '@/utils/constants'
import { currencyFormat } from '@/utils/currencyFormat'
import { Box, Text, VStack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import styles from './Home.module.scss'

const Home = () => {
  const {
    data: products,
    isLoading,
    isError
  } = useQuery({
    queryKey: ['home-page-products'],
    queryFn: fetchProducts.mainPageProducts
  })

  if (isLoading) {
    return <Loader />
  }

  if (isError) {
    return <PageTitle>Error fetch products</PageTitle>
  }

  if (!products?.bestProducts.length || !products.tickerSlider.length) {
    return <PageTitle>Error fetch products</PageTitle>
  }

  return (
    <>
      <PageTitle>{'Top 3 popular products'.toUpperCase()}</PageTitle>
      <Box className={styles.products}>
        {products?.bestProducts.map((product, index) => (
          <Box
            key={product.id}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            className={styles[`productItem${index + 1}`]}>
            <ProductLink productId={product.id} className='block h-full'>
              <VStack className={styles.productInner}>
                <Box w='full'>
                  <Text className={styles.name}>{product.name}</Text>
                  <Text className={styles.price}>
                    {currencyFormat(product.price)}
                  </Text>
                </Box>
                <Image
                  width={1000}
                  height={1000}
                  src={`${API_URL}/${product.image[0] as string}`}
                  alt={`Product ${product.name}`}
                  quality={100}
                />
              </VStack>
            </ProductLink>
          </Box>
        ))}
      </Box>
      <PageTitle>
        {'You may be looking for these products'.toUpperCase()}
      </PageTitle>
      <Marquee className={styles.marquee}>
        {products?.tickerSlider.map((product) => (
          <ProductLink
            key={product.id}
            productId={product.id}
            className={styles.marqueeItem}>
            <Image
              width={100}
              height={100}
              src={`${API_URL}/${product.image[0] as string}`}
              alt={`Product ${product.name}`}
            />
            <Text className={styles.productName}>{product.name}</Text>
          </ProductLink>
        ))}
      </Marquee>
    </>
  )
}

export default Home
