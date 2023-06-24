import clsx from 'clsx'
import styles from './BurgerMenu.module.scss'

interface Props {
  isOpen: boolean
  onToggle: () => void
}

const BurgerMenu = ({ isOpen, onToggle }: Props) => {
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
