import { type ViewFilter } from '@/types/filter.interface'
import { Flex } from '@chakra-ui/react'
import clsx from 'clsx'
import { memo } from 'react'
import { TfiViewGrid, TfiViewList } from 'react-icons/tfi'
import styles from './ToggleView.module.scss'

interface Props {
  toggleView: ViewFilter
  setToggleView: (value: ViewFilter) => void
}

const ToggleView = ({ toggleView, setToggleView }: Props) => {
  return (
    <Flex rounded='lg'>
      <button
        className={clsx(styles.button, {
          [styles.active as string]: toggleView === 'compact'
        })}
        onClick={() => setToggleView('compact')}>
        <TfiViewGrid size='1.5rem' />
      </button>
      <button
        className={clsx(styles.button, {
          [styles.active as string]: toggleView === 'list'
        })}
        onClick={() => setToggleView('list')}>
        <TfiViewList size='1.5rem' />
      </button>
    </Flex>
  )
}

export default memo(ToggleView)
