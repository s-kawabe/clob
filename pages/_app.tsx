import { Box } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

import { DebugObserver } from '@/components/debug/DebugObserver'
import { Container } from '@/components/layout'
import { DesignProvider, Header } from '@/components/layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <DesignProvider>
      <RecoilRoot>
        <DebugObserver />
        <Box bgColor={'primary.50'}>
          <Container>
            <Header />
            <Component {...pageProps} />
          </Container>
        </Box>
      </RecoilRoot>
    </DesignProvider>
  )
}

export default MyApp
