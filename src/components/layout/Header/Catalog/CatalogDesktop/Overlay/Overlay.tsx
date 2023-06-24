import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import styles from './Overlay.module.scss'

interface Props {
  onClose: () => void
}

const Overlay = ({ onClose }: Props) => {
  const isMatches = useMediaQuery('(min-width: 1024px)')

  useEffect(() => {
    if (!isMatches) onClose()
  }, [isMatches, onClose])

  return <Box className={styles.overlay} onClick={onClose} />
}

export default Overlay
