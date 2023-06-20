import { Text } from '@chakra-ui/react'

interface Props {
  message: string
}

const RequiredMessage = ({ message }: Props) => {
  return <Text color='red.400'>{message}</Text>
}

export default RequiredMessage
