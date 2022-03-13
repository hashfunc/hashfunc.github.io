import type { AppProps } from "next/app";
import Head from "next/head";
import { Navigation } from "components";
import GlobalStyle from "styles/global";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>hashfunc.io</title>
      </Head>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
