import { VideoImage } from "../../VideoContent";

const Demo12hero12 = () => {
  return (
    <section id="hero-12" className="rel hero-section division">
      <div className="container">
        {/* HERO TEXT */}
        <div className="row">
          <div className="col-lg-8 offset-lg-1">
            <div className="hero-12-txt">
              {/* Rounded Logo */}
              <div className="hero-logo-rounded bg-grey mb-40">
                <img
                  className="img-fluid"
                  src="/images/logo-01-sm.png"
                  alt="hero-logo"
                />
                <span>MORU</span>
              </div>
              {/* Title */}
              <h2 className="h2-xl">
                Connect to an online <br />
                dentist in 3 easy steps
              </h2>
              {/* Text */}
              <p>
                With emergencies, you never know when they'll happen. MORU
                connects you with a licensed dentist - no matter your location,
                or how much time is left on the clock.
              </p>
            </div>
          </div>
        </div>{" "}
        {/* HERO TEXT */}
        {/* HERO IMAGE */}
        {/* <div className="row">
          <div className="col">
            <div className="hero-12-img video-preview">
              <VideoImage extraClass="video-btn video-btn-xl bg-violet-red ico-90" />
            </div>
          </div>
        </div>{" "} */}
        {/* END HERO IMAGE */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo12hero12;
