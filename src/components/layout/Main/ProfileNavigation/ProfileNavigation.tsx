import { Box, Divider, Text } from '@chakra-ui/react'
import clsx from 'clsx'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaRegHeart, FaRegListAlt, FaRegUserCircle } from 'react-icons/fa'
import styles from './ProfileNavigation.module.scss'

const links = [
  { title: 'My orders', href: '/profile/orders', icon: FaRegListAlt },
  { title: 'Wishlist', href: '/profile/wishlist', icon: FaRegHeart }
  // { title: 'My reviews', href: '/profile/reviews', icon: BiMessageDetail }
]

const ProfileNavigation = () => {
  const { pathname } = useRouter()
  const { data: session } = useSession()

  return (
    <aside className={styles.aside}>
      <Link
        href='/profile'
        className={clsx(styles.link, {
          [styles.activeLink as string]: '/profile' === pathname
        })}>
        <Box className={styles.icon}>
          <FaRegUserCircle size='1.25rem' />
        </Box>
        {session?.user ? (
          <Box>
            <Text>{session?.user.name}</Text>
            <Text>{session?.user.email}</Text>
          </Box>
        ) : (
          <Text>Guest</Text>
        )}
      </Link>
      <Divider marginBlock={2} />
      <ul className={styles.list}>
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={clsx(styles.link, {
                [styles.activeLink as string]: link.href === pathname
              })}>
              <Box className={styles.icon}>{<link.icon size='1.25rem' />}</Box>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default ProfileNavigation
