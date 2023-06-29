import { useCatalogStore } from '@/stores/catalogStore'
import { Box } from '@chakra-ui/react'
import styles from './Overlay.module.scss'

const Overlay = () => {
  const { isOpen, onClose } = useCatalogStore((state) => state)

  if (!isOpen) return null

  return <Box className={styles.overlay} onClick={onClose} />
}

export default Overlay
