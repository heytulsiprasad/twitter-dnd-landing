import "../styles/globals.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-${process.env.NEXT_PUBLIC_ANALYTICS_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-${process.env.NEXT_PUBLIC_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script
        strategy="afterInteractive"
        src="https://substackapi.com/widget.js"
      />
      <Script
        id="content-embed-data"
        dangerouslySetInnerHTML={{
          __html: `
            window.CustomSubstackWidget = {
              substackUrl: "twitterdnd.substack.com",
              placeholder: "trytwitterdnd@gmail.com",
              buttonText: "Subscribe",
              theme: "purple"
            };
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
