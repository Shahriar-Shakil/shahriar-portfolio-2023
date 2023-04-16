import LoadingSpinner from "@/components/UI/LoadingSpinner";
import "@/styles/globals.css";
import "@/styles/styles.css";

import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(false);
  // React.useEffect(() => {
  //   const timeOut = setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timeOut);
  //   };
  // }, []);
  return <>{loading ? <LoadingSpinner /> : <Component {...pageProps} />}</>;
}
