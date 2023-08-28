import type { AppProps } from 'next/app'
import { ThemeProvider } from "styled-components"
import { SWRConfig } from 'swr'

import { fetcher } from '@/utils/fetcher'
import { theme } from '@/styles/theme'
import GlobalStyle from '@/styles/global'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'

const config = {
  revalidateOnFocus: false,
  revalidateIfStale: false,
  keepPreviousData: true,
  fetcher: fetcher
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <SWRConfig value={config}>
        <ThemeProvider theme={theme}>
          <GlobalStyle theme={theme} />
          <Component {...pageProps} />
        </ThemeProvider>
      </SWRConfig>
    </ErrorBoundary>
  )
}
