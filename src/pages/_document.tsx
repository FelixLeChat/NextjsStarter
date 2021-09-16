import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

type Props = {
  preloadFonts?: boolean;
};

export default class _Document extends Document<Props> {
  public static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render() {
    const { preloadFonts } = this.props;

    return (
      <Html>
        <Head>
          {publicRuntimeConfig.appName && (
            <>
              <meta
                name="apple-mobile-web-app-title"
                content={publicRuntimeConfig.appName}
              />
              <meta
                name="application-name"
                content={publicRuntimeConfig.appName}
              />
              <meta name="msapplication-TileColor" content="#96bee6" />
              <meta name="theme-color" content="#ffffff" />
              <meta name="author" content={publicRuntimeConfig.appName} />
            </>
          )}

          {/* Preload fonts */}
          {preloadFonts && (
            <>
              <link
                rel="preload"
                as="font"
                href="/en-ca/font/Fellix-Regular.woff2"
                type="font/woff2"
              />
              <link
                rel="preload"
                as="font"
                href="/en-ca/font/Fellix-Bold.woff2"
                type="font/woff2"
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
