import { Box } from '@chakra-ui/react'
import clsx from 'clsx'
import styles from './BurgerMenu.module.scss'

interface Props {
  isOpen: boolean
  onToggle: () => void
  isBox?: boolean
}

const BurgerMenu = ({ isOpen, onToggle, isBox = false }: Props) => {
  return isBox ? (
    <Box className={styles.box}>
      <button
        className={clsx(styles.menuIcon, {
          [styles.menuActive as string]: isOpen
        })}
        onClick={onToggle}>
        <span />
      </button>
    </Box>
  ) : (
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
