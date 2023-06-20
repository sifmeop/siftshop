import Layout from '@/layout/Layout'
import '@/styles/globals.scss'
import { api } from '@/utils/api'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { type Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import { type AppType } from 'next/app'

const theme = extendTheme({
  styles: {
    global: () => ({
      body: 'Montserrat'
    })
  }
})

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps }
}) => {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={client}>
        <ChakraProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </QueryClientProvider>
    </SessionProvider>
  )
}

export default api.withTRPC(MyApp)
