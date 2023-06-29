import { useCatalogStore } from '@/stores/catalogStore'
import { Flex } from '@chakra-ui/react'
import clsx from 'clsx'
import styles from './Navigation.module.scss'

interface Props {
  children: React.ReactNode
}

const Navigation = ({ children }: Props) => {
  const isOpen = useCatalogStore((state) => state.isOpen)

  return (
    <Flex
      className={clsx(styles.nav, {
        [styles.navMobile as string]: isOpen
      })}>
      {children}
    </Flex>
  )
}

export default Navigation
