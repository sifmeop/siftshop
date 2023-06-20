import PageTitle from '@/ui/PageTitle/PageTitle'
import { Box, Text, VStack } from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const Profile = () => {
  const { data: session } = useSession()

  if (!session?.user) {
    return <PageTitle>Sign in to see your profile</PageTitle>
  }

  return (
    <>
      <PageTitle>Profile</PageTitle>
      <VStack bg='blackAlpha.100' rounded='xl' p={4}>
        <Box p={1} bg='blackAlpha.200' rounded='full'>
          <Image
            className='rounded-full'
            width={150}
            height={150}
            src={session.user.image as string}
            alt='User photo'
          />
        </Box>
        <Text bg='blackAlpha.200' rounded='xl' px={4} py={2}>
          {session.user.email}
        </Text>
        <Text bg='blackAlpha.200' rounded='xl' px={4} py={2}>
          {session.user.name}
        </Text>
      </VStack>
    </>
  )
}

export default Profile
