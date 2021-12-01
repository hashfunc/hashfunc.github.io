import type { AppProps } from "next/app";
import Head from "next/head";
import GlobalStyle from "styles/global";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>hashfunc.github.io</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
