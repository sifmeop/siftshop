import { ViewFilter } from '@/types/filter.interface'
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
    <div className={styles.viewButtons}>
      <button
        className={clsx(styles.button, {
          [styles.active]: toggleView === 'compact'
        })}
        onClick={() => setToggleView('compact')}>
        <TfiViewGrid size='1.5rem' />
      </button>
      <button
        className={clsx(styles.button, {
          [styles.active]: toggleView === 'list'
        })}
        onClick={() => setToggleView('list')}>
        <TfiViewList size='1.5rem' />
      </button>
    </div>
  )
}

export default memo(ToggleView)
