import LoadingSpinner from "@/components/UI/LoadingSpinner";
import "@/styles/globals.css";
import "@/styles/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from "next/app";
import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
config.autoAddCss = false;
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
