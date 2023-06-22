import dynamic from "next/dynamic";
import Script from "next/script";
import Head from "next/head";
import "../global.css";

function App({ Component, pageProps }:any) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=test_id"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'test_id', {
            page_path: window.location.pathname,
          });
          window.gtag = gtag;
        `}
      </Script>
    </>
  );
}

export default App;
