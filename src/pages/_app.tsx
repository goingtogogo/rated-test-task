import '@/styles/globals.css'
import { fetcher } from '@/utils/fetcher'
import type { AppProps } from 'next/app'

import { SWRConfig } from 'swr'

const config = {
  revalidateOnFocus: false,
  keepPreviousData: true,
  fetcher: fetcher
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={config}>
      <Component {...pageProps} />
    </SWRConfig>
  )
}
