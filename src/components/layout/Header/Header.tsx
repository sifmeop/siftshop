import BurgerMenu from '@/ui/BurgerMenu/BurgerMenu'
import Overlay from '@/ui/Overlay/Overlay'
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
  const { isOpen, onClose: onCloseNav, onToggle } = useDisclosure()

  return (
    <header className={styles.header}>
      <Flex className={styles.container}>
        <Logo />
        <Overlay isOpen={isOpen} onClose={onCloseNav} />
        <Flex
          className={clsx(styles.navigation, {
            [styles.navigationMobile as string]: isOpen
          })}>
          <Catalog onCloseNav={onCloseNav} />
          <Search onCloseNav={onCloseNav} />
          <HStack gap={2.5}>
            <Comparing onCloseNav={onCloseNav} />
            <User onCloseNav={onCloseNav} />
            <Wishlist onCloseNav={onCloseNav} />
            <Cart onCloseNav={onCloseNav} />
          </HStack>
        </Flex>
        <BurgerMenu isOpen={isOpen} onToggle={onToggle} />
      </Flex>
    </header>
  )
}

export default Header
