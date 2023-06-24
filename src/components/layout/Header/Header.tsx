import BurgerMenu from '@/ui/BurgerMenu/BurgerMenu'
import { Flex, HStack, useDisclosure } from '@chakra-ui/react'
import clsx from 'clsx'
import { useEffect } from 'react'
import Cart from './Cart/Cart'
import Catalog from './Catalog/Catalog'
import Overlay from './Catalog/CatalogDesktop/Overlay/Overlay'
import Comparing from './Comparing/Comparing'
import styles from './Header.module.scss'
import Logo from './Logo/Logo'
import Search from './Search/Search'
import User from './User/User'
import Wishlist from './Wishlist/Wishlist'

const Header = () => {
  const { isOpen, onClose, onToggle } = useDisclosure()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <header className={styles.header}>
      <Flex className={styles.container}>
        <Logo />
        {isOpen && <Overlay onClose={onClose} />}
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
