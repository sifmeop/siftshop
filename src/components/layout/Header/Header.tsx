import BurgerMenu from '@/ui/BurgerMenu/BurgerMenu'
import { Flex, HStack, useDisclosure } from '@chakra-ui/react'
import clsx from 'clsx'
import { useEffect, useRef } from 'react'
import { useWindowSize } from 'usehooks-ts'
import Cart from './Cart/Cart'
import Catalog from './Catalog/Catalog'
import Comparing from './Comparing/Comparing'
import styles from './Header.module.scss'
import Logo from './Logo/Logo'
import Search from './Search/Search'
import User from './User/User'
import Wishlist from './Wishlist/Wishlist'

interface Props {
  mainRef: React.RefObject<HTMLElement>
}

const Header = ({ mainRef }: Props) => {
  const { isOpen, onToggle } = useDisclosure()
  const { width } = useWindowSize()

  const headerRef = useRef<HTMLHeadElement>(null)
  const navigationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (headerRef.current && navigationRef.current && mainRef.current) {
      const headerHeight = headerRef.current.offsetHeight
      navigationRef.current.style.top = `${headerHeight}px`
      mainRef.current.style.marginTop = `${headerHeight}px`
    }
  }, [mainRef, width])

  return (
    <header ref={headerRef} className={styles.header}>
      <Flex className={styles.container}>
        <Logo />
        <Flex
          ref={navigationRef}
          className={clsx(styles.navigation, {
            [styles.navigationMobile]: isOpen
          })}>
          <Catalog />
          <Search />
          <HStack gap={2.5}>
            <Comparing />
            <User />
            <Wishlist />
            <Cart />
          </HStack>
        </Flex>
        <BurgerMenu isOpen={isOpen} onToggle={onToggle} />
      </Flex>
    </header>
  )
}

export default Header
