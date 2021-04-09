import "../styles/index.css";
import Layout from "../components/Layout";
import { AppProps } from "next/dist/next-server/lib/router/router";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
