import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

// @ts-ignore
import { googleFonts, makeFontType } from "nextjs-google-fonts/GoogleFonts";
import React from "react";

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {googleFonts.style.map((v: any) => (
            <React.Fragment key={v}>
              <link rel="stylesheet" href={v} />
              <link rel="preload" as="style" href={v} />
            </React.Fragment>
          ))}
          {googleFonts.fonts.map((v: any) => (
            <link
              key={v}
              rel="preload"
              href={v}
              as="font"
              type={makeFontType(v)}
              crossOrigin=""
            />
          ))}
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
