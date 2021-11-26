import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Jussi Storefront</title>
        {/*<meta
          name="viewport"
          content="initial-scale=1.0 maximum-scale=1.0, width=device-width"
        /> */}
        {/*<meta
          name="viewport"
          content="viewport-fit=cover, initial-scale=1.0, maximum-scale=1.0, width=device-width"
        />*/}
        <link rel="shortcut" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
