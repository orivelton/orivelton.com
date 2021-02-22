import { ChakraProvider, Divider } from '@chakra-ui/react'

import theme from '../theme'
import '../scss/Nav.scss'
import { AppProps } from 'next/app'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <div style={{minHeight: '82vh'}}>
        <Nav />
        <Divider />
        <Component {...pageProps} />
      </div>
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
