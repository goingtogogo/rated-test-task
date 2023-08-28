import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import { SWRConfig } from 'swr'

import { fetcher } from '@/utils/fetcher'
import { theme } from '@/styles/theme'
import GlobalStyle from '@/styles/global'

const config = {
  revalidateOnFocus: false,
  keepPreviousData: true,
  fetcher: fetcher
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={config}>
      <ThemeProvider theme={theme}>
        <GlobalStyle theme={theme} />
        <Component {...pageProps} />
      </ThemeProvider>
    </SWRConfig>
  )
}
