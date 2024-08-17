import Meta from "@/components/Meta";
import { fontOrbitron } from "@/resources/font";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Meta />
      <div className={fontOrbitron.variable}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
