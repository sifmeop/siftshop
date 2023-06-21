import { type FilterState } from '@/types/filter.interface'
import { Button } from '@chakra-ui/react'

interface Props {
  maxPrice: number
  setFilterState: React.Dispatch<React.SetStateAction<FilterState>>
  setFilterProducts: () => void
  onClose: () => void
}

const ResetButton = ({
  maxPrice,
  setFilterState,
  setFilterProducts,
  onClose
}: Props) => {
  return (
    <Button
      variant='outline'
      colorScheme='green'
      w='full'
      onClick={() => {
        setFilterState({
          minPrice: 0,
          maxPrice: maxPrice,
          brands: [],
          categories: [],
          rating: 'all'
        })
        setFilterProducts()
        onClose()
      }}>
      RESET
    </Button>
  )
}

export default ResetButton
