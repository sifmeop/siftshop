import { Box } from '@chakra-ui/react'
import styles from './Overlay.module.scss'

interface Props {
  onClose: () => void
}

const Overlay = ({ onClose }: Props) => {
  return <Box className={styles.overlay} onClick={onClose} />
}

export default Overlay
