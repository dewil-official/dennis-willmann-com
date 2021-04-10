import "../styles/index.css";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Navbar from "../components/layout/Navbar";

function WebApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default WebApp;
