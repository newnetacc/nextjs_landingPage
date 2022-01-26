import { Fragment, useContext } from "react";
import { VideoContext } from "../context/video";

const VideoImage = ({ id, img, extraClass }) => {
  const videoContext = useContext(VideoContext);
  const { showVideo } = videoContext;
  return (
    <Fragment>
      <a
        className="video-popup1"
        href="#"
        onClick={() => showVideo(id ? id : "SZEflIVnhH8")}
      >
        <div
          className={
            extraClass
              ? extraClass
              : "video-btn video-btn-xl bg-orange-red ico-90"
          }
        >
          <div className="video-block-wrapper">
            <span className="flaticon-play-button"></span>
          </div>
        </div>
      </a>
      <img
        className="img-fluid"
        src={img ? img : "images/dashboard-07.png"}
        alt="video-preview"
      />
    </Fragment>
  );
};

const VideoImage2 = ({ id, img, extraClass }) => {
  const videoContext = useContext(VideoContext);
  const { showVideo } = videoContext;
  return (
    <Fragment>
      <a
        className="video-popup1"
        href="#"
        onClick={() => showVideo(id ? id : "SZEflIVnhH8")}
      >
        <div className="video-btn video-btn-xl bg-orange-red ico-90">
          <div className="video-block-wrapper">
            <span className="flaticon-play-button"></span>
          </div>
        </div>
      </a>
      <img
        className="img-fluid"
        src="/images/img-01.png"
        alt="video-preview"
      ></img>
    </Fragment>
  );
};

const VideoWithBtn = ({ id, extraClass, defText }) => {
  const videoContext = useContext(VideoContext);
  const { showVideo } = videoContext;
  return (
    <a
      href="#"
      className={
        extraClass
          ? extraClass + " gold-text"
          : "video-popup2 btn btn-md gold-text btn-transparent ico-20 ico-left"
      }
      onClick={() => showVideo(id ? id : "7e90gBu4pas")}
    >
      <span className="flaticon-play gold-text "></span>{" "}
      {defText ? defText : "How it works?"}
    </a>
  );
};

export { VideoImage, VideoWithBtn, VideoImage2 };
