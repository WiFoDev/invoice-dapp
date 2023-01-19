import type {AppProps} from "next/app";
import localFont from "@next/font/local";

import {Layout} from "@/Layout";

import "@/styles/globals.css";

const spartan = localFont({
  src: [
    {
      path: "../fonts/Spartan-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Spartan-Medium.ttf",
      weight: "500",
      style: "normal",
    }
  ],
  variable: "--font-spartan",
});

function MyApp({Component, pageProps}: AppProps) {
  return (
    <Layout className={`${spartan.variable} font-sans`}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
