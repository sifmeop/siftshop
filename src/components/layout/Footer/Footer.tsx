import { Link } from '@chakra-ui/react'

const Footer = () => {
  return (
    <footer className='text-center'>
      <Link
        href='https://github.com/sifmeop'
        target='_blank'
        display='inline-block'
        textAlign='center'
        paddingBlock={3}>
        sifmeop
      </Link>
    </footer>
  )
}

export default Footer
