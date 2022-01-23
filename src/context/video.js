const type = {
  VIDEO: "VIDEO",
};

import { createContext, useReducer } from "react";
const VideoContext = createContext();

const videoReducer = (state, action) => {
  switch (action.type) {
    case type.VIDEO:
      return {
        ...state,
        video: action.payload,
      };

    default:
      return state;
  }
};

const VideoState = (props) => {
  const initialState = {
    video: { show: false, videoId: null },
  };
  const [state, dispatch] = useReducer(videoReducer, initialState);

  const showVideo = (id) => {
    dispatch({
      type: type.VIDEO,
      payload: { show: true, id },
    });
  };

  const hideVideo = () => {
    dispatch({
      type: type.VIDEO,
      payload: { show: false, videoId: null },
    });
  };

  return (
    <VideoContext.Provider
      value={{
        showVideo: showVideo,
        hideVideo: hideVideo,
        video: state.video,
      }}
    >
      {props.children}
    </VideoContext.Provider>
  );
};

export default VideoState;

export { VideoContext };
