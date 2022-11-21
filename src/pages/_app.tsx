import type { AppProps } from "next/app";

import CustomLayout from "../lib/ssr-layout";

import "../style.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomLayout>
      <Component {...pageProps} />
    </CustomLayout>
  );
}
