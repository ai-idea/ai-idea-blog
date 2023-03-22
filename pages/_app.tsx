import "@/styles/globals.css";
import "katex/dist/katex.min.css";
import { Analytics } from "@vercel/analytics/react";
import "prismjs/themes/prism-okaidia.min.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
