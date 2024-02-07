import type { AppProps } from 'next/app'
import "../styles/global/index.scss"
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
