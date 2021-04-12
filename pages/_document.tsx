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
          {/* General Metadata */}
          <title>Dennis Willmann 💡 Blog & Inspiration</title>
          {/* Google Fonts */}
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
          {/* Favicon */}
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest"></link>
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
