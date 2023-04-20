import '@/styles/globals.css'
import '@module-federation/nextjs-mf/src/include-defaults';
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
