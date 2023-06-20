import { Box, Flex, Text } from '@chakra-ui/react'

interface Props {
  title: string
  subTitle: string
  step?: number
  children: React.ReactNode
}

const SectionWithTitle = ({ title, subTitle, step, children }: Props) => {
  return (
    <Box mb={8}>
      <Text fontSize='xl' fontWeight='semibold'>
        {title}
      </Text>
      <Flex justifyContent='space-between' pb={4} gap={2} flexWrap='wrap'>
        <Text fontSize='xs' color='#A9A9A9'>
          {subTitle}
        </Text>
        {step && (
          <Text fontSize='xs' color='#A9A9A9'>
            Step {step} of 5
          </Text>
        )}
      </Flex>
      <Box>{children}</Box>
    </Box>
  )
}

export default SectionWithTitle
