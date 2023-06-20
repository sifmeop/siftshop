import { useWishlistStore } from '@/stores/wishlistStore'
import PageTitle from '@/ui/PageTitle/PageTitle'
import ProductLink from '@/ui/ProductLink/ProductLink'
import Rate from '@/ui/Rate/Rate'
import SimpleCartButton from '@/ui/SimpleCartButton/SimpleCartButton'
import { API_URL } from '@/utils/constants'
import { currencyFormat } from '@/utils/currencyFormat'
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  HStack,
  Spacer,
  Text,
  VStack
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiSelectMultiple } from 'react-icons/bi'
import ComparingButton from './ComparingButton/ComparingButton'
import styles from './Wishlist.module.scss'

const Wishlist = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>([])

  const { wishlist, removeFewItems } = useWishlistStore((state) => state)

  if (wishlist.length === 0) {
    return (
      <VStack>
        <Text fontSize='2xl' fontWeight='bold'>
          Oops! Your wish list is empty
        </Text>
        <Text>Fill it with goods</Text>
        <Button as={Link} href='/catalog'>
          Go to the main page
        </Button>
      </VStack>
    )
  }

  return (
    <>
      <PageTitle>Wishlist</PageTitle>
      <Flex gap={3} mb={3}>
        {selectedProducts.length === wishlist.length ? (
          <Button
            leftIcon={<BiSelectMultiple size='1.5rem' />}
            onClick={() => setSelectedProducts([])}>
            Reset selection
          </Button>
        ) : (
          <Button
            leftIcon={<BiSelectMultiple size='1.5rem' />}
            onClick={() =>
              setSelectedProducts([...wishlist.map((item) => item.product.id)])
            }>
            Select all
          </Button>
        )}
        <Button
          leftIcon={<AiOutlineDelete size='1.5rem' />}
          onClick={() => removeFewItems(selectedProducts)}
          isDisabled={!selectedProducts.length}>
          Delete
        </Button>
      </Flex>
      <Box className={styles.wishlist}>
        <CheckboxGroup
          value={selectedProducts}
          onChange={(value) => setSelectedProducts(value as string[])}>
          {wishlist.map((item) => (
            <Box key={item.product.id} className={styles.product}>
              <Flex className='ml-auto w-fit flex-col items-center gap-2'>
                <Checkbox
                  value={item.product.id}
                  size='lg'
                  colorScheme='green'
                />
                <ComparingButton product={item.product} />
              </Flex>
              <ProductLink productId={item.product.id}>
                <Image
                  width={200}
                  height={200}
                  className={styles.image}
                  src={`${API_URL}/${item.product.image[0] as string}`}
                  alt={`Product image preview for ${item.product.name}`}
                  placeholder='blur'
                  blurDataURL={`${API_URL}/${item.product.image[0] as string}`}
                />
              </ProductLink>
              <ProductLink
                productId={item.product.id}
                className='hover:underline'>
                {item.product.name}
              </ProductLink>
              <Rate rating={item.product.rating} />
              <HStack>
                <Text className={styles.price}>
                  {currencyFormat(item.product.price)}
                </Text>
                <Spacer />
                <SimpleCartButton product={item.product} />
              </HStack>
            </Box>
          ))}
        </CheckboxGroup>
      </Box>
    </>
  )
}

export default Wishlist
