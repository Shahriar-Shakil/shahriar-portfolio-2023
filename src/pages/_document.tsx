import { Html, Head, Main, NextScript } from "next/document";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Shahirar Kabir</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <meta property="og:url" content={"https://shahriar.netlify.app/"} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Shahirar Kabir" />
        <meta
          property="og:description"
          content="I'm a Front-end developer with 2 years of experience building web applications with JavaScript ES6, React, Next, Redux, HTML, CSS, and other technologies."
        />
        <meta property="og:image" content={"/images/shahriar-red-meta.jpg"} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
