import React from 'react'
import type { AppProps } from 'next/app'

import '../styles/_colors.scss'
import '../styles/_spacing.scss'
import '../styles/_typography.scss'
import '../styles/_layout.scss'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp