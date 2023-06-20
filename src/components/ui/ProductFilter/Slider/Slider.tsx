import { FilterState } from '@/types/filter.interface'
import { useRef } from 'react'
import MultiRangeSlider from '../../MultiRangeSlider/MultiRangeSlider'
import './Slider.module.scss'

interface Props {
  maxPrice: number
  setFilter: React.MutableRefObject<FilterState>
}

const Slider = ({ maxPrice, setFilter }: Props) => {
  const minValueRef = useRef<HTMLInputElement>(null)
  const maxValueRef = useRef<HTMLInputElement>(null)

  return (
    <MultiRangeSlider
      min={0}
      max={maxPrice}
      onChange={({ min, max }) =>
        (setFilter.current = {
          ...setFilter.current,
          minPrice: min,
          maxPrice: max
        })
      }
    />
  )
}

export default Slider
