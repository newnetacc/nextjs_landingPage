import Head from "next/head";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../public/demo/css/style.css";
import VideoState from "../src/context/video";
import PreLoader from "../src/layout/PreLoader";
import "../styles/globals.css";
import mixpanel from "mixpanel-browser"

function MyApp({ Component, pageProps }) {
  const [preloader, setPreloader] = useState(true);
  useEffect(() => {

    try {
      mixpanel.init(process.env.MIX_PANEL, { debug: true, ignore_dnt: true });
    mixpanel.track('page_view');
      
    } catch (error) {
      console.log(error)
    }
    
    setPreloader(false);
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW().init();
  }, []);
  return (
    <VideoState>
      <Head>
        <title>OLMO - Software, App, SaaS & Startup Landing Pages Pack </title>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/demo/images/icons/favicon.ico"
        />
      </Head>
      {preloader && <PreLoader />}
      <Component {...pageProps} />
    </VideoState>
  );
}

export default MyApp;
