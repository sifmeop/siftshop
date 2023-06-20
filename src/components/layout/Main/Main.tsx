import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import styles from './Main.module.scss'
import ProfileNavigation from './ProfileNavigation/ProfileNavigation'

interface Props {
  children: React.ReactNode
  mainRef: React.RefObject<HTMLElement>
}

const Main = ({ children, mainRef }: Props) => {
  const { pathname } = useRouter()

  if (pathname.includes('/profile')) {
    return (
      <Flex className={styles.wrapper}>
        <ProfileNavigation />
        <main ref={mainRef} className={(styles.main)}>
          {children}
        </main>
      </Flex>
    )
  }

  return (
    <main ref={mainRef} className={styles.main}>
      {children}
    </main>
  )
}

export default Main
