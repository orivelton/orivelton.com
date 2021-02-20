import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
