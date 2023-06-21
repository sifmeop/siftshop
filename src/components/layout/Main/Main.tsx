import { Flex } from '@chakra-ui/react'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import styles from './Main.module.scss'
import ProfileNavigation from './ProfileNavigation/ProfileNavigation'

interface Props {
  children: React.ReactNode
}

const Main = ({ children }: Props) => {
  const { pathname } = useRouter()

  if (pathname.includes('/profile')) {
    return (
      <Flex className={styles.wrapper}>
        <ProfileNavigation />
        <main className={clsx(styles.main, styles.mainWithNavigation)}>
          {children}
        </main>
      </Flex>
    )
  }

  if (pathname === '/') {
    return (
      <main className={clsx(styles.main, 'overflow-x-hidden')}>{children}</main>
    )
  }

  return <main className={styles.main}>{children}</main>
}

export default Main
