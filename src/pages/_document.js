import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Cookiebot */}
          <Script
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid={process.env.COOKIEBOT_SECRET_KEY}
            data-blockingmode="auto"
            strategy="lazyOnload"
          ></Script>

          {/* Preconnect & Preload */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          />
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

          {/* Google Tag Manager */}
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-NC377D3W');
              `,
            }}
          />

          {/* Google Analytics */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=AW-16652411588"
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'AW-16652411588');
              `,
            }}
          />

          {/* Google Ads */}
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-PFL7MVJ5ZE"
            strategy="afterInteractive"
          />
          <Script
            id="google-ads"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-PFL7MVJ5ZE');
                gtag('config', 'AW-16608400370');
              `,
            }}
          />
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-NC377D3W"
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>

          {/* Skrypt do zarządzania Cookiebotem */}
          <Script
            id="cookiebot-loader"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                document.addEventListener('DOMContentLoaded', () => {
                  setTimeout(() => {
                    const cookieBanner = document.querySelector('.cookie-banner');
                    if (cookieBanner) {
                      cookieBanner.classList.add('loaded');
                    }
                  }, 1000); // Opóźnienie 1 sekundy
                });
              `,
            }}
          />

          <Main />
          <NextScript />

          {/* Google Ads Event Snippet */}
          <Script
            id="google-ads-event"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                gtag('event', 'conversion', {'send_to': 'AW-16608400370/9avKCNyvktMZEPKnwO89'});
              `,
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
