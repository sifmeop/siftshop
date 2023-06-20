import { Breadcrumb } from '@/types/breadcrumb.interface'
import Link from 'next/link'
import { memo } from 'react'
import { HiHome } from 'react-icons/hi'
import styles from './Breadcrumb.module.scss'

interface Props {
  items: Breadcrumb[]
}

const baseBreadcrumb: Breadcrumb[] = [
  { title: 'Home', link: '/', icon: HiHome }
]

const Breadcrumb = ({ items }: Props) => {
  const breadcrumbs = baseBreadcrumb.concat(items)

  return (
    <ol className={styles.list}>
      {breadcrumbs.map((item, index) => (
        <li key={item.title} className={styles.item}>
          {item.link ? (
            <Link href={item.link} className={styles.itemLink}>
              {item.icon && <item.icon />}
              {item.title}
            </Link>
          ) : (
            item.title
          )}
          {index !== breadcrumbs.length - 1 && (
            <span className={styles.itemSlash}>/</span>
          )}
        </li>
      ))}
    </ol>
  )
}

export default memo(Breadcrumb)
