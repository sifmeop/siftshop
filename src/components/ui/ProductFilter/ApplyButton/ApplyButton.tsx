import { Button } from '@chakra-ui/react'

interface Props {
  applyFilters: () => void
  onClose?: () => void
}

const ApplyButton = ({ applyFilters, onClose }: Props) => {
  return (
    <Button
      colorScheme='green'
      w='full'
      onClick={() => {
        applyFilters()
        onClose && onClose()
      }}>
      APPLY
    </Button>
  )
}

export default ApplyButton
