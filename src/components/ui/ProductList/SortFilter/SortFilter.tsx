import { type SortFilter as TypeValue } from '@/types/filter.interface'

interface Props {
  setSortFilter: (value: TypeValue) => void
}

import { Select } from '@chakra-ui/react'

const SortFilter = ({ setSortFilter }: Props) => {
  return (
    <Select
      size='lg'
      maxWidth={300}
      width='full'
      backgroundColor='white'
      fontFamily='inherit'
      onChange={(e) => setSortFilter(e.target.value as TypeValue)}>
      <option style={{ fontFamily: 'sans-serif' }} value='rating'>
        Behind the rating
      </option>
      <option style={{ fontFamily: 'sans-serif' }} value='cheap'>
        From expensive to cheap
      </option>
      <option style={{ fontFamily: 'sans-serif' }} value='expensive'>
        From cheap to expensive
      </option>
    </Select>
  )
}

export default SortFilter
