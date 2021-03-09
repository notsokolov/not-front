// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import "~/styles/tailwind.css";
import "~/styles/custom-styles.css";
import "tailwindcss/utilities.css";
import React from "react";
import Page from "~/components/Page";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;
