// pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Tailwind CDN */}
          <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Merriweather&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet"/>
          <link
            href="https://cdn.tailwindcss.com"
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

export default MyDocument;
