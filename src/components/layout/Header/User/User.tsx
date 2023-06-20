const DynamicHeaderIconLoader = dynamic(
  () => import('@/ui/Loaders/HeaderIconLoader'),
  {
    ssr: false
  }
)
import {
  Button,
  Flex,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  useDisclosure
} from '@chakra-ui/react'
import { signIn, signOut, useSession } from 'next-auth/react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { FaUserAltSlash, FaUserCheck } from 'react-icons/fa'

const checkStatus = (status: string) => {
  switch (status) {
    case 'authenticated':
      return (
        <button className='header__icon-button'>
          <FaUserCheck size='2rem' />
        </button>
      )
    case 'unauthenticated':
      return (
        <button className='header__icon-button'>
          <FaUserAltSlash size='2rem' />
        </button>
      )
  }
}

const User = () => {
  const { status } = useSession()
  const { onOpen, onClose, isOpen } = useDisclosure()

  if (status === 'loading') return <DynamicHeaderIconLoader />

  return (
    <Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
      <PopoverTrigger>
        <div>{checkStatus(status)}</div>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          {status === 'authenticated' ? (
            <Flex direction='column' gap={2}>
              <Button as={Link} href='/profile' onClick={onClose}>
                Profile
              </Button>
              <Button
                onClick={() => {
                  void signOut()
                  onClose()
                }}>
                Sign out
              </Button>
            </Flex>
          ) : (
            <Button w='full' onClick={() => void signIn('google')}>
              Sign in
            </Button>
          )}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default User
