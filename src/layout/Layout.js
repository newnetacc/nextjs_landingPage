import { Fragment, useContext, useEffect } from "react";
import VideoPopup from "../components/VideoPopup";
import { VideoContext } from "../context/video";
import { aTagClick } from "../utils/utils";
import Footer from "./Footer";
import Header from "./Header";
import ScrollTop from "./ScrollTop";

const Layout = ({
  children,
  navLight,
  whiteLogo,
  getStartText,
  btnCustomHover,
  navHoverColor,
  singlePage,
}) => {
  const videoContext = useContext(VideoContext);
  const { video } = videoContext;
  useEffect(() => {
    aTagClick();
  }, []);

  return (
    <Fragment>
      {video.show && <VideoPopup />}
      <div id="page" className="page">
        <Header
          navLight={navLight}
          whiteLogo={whiteLogo}
          getStartText={getStartText}
          btnCustomHover={btnCustomHover}
          navHoverColor={navHoverColor}
          singlePage={singlePage}
        />
        {children}
        <Footer />
      </div>
      <ScrollTop />
    </Fragment>
  );
};

export default Layout;
