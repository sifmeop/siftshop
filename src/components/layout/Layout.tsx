import { Grid } from '@chakra-ui/react'
import { Montserrat } from 'next/font/google'
import { useRef } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Main from './Main/Main'

const montserrat = Montserrat({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  subsets: ['latin']
})

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  const mainRef = useRef<HTMLElement>(null)

  return (
    <Grid h='full' templateRows='1fr auto' className={montserrat.className}>
      <Header mainRef={mainRef} />
      <Main mainRef={mainRef}>{children}</Main>
      <Footer />
    </Grid>
  )
}

export default Layout
