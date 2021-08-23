import type { AppProps } from 'next/app'
import { AuthProvider } from '../contexts/AuthContext'

import '../styles/_colors.scss'
import '../styles/_spacing.scss'
import '../styles/_typography.scss'
import '../styles/_layout.scss'
import '../styles/globals.scss'
import { ComplimentsProvider } from '../contexts/ComplimentsContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ComplimentsProvider>
        <Component {...pageProps} />
      </ComplimentsProvider>
    </AuthProvider>
  )
}
export default MyApp