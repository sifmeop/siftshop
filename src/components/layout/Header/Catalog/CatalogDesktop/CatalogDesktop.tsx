import { Box, Flex } from '@chakra-ui/react'
import clsx from 'clsx'
import Link from 'next/link'
import { useState } from 'react'
import { RxDashboard } from 'react-icons/rx'
import { catalogs } from '../catalogs'
import styles from './CatalogDesktop.module.scss'
import Overlay from './Overlay/Overlay'

interface Props {
  onCloseNav: () => void
}

const CatalogDesktop = ({ onCloseNav }: Props) => {
  const [currentCatalog, setCurrentCatalog] = useState<number>(0)

  return (
    <>
      <Box pos='absolute' bg='white' w='max-content' rounded='lg' zIndex={1}>
        <Link
          href='/catalog'
          className={clsx(styles.link, styles.linkAll)}
          onClick={onCloseNav}>
          <RxDashboard size='1.5rem' />
          Catalog
        </Link>
        <Flex>
          <Box borderRight='1px solid #DFDFDF'>
            {catalogs.map((catalog, index) => (
              <Link
                key={catalog.id}
                href={catalog.href}
                className={clsx(styles.link, styles.linkCatalog)}
                onMouseEnter={() => setCurrentCatalog(index)}
                onClick={onCloseNav}>
                {<catalog.icon size='1.5rem' />}
                {catalog.name}
              </Link>
            ))}
          </Box>
          <Box display='flex' flexDirection='column'>
            {catalogs[currentCatalog]?.brands.map((brand) => (
              <Link
                key={brand.id}
                href={brand.href}
                className={clsx(styles.link, styles.linkBrand)}
                onClick={onCloseNav}>
                {<brand.icon size='1.5rem' />}
                {brand.name}
              </Link>
            ))}
          </Box>
        </Flex>
      </Box>
      <Overlay onClose={onCloseNav} />
    </>
  )
}

export default CatalogDesktop
