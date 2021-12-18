import { Head, Html, Main, NextScript } from 'next/document'

const MyDocument = () => {
  // const url = '<https://example.com>'
  const title = 'clob | 簡潔大喜利バトル'
  const description =
    'clob はみんなで遊ぶ大喜利掲示板です。 解答には文字数制限があり回答者には高度なセンスが求められるでしょう。'

  return (
    <Html lang="ja-JP">
      <Head>
        {/* Change the contents of `<Head>` as needed. */}
        <meta name="description" content={description} />
        <meta name="theme-color" content="#576471" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        {/* <meta property="og:url" content={url} /> */}
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        {/* <meta property="og:image" content={`${url}/ogp.png`} /> */}
        {/* <meta name="twitter:card" content="summary_large_image" /> */}
        <meta name="format-detection" content="telephone=no" />
        {/* <link rel="apple-touch-icon" href="/apple-touch-icon.png" /> */}
        <link
          href="https://fonts.googleapis.com/css2?family=Kosugi+Maru&family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
