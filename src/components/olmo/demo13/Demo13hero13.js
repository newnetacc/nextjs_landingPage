import { VideoImage } from "../../VideoContent";

const Demo13hero13 = () => {
  return (
    <section id="hero-13" className="bg-scroll hero-section division">
      <div className="container">
        {/* HERO TITLE */}
        <div className="row">
          <div className="col-md-9 col-lg-8">
            <div className="hero-13-title mb-40">
              <h2 className="h2-lg">
                Trusted dental advice across all Middle Eastern countries
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          {/* HERO TEXT */}
          <div className="col-md-6 col-lg-5">
            <div className="hero-13-txt">
              <p className="p-title-sm">
                Our online dentists provide impartial advive and care that's
                focused on you. It's easy to understand with a personalized
                touch. There's no jargon, just great care, whereever you are,
                whenever you need it.
              </p>

              {/* Tools List */}
              
            </div>
          </div>{" "}
          {/* END HERO TEXT */}
          {/* HERO IMAGE */}
          <div className="col-md-6 col-lg-7">
            <div className="hero-13-img video-preview">
              <VideoImage
                img="images/dashboard-04.png"
                extraClass="video-btn video-btn-xl bg-violet-red ico-90"
              />
            </div>
          </div>
        </div>{" "}
        {/* End row */}
      </div>{" "}
      {/* End container */}
    </section>
  );
};

export default Demo13hero13;
