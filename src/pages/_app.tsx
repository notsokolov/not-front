// import App from "next/app";
import type { AppProps /*, AppContext */ } from "next/app";
import "~/styles/tailwind.css";
import "~/styles/custom-styles.css";
import "tailwindcss/utilities.css";
import "../styles/stripe.css";
// import "../styles/stripes.css";
import "../styles/textStyles.css";
import "../styles/pink.css";

import React from "react";
import { Layout } from "~/components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
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
