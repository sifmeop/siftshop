import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay
} from '@chakra-ui/react'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'
import { catalogs } from '../catalogs'
import styles from './CatalogMobile.module.scss'

interface Props {
  isOpen: boolean
  onCloseCatalog: () => void
  onCloseNav: () => void
}

const CatalogMobile = ({ isOpen, onCloseNav, onCloseCatalog }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement='left' onClose={onCloseCatalog}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Catalog</DrawerHeader>
        <DrawerBody>
          {catalogs.map((catalog) => (
            <React.Fragment key={catalog.id}>
              <Link
                href={catalog.href}
                className={styles.link}
                onClick={() => (onCloseCatalog(), onCloseNav())}>
                {<catalog.icon size='1.5rem' />}
                {catalog.name}
              </Link>
              {catalog.brands.map((brand) => (
                <Link
                  key={brand.id}
                  href={brand.href}
                  className={clsx(styles.link, 'ml-6')}
                  onClick={() => (onCloseCatalog(), onCloseNav())}>
                  {<brand.icon size='1.5rem' />}
                  {brand.name}
                </Link>
              ))}
            </React.Fragment>
          ))}
        </DrawerBody>
        <DrawerFooter>
          <Button colorScheme='green' w='full' onClick={onCloseCatalog}>
            CLOSE
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default CatalogMobile
