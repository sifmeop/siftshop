import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href='/' className='z-[1] h-fit'>
      <Image width={200} height={50} src='/logo.svg' alt='' priority />
    </Link>
  )
}

export default Logo
