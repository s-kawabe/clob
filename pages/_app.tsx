import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'

import { DesignProvider } from '@/components/layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <DesignProvider>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </DesignProvider>
  )
}

export default MyApp
