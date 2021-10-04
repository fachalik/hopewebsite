/* eslint-disable @next/next/no-page-custom-font */
import "tailwindcss/tailwind.css"
import Head from "next/head"
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOriginv />
        <link
          href="https://fonts.googleapis.com/css2?family=Ramabhadra&display=swap"
          rel="stylesheet"
        />
        <links
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;1,400&family=Ramabhadra&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
