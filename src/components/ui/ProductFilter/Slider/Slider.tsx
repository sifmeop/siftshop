import { type FilterState } from '@/types/filter.interface'
import {
  Flex,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack
} from '@chakra-ui/react'
import './Slider.module.scss'

interface Props {
  maxPrice: number
  filter: FilterState
  setFilter: React.Dispatch<React.SetStateAction<FilterState>>
}

const Slider = ({ maxPrice, filter, setFilter }: Props) => {
  return (
    <>
      <RangeSlider
        aria-label={['min', 'max']}
        colorScheme='green'
        min={0}
        max={maxPrice}
        value={[filter.minPrice, filter.maxPrice]}
        onChange={(value) =>
          setFilter((prev) => ({
            ...prev,
            minPrice: value[0] as number,
            maxPrice: value[1] as number
          }))
        }>
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <Flex gap={3} justify='space-between'>
        <Input
          type='number'
          focusBorderColor='green'
          value={filter.minPrice}
          onChange={(e) =>
            setFilter((prev) => ({
              ...prev,
              minPrice: Number(e.target.value)
            }))
          }
        />
        <Input
          type='number'
          focusBorderColor='green'
          value={filter.maxPrice}
          onChange={(e) => {
            console.log(e.target.value)
            setFilter((prev) => ({
              ...prev,
              maxPrice: Number(e.target.value)
            }))
          }}
        />
      </Flex>
    </>
  )
}

export default Slider
