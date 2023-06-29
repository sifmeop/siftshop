import BurgerMenu from '@/ui/BurgerMenu/BurgerMenu'
import { Flex, HStack } from '@chakra-ui/react'
import Cart from './Cart/Cart'
import Catalog from './Catalog/Catalog'
import Overlay from './Catalog/CatalogDesktop/Overlay/Overlay'
import Comparing from './Comparing/Comparing'
import styles from './Header.module.scss'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'
import Search from './Search/Search'
import User from './User/User'
import Wishlist from './Wishlist/Wishlist'

const Header = () => {
  return (
    <header className={styles.header}>
      <Flex className={styles.container}>
        <Logo />
        <Overlay />
        <Navigation>
          <Catalog />
          <Search />
          <HStack gap={2.5}>
            <Comparing />
            <User />
            <Wishlist />
            <Cart />
          </HStack>
        </Navigation>
        <BurgerMenu />
      </Flex>
    </header>
  )
}

export default Header
