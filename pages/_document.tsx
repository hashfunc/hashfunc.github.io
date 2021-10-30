import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentContext } from "next/document";

import { ServerStyleSheet } from "styled-components";

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const serverStyleSheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            serverStyleSheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {serverStyleSheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      serverStyleSheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Gowun+Batang&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
