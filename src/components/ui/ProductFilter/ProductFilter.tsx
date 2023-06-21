import { useFilter } from '@/hooks/useFilter'
import { type Product, type ProductDetail } from '@/types/product.interface'
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Grid,
  GridItem,
  VStack,
  useDisclosure
} from '@chakra-ui/react'
import { useMemo } from 'react'
import { FiFilter } from 'react-icons/fi'
import { useMediaQuery } from 'usehooks-ts'
import ApplyButton from './ApplyButton/ApplyButton'
import styles from './ProductFilter.module.scss'
import ResetButton from './ResetButton/ResetButton'
import SidebarFilter from './SidebarFilter/SidebarFilter'

interface Props {
  products: Product<ProductDetail>[]
  children: React.ReactNode
  setFilterProducts: React.Dispatch<
    React.SetStateAction<Product<ProductDetail>[] | undefined>
  >
}

const ProductFilter = ({ products, children, setFilterProducts }: Props) => {
  const isMatches = useMediaQuery('(max-width: 768px)')

  const { isOpen, onOpen, onClose } = useDisclosure()

  const maxPrice = useMemo(
    () => Math.max(...products.map((product) => product.price)),
    [products]
  )

  const { filterState, setFilterState, applyFilters } = useFilter({
    products,
    maxPrice,
    setFilterProducts
  })

  return (
    <>
      {isMatches ? (
        <>
          <Button
            colorScheme='green'
            leftIcon={<FiFilter />}
            mb={2}
            onClick={onOpen}>
            Filters
          </Button>
          <Drawer isOpen={isOpen} placement='left' size='sm' onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Filters</DrawerHeader>
              <DrawerBody>
                <SidebarFilter
                  products={products}
                  maxPrice={maxPrice}
                  filterState={filterState}
                  setFilterState={setFilterState}
                />
              </DrawerBody>
              <DrawerFooter>
                <Grid
                  w='full'
                  templateColumns='repeat(4, 1fr)'
                  templateRows='repeat(2, 1fr)'
                  gap={4}>
                  <GridItem gridArea='1 / 1 / 2 / 3'>
                    <ResetButton
                      maxPrice={maxPrice}
                      setFilterState={setFilterState}
                      setFilterProducts={() => setFilterProducts(products)}
                      onClose={onClose}
                    />
                  </GridItem>
                  <GridItem gridArea='1 / 3 / 2 / 5'>
                    <ApplyButton
                      applyFilters={applyFilters}
                      onClose={onClose}
                    />
                  </GridItem>
                  <GridItem
                    gridArea='2 / 1 / 3 / 5'
                    as={Button}
                    onClick={onClose}>
                    CLOSE
                  </GridItem>
                </Grid>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
          {children}
        </>
      ) : (
        <div className={styles.wrapper}>
          <Box w='18.75rem'>
            <div className={styles.filter}>
              <SidebarFilter
                products={products}
                maxPrice={maxPrice}
                filterState={filterState}
                setFilterState={setFilterState}
              />
            </div>
            <VStack gap={3} align='stretch'>
              <ApplyButton applyFilters={applyFilters} />
              <ResetButton
                maxPrice={maxPrice}
                setFilterState={setFilterState}
                setFilterProducts={() => setFilterProducts(products)}
                onClose={onClose}
              />
            </VStack>
          </Box>
          {children}
        </div>
      )}
    </>
  )
}

export default ProductFilter
