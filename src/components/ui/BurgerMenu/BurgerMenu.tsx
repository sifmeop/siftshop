import { useCatalogStore } from '@/stores/catalogStore'
import clsx from 'clsx'
import styles from './BurgerMenu.module.scss'

const BurgerMenu = () => {
  const { isOpen, onToggle } = useCatalogStore((state) => state)

  return (
    <button
      className={clsx(styles.menuIcon, {
        [styles.menuActive as string]: isOpen
      })}
      onClick={onToggle}>
      <span />
    </button>
  )
}

export default BurgerMenu
