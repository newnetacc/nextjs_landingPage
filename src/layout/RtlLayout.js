import { useContext, useEffect } from "react";
import VideoPopup from "../components/VideoPopup";
import { VideoContext } from "../context/video";
import { aTagClick } from "../utils/utils";
import RtlFooter from "./RtlFooter";
import RtlHeader from "./RtlHeader";

const RtlLayout = ({
  children,
  btnCustomHover,
  navHoverColor,
  navLight,
  whiteLogo,
}) => {
  const videoContext = useContext(VideoContext);
  const { video } = videoContext;
  useEffect(() => {
    aTagClick();
  }, []);
  return (
    <div className="wsmenucontainer">
      {video.show && <VideoPopup />}
      <div className="page rtl-direction" id="page">
        <RtlHeader
          navLight={navLight}
          whiteLogo={whiteLogo}
          btnCustomHover={btnCustomHover}
          navHoverColor={navHoverColor}
        />
        {children}
        <RtlFooter />
      </div>
    </div>
  );
};

export default RtlLayout;
