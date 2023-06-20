import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { MdClose, MdOutlineDashboard } from 'react-icons/md'
import { catalogs } from './catalogs'

interface Props {
  onCloseNav: () => void
}

const Catalog = ({ onCloseNav }: Props) => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            h='auto'
            bg='whiteAlpha.400'
            color='white'
            isActive={isOpen}
            _hover={{ bg: 'whiteAlpha.500' }}
            _active={{ bg: 'whiteAlpha.500' }}
            as={Button}
            leftIcon={
              isOpen ? (
                <MdClose size='2rem' />
              ) : (
                <MdOutlineDashboard size='2rem' />
              )
            }>
            Catalog
          </MenuButton>
          <MenuList onClick={onCloseNav}>
            <MenuItem as={Link} href='/catalog' fontWeight='semibold'>
              All products
            </MenuItem>
            <MenuDivider />
            {catalogs.map((catalog, index) => (
              <Fragment key={catalog.id}>
                <MenuItem
                  as={Link}
                  href={catalog.href}
                  fontWeight='medium'
                  gap={2}>
                  <Image
                    width={29}
                    height={29}
                    src={catalog.icon}
                    alt={`Catalog icon ${catalog.name}`}
                  />
                  {catalog.name}
                  <MenuDivider />
                </MenuItem>
                <MenuDivider />
                {catalog.brands.map((brand) => (
                  <MenuItem
                    key={brand.name}
                    as={Link}
                    href={brand.href}
                    gap={2}>
                    <Image
                      width={50}
                      height={30}
                      src={brand.icon}
                      alt={`Brand icon ${brand.name}`}
                    />
                    {brand.name}
                  </MenuItem>
                ))}
                {index + 1 !== catalogs.length && <MenuDivider />}
              </Fragment>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  )
}

export default Catalog
