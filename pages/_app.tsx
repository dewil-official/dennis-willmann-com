import "../styles/index.css";
import { AppProps } from "next/dist/next-server/lib/router/router";
import Navbar from "../components/layout/Navbar";
import { useState } from "react";

function WebApp({ Component, pageProps }: AppProps) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar isOpen={isMenuOpen} setOpen={setMenuOpen} />
      <div className="pt-24">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default WebApp;
