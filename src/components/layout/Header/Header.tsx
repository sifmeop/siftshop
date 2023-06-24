import BurgerMenu from '@/ui/BurgerMenu/BurgerMenu'
import { Flex, HStack, useDisclosure } from '@chakra-ui/react'
import clsx from 'clsx'
import Cart from './Cart/Cart'
import Catalog from './Catalog/Catalog'
import Comparing from './Comparing/Comparing'
import styles from './Header.module.scss'
import Logo from './Logo/Logo'
import Search from './Search/Search'
import User from './User/User'
import Wishlist from './Wishlist/Wishlist'

const Header = () => {
  const { isOpen, onClose, onToggle } = useDisclosure()

  return (
    <header className={styles.header}>
      <Flex className={styles.container}>
        <Logo />
        <Flex
          className={clsx(styles.navigation, {
            [styles.navigationMobile as string]: isOpen
          })}>
          <Catalog isOpen={isOpen} onCloseNav={onClose} onToggle={onToggle} />
          <Search onCloseNav={onClose} />
          <HStack gap={2.5}>
            <Comparing onCloseNav={onClose} />
            <User onCloseNav={onClose} />
            <Wishlist onCloseNav={onClose} />
            <Cart onCloseNav={onClose} />
          </HStack>
        </Flex>
        <BurgerMenu isOpen={isOpen} onToggle={onToggle} />
      </Flex>
    </header>
  )
}

export default Header
