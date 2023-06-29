import { type SortFilter as TypeValue } from '@/types/filter.interface'
import { Select } from '@chakra-ui/react'
import { memo } from 'react'

interface Props {
  setSortFilter: (value: TypeValue) => void
}

const options = [
  { value: 'rating', label: 'Behind the rating' },
  { value: 'cheap', label: 'From expensive to cheap' },
  { value: 'expensive', label: 'From cheap to expensive' }
]

const SortFilter = ({ setSortFilter }: Props) => {
  console.log('render')
  return (
    <Select
      size='lg'
      maxWidth={300}
      width='full'
      backgroundColor='white'
      fontFamily='inherit'
      focusBorderColor='green'
      onChange={(e) => setSortFilter(e.target.value as TypeValue)}>
      {options.map((option) => (
        <option
          key={option.value}
          style={{ fontFamily: 'sans-serif' }}
          value={option.value}>
          {option.label}
        </option>
      ))}
    </Select>
  )
}

export default memo(SortFilter)
