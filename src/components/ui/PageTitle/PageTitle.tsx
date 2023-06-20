import { Text } from '@chakra-ui/react'
import clsx from 'clsx'

interface Props {
  type?: 'title' | 'subtitle'
  children: React.ReactNode
}

const PageTitle = ({ type = 'title', children }: Props) => {
  return (
    <Text
      className={clsx('mb-4', {
        ['text-2xl font-semibold']: type === 'title',
        ['text-lg font-medium']: type === 'subtitle'
      })}>
      {children}
    </Text>
  )
}

export default PageTitle
