import { Box } from '@chakra-ui/react'
import styles from './Overlay.module.scss'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const Overlay = ({ isOpen, onClose }: Props) => {
  return <>{isOpen && <Box className={styles.overlay} onClick={onClose} />}</>
}

export default Overlay
