import type { AppProps } from "next/app";

import GlobalStyle from "../styles/global";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default CustomApp;
