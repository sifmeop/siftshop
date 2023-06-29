import { useCatalogStore } from '@/stores/catalogStore'
import { Box, Button, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import { MdClose, MdOutlineDashboard } from 'react-icons/md'
import CatalogDesktop from './CatalogDesktop/CatalogDesktop'
import CatalogMobile from './CatalogMobile/CatalogMobile'

const Catalog = () => {
  const { isOpen, onClose, onToggle } = useCatalogStore((state) => state)

  const [isMatch] = useMediaQuery('(max-width: 1024px)')

  const {
    isOpen: isOpenCatalog,
    onClose: onCloseCatalog,
    onToggle: onToggleCatalog
  } = useDisclosure()

  return (
    <>
      <Box h='auto' pos='relative'>
        <Button
          h='100%'
          bg='whiteAlpha.400'
          color='white'
          _hover={{ bg: 'whiteAlpha.500' }}
          _active={{ bg: 'whiteAlpha.500' }}
          leftIcon={
            isMatch ? (
              isOpenCatalog ? (
                <MdClose size='2rem' />
              ) : (
                <MdOutlineDashboard size='2rem' />
              )
            ) : isOpen ? (
              <MdClose size='2rem' />
            ) : (
              <MdOutlineDashboard size='2rem' />
            )
          }
          zIndex={1}
          onClick={isMatch ? onToggleCatalog : onToggle}>
          Catalog
        </Button>
        {isMatch ? (
          <CatalogMobile
            isOpen={isOpenCatalog}
            onCloseNav={onClose}
            onCloseCatalog={onCloseCatalog}
          />
        ) : (
          <>{isOpen && <CatalogDesktop onCloseNav={onClose} />}</>
        )}
      </Box>
    </>
  )
}

export default Catalog
