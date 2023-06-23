import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useMediaQuery } from 'usehooks-ts'
import styles from './Overlay.module.scss'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const Overlay = ({ isOpen, onClose }: Props) => {
  const isMatches = useMediaQuery('(max-width: 1024px)')

  useEffect(() => {
    if (!isMatches) onClose()
  }, [isMatches, onClose])

  return <>{isOpen && <Box className={styles.overlay} onClick={onClose} />}</>
}

export default Overlay
